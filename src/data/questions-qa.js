const questionsQA = [
  // ===== P1: Tool Awareness (3 questions, ids 1-3) =====
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which of these is an AI-powered tool specifically designed to automate visual regression testing by comparing screenshots across builds?',
    options: [
      'Selenium WebDriver',
      'Applitools Eyes',
      'Postman',
      'Charles Proxy'
    ],
    correct: 1,
    explanation: 'Applitools Eyes uses Visual AI to detect visual differences between UI screenshots across builds, browsers, and devices - making it the go-to for automated visual regression testing without writing pixel-comparison scripts manually.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to generate comprehensive test cases for a Shopify checkout flow without writing them from scratch. Which AI approach is most effective?',
    options: [
      'Use ChatGPT or Copilot to generate test cases from user story descriptions and acceptance criteria',
      'Record a single manual test and duplicate it for all scenarios',
      'Copy test cases from a competitor\'s public documentation',
      'Skip test case writing and rely entirely on exploratory testing'
    ],
    correct: 0,
    explanation: 'AI tools like ChatGPT and GitHub Copilot can generate structured test cases from user stories, acceptance criteria, and flow descriptions - covering edge cases a manual tester might miss while dramatically reducing documentation time.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which AI-assisted tool can automatically crawl a Shopify or WordPress site and flag accessibility violations against WCAG standards?',
    options: [
      'Lighthouse CI with axe-core integration',
      'Google Search Console',
      'Hotjar session recordings',
      'Shopify Theme Inspector'
    ],
    correct: 0,
    explanation: 'Lighthouse CI combined with axe-core can automatically audit pages for WCAG accessibility violations, generating detailed reports with fix suggestions. This replaces hours of manual accessibility checking with automated, consistent scanning.'
  },

  // ===== P2: Workflow Integration (4 questions, ids 4-7) =====
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'Your team manually tests every Shopify theme update across 5 browsers and 3 devices. What is the highest-impact first step to integrate AI into this workflow?',
    options: [
      'Hire more manual testers to cover the matrix faster',
      'Set up AI-powered visual regression testing that auto-captures and compares screenshots across the full browser-device matrix after each deployment',
      'Reduce the testing matrix to only Chrome desktop to save time',
      'Ask developers to self-certify their code works across all browsers'
    ],
    correct: 1,
    explanation: 'AI-powered visual regression testing (e.g., Applitools, Percy) automates the most time-consuming part of cross-browser QA - capturing, comparing, and flagging visual differences across the entire matrix with every deploy, replacing hours of manual screenshot comparison.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'When integrating AI test case generation into your existing QA process, what should the QA tester\'s role become?',
    options: [
      'The tester becomes unnecessary since AI handles everything',
      'The tester reviews, refines, and adds domain-specific edge cases to AI-generated test suites',
      'The tester only runs the AI-generated tests without modification',
      'The tester focuses solely on writing manual test cases as backup'
    ],
    correct: 1,
    explanation: 'AI generates the baseline test coverage quickly, but the QA tester\'s domain expertise - knowing Shopify checkout quirks, payment gateway edge cases, client-specific business rules - is essential for refining and completing the test suite. Human + AI together produces the strongest coverage.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'Your agency delivers 8-10 Shopify stores per month. Which AI-assisted QA workflow change would deliver the most consistent quality improvement across all projects?',
    options: [
      'Create a shared AI-generated master test suite template for e-commerce flows that gets customized per project',
      'Let each tester decide their own testing approach per project',
      'Only test the homepage and checkout page to save time',
      'Wait for client-reported bugs and fix them reactively'
    ],
    correct: 0,
    explanation: 'A standardized AI-generated master test suite covering common e-commerce flows (cart, checkout, payments, account, search) ensures consistent baseline quality across all projects. Each tester then customizes it for project-specific features - combining AI efficiency with human judgment at scale.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'You want to add automated bug reporting to your QA workflow. Which integration would create the most useful AI-enhanced bug reports?',
    options: [
      'A tool that auto-captures screenshots, browser console errors, network logs, and environment details into a structured bug ticket when a test fails',
      'A simple email notification saying "test failed"',
      'A Slack message with just the test name that failed',
      'A spreadsheet log that testers manually update after each test run'
    ],
    correct: 0,
    explanation: 'AI-enhanced bug reporting tools (like BrowserStack, Testim, or custom Playwright reporters) automatically capture rich context - screenshots, console errors, network requests, device info - and format it into actionable bug tickets, eliminating the back-and-forth developers waste on "cannot reproduce" bugs.'
  },

  // ===== P3: Prompting & Output Quality (4 questions, ids 8-11) =====
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Prompting & Output Quality',
    question: 'You are using AI to generate test cases for a Shopify checkout that supports multiple payment gateways (Stripe, PayPal, Klarna). Which prompt produces the most thorough test coverage?',
    options: [
      '"Write test cases for checkout"',
      '"Generate test cases for a Shopify checkout flow supporting Stripe, PayPal, and Klarna - include happy paths, payment failures, declined cards, currency mismatches, partial payments, and mobile-specific payment sheet behavior for each gateway"',
      '"Test the payment page"',
      '"List some things to check on the checkout page"'
    ],
    correct: 1,
    explanation: 'Specific prompts that name each payment gateway, define scenario categories (happy path, failures, edge cases), and call out platform-specific behavior (mobile payment sheets) produce dramatically more complete and actionable test suites than vague requests.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Prompting & Output Quality',
    question: 'An AI tool generates 50 test cases for your WordPress e-commerce site, but many overlap and some are irrelevant. What is the best way to improve output quality?',
    options: [
      'Accept all 50 and execute them as-is to be thorough',
      'Discard the AI output entirely and write everything manually',
      'Refine the prompt with specific user roles, site features, and priority flows - then ask AI to deduplicate and rank by risk',
      'Reduce the prompt to fewer words so the AI focuses better'
    ],
    correct: 2,
    explanation: 'Prompt refinement is the key skill. Adding specific context (user roles, feature scope, priority areas) and explicit instructions to deduplicate and rank by risk transforms noisy AI output into a focused, high-value test plan - a skill every QA tester should develop.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Prompting & Output Quality',
    question: 'When asking AI to generate a regression test checklist for a Shopify theme update, which additional context most improves the output?',
    options: [
      'The Shopify plan tier the store is on',
      'A list of the specific components changed, the pages affected, and any custom Liquid code involved',
      'The store\'s monthly revenue',
      'The developer\'s name who made the changes'
    ],
    correct: 1,
    explanation: 'AI produces targeted regression checklists when you specify exactly what changed - which components, which pages, which custom code. This context lets AI focus on the blast radius of the change rather than generating a generic full-site checklist.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Prompting & Output Quality',
    question: 'You want AI to help write a test plan for a complex B2B wholesale portal with tiered pricing, customer-group-specific catalogs, and bulk order minimum thresholds. What prompting strategy works best?',
    options: [
      'Send one massive prompt with every possible business rule in a single paragraph',
      'Break the prompt into structured sections: user roles, pricing rules, catalog visibility rules, order constraints - and ask AI to generate test scenarios per section, then cross-reference dependencies',
      'Just say "test the B2B portal" and let AI figure it out',
      'Copy a generic e-commerce test plan and hope it covers B2B scenarios'
    ],
    correct: 1,
    explanation: 'Structured, sectioned prompting mirrors how complex B2B logic actually works. By breaking the system into domains and asking AI to handle each with cross-references, you get comprehensive coverage of inter-dependent business rules that a flat prompt would miss.'
  },

  // ===== P4: Efficiency & Impact (3 questions, ids 12-14) =====
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Efficiency & Impact',
    question: 'Your QA team spends 6 hours per project on manual cross-browser testing. After implementing AI visual regression testing, the same coverage takes 45 minutes. What should the team do with the recovered 5+ hours?',
    options: [
      'Reduce QA headcount since less time is needed',
      'Invest the time into deeper exploratory testing, edge case hunting, accessibility audits, and performance testing - areas that were previously skipped due to time pressure',
      'Use the extra time for non-QA administrative tasks',
      'Run the same automated tests multiple times to be extra sure'
    ],
    correct: 1,
    explanation: 'AI automation should elevate QA quality, not just reduce hours. The recovered time is best invested in high-value testing activities - exploratory testing, accessibility, performance, security - that manual-first teams typically skip due to deadline pressure. This makes QA a strategic function, not just a checkbox.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Efficiency & Impact',
    question: 'Which metric best demonstrates the business impact of AI-assisted QA to agency leadership?',
    options: [
      'Number of test cases written per day',
      'Reduction in post-launch client-reported bugs combined with faster QA turnaround time per project',
      'Number of AI tools installed',
      'Hours spent learning AI tools'
    ],
    correct: 1,
    explanation: 'Agency leadership cares about outcomes: fewer bugs reaching clients (quality) and faster delivery (efficiency). Combining bug-escape rate reduction with QA cycle time improvement directly demonstrates ROI and justifies further AI investment.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Efficiency & Impact',
    question: 'Your agency wants to offer "QA-as-a-Service" to external clients. How does AI most significantly change the economics of this offering?',
    options: [
      'AI replaces the need for any human QA involvement',
      'AI enables standardized automated test suites that can be deployed across multiple client stores with minimal customization, making the service scalable and profitable at retainer pricing',
      'AI makes QA free so you can offer it as a loss leader',
      'AI only helps with documentation, not actual testing'
    ],
    correct: 1,
    explanation: 'AI-powered test suite templates that cover standard e-commerce flows can be rapidly customized per client - turning QA from a per-project cost center into a scalable, repeatable retainer service. The automation handles the baseline; human testers add client-specific depth.'
  },

  // ===== P5: Risk & Judgment (3 questions, ids 15-17) =====
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Risk & Judgment',
    question: 'An AI visual regression tool flags 200 visual differences after a Shopify theme update. Upon review, 190 are minor anti-aliasing or sub-pixel rendering differences. What is the correct response?',
    options: [
      'Report all 200 as bugs to the development team',
      'Ignore all 200 since most are false positives',
      'Configure the AI tool\'s sensitivity threshold and baseline rules to filter out known rendering noise, then carefully review the remaining flagged differences',
      'Disable visual regression testing since it creates too much noise'
    ],
    correct: 2,
    explanation: 'AI tools require calibration. Tuning sensitivity thresholds, setting acceptable difference percentages, and maintaining updated baselines reduces noise while preserving the tool\'s ability to catch genuine visual regressions. This calibration skill is essential for effective AI-assisted QA.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Risk & Judgment',
    question: 'AI generates a complete test suite for a Shopify store\'s checkout, but the store has a custom post-purchase upsell app with complex conditional logic. What should the QA tester do?',
    options: [
      'Trust the AI-generated suite covers everything and skip further review',
      'Recognize that AI likely missed the custom app\'s edge cases, manually add test scenarios for the upsell conditions, and validate AI coverage against the actual app behavior',
      'Remove the custom app from testing scope since AI couldn\'t cover it',
      'Ask the client to test their own custom app'
    ],
    correct: 1,
    explanation: 'AI excels at generating tests for standard flows but lacks awareness of custom apps and their specific business logic. A skilled QA tester identifies these gaps, adds targeted manual scenarios, and ensures the combined suite covers both standard and custom functionality.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Risk & Judgment',
    question: 'During AI-assisted accessibility testing, the tool reports zero issues on a Shopify store. However, you notice the store uses heavy custom JavaScript for product filtering and a modal-based quick-view. What should you conclude?',
    options: [
      'The store is fully accessible - the AI tool confirmed it',
      'AI accessibility scanners often miss dynamic content, JavaScript-driven interactions, and keyboard navigation issues - manual testing of interactive components is still essential',
      'Accessibility testing is not important for e-commerce stores',
      'The custom JavaScript automatically makes the site accessible'
    ],
    correct: 1,
    explanation: 'Automated accessibility scanners catch about 30-40% of WCAG violations. Dynamic content, focus management in modals, keyboard navigation through filtered results, and screen reader announcements for AJAX updates all require manual verification - a critical judgment call for QA testers using AI tools.'
  },

  // ===== P6: Strategic Mindset (3 questions, ids 18-20) =====
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'Strategic Mindset',
    question: 'As a QA tester at an agency that currently does 100% manual testing, what is the most strategic argument to present to leadership for investing in AI-assisted QA?',
    options: [
      '"AI tools are trendy and we should keep up with competitors"',
      '"AI-assisted QA reduces bug escape rate, cuts QA cycle time by 60-70%, enables consistent quality across all projects, and unlocks QA-as-a-retainer revenue - turning QA from a cost center into a profit driver"',
      '"AI will replace the need for QA testers entirely, saving salary costs"',
      '"Other agencies are doing it so we should too"'
    ],
    correct: 1,
    explanation: 'A strategic argument ties AI investment to business outcomes leadership cares about: quality metrics, delivery speed, consistency at scale, and new revenue streams. Positioning QA as a profit driver rather than a cost center changes how leadership views QA investment entirely.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'Strategic Mindset',
    question: 'Your agency is planning its AI-assisted QA roadmap for the next 12 months. Which phased approach demonstrates the strongest strategic thinking?',
    options: [
      'Buy every AI testing tool available and figure out usage later',
      'Phase 1: AI test case generation + visual regression for new projects → Phase 2: Automated smoke test suites for client retainers → Phase 3: CI/CD-integrated testing pipeline with AI bug triage and reporting dashboards',
      'Wait until AI testing tools are perfect before adopting any',
      'Only adopt AI if a client specifically requests it'
    ],
    correct: 1,
    explanation: 'A phased roadmap starts with high-impact, low-risk wins (test case generation, visual regression), builds toward recurring value (retainer smoke tests), and matures into a fully integrated testing infrastructure. Each phase delivers measurable value while building team capability for the next.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'Strategic Mindset',
    question: 'Looking 2-3 years ahead, how should a QA professional at a digital agency position themselves as AI transforms testing?',
    options: [
      'Focus only on manual testing skills since AI is a passing trend',
      'Learn basic coding and stop doing QA entirely',
      'Evolve into a Quality Engineering role - owning test strategy, AI tool selection, automation architecture, and test analytics - while using AI to handle repetitive execution',
      'Resist AI adoption to protect the current role from change'
    ],
    correct: 2,
    explanation: 'The QA role is evolving from test execution to test engineering and quality strategy. Professionals who can architect AI-assisted testing pipelines, interpret test analytics, and make risk-based quality decisions will be far more valuable than those who only execute manual test cases.'
  }
];

export default questionsQA;
