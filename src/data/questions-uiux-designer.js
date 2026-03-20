const questionsUiuxDesigner = [
  // P1 - Tool Awareness (ids 1-3)
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which AI-powered Figma plugin can generate realistic placeholder content (names, addresses, product descriptions) directly into your design frames?',
    options: [
      'Content Reel with AI suggestions',
      'Figma Auto Layout engine',
      'Google Fonts integration panel',
      'Figma Inspect mode'
    ],
    correct: 0,
    explanation: 'Content Reel and similar AI-powered Figma plugins generate contextually relevant placeholder data - names, addresses, product copy - directly inside frames, eliminating the need for manual lorem ipsum or dummy content.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to rapidly generate multiple hero banner layout variations for a luxury jewelry Shopify store. Which approach best leverages current AI design tooling?',
    options: [
      'Manually duplicate frames and reposition elements for each variation',
      'Use an AI layout generation tool like Galileo AI or Relume to produce wireframe variations, then refine in Figma',
      'Ask the developer to build all variations in code and screenshot them for review',
      'Download random Dribbble layouts and adapt them to the brand'
    ],
    correct: 1,
    explanation: 'AI layout generators like Galileo AI and Relume can produce multiple structured wireframe variations from a text prompt, which designers then import into Figma for brand-specific refinement - dramatically cutting early exploration time.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Your team is building a design system for a B2B wholesale portal. Which AI capability would most improve consistency when scaling the component library across 50+ screens?',
    options: [
      'AI-driven design token auditing that flags inconsistent spacing, color, and typography usage across all frames',
      'Using AI to auto-generate client presentation slides from Figma files',
      'An AI chatbot embedded in the portal for end-user support',
      'AI-powered stock photo search for placeholder images'
    ],
    correct: 0,
    explanation: 'AI-driven design token auditing tools scan every frame for deviations in spacing, color, and type usage - catching inconsistencies humans miss when a system scales across dozens of screens, which is critical for B2B portal coherence.'
  },

  // P2 - Workflow Integration (ids 4-7)
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'During design-to-dev handoff for a Shopify theme, your team spends hours annotating responsive breakpoint behavior. How could AI most effectively reduce this bottleneck?',
    options: [
      'Replace Figma with a code-based design tool so developers never need handoff documents',
      'Use AI-powered annotation tools that auto-generate responsive specs and interaction notes from Figma layers and auto-layout settings',
      'Ask developers to interpret designs themselves without annotations',
      'Only design for desktop and let developers decide mobile layouts'
    ],
    correct: 1,
    explanation: 'AI annotation tools can read Figma auto-layout rules, constraints, and layer structure to auto-generate responsive breakpoint documentation - cutting hours of manual annotation while improving spec accuracy for developers.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'Which step in a typical UI/UX workflow benefits most immediately from AI-generated first drafts?',
    options: [
      'Final client sign-off meetings',
      'UX copywriting - generating headline, CTA, and microcopy variations for A/B testing',
      'Negotiating project contracts',
      'Setting up Figma team permissions'
    ],
    correct: 1,
    explanation: 'AI excels at generating multiple copy variations (headlines, CTAs, microcopy) quickly, giving designers ready-to-test options that would otherwise require waiting on a dedicated copywriter - a clear, low-risk workflow win.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'A health/wellness e-commerce client requests a landing page in 48 hours. Your team currently takes 3 days. Which AI-integrated workflow change is most likely to meet the deadline without sacrificing quality?',
    options: [
      'Skip user research and wireframing entirely and jump straight to high-fidelity design',
      'Use AI to generate a wireframe from the brief, run AI copy generation for product sections, then have senior designers refine visuals and UX in Figma',
      'Outsource the entire page to a freelance designer found via AI matching',
      'Use a pre-made Shopify template with no customization'
    ],
    correct: 1,
    explanation: 'Layering AI at the wireframe and copy stages compresses the first 60% of the timeline, while senior designers focus their expertise on visual refinement and UX - meeting tight deadlines without cutting quality corners.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'Your design team uses Figma, Slack, and Notion. Which AI integration point would create the highest leverage across all three tools?',
    options: [
      'An AI assistant that converts Figma design review comments into structured Notion tasks with assignees and deadlines, posting summaries to Slack',
      'An AI that changes Figma frame background colors based on Slack emoji reactions',
      'An AI that auto-archives all Notion pages older than 30 days',
      'An AI that converts Slack messages into Figma wireframes automatically'
    ],
    correct: 0,
    explanation: 'Bridging review feedback from Figma into actionable Notion tasks with Slack notifications eliminates a major coordination bottleneck - design teams lose significant time manually translating feedback into tracked action items.'
  },

  // P3 - Data & Decision Making (ids 8-11)
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Data & Decision Making',
    question: 'You are redesigning a product detail page for an automotive parts e-commerce store. Which AI-driven data approach would most directly inform your layout decisions?',
    options: [
      'Running AI-powered heatmap analysis on the existing PDP to identify where users click, scroll, and drop off before redesigning',
      'Asking the client which layout they personally prefer',
      'Copying the layout of the top Google search result for "auto parts"',
      'Using AI to generate random A/B test variations without analyzing current behavior'
    ],
    correct: 0,
    explanation: 'AI-powered heatmap and session analysis tools reveal actual user behavior patterns - click density, scroll depth, rage clicks - giving designers evidence-based layout priorities rather than subjective opinions or competitor copying.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Data & Decision Making',
    question: 'A luxury jewelry client says their Shopify store "feels cheap" but cannot articulate specific issues. Which AI-assisted research method would most efficiently uncover actionable design problems?',
    options: [
      'Send the client a 50-question survey about their design preferences',
      'Use AI-powered UX audit tools that score the site against heuristic benchmarks and flag specific UI elements undermining premium perception (typography scale, whitespace ratios, image quality, color contrast)',
      'Redesign the entire store based on competitor sites without analysis',
      'Add more product photos and hope the perception improves'
    ],
    correct: 1,
    explanation: 'AI UX audit tools can systematically evaluate measurable design attributes - type hierarchy, spacing ratios, image resolution, contrast - against luxury benchmarks, translating a vague "feels cheap" complaint into a prioritized fix list.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Data & Decision Making',
    question: 'After launching a redesigned checkout flow, which AI-driven metric analysis would best validate that your UX improvements are working?',
    options: [
      'AI-powered funnel analysis comparing step-by-step drop-off rates before and after the redesign',
      'Counting how many social media likes the new design receives',
      'Measuring how fast the page loads on the designer\'s own laptop',
      'Tracking how many Figma comments the design received during review'
    ],
    correct: 0,
    explanation: 'AI-powered funnel analysis isolates exactly where users drop off in the checkout flow, allowing designers to see whether specific UX changes (simplified forms, progress indicators, trust signals) reduced abandonment at each step.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Data & Decision Making',
    question: 'Your team is designing a travel DMC website and must decide between a map-based search interface and a traditional filter-based listing. How should AI-assisted user research inform this decision?',
    options: [
      'Let the most senior designer decide based on personal preference',
      'Build both versions and launch whichever the client CEO prefers',
      'Use AI to analyze session recordings from competitor travel sites, cluster user search behavior patterns, and quantify which interaction model correlates with higher engagement and conversion',
      'Flip a coin - both approaches are equally valid'
    ],
    correct: 2,
    explanation: 'AI can process hundreds of competitor session recordings to cluster behavioral patterns - identifying whether users in this category tend toward geographic exploration (favoring maps) or attribute filtering (favoring lists) - providing data-backed confidence for the design direction.'
  },

  // P4 - Ethics & Risk Awareness (ids 12-14)
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Ethics & Risk Awareness',
    question: 'A designer on your team uses an AI image generator to create hero visuals for a health/wellness Shopify store. Which risk is most critical to address before client delivery?',
    options: [
      'The images might load slowly on mobile devices',
      'AI-generated images may contain subtle anatomical inaccuracies, skin-tone biases, or resemble real individuals - creating legal liability and brand trust issues for a health brand',
      'The client might not like the color palette the AI chose',
      'AI-generated images always have watermarks that cannot be removed'
    ],
    correct: 1,
    explanation: 'AI image generators can produce body and face outputs with anatomical errors, biased skin-tone representation, or likenesses resembling real people - all of which carry legal and brand reputation risk, especially for health/wellness brands where body imagery is scrutinized.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Ethics & Risk Awareness',
    question: 'Your team wants to use AI to personalize a B2B wholesale portal experience based on buyer behavior. Which ethical boundary must be established before implementation?',
    options: [
      'Ensuring the AI only uses colors the client approves',
      'Making sure the portal works in Internet Explorer',
      'Defining what behavioral data is collected, ensuring GDPR/data-privacy compliance, and giving buyers transparent control over how their browsing patterns influence the UI they see',
      'Ensuring the AI never suggests products from competitors'
    ],
    correct: 2,
    explanation: 'Behavioral personalization collects user data to alter their experience - without transparent consent mechanisms and GDPR compliance, this creates legal exposure and erodes buyer trust, especially in B2B contexts where procurement teams scrutinize vendor data practices.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Ethics & Risk Awareness',
    question: 'A junior designer submits a client prototype where 80% of the UI copy was generated by AI. During review you notice the copy includes fabricated product certifications and a fake customer testimonial. What is the correct response?',
    options: [
      'Approve it - AI-generated copy is always accurate enough for production',
      'Flag both issues immediately; establish a team policy requiring human fact-checking of all AI-generated claims, certifications, and social proof before any client-facing use',
      'Delete only the fake testimonial but keep the certifications since they sound convincing',
      'Replace the AI copy with lorem ipsum and ship the prototype'
    ],
    correct: 1,
    explanation: 'AI language models hallucinate factual claims - fabricated certifications and fake testimonials create legal liability (false advertising) and destroy client trust. A mandatory human verification step for all AI-generated factual claims must be standard team policy.'
  },

  // P5 - Strategic Mindset (ids 15-17)
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'As AI design tools become capable of generating full Shopify page layouts from prompts, how should a senior UI/UX designer strategically reposition their value?',
    options: [
      'Learn to write better AI prompts and stop doing manual design entirely',
      'Refuse to use AI tools to protect traditional design skills',
      'Shift focus toward strategic UX thinking - user research synthesis, conversion architecture, brand storytelling, and design system governance - using AI to accelerate execution while owning the decisions AI cannot make',
      'Transition to a completely different career outside design'
    ],
    correct: 2,
    explanation: 'AI will increasingly handle layout generation and visual execution. Designers who anchor their value in strategic UX judgment - research synthesis, conversion-driven architecture, brand narrative, and system governance - become more valuable, not less, by using AI to amplify their output.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'A client asks your team to "just use AI to design the whole site." What is the most strategically sound response?',
    options: [
      'Agree and use AI to generate the entire site with no designer involvement',
      'Refuse to use AI at all and insist on fully manual design processes',
      'Explain that AI accelerates specific stages (wireframing, copy drafts, asset generation) but that brand-aligned design decisions, UX strategy, and conversion optimization require experienced human judgment - then demonstrate the blended workflow',
      'Quote a lower price since AI does all the work'
    ],
    correct: 2,
    explanation: 'Positioning AI as an accelerator within a human-led design process protects both quality and perceived value - clients understand they are paying for strategic judgment and brand-specific expertise, with AI making the team faster, not replacing it.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'Your agency is pitching a large Shopify Plus migration. How should the UI/UX team strategically incorporate AI into the proposal to strengthen the pitch?',
    options: [
      'Promise AI will cut the design timeline by 90% to undercut competitor pricing',
      'Do not mention AI at all to avoid client concerns about quality',
      'Position AI-assisted UX auditing and rapid prototyping as a competitive advantage that delivers deeper user insights during discovery and faster iteration during design - while emphasizing that senior designers own all strategic decisions',
      'Offer to let the client use AI tools themselves instead of hiring the design team'
    ],
    correct: 2,
    explanation: 'Framing AI as a capability multiplier - deeper insights, faster iteration - strengthens the pitch without undermining perceived design value. Emphasizing senior designer ownership of decisions reassures enterprise clients that quality and accountability remain human-led.'
  },

  // P6 - Adaptability & Learning (ids 18-20)
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'Adaptability & Learning',
    question: 'A new AI-powered Figma plugin claims to auto-generate accessible color palettes and WCAG-compliant contrast ratios. What is the best approach for a design team evaluating adoption?',
    options: [
      'Install it immediately on all team accounts and trust the output without verification',
      'Ignore it - accessibility compliance should only be handled manually',
      'Run a controlled pilot: have two designers test it on a current project, compare its output against manual WCAG checks, evaluate accuracy and time savings, then create team guidelines for when to trust vs. manually verify its recommendations',
      'Wait two years until the plugin has more reviews before considering it'
    ],
    correct: 2,
    explanation: 'A controlled pilot balances speed of adoption with risk management - testing against known manual benchmarks reveals accuracy gaps, and the pilot produces team-specific guidelines rather than blind trust or blanket rejection.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'Adaptability & Learning',
    question: 'AI prototyping tools now allow designers to create interactive prototypes from static wireframes in minutes. How should a team build this capability without disrupting active client projects?',
    options: [
      'Immediately switch all active projects to the new AI tool regardless of deadlines',
      'Allocate dedicated learning sprints where designers practice on internal or past projects, build a shared playbook of best practices, then gradually introduce the tool on new projects starting with low-risk deliverables',
      'Assign only the most junior designer to learn it and report back in six months',
      'Wait until a competitor proves the tool works before investing any learning time'
    ],
    correct: 1,
    explanation: 'Dedicated learning sprints on non-client work build team competence without risking active deliverables. A shared playbook standardizes best practices, and gradual rollout on low-risk projects lets the team build confidence before applying the tool to high-stakes work.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'Adaptability & Learning',
    question: 'Over the next 12 months, which learning investment would most future-proof a UI/UX designer working at a Shopify-focused agency?',
    options: [
      'Mastering 3D animation software exclusively',
      'Learning only basic prompt engineering for image generation tools',
      'Building deep competency in AI-assisted user research analysis, prompt-driven design systems, and AI-to-code handoff workflows - while strengthening core UX strategy and conversion design skills that AI cannot replicate',
      'Focusing entirely on learning backend programming languages'
    ],
    correct: 2,
    explanation: 'The highest-leverage learning path combines AI-specific skills (research analysis, prompt-driven systems, AI-to-code handoff) with deepening the strategic UX and conversion design expertise that remains uniquely human - creating a designer who is both AI-fluent and strategically indispensable.'
  }
];

export default questionsUiuxDesigner;
