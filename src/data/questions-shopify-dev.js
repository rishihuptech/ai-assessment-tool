const questionsShopifyDev = [
  // ── P1: Tool Awareness (3 questions) ──────────────────────────────
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to generate a reusable Liquid snippet for a product metafield-driven size chart. Which approach gets you the best first draft fastest?',
    options: [
      'Ask Claude or ChatGPT with the exact metafield namespace, type, and desired HTML structure so it outputs a paste-ready snippet.',
      'Search Shopify Community forums and adapt the closest answer you find.',
      'Write it from scratch in your code editor - AI tools can\'t handle Liquid reliably.',
      'Use Cursor autocomplete and accept whatever it suggests line by line.'
    ],
    correct: 0,
    explanation: 'Providing the AI with precise context - metafield namespace, data type, and target markup - produces a near-complete snippet in seconds. Forum answers require heavy adaptation, writing from scratch ignores a proven accelerator, and blind autocomplete acceptance skips the critical context step.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Your team uses Cursor for Shopify theme development. A developer is debugging a Storefront API GraphQL query that returns null for a variant price. What is the most effective way to use Cursor here?',
    options: [
      'Paste the full query, the schema docs link, and the null response into Cursor\'s chat and ask it to diff against the correct field path.',
      'Rely on Cursor\'s inline autocomplete to fix the query as you retype it.',
      'Use Cursor only after you\'ve manually solved it - to reformat the final query.',
      'Avoid Cursor for GraphQL; switch to the Shopify GraphiQL explorer exclusively.'
    ],
    correct: 0,
    explanation: 'Giving Cursor the complete context - query, expected schema, and actual error - lets it pinpoint the exact field-path mismatch. Inline autocomplete lacks the error context, using it only for formatting wastes its diagnostic strength, and the GraphiQL explorer helps but doesn\'t replace an AI that can reason about your specific query structure.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You\'re building a Node.js middleware that transforms ERP order payloads into Shopify draft order objects via the Admin API. Which tool combination gives you the highest-quality output?',
    options: [
      'Use ChatGPT to generate the full middleware and deploy it without review since the logic is straightforward.',
      'Write the mapping logic manually and only use AI to generate unit test stubs.',
      'Feed Claude the ERP payload sample, the Shopify draft order API schema, and your validation rules - then review and test its output against edge cases.',
      'Use Cursor autocomplete for each field mapping one at a time, accepting suggestions as they appear.'
    ],
    correct: 2,
    explanation: 'Claude excels when given both the source payload and target schema - it can generate the complete transformation logic with validation. But ERP data is messy, so reviewing against edge cases (missing fields, currency mismatches, partial orders) is non-negotiable. Deploying without review is reckless, test-only usage underutilizes the tool, and line-by-line autocomplete misses the holistic mapping logic.'
  },

  // ── P2: Prompt Craft (4 questions) ─────────────────────────────────
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You need AI to generate a Shopify Plus checkout.liquid script that applies tiered B2B discounts based on customer tags and cart total. Which prompt structure will produce the most accurate result?',
    options: [
      '"Write a checkout script for B2B discounts on Shopify Plus."',
      'Provide the customer tag naming convention, each discount tier with thresholds, the Shopify Script Editor API methods you want used, and a sample cart object - then ask for the script with inline comments.',
      '"Generate a Shopify Script for tiered pricing. Make it production-ready."',
      'Paste a competitor\'s checkout script and say "make something similar for B2B."'
    ],
    correct: 1,
    explanation: 'Tiered B2B discount logic depends on exact tag formats, threshold values, and API methods. A detailed prompt with all business rules and a sample cart gives the AI everything it needs to produce accurate, testable code. Vague prompts produce generic scripts that need heavy rework, and reverse-engineering a competitor\'s script introduces unknown assumptions.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You ask ChatGPT to write a Liquid section for a product page but the output uses syntax from an outdated Shopify API version. What should you do?',
    options: [
      'Manually fix every line and stop using AI for Liquid.',
      'Add the current Shopify Liquid version, the Online Store 2.0 section schema format, and the specific settings you need to your prompt, then regenerate.',
      'Accept the output and hope it works in production.',
      'Switch to a completely different AI tool assuming ChatGPT can\'t do Liquid.'
    ],
    correct: 1,
    explanation: 'AI models have training cutoffs. Specifying the Shopify version, OS 2.0 schema structure, and desired settings steers the output to current syntax. Abandoning AI over a versioning gap or accepting broken code are both wasteful extremes - the fix is better context in the prompt.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'A developer prompts Claude: "Build me a React component for a wholesale portal product grid with pricing tiers." The output is generic and misses key requirements. What is the best improvement?',
    options: [
      'Add: the pricing tier data structure from MongoDB, the customer group logic, quantity-break thresholds, whether prices show before login, and the design system tokens your team uses.',
      'Just re-run the same prompt - AI outputs vary each time so a better version may appear.',
      'Add "make it professional and production-ready" to the end of the prompt.',
      'Break it into 20 micro-prompts, one for each JSX element, and assemble manually.'
    ],
    correct: 0,
    explanation: 'The original prompt lacked domain-specific constraints. Adding the data schema, business rules (tier thresholds, visibility logic), and design tokens gives the AI enough specificity to generate a component that fits your actual system. Re-running without changes is random, vague qualifiers don\'t add real context, and extreme micro-prompting creates integration headaches.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You want AI to help write a Shopify Flow automation that tags customers after their third order and triggers a B2B wholesale invite email. How should you structure the prompt?',
    options: [
      '"Create a Shopify Flow that sends an email after some orders."',
      'Describe the trigger (order created), the condition (order count equals 3 from the same customer), the actions (add customer tag, send email via Klaviyo webhook), and include the tag name and webhook endpoint format.',
      '"Make a Shopify Flow for B2B. Use best practices."',
      'Ask for the Flow in natural language and then manually rebuild it in the Shopify admin without referencing the AI output.'
    ],
    correct: 1,
    explanation: 'Shopify Flow automations need precise trigger-condition-action definitions. Specifying the exact trigger event, the count condition, both actions with their parameters (tag name, webhook format), gives the AI a clear blueprint. Vague prompts produce generic flows, and generating output you ignore defeats the purpose.'
  },

  // ── P3: Workflow Integration (4 questions) ─────────────────────────
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your team manages tasks in ProofHub. A new Shopify migration project has 40+ tasks across theme build, data migration, app setup, redirects, and QA. How should AI fit into the planning phase?',
    options: [
      'Use AI to generate the full task breakdown from the project scope document, review it with the lead dev to adjust sequencing and dependencies, then import into ProofHub.',
      'Skip AI - project planning requires too much context for it to be useful.',
      'Let AI generate tasks and import them directly without review to save time.',
      'Only use AI at the end to format the task list after the team has manually created it.'
    ],
    correct: 0,
    explanation: 'AI can rapidly decompose a scope document into a structured task list, but migration projects have hidden dependencies (e.g., redirect mapping must finish before theme QA). A lead dev review catches those nuances. Skipping AI wastes a planning accelerator, importing without review risks missed dependencies, and using AI only for formatting underutilizes it.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'During a sprint, a developer uses Cursor to rapidly scaffold a custom Shopify app with Node.js and MongoDB. The PR is large and the reviewer is unfamiliar with parts of the codebase. What is the best workflow?',
    options: [
      'Merge without review since AI-generated code is generally reliable.',
      'Have the reviewer use Claude to summarize the PR diff, highlight potential issues (auth handling, API rate limits, MongoDB indexing), and then do a focused manual review on flagged areas.',
      'Reject the PR and ask the developer to rewrite everything without AI assistance.',
      'Assign three additional reviewers to compensate for the AI involvement.'
    ],
    correct: 1,
    explanation: 'Using AI to triage a large PR surfaces the high-risk areas (auth, rate limiting, database performance) so the reviewer can focus manual attention where it matters most. Merging without review is dangerous regardless of how code was written, rejecting AI-assisted work is counterproductive, and adding reviewers without focus just spreads thin attention thinner.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'A client reports a bug on their Shopify store: the cart drawer shows the wrong variant image after a color swatch click. What is the fastest responsible way to use AI in your debugging workflow?',
    options: [
      'Paste the relevant Liquid section code and the JavaScript event handler into Claude, describe the bug behavior, and ask it to identify where the variant image ID binding likely breaks.',
      'Ignore AI and manually console.log every variable until you find the issue.',
      'Ask ChatGPT "why is my Shopify cart broken?" without any code context.',
      'Rebuild the entire cart drawer from scratch using an AI-generated template.'
    ],
    correct: 0,
    explanation: 'Feeding the AI the specific code sections and a clear bug description lets it reason about the variant-image binding logic and pinpoint likely failure points. This is faster than blind console.log tracing, infinitely better than a context-free question, and far more proportionate than a full rebuild.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your team is building a Shopify Plus store with a custom React-based product configurator that talks to a Node.js backend. The client wants a progress demo every Friday. How should AI integrate into the weekly workflow?',
    options: [
      'Use AI only on the final Friday to generate the demo summary - the rest of the week is pure manual work.',
      'Throughout the week, use Cursor for scaffolding components, Claude for API integration logic and test generation, and on Thursday use AI to compile commit summaries into a client-facing progress update - but always review AI outputs before committing or sending.',
      'Let AI auto-generate the entire Friday demo report from git logs without any developer input.',
      'Avoid AI during active development to prevent "AI dependency" and only use it for documentation.'
    ],
    correct: 1,
    explanation: 'AI should be woven into daily development (scaffolding, integration logic, tests) and weekly reporting (commit-to-summary), but every output gets human review before it reaches code or client. Restricting AI to one day or one function wastes velocity, and auto-generating client reports without review risks sending inaccurate progress updates.'
  },

  // ── P4: Critical Thinking (3 questions) ────────────────────────────
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'Claude generates a Shopify webhook handler in Node.js that processes order/paid events. The code looks clean and handles the happy path well. Before deploying, what should you verify?',
    options: [
      'Nothing - if the code handles the happy path and looks clean, it\'s ready for production.',
      'Only check that it compiles and passes linting.',
      'Verify HMAC signature validation is present, idempotency handling for duplicate webhooks exists, retry/failure logging is implemented, and test with payloads that have missing optional fields.',
      'Add a comment saying "AI-generated" and deploy - the team can fix issues as they arise in production.'
    ],
    correct: 2,
    explanation: 'Webhook handlers face real-world chaos: Shopify can send duplicates, payloads can have missing optional fields, and without HMAC validation anyone can spoof requests. AI often produces clean happy-path code but may skip these production-critical safeguards. Deploying without these checks invites security vulnerabilities and data corruption.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'You use AI to generate MongoDB aggregation pipelines for a wholesale portal\'s analytics dashboard. The pipeline returns results that look correct on your test dataset of 50 orders. What is the critical next step?',
    options: [
      'Deploy immediately - 50 orders is a sufficient test.',
      'Ask AI to optimize the pipeline for performance without testing on real data volumes.',
      'Test the pipeline against a production-scale dataset (10K+ orders), check index usage with .explain(), verify the aggregation handles edge cases like refunded orders and multi-currency transactions, and benchmark response times.',
      'Rewrite the pipeline manually because AI-generated aggregations can\'t be trusted for analytics.'
    ],
    correct: 2,
    explanation: 'MongoDB aggregation performance can collapse at scale without proper indexing, and analytics logic must handle real-world edge cases (refunds, currency conversion, partial shipments) that a 50-record test set won\'t surface. Trusting small-sample results or optimizing without load testing invites production failures. Rewriting from scratch wastes the valid starting point AI provided.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'A junior developer uses AI to generate a Liquid theme section with JavaScript that fetches product recommendations via the Shopify AJAX API. The section works but the page speed score drops significantly. What should you investigate?',
    options: [
      'Remove the section entirely since AI-generated code always hurts performance.',
      'Check if the AI-generated JS is render-blocking, whether it lazy-loads below the fold, if it batches API calls or fires one per product, and whether it uses requestIdleCallback or Intersection Observer for deferred loading.',
      'Just add async/defer to the script tag and move on.',
      'Tell the junior to stop using AI tools since they clearly produced bad code.'
    ],
    correct: 1,
    explanation: 'Performance issues in recommendation sections usually stem from render-blocking scripts, unbatched API calls, or eager loading of below-fold content. AI may generate functionally correct code that ignores these web performance patterns. The fix is targeted optimization (lazy loading, call batching, deferred execution), not blanket rejection of AI tools or superficial script attribute changes.'
  },

  // ── P5: Adaptability (3 questions) ─────────────────────────────────
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'Shopify releases a new Customer Account API that replaces the legacy account system. Your AI tools don\'t have training data on this new API yet. How do you adapt?',
    options: [
      'Wait until AI tools update their training data before starting any work with the new API.',
      'Abandon AI entirely for this feature and code everything manually.',
      'Feed the new API documentation, changelog, and migration guide directly into Claude\'s context, use it to generate implementation code against the new spec, and validate outputs against the official docs.',
      'Use AI to generate code for the old API and manually convert it to the new one.'
    ],
    correct: 2,
    explanation: 'Modern AI tools accept documentation as context input. Pasting the new API spec directly into the conversation gives the AI the knowledge it needs to generate relevant code. Waiting for training updates wastes weeks, abandoning AI wastes productivity, and converting old API code introduces unnecessary translation errors.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'A US-based DTC client suddenly needs their Shopify store to support a B2B wholesale channel with net-30 payment terms within 3 weeks. Your team has limited B2B experience. What is the best use of AI here?',
    options: [
      'Tell the client B2B can\'t be done in 3 weeks and decline the project.',
      'Use AI to rapidly research Shopify B2B channel setup, generate draft payment terms logic, scaffold the wholesale customer portal components, and create a compressed project plan - while having your most senior dev validate architecture decisions.',
      'Let AI build the entire B2B portal autonomously to meet the deadline.',
      'Only use AI to write the client proposal and do all development manually.'
    ],
    correct: 1,
    explanation: 'AI dramatically compresses the learning curve on unfamiliar territory - from B2B channel configuration to payment terms logic to portal scaffolding. But a senior dev must validate architecture choices because B2B has complex edge cases (tax exemptions, purchase orders, credit limits). Declining outright loses the opportunity, full autonomy risks quality, and limiting AI to proposals wastes its development potential.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'Your team has standardized on Claude for code generation, but a new project requires heavy Shopify Hydrogen (React Server Components) work and you find that a different AI tool handles RSC patterns better. What should you do?',
    options: [
      'Stick with Claude exclusively - standardization matters more than output quality.',
      'Switch the entire team to the new tool permanently based on this one project.',
      'Use the new tool for Hydrogen/RSC-specific tasks where it outperforms, keep Claude for Liquid, Node.js, and general tasks where it excels, and document the decision so the team knows when to use which.',
      'Avoid AI altogether for Hydrogen since the ecosystem is too new.'
    ],
    correct: 2,
    explanation: 'Different AI tools have different strengths. Pragmatic teams use the best tool for each context rather than forcing one tool for everything. Documenting the decision prevents confusion and builds a team knowledge base. Rigid standardization sacrifices quality, full switching based on one use case is reactive, and avoiding AI for new tech wastes a key learning accelerator.'
  },

  // ── P6: AI-First Mindset (3 questions) ─────────────────────────────
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Your agency wins a project to migrate a 5,000-SKU store from WooCommerce to Shopify. The product data has inconsistent descriptions, missing metafields, and varied image naming. An AI-first team would:',
    options: [
      'Hire temporary data entry staff to manually clean and migrate all 5,000 products.',
      'Build an AI pipeline: use Claude to generate a data transformation script that normalizes descriptions, maps WooCommerce custom fields to Shopify metafields, and flags anomalies - run it in batches with human spot-checks at each stage.',
      'Use Shopify\'s built-in CSV import and fix errors one by one after migration.',
      'Tell the client data cleanup is out of scope and migrate as-is.'
    ],
    correct: 1,
    explanation: 'An AI-first approach turns a tedious manual task into a systematic pipeline: AI handles the pattern-based transformation (normalization, field mapping, anomaly detection) at scale, while humans validate in batches to catch edge cases AI might miss. Manual data entry doesn\'t scale, post-migration cleanup is chaotic, and migrating dirty data creates a poor client experience.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'A Shopify Plus client asks your team to build a custom returns portal with RMA logic, inventory restocking rules, and refund automation. The estimated timeline without AI is 6 weeks. With an AI-first approach, how should the team think about this?',
    options: [
      'Quote the same 6-week timeline but use AI internally to reduce effort and increase margin.',
      'Promise 1-week delivery since AI can handle everything.',
      'Use AI to scaffold the portal structure, generate the RMA state machine logic, write API integration code and test suites - targeting a 3.5-4 week delivery with the saved time reinvested into more thorough testing, edge case handling, and client UAT support.',
      'Avoid using AI because returns logic is too business-critical to risk.'
    ],
    correct: 2,
    explanation: 'AI-first thinking isn\'t about hiding efficiency gains or making reckless promises - it\'s about compressing development time and reinvesting that time into quality. Scaffolding, state machine logic, and test generation are ideal AI tasks. The saved weeks go toward hardening edge cases and supporting UAT, which improves client outcomes. Sandbagging the timeline or over-promising both erode trust.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Your agency is evaluating how to make AI usage a standard part of every Shopify project. Which approach best embeds AI-first thinking into the team culture?',
    options: [
      'Mandate that every line of code must be AI-generated to maximize efficiency.',
      'Create a shared prompt library for common Shopify patterns (sections, scripts, API integrations), establish code review guidelines for AI-assisted PRs, run monthly sessions where devs share effective AI workflows, and track time-saved metrics per project.',
      'Let each developer decide individually whether to use AI - no structure needed.',
      'Restrict AI usage to senior developers only since juniors might become dependent.'
    ],
    correct: 1,
    explanation: 'Sustainable AI adoption requires infrastructure: shared prompts reduce repeated effort, review guidelines ensure quality, knowledge-sharing sessions compound team learning, and metrics prove ROI. Mandating 100% AI-generation ignores tasks where manual work is better, unstructured adoption leads to inconsistent quality, and restricting by seniority blocks the developers who would benefit most from AI acceleration.'
  }
];

export default questionsShopifyDev;
