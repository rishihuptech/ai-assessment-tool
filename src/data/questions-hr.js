const questionsHR = [
  // ── P1: Tool Awareness (ids 1-3) ──
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to quickly screen 85 developer resumes received overnight. Which AI-powered approach makes the most sense?',
    options: [
      'Read each resume manually and highlight key skills in a spreadsheet',
      'Use an AI resume-screening tool that ranks candidates against your job description criteria automatically',
      'Ask a colleague to split the pile and review half each',
      'Only look at resumes from referrals and ignore the rest'
    ],
    correct: 1,
    explanation: 'AI resume-screening tools like HireVue, Manatal, or even ChatGPT-based workflows can parse and rank 85 resumes in minutes against specific job criteria - saving hours of manual reading while reducing bias from fatigue.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You handle payroll for 40 employees across India and UAE with different tax structures. Which tool category would most reduce your monthly payroll processing effort?',
    options: [
      'A shared Google Sheet with salary formulas you update manually each month',
      'An AI-integrated payroll platform (like Zoho Payroll or Darwinbox) that auto-calculates statutory deductions, generates payslips, and flags anomalies',
      'A basic accounting software like Tally that handles Indian payroll only',
      'Outsourcing payroll entirely to a third-party CA firm'
    ],
    correct: 1,
    explanation: 'AI-integrated payroll platforms handle multi-country compliance, auto-calculate deductions (PF, ESI, WPS), generate payslips, and flag errors - critical when one person manages payroll across two jurisdictions with different labor laws.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You already use ChatGPT for some HR tasks. Which of these represents the LEAST effective use of ChatGPT in an HR context?',
    options: [
      'Drafting job descriptions tailored to specific roles and seniority levels',
      'Making final hiring decisions by pasting candidate profiles and asking ChatGPT to pick the best one',
      'Generating structured interview question sets for different technical roles',
      'Summarizing employee feedback from surveys into actionable themes'
    ],
    correct: 1,
    explanation: 'ChatGPT lacks context about team dynamics, cultural fit, and real-time candidate interactions. Using it for final hiring decisions is risky and potentially discriminatory. It excels at drafting JDs, interview questions, and summarizing feedback - but human judgment must own the decision.'
  },

  // ── P2: Workflow Mapping (ids 4-7) ──
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Workflow Mapping',
    question: 'Your recruitment pipeline has 7 stages: sourcing, screening, technical test, interview scheduling, interviews, offer negotiation, onboarding. Which stages benefit MOST from AI automation?',
    options: [
      'Offer negotiation and onboarding - those are the most time-consuming',
      'Sourcing, screening, and interview scheduling - high-volume, repetitive steps where AI saves the most hours',
      'Technical tests and interviews - AI can evaluate candidates better than humans',
      'All 7 stages should be fully automated with AI immediately'
    ],
    correct: 1,
    explanation: 'Sourcing (AI-powered talent search), screening (resume parsing and ranking), and scheduling (calendar AI) are high-volume, repetitive tasks where AI delivers immediate ROI. Interviews and negotiations need human nuance. Full automation across all stages is neither practical nor advisable.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Workflow Mapping',
    question: 'Every month you manually collect leave requests via WhatsApp, update a spreadsheet, calculate balances, and inform managers. What is the first step to improve this workflow?',
    options: [
      'Move leave tracking to an HRMS with a self-service portal where employees apply, managers approve, and balances auto-update',
      'Create a more detailed spreadsheet with better formulas',
      'Hire an HR assistant to handle leave tracking',
      'Send a monthly email reminder asking employees to submit leave in advance'
    ],
    correct: 0,
    explanation: 'An HRMS self-service portal eliminates the WhatsApp back-and-forth, manual spreadsheet updates, and balance calculations entirely. Employees apply, managers approve with one click, and balances update automatically - this is the foundational workflow fix before any AI layer.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Workflow Mapping',
    question: 'You spend roughly 6 hours per week on employee documentation - offer letters, appraisals, experience letters, NDAs. How would an AI-first HR person approach this?',
    options: [
      'Keep a folder of Word templates and copy-paste employee details each time',
      'Build a document automation system with AI-generated templates that auto-populate employee data from your HRMS and allow batch generation',
      'Ask ChatGPT to write each letter from scratch every time',
      'Delegate all documentation to the employee\'s reporting manager'
    ],
    correct: 1,
    explanation: 'Document automation (using tools like Zoho Writer, PandaDoc, or custom GPT workflows connected to your HRMS) pulls employee data automatically and generates documents in bulk. Writing each letter from scratch - even with ChatGPT - is still manual and doesn\'t scale.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Workflow Mapping',
    question: 'You need to map which HR processes to automate first. Which framework makes the most sense for prioritization?',
    options: [
      'Automate whatever the CEO asks for first',
      'Start with the most complex process since that will save the most time',
      'Prioritize by frequency x time-spent x error-rate - high-frequency, time-heavy, error-prone tasks go first',
      'Automate everything simultaneously to get maximum benefit'
    ],
    correct: 2,
    explanation: 'The frequency x time x error-rate framework ensures you target tasks that consume the most hours, happen most often, and are most prone to mistakes (like payroll calculations or leave balance errors). Complex but infrequent tasks can wait. Doing everything at once leads to poor implementation.'
  },

  // ── P3: Data & Decision-Making (ids 8-11) ──
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Data & Decision-Making',
    question: 'Your attrition rate spiked last quarter. You have exit interview notes, attendance data, project allocation history, and salary benchmarks. What is the AI-first approach to understanding why people left?',
    options: [
      'Read through each exit interview manually and try to spot common themes',
      'Feed exit interview transcripts into an AI text analysis tool to extract sentiment patterns, then cross-reference with attendance and compensation data to identify predictive risk factors',
      'Assume it\'s a salary issue and propose blanket raises',
      'Conduct a team meeting to ask current employees why they think people left'
    ],
    correct: 1,
    explanation: 'AI text analysis (sentiment analysis, topic clustering) across exit interviews - combined with quantitative data like attendance trends, overtime hours, and compensation benchmarks - reveals patterns humans miss. A blanket raise assumption without data is expensive guesswork.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Data & Decision-Making',
    question: 'You are preparing increment recommendations for 40 employees. Currently you rely on manager feedback and your own judgment. How should data improve this process?',
    options: [
      'Use only manager ratings - they know their teams best',
      'Combine project delivery data, client feedback scores, peer reviews, skill growth metrics, and market salary benchmarks into a weighted scoring model that AI can help calculate and visualize',
      'Give everyone the same percentage increase to be fair',
      'Base increments purely on tenure - longer service gets higher raises'
    ],
    correct: 1,
    explanation: 'A multi-variable scoring model removes single-source bias. AI can weight and calculate scores across delivery performance, client feedback, peer input, skill development, and market benchmarks - giving you a defensible, data-backed recommendation rather than gut feel or politics.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Data & Decision-Making',
    question: 'You want to track your recruitment funnel performance. Which metric set gives you the most actionable insight?',
    options: [
      'Time-to-hire, cost-per-hire, source effectiveness, offer-acceptance rate, and quality-of-hire (90-day retention + manager satisfaction)',
      'Total number of resumes received per job posting',
      'Number of interviews conducted per week',
      'How many job boards you are posting on'
    ],
    correct: 0,
    explanation: 'These five metrics together tell you how fast, how expensive, where from, how effectively you close, and how well your hires perform. Tracking just volume (resumes received) or activity (interviews per week) gives no insight into quality or efficiency.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Data & Decision-Making',
    question: 'An AI dashboard flags that employees who skip 1-on-1s with their manager for 3+ consecutive weeks have a 4x higher attrition risk. What should you do with this insight?',
    options: [
      'Ignore it - correlation doesn\'t prove causation and the sample size is small',
      'Immediately put all flagged employees on a performance improvement plan',
      'Set up an automated alert system that notifies managers when the pattern is detected, and create a lightweight intervention protocol (informal check-in, not disciplinary)',
      'Share the dashboard stat in a company-wide email to pressure managers'
    ],
    correct: 2,
    explanation: 'The insight is a leading indicator, not a verdict. The right response is a non-punitive early warning system: automated alerts to managers plus a simple intervention (casual check-in, not PIP). Ignoring useful signals wastes the data; overreacting damages trust.'
  },

  // ── P4: Strategic Thinking (ids 12-14) ──
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Strategic Thinking',
    question: 'The CEO wants to reduce recruitment costs by 30% while maintaining hire quality. You currently rely on job boards (Naukri, Indeed, LinkedIn). What is your AI-informed strategy?',
    options: [
      'Negotiate discounts with existing job boards',
      'Build an AI-powered referral program with automated tracking, create a talent pipeline CRM that nurtures passive candidates, and use AI sourcing tools to reduce dependency on paid job boards',
      'Stop posting on job boards entirely and only hire through referrals',
      'Reduce the HR budget and hope for organic inbound applications'
    ],
    correct: 1,
    explanation: 'A three-pronged AI approach - structured referral tracking (with incentive automation), a talent pipeline CRM (nurture past applicants and passive candidates), and AI sourcing tools (like LinkedIn Recruiter AI or HireEZ) - systematically reduces cost-per-hire while maintaining or improving quality.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Strategic Thinking',
    question: 'You want to propose an AI adoption roadmap for the HR function to leadership. What should Phase 1 focus on?',
    options: [
      'Buy an enterprise AI platform and migrate all HR processes at once',
      'Start with a pilot: automate one high-impact, low-risk process (e.g., resume screening or leave management), measure time saved and error reduction, then use the results to build the case for Phase 2',
      'Wait until AI tools are more mature before starting anything',
      'Ask each department to independently choose their own AI tools'
    ],
    correct: 1,
    explanation: 'Phase 1 should be a controlled pilot on a single high-impact process. It proves value with real data (hours saved, errors reduced), builds internal confidence, and creates a template for scaling. Enterprise-wide migration without a pilot is high risk; waiting means falling behind.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Strategic Thinking',
    question: 'You manage HR for both India and UAE offices with different labor laws (Indian Labour Codes vs. UAE MOHRE regulations). How does AI help you stay compliant across both?',
    options: [
      'Hire a separate compliance officer for each country',
      'Use a multi-jurisdiction HR compliance tool with AI-powered regulatory update alerts, automated policy gap analysis, and country-specific document generation',
      'Manually check government websites monthly for any changes',
      'Apply Indian labor law everywhere since that is the larger office'
    ],
    correct: 1,
    explanation: 'AI compliance tools (like Darwinbox, Rippling, or jurisdiction-specific platforms) monitor regulatory changes in real-time, flag policy gaps, and auto-generate compliant documents for each country. Manual monthly checks risk missing critical updates; applying one country\'s law everywhere is a legal violation.'
  },

  // ── P5: Risk & Ethics (ids 15-17) ──
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Risk & Ethics',
    question: 'You are evaluating an AI resume screening tool. During testing, you notice it consistently ranks male candidates higher for developer roles. What should you do?',
    options: [
      'Use it anyway - the AI probably learned from historical hiring patterns that reflect real performance',
      'Flag the bias, audit the training data, demand the vendor demonstrate bias mitigation, test with anonymized resumes, and establish an ongoing fairness review process before deploying',
      'Add a manual filter that ensures 50% female candidates pass regardless of score',
      'Abandon AI screening entirely and go back to manual review'
    ],
    correct: 1,
    explanation: 'AI bias in hiring is a legal and ethical risk (and violates EEOC / Indian anti-discrimination guidelines). The right approach is systematic: audit training data, demand vendor transparency, test with anonymized inputs, and set up ongoing monitoring. Arbitrary quotas or abandoning AI are both overcorrections.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Risk & Ethics',
    question: 'An employee asks you: "Is the company using AI to monitor my work activity?" You recently started using an AI-powered productivity tool that tracks app usage. What is the correct response?',
    options: [
      'Deny it to avoid causing anxiety among employees',
      'Be transparent: explain what the tool tracks, why it was implemented, what data is collected, who can access it, and how it will (and won\'t) be used in performance evaluations',
      'Tell them it\'s none of their concern and it\'s a management decision',
      'Immediately stop using the tool to avoid any conflict'
    ],
    correct: 1,
    explanation: 'Transparency about AI monitoring is both an ethical obligation and a legal requirement in many jurisdictions. Employees have the right to know what data is collected about them. Clear communication builds trust; secrecy creates legal liability and destroys morale.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Risk & Ethics',
    question: 'You are storing employee medical records, salary data, Aadhaar numbers, and Emirates ID copies in a cloud HRMS. What is the minimum data protection standard you should follow?',
    options: [
      'Password-protect the files and share the password with the management team',
      'Implement role-based access controls, encryption at rest and in transit, audit logs for all data access, data retention policies aligned with DPDP Act (India) and UAE PDPL, and regular security assessments',
      'Keep everything in a local hard drive to avoid cloud risks',
      'Data protection laws don\'t apply to HR data stored internally'
    ],
    correct: 1,
    explanation: 'India\'s DPDP Act (2023) and UAE\'s PDPL impose strict obligations on personal data handling - including employee data. Role-based access, encryption, audit trails, and defined retention policies are baseline requirements, not optional. Local storage without these controls is actually higher risk.'
  },

  // ── P6:Tic Adoption & Change (ids 18-20) ──
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'Adoption & Change',
    question: 'You want to get managers across India and UAE offices to actually use the new AI-powered HRMS for approvals instead of WhatsApp messages. What approach works best?',
    options: [
      'Send a company-wide email announcing the new system is mandatory',
      'Run role-specific micro-training sessions (15 mins), assign an HRMS champion in each office, set a 30-day parallel run (old + new), then cut over with a clear deadline and visible leadership adoption',
      'Let managers adopt it at their own pace with no deadline',
      'Add the HRMS training to the annual performance review as a KPI'
    ],
    correct: 1,
    explanation: 'Adoption requires reducing friction: short targeted training (not 2-hour workshops), local champions for in-person support, a parallel run to build comfort, and a firm cutover date. Leadership visibly using the tool is the strongest signal. Mandates without support or open-ended timelines both fail.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'Adoption & Change',
    question: 'After implementing AI-assisted recruitment screening, hiring managers complain that "the AI is rejecting good candidates." How do you handle this?',
    options: [
      'Remove the AI screening tool immediately since the managers are unhappy',
      'Ignore the complaints - the AI is more objective than humans',
      'Audit specific rejected candidates with managers to calibrate the AI scoring criteria, adjust the threshold collaboratively, run a 2-week A/B test (AI-screened vs. manual), and share comparative data on hire quality',
      'Tell managers to trust the process and it will improve over time'
    ],
    correct: 2,
    explanation: 'Manager resistance is a calibration problem, not a tool problem. Joint auditing of specific cases builds trust, collaborative threshold adjustment gives managers ownership, and A/B testing provides objective evidence. Removing the tool wastes investment; ignoring feedback erodes trust.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'Adoption & Change',
    question: 'You successfully automated leave management and saved 5 hours per week. Leadership asks: "What did you do with the saved time?" What is the AI-mature response?',
    options: [
      '"I have more free time now" - and leave it at that',
      '"I redirected those 5 hours into building a structured onboarding program, creating an employee engagement survey workflow, and starting a talent pipeline database - here is the impact data for each"',
      '"I\'m still figuring out how to use the extra time"',
      '"We should reduce HR headcount since there is less work now"'
    ],
    correct: 1,
    explanation: 'AI maturity means reinvesting saved time into higher-value HR work - not just being less busy. Showing leadership exactly where the hours went (with measurable outcomes) proves AI ROI and builds the case for further automation investment. "More free time" signals you are replaceable.'
  }
];

export default questionsHR;
