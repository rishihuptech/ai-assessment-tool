const questionsFrontendDesigner = [
  // P1 - Tool Awareness (3 questions: ids 1-3)
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You receive a Figma design and need to extract spacing, font sizes, and colour values quickly. Which AI-assisted approach is most efficient?',
    options: [
      'Manually inspect every layer in Figma and write values into a spreadsheet',
      'Use Figma Dev Mode or an AI plugin like Locofy to auto-extract design tokens and CSS properties',
      'Take a screenshot and ask ChatGPT to guess the values',
      'Skip the design specs and estimate values by eye in the browser'
    ],
    correct: 1,
    explanation: 'Figma Dev Mode and AI plugins like Locofy can auto-extract spacing, typography, and colour tokens directly from design files, drastically reducing manual inspection time while maintaining accuracy.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Your team converts Figma mockups to Shopify Liquid templates. Which AI-powered workflow would best accelerate the Figma-to-code pipeline without sacrificing quality?',
    options: [
      'Use Figma-to-code tools like Builder.io or Anima to generate a baseline HTML/CSS scaffold, then manually refine for Liquid and responsiveness',
      'Have ChatGPT write the entire Shopify theme from a text description of the design',
      'Export Figma frames as SVGs and embed them directly as full-page images',
      'Avoid AI entirely because generated code is always unusable'
    ],
    correct: 0,
    explanation: 'AI Figma-to-code tools generate a solid HTML/CSS starting point that captures layout structure and styles. The designer then refines for Shopify Liquid syntax, responsive breakpoints, and cross-browser edge cases - balancing speed with production quality.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You are using Cursor (AI-augmented VS Code) for frontend work. A colleague says AI autocomplete keeps suggesting incorrect CSS Grid syntax. What is the best practice?',
    options: [
      'Disable AI autocomplete permanently since it cannot be trusted',
      'Accept every suggestion blindly to save time',
      'Use AI suggestions as a starting point, review each one against the design spec, and train your prompts with project-specific context like existing utility classes',
      'Switch back to a plain text editor without any AI features'
    ],
    correct: 2,
    explanation: 'AI autocomplete works best when treated as a draft assistant. Providing project context (existing class conventions, design tokens) improves suggestion quality, but every suggestion must be reviewed against the actual design spec before acceptance.'
  },

  // P2 - Current Workflow Understanding (4 questions: ids 4-7)
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Current Workflow Understanding',
    question: 'When building a responsive Shopify product page, you manually write media queries for 5 breakpoints. Which part of this workflow has the highest potential for AI assistance?',
    options: [
      'Final QA sign-off with the client',
      'Generating initial responsive CSS and media query scaffolding based on the Figma artboard sizes',
      'Deciding the business pricing strategy for the product',
      'Choosing the Shopify plan for the store'
    ],
    correct: 1,
    explanation: 'AI can rapidly generate responsive CSS scaffolding from Figma artboard dimensions, including breakpoints and fluid typography calculations. This is a repetitive, rules-based task perfectly suited for AI acceleration while the designer focuses on fine-tuning.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Current Workflow Understanding',
    question: 'Your team spends significant time fixing cross-browser CSS inconsistencies after initial build. Where can AI most directly reduce this effort?',
    options: [
      'AI can automatically detect and suggest vendor prefixes, fallback properties, and browser-specific fixes during the coding phase',
      'AI can convince browser vendors to standardise rendering',
      'AI can replace all CSS with inline styles to avoid browser issues',
      'AI cannot help with cross-browser issues at all'
    ],
    correct: 0,
    explanation: 'AI tools integrated into the editor can flag CSS properties that need vendor prefixes, suggest fallbacks for unsupported features, and reference caniuse.com data - catching cross-browser issues during development rather than after QA.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Current Workflow Understanding',
    question: 'You convert a complex Figma animation (parallax scroll, staggered reveals) into frontend code. Currently the process takes 2 days of manual GSAP/CSS animation coding. How could AI realistically change this?',
    options: [
      'AI can generate the complete production-ready animation code with zero human input',
      'AI can produce initial animation code scaffolding and timing functions from a description, reducing the task to refinement and testing - likely cutting effort by 40-60%',
      'AI cannot understand animation concepts so it offers no help here',
      'AI should replace all custom animations with pre-built libraries, eliminating the need for custom code'
    ],
    correct: 1,
    explanation: 'AI can generate GSAP timelines, CSS keyframe scaffolds, and easing functions from natural language descriptions. The designer still needs to fine-tune timing, test across devices, and match the Figma prototype exactly - but the scaffolding phase is dramatically shortened.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Current Workflow Understanding',
    question: 'Your WordPress theme build requires creating 12 page templates with consistent header, footer, and sidebar patterns. What is the most effective AI-assisted approach?',
    options: [
      'Ask AI to build the entire WordPress theme in one prompt',
      'Create one master template manually, then use AI to generate variations for each page type by feeding it the master template structure and page-specific requirements',
      'Use AI to generate all 12 templates independently with no shared base',
      'Avoid templates entirely and use a page builder for everything'
    ],
    correct: 1,
    explanation: 'By establishing a manually crafted master template with consistent patterns, AI can efficiently generate variations that maintain design consistency. This preserves architectural decisions while automating the repetitive scaffolding of similar page structures.'
  },

  // P3 - Adaptability & Learning (4 questions: ids 8-11)
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Adaptability & Learning',
    question: 'A new CSS feature (e.g., CSS Scroll-Driven Animations) has just gained browser support. Your team has no experience with it but a client project requires it. What is the most effective AI-augmented learning approach?',
    options: [
      'Wait 2 years until comprehensive tutorials exist before attempting to use it',
      'Use AI to explain the API with examples, generate experimental code snippets, then validate against the official spec and browser dev tools - learning by doing with AI as a tutor',
      'Copy-paste the first AI-generated code block without understanding it',
      'Tell the client the feature does not exist'
    ],
    correct: 1,
    explanation: 'AI accelerates learning new CSS features by providing contextual explanations and working examples on demand. Validating against the official spec and testing in dev tools ensures correctness while building genuine understanding - not just blind copy-pasting.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Adaptability & Learning',
    question: 'Your agency adopts a new design-to-code AI tool that generates Tailwind CSS from Figma. Half the team resists, saying it produces "messy code." As a senior frontend designer, what is the best response?',
    options: [
      'Force the entire team to use it without addressing concerns',
      'Abandon the tool entirely because of the pushback',
      'Run a structured pilot: use the tool on a real project section, establish a cleanup checklist, measure time saved vs. manual approach, and share results with the team',
      'Let each person decide individually with no coordination'
    ],
    correct: 2,
    explanation: 'A structured pilot with measurable outcomes converts subjective resistance into data-driven decisions. Establishing a cleanup checklist acknowledges legitimate quality concerns while demonstrating whether the net time savings justify adoption.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Adaptability & Learning',
    question: 'You want to stay current with AI tools relevant to frontend design. Which learning habit is most sustainable and effective?',
    options: [
      'Dedicate 30 minutes weekly to testing one new AI feature or tool on a real task from your current project',
      'Read every AI news article daily for 3 hours',
      'Wait for your manager to assign training',
      'Only learn new tools when a client specifically requests them'
    ],
    correct: 0,
    explanation: 'Consistent, focused experimentation on real tasks builds practical skills without overwhelming your schedule. Testing AI tools against actual project work reveals genuine utility faster than passive reading or waiting for formal training.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Adaptability & Learning',
    question: 'AI-generated code frequently does not match your team\'s coding conventions (BEM naming, specific Liquid patterns). Rather than abandoning AI tools, what is the best long-term solution?',
    options: [
      'Accept whatever naming the AI produces and change your conventions',
      'Create a custom prompt template / AI rules file that includes your coding standards, naming conventions, and example patterns so AI output aligns with team standards from the start',
      'Manually rename every class after AI generation - the extra time is unavoidable',
      'Stop using naming conventions entirely'
    ],
    correct: 1,
    explanation: 'Creating a reusable prompt template or rules file (like .cursorrules) that encodes team conventions ensures AI-generated code aligns with standards from the first output. This is a one-time investment that compounds in value across every future interaction.'
  },

  // P4 - Risk & Ethics Awareness (3 questions: ids 12-14)
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Risk & Ethics Awareness',
    question: 'You use AI to generate CSS for a client\'s e-commerce checkout page. The AI produces code that looks correct visually but uses deprecated CSS properties. What is the primary risk?',
    options: [
      'No risk - if it looks correct now, it will work forever',
      'The page may break in future browser updates, causing checkout failures and lost revenue for the client - deprecated code is a ticking time bomb',
      'Deprecated CSS loads faster, so it is actually preferred',
      'The risk is only aesthetic and has no business impact'
    ],
    correct: 1,
    explanation: 'Deprecated CSS properties can be removed in future browser updates without warning. On a checkout page, this could directly cause conversion drops and revenue loss. AI-generated code must be reviewed against current web standards, especially for business-critical pages.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Risk & Ethics Awareness',
    question: 'A teammate uses AI to generate placeholder images and copy for a client presentation without disclosing that the content is AI-generated. The client approves the design thinking the photography is original. What is the ethical concern?',
    options: [
      'There is no concern - AI images are the same as stock photos',
      'The client may have licensing, brand authenticity, or legal policies that prohibit AI-generated assets. Not disclosing the source is a transparency and trust issue that could damage the agency relationship',
      'AI images are always free to use commercially, so it does not matter',
      'The only concern is if the images look bad'
    ],
    correct: 1,
    explanation: 'Many brands have explicit policies around AI-generated content, and some industries face regulatory requirements. Failing to disclose AI-generated assets risks violating client trust, brand guidelines, and potentially licensing or legal requirements.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Risk & Ethics Awareness',
    question: 'You are building an accessible Shopify theme and use AI to generate ARIA attributes and alt text. During testing, you discover the AI-generated alt text is inaccurate for several product images. What should you do?',
    options: [
      'Ship it as-is since most users do not rely on alt text',
      'Remove all alt text to avoid inaccuracies',
      'Manually review and correct every AI-generated alt text and ARIA label, then add an accessibility review step to your AI-assisted workflow going forward',
      'Replace alt text with the product SKU number'
    ],
    correct: 2,
    explanation: 'Accessibility is a legal requirement in many jurisdictions (ADA, EAA) and directly impacts real users. AI-generated accessibility attributes must be verified by a human. Adding an accessibility review step to the workflow prevents this from becoming a recurring issue.'
  },

  // P5 - Strategic Thinking (3 questions: ids 15-17)
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Strategic Thinking',
    question: 'Your agency wants to reduce the average Shopify theme build time from 6 weeks to 4 weeks using AI. As a frontend designer, which strategic approach would you recommend?',
    options: [
      'Rush every project by skipping QA to save 2 weeks',
      'Identify the 3 most time-consuming repeatable tasks (e.g., responsive scaffolding, component variations, cross-browser fixes), build AI-assisted workflows for each, measure time savings per task, and iterate',
      'Replace all frontend designers with AI tools',
      'Simply promise clients 4-week delivery and figure it out later'
    ],
    correct: 1,
    explanation: 'Strategic AI adoption targets the highest-impact repeatable tasks first, measures actual time savings, and iterates. This creates compounding efficiency gains without sacrificing quality or making unrealistic commitments.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Strategic Thinking',
    question: 'A client asks why they should pay for a frontend designer when AI can "build websites now." What is the strongest response that protects your value?',
    options: [
      'Agree that AI will replace designers soon',
      'AI generates code, but a skilled frontend designer ensures pixel-perfect brand fidelity, accessible and performant experiences, cross-browser reliability, and conversion-optimised layouts - we use AI to deliver these faster, not to eliminate the expertise behind them',
      'Refuse to discuss AI with the client',
      'Offer a steep discount to compete with AI tools'
    ],
    correct: 1,
    explanation: 'This response reframes AI as an accelerator for expert work rather than a replacement. It highlights the judgment, quality assurance, and business-outcome focus that differentiate a professional frontend designer from raw AI output.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Strategic Thinking',
    question: 'You notice your team rebuilds similar Shopify section patterns (hero banners, feature grids, testimonial carousels) on nearly every project. How can AI help create a strategic advantage?',
    options: [
      'Keep rebuilding from scratch each time - every project is unique',
      'Build a library of AI-prompt templates paired with vetted code snippets for each common section type, enabling rapid generation of project-specific variations that meet your quality standards',
      'Use only free Shopify themes and stop doing custom work',
      'Ask AI to create one universal section that works for every client'
    ],
    correct: 1,
    explanation: 'Creating a prompt-template library paired with quality-assured code snippets creates a proprietary accelerator. Each new project benefits from accumulated knowledge while still producing customised output - this is how AI becomes a competitive moat for the team.'
  },

  // P6 - Collaboration & Communication (3 questions: ids 18-20)
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'Collaboration & Communication',
    question: 'A UI/UX designer on your team hands you a Figma file with complex micro-interactions. You plan to use AI to help code the animations. How should you communicate this to the designer?',
    options: [
      'Do not mention AI - just deliver the result',
      'Tell the designer AI will handle everything and they do not need to worry about feasibility',
      'Explain that you will use AI to scaffold the animation code, then collaborate with them on reviewing the output against their Figma prototype to ensure the motion, easing, and timing match their creative intent',
      'Ask the designer to simplify their animations so AI can handle them'
    ],
    correct: 2,
    explanation: 'Transparent communication about AI usage builds trust and sets proper expectations. Inviting the designer to review AI output against their prototype ensures creative fidelity while demonstrating that AI is a tool that enhances - not replaces - the collaborative process.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'Collaboration & Communication',
    question: 'During a sprint review, a developer criticises your AI-generated HTML structure as "not semantic enough." How should you handle this feedback constructively?',
    options: [
      'Dismiss the feedback because the AI generated it, not you',
      'Acknowledge the issue, ask for specific examples, then update your AI prompt templates to enforce semantic HTML standards - and share the improved prompts with the team',
      'Stop using AI for HTML generation entirely',
      'Tell the developer semantics do not matter for frontend design'
    ],
    correct: 1,
    explanation: 'Treating AI output as your responsibility (not the AI\'s) demonstrates professional ownership. Using the feedback to improve prompt templates creates lasting improvement and shows the team that AI workflows are iterative and collaborative, not set-and-forget.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'Collaboration & Communication',
    question: 'Your agency is pitching a large Shopify project. The client asks about your team\'s AI capabilities during the proposal presentation. As the frontend design lead, what is the most effective way to communicate your AI readiness?',
    options: [
      'List every AI tool you have heard of to sound impressive',
      'Say you do not use AI because you prefer "handcrafted" code',
      'Demonstrate a specific example: show how your AI-assisted workflow delivers faster turnaround, higher consistency, and built-in quality checks - with a before/after case study from a recent project',
      'Promise the client AI will cut their budget in half'
    ],
    correct: 2,
    explanation: 'A concrete case study with measurable outcomes (time saved, consistency improved) is far more persuasive than a tool list or vague promises. It positions the team as practitioners who have integrated AI into proven workflows, building client confidence in both capability and delivery.'
  }
];

export default questionsFrontendDesigner;
