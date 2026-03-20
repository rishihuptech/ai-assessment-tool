#!/bin/bash
# One-click push to GitHub - AI Assessment Tool
# Just run: bash push-to-github.sh

echo "🚀 Pushing your AI Assessment Tool to GitHub..."
echo ""

# Remove any partial git setup
rm -rf .git

# Initialize fresh git repo
git init
git branch -M main

# Add remote
git remote add origin https://github.com/rishihuptech/ai-assessment-tool.git

# Pull the .gitignore we already created on GitHub
git pull origin main --allow-unrelated-histories --no-edit 2>/dev/null || true

# Stage all files (respects .gitignore)
git add .

# Commit
git commit -m "Add AI Readiness Assessment app - all source files"

# Push!
git push -u origin main --force

echo ""
echo "✅ Done! Your code is now on GitHub!"
echo "🔗 https://github.com/rishihuptech/ai-assessment-tool"
