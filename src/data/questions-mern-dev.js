const questionsMernDev = [
  // -- P1: Tool Awareness (3 questions) --
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You are building a REST API in Express.js with MongoDB aggregation pipelines for a client dashboard. Which AI-assisted approach gets you production-ready code fastest?',
    options: [
      'Feed Claude the MongoDB collection schema, sample documents, and the exact dashboard metrics needed - then review the generated pipeline against edge cases.',
      'Write the aggregation pipeline manually and only use AI to format the output.',
      'Use ChatGPT to generate the full API and deploy without review since aggregation logic is straightforward.',
      'Rely on Cursor autocomplete to suggest each pipeline stage one at a time.'
    ],
    correct: 0,
    explanation: 'Providing the AI with complete context - schema, sample data, and desired output - produces accurate aggregation pipelines. But MongoDB pipelines have subtle edge cases (null values, type mismatches, unwind on empty arrays), so review is critical. Line-by-line autocomplete misses the holistic pipeline logic.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Your team uses Cursor for a MERN project. A junior developer is stuck on a React component that fails to re-render when Redux state updates. What is the most effective way to use Cursor here?',
    options: [
      'Paste the component code, the Redux slice, the selector, and the console logs into Cursor chat - ask it to identify why re-render is not triggering.',
      'Tell the developer to avoid AI tools for state management bugs and debug manually with React DevTools only.',
      'Use Cursor autocomplete to rewrite the component from scratch.',
      'Ask Cursor to generate a completely new Redux setup instead of debugging the existing one.'
    ],
    correct: 0,
    explanation: 'Giving Cursor the full context - component, slice, selector, and symptoms - lets it pinpoint common issues like stale selectors, missing dependencies, or accidental state mutation. Manual-only debugging ignores a powerful tool, rewriting from scratch wastes time, and replacing the entire Redux setup is overkill for a re-render bug.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to integrate a third-party payment gateway API into your Express backend. The API documentation is 40 pages. Which approach is most efficient?',
    options: [
      'Read the entire documentation manually before writing any code.',
      'Copy-paste the full docs into ChatGPT and ask it to write the complete integration in one shot.',
      'Feed Claude the relevant API endpoints, auth flow, and webhook structure from the docs - generate the integration module, then validate against the sandbox.',
      'Skip the docs entirely and use Stack Overflow answers for the integration.'
    ],
    correct: 2,
    explanation: 'Extracting the relevant sections (endpoints, auth, webhooks) and feeding them to AI produces focused, accurate code. Full doc dumps exceed context limits and produce generic output. Reading everything manually before coding is slow, and Stack Overflow answers may be outdated or for different API versions.'
  },

  // -- P2: Prompt Craft (4 questions) --
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You need AI to generate a MongoDB schema with Mongoose for a multi-tenant SaaS app. Which prompt will produce the most usable output?',
    options: [
      '"Write a Mongoose schema for a SaaS app."',
      '"Create Mongoose schemas for a multi-tenant SaaS with these models: Organization (name, plan, billing), User (email, role, org reference), Project (title, status, members array). Use timestamps, add indexes on org lookups, and include a pre-save hook for email normalization."',
      '"Give me a good MongoDB schema."',
      '"Write Mongoose code for all the collections I might need in a SaaS product with multiple features."'
    ],
    correct: 1,
    explanation: 'Specific prompts with exact model names, fields, relationships, indexes, and hooks produce paste-ready schemas. Vague prompts like "SaaS app" or "all collections" return generic boilerplate that requires heavy reworking.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Your Express API endpoint is returning 500 errors intermittently in production. You want AI help debugging. What context should you include in your prompt?',
    options: [
      'Just say "my API is broken, fix it" and let the AI figure it out.',
      'Include the route handler code, the error stack trace, the MongoDB query involved, request payload sample, and whether it fails on specific data patterns.',
      'Only share the error message - the AI does not need code context.',
      'Share the entire codebase so the AI has maximum context.'
    ],
    correct: 1,
    explanation: 'Intermittent 500s are usually data-dependent. Providing the handler code, stack trace, query, payload sample, and failure patterns lets AI identify issues like unhandled null fields, ObjectId casting errors, or connection pool exhaustion. Too little context gives generic advice; too much overwhelms.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You are asking Claude to refactor a messy React component (400 lines) into smaller, reusable components. What is the best prompting strategy?',
    options: [
      'Paste the full 400-line component and say "refactor this."',
      'Paste the component and specify: "Break this into these sub-components: FilterBar, DataTable, Pagination. Each should accept props, not access global state directly. Keep the parent as a container that manages state and passes props down. Maintain the existing API contract."',
      'Ask the AI to rewrite the component in a completely different framework.',
      'Only paste 50 lines at a time and ask for refactoring in isolation without showing the full picture.'
    ],
    correct: 1,
    explanation: 'Naming the target components, specifying the architecture (container/presentational), and stating constraints (props over global state, maintain API contract) gives the AI a clear decomposition plan. Vague "refactor this" produces unpredictable splits. Isolated chunks lose the context of how pieces connect.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You need to write a complex MongoDB aggregation pipeline that joins data across three collections. How should you prompt the AI?',
    options: [
      '"Write a MongoDB query that joins three collections."',
      'Provide sample documents from each collection, the field relationships between them, the exact output shape you need, and any filtering or sorting requirements.',
      '"Do a $lookup in MongoDB."',
      'Write the pipeline yourself first and only use AI to add comments to your code.'
    ],
    correct: 1,
    explanation: 'Multi-collection aggregations require precise context: sample documents show the data shape, field relationships define the $lookup logic, the desired output shape guides $project stages, and filter/sort requirements complete the pipeline. Generic prompts produce generic code that rarely matches your actual data model.'
  },

  // -- P3: Workflow Integration (4 questions) --
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your MERN project at HuptechWeb has a tight 3-week deadline. The client needs user auth, CRUD operations, file uploads, and a dashboard. How should you use AI in your workflow?',
    options: [
      'Use AI to generate the boilerplate (auth middleware, CRUD routes, file upload handler, dashboard API) - then customize and integrate with the specific business logic.',
      'Avoid AI entirely to maintain full control of code quality.',
      'Have AI generate the entire application and deliver it as-is to save time.',
      'Only use AI in the last week for bug fixes.'
    ],
    correct: 0,
    explanation: 'AI excels at generating well-structured boilerplate (JWT auth, Express CRUD patterns, Multer configs, aggregation endpoints). Using it for scaffolding while you focus on business logic, edge cases, and integration is the optimal time-value split. Avoiding AI wastes time on solved patterns; delivering AI code without review is risky.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You are working on a React frontend and need to build 12 similar form components for different entity types (users, products, orders, etc.). What is the smartest workflow?',
    options: [
      'Build all 12 manually to ensure consistency.',
      'Have AI generate all 12 at once in a single prompt.',
      'Build one form component perfectly as a reference, then prompt AI with it as a template: "Generate forms for these entities following this exact pattern" - with field definitions for each.',
      'Copy-paste the first form 11 times and manually change the fields.'
    ],
    correct: 2,
    explanation: 'The template-and-multiply pattern is the most efficient AI workflow for repetitive components. One hand-crafted reference ensures quality standards, then AI replicates the pattern with precision across all variations. Building all manually is slow; generating all at once without a reference produces inconsistent output; copy-paste is error-prone.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your team ships MERN projects using GitHub. How should AI code review fit into your workflow?',
    options: [
      'Replace human code reviews entirely with AI review.',
      'Use AI review as a first pass (catching security issues, performance problems, missing error handling) - then human reviewers focus on business logic, architecture, and edge cases.',
      'Never use AI for code review - only humans can understand code quality.',
      'Use AI review only for junior developers, not seniors.'
    ],
    correct: 1,
    explanation: 'AI as a first-pass reviewer catches mechanical issues (missing try-catch, SQL injection vectors, N+1 queries, missing input validation) efficiently. Human reviewers then focus on higher-value concerns: business logic correctness, architectural decisions, and subtle edge cases. This layered approach is faster and more thorough than either alone.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You need to write API documentation for 25 Express endpoints. What is the most efficient AI-assisted approach?',
    options: [
      'Write all documentation manually in a Google Doc.',
      'Have AI generate docs for all 25 endpoints from a single prompt with no examples.',
      'Document 2-3 endpoints thoroughly yourself (request/response format, auth requirements, error codes), then prompt AI: "Document the remaining endpoints following this exact format" - feeding it the route files.',
      'Skip documentation since the code is self-explanatory.'
    ],
    correct: 2,
    explanation: 'The template approach ensures consistency and quality. Your hand-written examples set the standard for detail level, format, and what information to include. AI then replicates this across all endpoints while reading the actual route code for accuracy. Bulk generation without examples produces inconsistent, often incomplete docs.'
  },

  // -- P4: Critical Thinking (3 questions) --
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'AI generates a user authentication system for your Express app using JWT. The code stores the JWT secret as a hardcoded string in the auth middleware file. What should you do?',
    options: [
      'Deploy it as-is since the AI generated it correctly.',
      'Move the secret to environment variables, add token expiration, implement refresh token rotation, and add rate limiting to the auth endpoints - because AI often generates functionally correct but production-unsafe auth code.',
      'Remove JWT entirely and build session-based auth from scratch.',
      'Add a comment saying "TODO: fix later" and move on.'
    ],
    correct: 1,
    explanation: 'AI frequently generates auth code that works in development but lacks production security: hardcoded secrets, no token expiration, no refresh rotation, no rate limiting. A developer with critical thinking recognizes these gaps and addresses them before deployment. Blindly deploying AI auth code is a serious security risk.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'Claude generates a MongoDB query for your dashboard that uses $lookup across 4 collections. It works perfectly in development with 500 records. What should you validate before deploying to production?',
    options: [
      'Nothing - if it works in dev, it will work in production.',
      'Only check if the query syntax is correct.',
      'Test with production-scale data (100K+ records), check if proper indexes exist for all $lookup fields, verify the pipeline does not cause memory issues with large result sets, and add pagination.',
      'Rewrite the query without $lookup to avoid complexity.'
    ],
    correct: 2,
    explanation: 'MongoDB aggregation pipelines that work at small scale can become catastrophically slow at production scale. Missing indexes on $lookup fields cause full collection scans, large result sets exhaust memory, and unbounded queries without pagination can crash the server. AI rarely considers data volume implications in its generated queries.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'You ask AI to build a file upload endpoint. It generates code using Multer that saves files to the local filesystem in an /uploads directory. For your HuptechWeb client project deployed on a cloud server, what is wrong with this approach?',
    options: [
      'Nothing - local filesystem storage is fine for production.',
      'The code should use a different folder name.',
      'Local filesystem storage fails in multi-server deployments, has no CDN, no backup, and fills disk space. You should modify it to use cloud storage (S3/Cloudinary), add file type validation, size limits, and virus scanning.',
      'Just add more disk space to the server.'
    ],
    correct: 2,
    explanation: 'AI generates the simplest working solution, which is local filesystem storage. But production file uploads need cloud storage for scalability, CDN for performance, backups for durability, and security measures (type validation, size limits, malware scanning). Critical thinking means recognizing when AI output works but is not production-appropriate.'
  },

  // -- P5: Adaptability (3 questions) --
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'A new AI coding tool claims to generate full MERN stack applications from a single prompt. How should you evaluate it for HuptechWeb projects?',
    options: [
      'Immediately adopt it for all projects to save time.',
      'Ignore it completely - your current workflow is fine.',
      'Test it on a low-risk internal project, evaluate the code quality against your standards (error handling, security, scalability), compare development speed, and decide based on evidence whether to integrate it.',
      'Wait until all competitors are using it before trying.'
    ],
    correct: 2,
    explanation: 'Adaptability means structured evaluation, not blind adoption or stubborn resistance. Testing on a low-risk project gives real data on code quality, speed gains, and limitations. This evidence-based approach lets you adopt what works and skip what does not, without risking client projects.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'You have been writing Express middleware manually for 3 years. AI tools can now generate middleware (auth, validation, error handling, logging) in seconds. How should you adapt?',
    options: [
      'Keep writing everything manually - your middleware is battle-tested.',
      'Use AI to generate middleware boilerplate, then apply your 3 years of experience to review, harden, and customize it for each project. Your expertise makes the AI output better, not redundant.',
      'Let AI handle all middleware without review since it has been trained on millions of examples.',
      'Stop learning about middleware since AI will handle it from now on.'
    ],
    correct: 1,
    explanation: 'Experience plus AI is more powerful than either alone. Your years of middleware experience help you spot what AI misses (edge cases, security gaps, performance issues), while AI handles the repetitive scaffolding. Adaptability means using new tools to amplify existing skills, not replacing judgment with automation.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'React Server Components and Next.js App Router have changed how React apps are built. Your team primarily builds traditional MERN SPAs. How should you approach this shift?',
    options: [
      'Ignore it - SPAs work fine for your clients.',
      'Immediately rewrite all existing projects to use Server Components.',
      'Learn the new patterns using AI-assisted exploration (ask Claude to explain differences, generate comparison examples), build one internal project with it, then decide which client projects benefit from the new approach.',
      'Wait until the technology is at least 5 years old before evaluating.'
    ],
    correct: 2,
    explanation: 'Using AI to accelerate learning about new patterns (generating examples, explaining trade-offs, converting sample code) is the adaptable approach. Not every project needs Server Components, but understanding when they add value (SEO-heavy pages, data-heavy dashboards) lets you recommend the right architecture per client.'
  },

  // -- P6: AI-First Mindset (3 questions) --
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'A new MERN project lands at HuptechWeb. The client needs a custom CRM with role-based access, lead tracking, email integration, and reporting dashboards. What is your first instinct?',
    options: [
      'Start coding the login page from scratch.',
      'Before writing any code, use AI to: generate the database schema from requirements, scaffold the API structure, create the role-permission matrix, draft the component hierarchy - then use this AI-generated blueprint to plan sprints and estimate accurately.',
      'Copy an old CRM project and modify it.',
      'Tell the client to use an off-the-shelf CRM instead.'
    ],
    correct: 1,
    explanation: 'An AI-first mindset means AI is your starting point for planning, not just coding. Using AI to generate schemas, API structures, and component hierarchies from requirements produces better estimates, clearer sprint plans, and catches architectural issues early. Starting with code or copy-pasting old projects skips the planning phase.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Your MERN team at HuptechWeb delivers 4-5 projects per month. Where should AI create the biggest efficiency gain?',
    options: [
      'Only in writing code faster.',
      'Across the entire delivery lifecycle: requirements analysis (AI extracts scope from client briefs), architecture planning (AI generates schemas and API designs), development (AI scaffolds boilerplate), testing (AI generates test cases), documentation (AI creates API docs), and deployment (AI generates CI/CD configs).',
      'Only in generating documentation after the project is done.',
      'AI should not be used in client projects - too risky.'
    ],
    correct: 1,
    explanation: 'AI-first thinking applies AI across the full delivery lifecycle, not just coding. At 4-5 projects/month, efficiency gains compound: faster scoping, better architecture, less boilerplate coding, more thorough testing, automated documentation. This is how HuptechWeb scales output without scaling headcount proportionally.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'You are estimating a MERN project. Historically, building a CRUD module (model, routes, controller, validation, tests) took your team 2 days per entity. With AI-assisted development, a similar module now takes 4 hours. How should this change your approach?',
    options: [
      'Keep quoting 2 days to clients and pocket the extra time.',
      'Quote 4 hours to clients since that is the actual effort now.',
      'Use the efficiency gain strategically: reduce delivery timelines to win more projects, invest saved time in better testing and code review, and build reusable AI-generated templates that make future projects even faster.',
      'Do not change anything - clients do not need to know about your internal tools.'
    ],
    correct: 2,
    explanation: 'An AI-first mindset reinvests efficiency gains strategically. Faster delivery wins competitive bids, saved time improves quality through better testing, and building reusable templates creates compound returns. Simply pocketing time or slashing prices both miss the strategic opportunity that AI efficiency creates.'
  }
];

export default questionsMernDev;
