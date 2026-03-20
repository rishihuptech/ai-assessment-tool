const questionsPM = [
  // P1 - Tool Awareness (ids 1-3)
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Your team uses ProofHub for task management. An AI tool like Notion AI or ClickUp AI can auto-generate task descriptions, subtasks, and checklists from a single project brief. What is the BIGGEST advantage of adopting such a tool for your workflow?',
    options: [
      'It completely replaces the need for a project manager',
      'It accelerates project scoping by converting briefs into structured task breakdowns in seconds',
      'It guarantees accurate timelines without human review',
      'It eliminates the need for client communication during scoping'
    ],
    correct: 1,
    explanation: 'AI-powered task generation dramatically speeds up the scoping-to-execution pipeline by converting unstructured briefs into actionable task breakdowns. However, it still requires PM oversight for accuracy and client alignment - it augments, not replaces.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'A UK client sends a 12-page RFP for a Shopify Plus migration with custom ERP integration. You need to create a project scope document, timeline, and resource plan. Which AI-assisted approach is MOST effective?',
    options: [
      'Paste the entire RFP into ChatGPT and ask it to generate the full project plan',
      'Use AI to extract key requirements, flag ambiguities, and generate a first-draft scope - then layer in your expertise on timeline, risks, and resource allocation',
      'Skip AI entirely because RFPs require human judgment only',
      'Use AI to auto-generate a fixed-price quote directly from the RFP without review'
    ],
    correct: 1,
    explanation: 'The strongest approach uses AI as a rapid extraction and drafting layer - pulling requirements, spotting gaps, and creating structure - while the PM adds domain expertise on feasibility, risks, and realistic timelines. Blind reliance or total avoidance are both suboptimal.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You manage 6 concurrent projects across Shopify dev, WordPress white-label, and SEO campaigns. Which AI tool capability would give you the HIGHEST leverage in your daily workflow?',
    options: [
      'AI that auto-assigns random team members to tasks based on availability alone',
      'AI that analyzes task dependencies, team velocity, and historical data to flag at-risk projects and suggest resource rebalancing',
      'AI that sends automated status emails to clients without PM review',
      'AI that generates Gantt charts but cannot integrate with your existing ProofHub data'
    ],
    correct: 1,
    explanation: 'Predictive project intelligence - analyzing dependencies, velocity trends, and historical patterns to surface risks early - is the highest-leverage AI capability for a multi-project PM. It shifts you from reactive firefighting to proactive management.'
  },

  // P2 - Workflow Integration (ids 4-7)
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Your project coordinator sends weekly status updates to clients manually - copying data from ProofHub, formatting in Google Docs, and emailing. This takes 3+ hours per week across all projects. What is the BEST AI integration strategy?',
    options: [
      'Replace the coordinator with a fully automated AI reporting bot',
      'Build an AI pipeline that pulls ProofHub data, auto-generates a draft status report with progress metrics, and queues it for the coordinator to review and personalize before sending',
      'Keep the manual process because clients prefer handwritten updates',
      'Use AI to generate reports but send them without any human review to save time'
    ],
    correct: 1,
    explanation: 'The optimal integration keeps the human in the loop for personalization and client relationship nuance while automating the heavy lifting of data extraction, formatting, and drafting. This can cut the 3+ hours to under 30 minutes while maintaining quality.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'A client requests a "quick change" to their Shopify store mid-sprint that is clearly outside the agreed scope. As a PM, what is the FIRST thing you should do before using any AI tool to assess the impact?',
    options: [
      'Immediately say yes to keep the client happy',
      'Document the change request, compare it against the signed scope, and assess impact on timeline and resources - then communicate the trade-off clearly to the client',
      'Ignore the request and hope the client forgets',
      'Add it to the sprint without telling the dev team'
    ],
    correct: 1,
    explanation: 'Scope creep management starts with disciplined documentation and clear trade-off communication. This is a foundational PM skill that AI can assist with (impact analysis, change request templates) but cannot replace the judgment call itself.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You want to integrate AI into your sprint planning process for a Shopify custom build. The dev team has historical velocity data from the past 8 sprints. What is the MOST valuable way AI can assist?',
    options: [
      'Let AI set sprint goals without team input based purely on velocity data',
      'Use AI to analyze velocity trends, predict realistic capacity, identify recurring bottlenecks, and suggest story point allocations - then validate with the team during planning',
      'Ignore velocity data and let AI estimate based on industry averages',
      'Use AI only to format the sprint board layout'
    ],
    correct: 1,
    explanation: 'AI excels at pattern recognition across historical data - spotting velocity trends, capacity constraints, and recurring blockers. But sprint planning is collaborative; AI provides the analytical foundation that the team validates and adjusts based on current context.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Your white-label WordPress project has 4 ongoing tasks, 2 blocked dependencies, and a client review pending. The client emails asking for a "full project status." You have 15 minutes before a call. What is the FASTEST AI-assisted approach?',
    options: [
      'Tell the client you will send the update next week',
      'Use AI to pull task statuses from your PM tool, generate a structured progress summary with blockers highlighted, and format it as talking points for your call - review and adjust in 5 minutes',
      'Manually check every task and write a detailed email from scratch',
      'Forward the raw ProofHub dashboard link without context'
    ],
    correct: 1,
    explanation: 'Under time pressure, AI acts as a rapid synthesis layer - aggregating data, structuring it for communication, and highlighting what matters. The PM adds context and adjusts messaging for the specific client relationship.'
  },

  // P3 - Data & Decision-Making (ids 8-11)
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You are estimating a Shopify headless commerce build for a UAE client. AI suggests 320 hours based on similar past projects. Your senior developer says it needs 400+ hours due to custom API complexity. What is the CORRECT approach?',
    options: [
      'Go with the AI estimate because data is always more accurate than opinions',
      'Use the AI estimate as a baseline, validate with the developer on specific complexity drivers, and present the client a range with risk factors explained',
      'Ignore both and quote your gut feeling',
      'Average the two numbers and use that as the final estimate'
    ],
    correct: 1,
    explanation: 'AI estimates based on historical patterns are excellent baselines but cannot account for unique project complexity. The PM role is to synthesize data-driven estimates with expert input, present realistic ranges, and communicate risk factors transparently.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'An AI dashboard shows that your SEO campaign project is 85% complete, but the client satisfaction score has dropped to 3.2/5. Sprint velocity is on target. What does this data MOST LIKELY indicate?',
    options: [
      'The project is fine - 85% completion means success',
      'Delivery metrics are on track but communication, expectation management, or deliverable quality may have gaps that are eroding client confidence',
      'The client is unreasonable and should be dropped',
      'Sprint velocity is the only metric that matters'
    ],
    correct: 1,
    explanation: 'A disconnect between delivery progress and client satisfaction almost always points to communication gaps, misaligned expectations, or perceived quality issues. Strong PMs monitor both execution and relationship health - AI can flag this divergence, but the PM must diagnose and act.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your team consistently underestimates Shopify theme customization tasks by 20-30%. What is the SIMPLEST way to use AI to fix this pattern?',
    options: [
      'Stop doing Shopify projects',
      'Feed historical estimation vs. actual data into an AI model that applies a correction factor and suggests adjusted estimates for similar future tasks',
      'Add 50% buffer to every estimate regardless of task type',
      'Blame the developers for slow work'
    ],
    correct: 1,
    explanation: 'AI can analyze estimation accuracy patterns and apply data-driven correction factors specific to task types, complexity levels, and team members. This is more precise than arbitrary buffers and improves over time as more data is fed in.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You have 3 developers, 2 projects nearing deadline, and a new urgent client request. AI resource analysis shows Developer A is at 120% utilization, Developer B at 60%, and Developer C at 85%. What is the BEST decision?',
    options: [
      'Assign the new request to Developer A since they are the most experienced',
      'Redistribute Developer A\'s non-critical tasks to Developer B, assign the urgent request to Developer B with Developer C as backup, and communicate revised timelines to affected clients',
      'Tell the new client to wait until next month',
      'Hire a freelancer immediately without checking team capacity first'
    ],
    correct: 1,
    explanation: 'AI utilization data enables informed resource rebalancing. The PM uses this data to redistribute load intelligently, prevent burnout on overloaded team members, and communicate proactively about timeline impacts - rather than defaulting to the overworked top performer.'
  },

  // P4 - Ethics & Limitations (ids 12-14)
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'You use AI to generate a project proposal for a Shopify migration. The AI includes a timeline estimate of 4 weeks, but you know from experience that similar projects take 6-8 weeks. The client loves the 4-week timeline. What should you do?',
    options: [
      'Go with 4 weeks since the AI calculated it and the client is happy',
      'Correct the timeline to 6-8 weeks in the proposal, explain the AI was used for initial drafting but professional judgment adjusted the estimate, and present risk factors for the aggressive timeline',
      'Split the difference and say 5 weeks',
      'Deliver in 4 weeks by making the team work overtime without telling them'
    ],
    correct: 1,
    explanation: 'Ethical AI use in project management means never letting AI-generated outputs override professional experience, especially when it affects client commitments and team workload. Transparency about how AI was used and where human judgment adjusted the output builds trust.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'A client asks you to use AI to monitor their team\'s individual productivity during a project - tracking keystrokes, active screen time, and idle periods. They want weekly reports. What is the CORRECT response?',
    options: [
      'Set it up immediately - the client is paying for the project',
      'Decline invasive monitoring, explain the ethical and legal concerns, and propose alternative outcome-based metrics like task completion rates, sprint velocity, and deliverable quality',
      'Do it secretly without telling the team',
      'Agree but only monitor senior team members'
    ],
    correct: 1,
    explanation: 'Invasive AI surveillance raises serious ethical, legal (especially across India, UAE, UK, and EU jurisdictions), and morale concerns. Professional PMs redirect toward outcome-based metrics that respect privacy while still providing accountability and performance visibility.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'Your AI meeting summarizer captures a client\'s off-the-record comment about their budget being 2x higher than what they quoted you. The AI flags this as a "pricing opportunity." What should you do?',
    options: [
      'Immediately revise your quote upward to match their actual budget',
      'Treat off-the-record information with professional integrity, do not adjust pricing based on accidentally captured private context, and focus on delivering value that naturally justifies your rates',
      'Share the AI transcript with your sales team to leverage the information',
      'Confront the client about the discrepancy'
    ],
    correct: 1,
    explanation: 'AI tools may capture information that was shared informally or off-the-record. Ethical PMs do not exploit accidentally captured private information. Professional integrity and long-term relationship trust outweigh short-term pricing leverage.'
  },

  // P5 - Communication & Collaboration (ids 15-17)
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'A Canada-based client is frustrated because they feel "out of the loop" despite your team sending weekly ProofHub updates. You suspect the updates are too technical and not addressing their business concerns. How should AI assist here?',
    options: [
      'Send more frequent technical updates',
      'Use AI to analyze past client communications, identify their priority themes and preferred language level, then restructure updates to lead with business impact and outcomes rather than technical task lists',
      'Stop sending updates and only communicate when asked',
      'Replace all written updates with AI-generated video calls'
    ],
    correct: 1,
    explanation: 'AI can analyze communication patterns and client sentiment to identify mismatches between what you are reporting and what the client cares about. Restructuring updates to lead with business outcomes rather than task lists directly addresses the "out of the loop" feeling.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'Your project coordinator needs to send a scope change notification to a client. The change adds 2 weeks and 40 hours to the project. What is the MOST important element to include in the communication?',
    options: [
      'An apology for the delay',
      'A clear explanation of what changed, why it impacts the timeline, what the revised deliverables and dates are, and what the client needs to approve to proceed',
      'A technical breakdown of every code change required',
      'A discount offer to compensate for the delay'
    ],
    correct: 1,
    explanation: 'Effective scope change communication is structured around what-why-impact-action. The client needs to understand the change, its reason, the revised expectations, and their required decision. AI can draft this structure, but the PM ensures the messaging is relationship-appropriate.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'Your Indian dev team works IST, your UAE PM works GST, and the client is in the UK (GMT). AI scheduling suggests a daily standup at 7:30 AM GMT. Your Indian developers push back because it falls during their lunch break. What is the BEST resolution?',
    options: [
      'Force the AI-suggested time since it is optimized',
      'Use AI to model multiple time options weighted by meeting criticality, team preferences, and timezone overlap - then negotiate a rotating or async standup format that balances fairness across all locations',
      'Cancel standups entirely',
      'Make only the Indian team adjust their schedule'
    ],
    correct: 1,
    explanation: 'AI scheduling should factor in human preferences, cultural norms, and fairness - not just mathematical timezone overlap. The PM uses AI to generate options but applies judgment on team morale, rotating fairness, and async alternatives for distributed teams.'
  },

  // P6 - Future Readiness (ids 18-20)
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Huptech wants to build a "predictive project delivery" system that flags at-risk projects 2 weeks before deadlines slip. What is the MINIMUM data foundation needed to make this viable?',
    options: [
      'Just install an AI plugin on ProofHub',
      'Structured historical data on: task estimates vs. actuals, blocker frequency and resolution time, client response delays, resource utilization patterns, and scope change frequency - consistently tracked across at least 15-20 completed projects',
      'One quarter of random project notes',
      'Only client feedback surveys'
    ],
    correct: 1,
    explanation: 'Predictive AI requires clean, structured, historical data across multiple dimensions. A minimum of 15-20 completed projects with consistent tracking gives the model enough patterns to identify risk signals. Without this data foundation, any AI prediction is guesswork.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'In 2-3 years, AI agents will likely handle routine project coordination tasks autonomously. As a PM/PC at Huptech, what skill should you develop NOW to remain indispensable?',
    options: [
      'Learn to type faster for manual data entry',
      'Develop strategic client advisory skills - translating business goals into project strategy, managing stakeholder politics, and making judgment calls on ambiguous trade-offs that AI cannot resolve',
      'Memorize more keyboard shortcuts in ProofHub',
      'Focus exclusively on Gantt chart creation'
    ],
    correct: 1,
    explanation: 'As AI automates coordination, scheduling, and reporting, the PM role shifts toward strategic advisory - understanding client business context, navigating ambiguity, managing relationships, and making judgment calls. These human-centric skills become the differentiator.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Huptech is evaluating whether to build a custom AI project management assistant or adopt an off-the-shelf solution. You manage the evaluation. What is the MOST critical factor in your recommendation?',
    options: [
      'Choose the cheapest option regardless of fit',
      'Evaluate based on: integration depth with existing tools (ProofHub, Slack, client portals), customizability to Huptech\'s specific workflows, data ownership and security across jurisdictions (India, UAE, UK), and the build vs. buy cost over a 2-year horizon',
      'Pick whatever has the best marketing website',
      'Always build custom because off-the-shelf is never good enough'
    ],
    correct: 1,
    explanation: 'AI tool evaluation for a multi-country agency requires assessing integration fit, workflow customization, data sovereignty across jurisdictions, and total cost of ownership. The PM must think beyond features to operational, legal, and strategic fit.'
  }
];

export default questionsPM;
