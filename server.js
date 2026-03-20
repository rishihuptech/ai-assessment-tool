import express from 'express';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: '5mb' }));

// Serve built frontend
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Database setup
const dbDir = path.join(__dirname, 'db');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
const db = new Database(path.join(dbDir, 'database.sqlite'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    role TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    score INTEGER NOT NULL,
    percentage INTEGER NOT NULL,
    tier TEXT NOT NULL,
    tier_code TEXT NOT NULL,
    action TEXT NOT NULL,
    time_taken INTEGER NOT NULL,
    pillar_scores TEXT NOT NULL,
    answers TEXT NOT NULL,
    details TEXT NOT NULL,
    want_to_learn INTEGER DEFAULT 0,
    suggestions TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Migration: add suggestions column if missing
try {
  db.exec(`ALTER TABLE assessments ADD COLUMN suggestions TEXT DEFAULT ''`);
} catch (e) {
  // Column already exists, ignore
}

// Auth middleware
function requireAdmin(req, res, next) {
  const pw = req.headers['x-admin-password'];
  if (pw !== 'huptech2026') return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// Submit assessment
app.post('/api/submit', (req, res) => {
  try {
    const { name, email, role, type, category, score, percentage, tier, tier_code, action, time_taken, pillar_scores, answers, details, want_to_learn, suggestions } = req.body;
    const stmt = db.prepare(`
      INSERT INTO assessments (name, email, role, type, category, score, percentage, tier, tier_code, action, time_taken, pillar_scores, answers, details, want_to_learn, suggestions)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(name, email || '', role, type, category, score, percentage, tier, tier_code, action, time_taken, JSON.stringify(pillar_scores), JSON.stringify(answers), JSON.stringify(details), want_to_learn || 0, suggestions || '');
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get all results
app.get('/api/results', requireAdmin, (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM assessments ORDER BY created_at DESC').all();
    const parsed = rows.map(r => ({
      ...r,
      pillar_scores: JSON.parse(r.pillar_scores),
      answers: JSON.parse(r.answers),
      details: JSON.parse(r.details)
    }));
    res.json(parsed);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Export CSV
app.get('/api/results/export', requireAdmin, (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM assessments ORDER BY created_at DESC').all();
    const headers = ['Name', 'Email', 'Role', 'Type', 'Category', 'Score', 'Percentage', 'Tier', 'Action', 'Time Taken (s)', 'Want to Learn', 'P1: Tool Awareness', 'P2: Prompt Craft', 'P3: Workflow Integration', 'P4: Critical Thinking', 'P5: Adaptability', 'P6: AI-First Mindset', 'Suggestions', 'Date'];
    const csvRows = rows.map(r => {
      const ps = JSON.parse(r.pillar_scores);
      return [r.name, r.email, r.role, r.type, r.category, r.score, r.percentage, r.tier, r.action, r.time_taken, r.want_to_learn || 0, ...ps, r.suggestions || '', r.created_at].map(v => `"${String(v).replace(/"/g, '""')}"`).join(',');
    });
    const csv = [headers.join(','), ...csvRows].join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=ai-readiness-results.csv');
    res.send(csv);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Clear all results
app.delete('/api/results', requireAdmin, (req, res) => {
  try {
    db.prepare('DELETE FROM assessments').run();
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// SPA fallback
if (fs.existsSync(distPath)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
