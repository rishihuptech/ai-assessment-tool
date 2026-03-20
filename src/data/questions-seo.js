const questionsSEO = [
  // ── P1: Tool Awareness (ids 1-3) ──
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which AI feature in Ahrefs or SEMrush can auto-generate keyword clusters from a seed list, reducing hours of manual grouping?',
    options: [
      'Keyword Clustering / Keyword Grouping tool',
      'Backlink Gap Analyzer',
      'Site Audit Crawler',
      'Rank Tracking Dashboard'
    ],
    correct: 0,
    explanation: 'Both Ahrefs and SEMrush offer AI-powered keyword clustering that automatically groups hundreds of keywords by search intent and topical relevance - a task that used to take hours manually in spreadsheets.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to audit 12 Shopify client sites monthly for technical SEO issues. Which AI-enhanced workflow would deliver the most time savings?',
    options: [
      'Running Screaming Frog manually on each site and reviewing every tab',
      'Using Screaming Frog\'s API mode with scheduled crawls feeding into a templated Looker Studio dashboard that flags anomalies automatically',
      'Checking Google Search Console coverage reports one by one',
      'Asking ChatGPT to guess what technical issues each site might have'
    ],
    correct: 1,
    explanation: 'Automating crawls via Screaming Frog API with scheduled runs and piping data into dashboards with anomaly detection removes repetitive manual work while maintaining audit quality across all 12 clients.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Google Search Console now surfaces regex-based filters and performance insights. What is the most advanced AI-adjacent use of GSC data for an SEO team?',
    options: [
      'Exporting CSVs and manually scanning for drops',
      'Connecting GSC to BigQuery via the API and running anomaly detection queries on CTR and position shifts across thousands of queries',
      'Checking the top 10 queries tab weekly',
      'Using GSC only to submit sitemaps'
    ],
    correct: 1,
    explanation: 'The GSC-to-BigQuery pipeline allows SEO teams to run SQL-based anomaly detection at scale - catching CTR drops, cannibalization patterns, and ranking volatility that the standard GSC interface cannot surface efficiently.'
  },

  // ── P2: Workflow Automation (ids 4-7) ──
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Your team manually builds monthly SEO reports by pulling data from GA4, GSC, Ahrefs, and rank trackers into Google Slides. What is the highest-leverage automation?',
    options: [
      'Hire a third person to do it faster',
      'Build a Looker Studio dashboard with blended data sources, add AI-generated narrative summaries via a GPT API integration, and auto-email clients on the 1st of each month',
      'Switch from Google Slides to PowerPoint',
      'Only report quarterly instead of monthly'
    ],
    correct: 1,
    explanation: 'Connecting all data sources into Looker Studio with automated narrative generation eliminates 6-8 hours of manual reporting per client per month. The AI-generated summaries translate raw data into client-friendly insights without manual writing.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Which task in a typical SEO workflow is the easiest to automate with AI right now?',
    options: [
      'Negotiating backlink placements with site owners',
      'Generating meta title and description variations at scale using AI with brand guidelines as context',
      'Deciding overall SEO strategy for a new client',
      'Building personal relationships with journalists for PR links'
    ],
    correct: 1,
    explanation: 'Meta title and description generation is a structured, repeatable task with clear inputs (keyword, page content, brand tone) and outputs (character-limited text). AI handles this extremely well, freeing the team for higher-value strategic work.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'Harsh wants to automate internal linking recommendations for a 2,000-page Shopify store. What is the most effective AI-powered approach?',
    options: [
      'Manually review every page and add links by gut feel',
      'Use a tool like Link Whisper or build a custom script that uses NLP embeddings to identify semantically related pages and suggest contextual internal links with anchor text',
      'Add a "Related Products" section only on product pages',
      'Link every page to the homepage'
    ],
    correct: 1,
    explanation: 'NLP-based internal linking tools analyze page content at scale, identify semantic relationships, and suggest contextual links with relevant anchor text - something impossible to do manually across 2,000 pages while maintaining quality.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'A client\'s Shopify blog has 150 posts. Many have thin content, duplicate intent, and outdated information. What AI-automated workflow identifies which posts to merge, update, or prune?',
    options: [
      'Read all 150 posts manually and make a spreadsheet',
      'Use a content audit tool or custom GPT workflow that pulls all URLs, clusters them by intent via embeddings, flags thin content by word count + engagement metrics from GA4, and outputs a prune/merge/update decision matrix',
      'Delete all posts older than 2 years',
      'Just write 150 new posts instead'
    ],
    correct: 1,
    explanation: 'An AI-driven content audit pipeline combines crawl data, intent clustering, and engagement metrics to produce an actionable decision matrix in hours rather than the days it would take to review 150 posts manually.'
  },

  // ── P3: Content & Output Quality (ids 8-11) ──
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'When using ChatGPT to draft SEO content for a client\'s product category page, what is the biggest risk to output quality?',
    options: [
      'The content will be too short',
      'AI may generate generic, non-differentiated content that lacks E-E-A-T signals, real product knowledge, and brand voice - resulting in content that Google devalues or that reads identically to competitors',
      'ChatGPT cannot write in English',
      'Google will automatically penalize any AI-generated content'
    ],
    correct: 1,
    explanation: 'The primary risk is not penalization but mediocrity. AI-generated content without proper prompting, brand context, and human expertise layering produces generic copy that fails to demonstrate Experience, Expertise, Authority, and Trust - the signals Google increasingly prioritizes.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You are using AI to generate schema markup (JSON-LD) for a client\'s Shopify product pages. What validation step is non-negotiable before deployment?',
    options: [
      'No validation needed - AI always generates valid schema',
      'Testing the output in Google\'s Rich Results Test and Schema Markup Validator, cross-referencing with the actual page data to ensure no hallucinated values (fake prices, ratings, or availability) are present',
      'Just checking if the JSON syntax is valid',
      'Asking ChatGPT if the schema looks correct'
    ],
    correct: 1,
    explanation: 'AI can hallucinate product prices, fabricate review counts, or generate schema types that do not match the actual page content. Validating with Google\'s tools and cross-referencing with real data prevents rich result penalties and manual actions.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'What is the simplest way to improve AI-generated SEO content quality before delivering it to a client?',
    options: [
      'Add the client\'s brand voice guidelines, target keywords, competitor examples, and specific product details into the AI prompt as context',
      'Use the AI output exactly as generated without any changes',
      'Run it through 5 different AI tools and pick the longest output',
      'Translate it into another language and back to make it unique'
    ],
    correct: 0,
    explanation: 'Providing rich context - brand voice, keywords, competitor benchmarks, and real product information - in the prompt dramatically improves relevance and quality. This is the foundation of effective AI content workflows.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'A client in the health supplement niche asks you to use AI to write blog content. Under Google\'s E-E-A-T guidelines for YMYL topics, what is the correct approach?',
    options: [
      'Generate everything with AI and publish directly - Google cannot tell',
      'Use AI for initial research, structure, and drafting, but have a qualified expert review, add first-person experience, cite medical sources, and attach author credentials to every published piece',
      'Avoid writing health content entirely',
      'Add a disclaimer saying "AI-generated" and publish as-is'
    ],
    correct: 1,
    explanation: 'For YMYL (Your Money or Your Life) topics, Google demands demonstrable expertise. AI can accelerate drafting, but expert review, real citations, author authority signals, and first-person experience are mandatory to rank and maintain trust.'
  },

  // ── P4: Strategic Thinking (ids 12-14) ──
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'Google\'s AI Overviews (SGE) are reducing click-through rates for informational queries. As an SEO strategist, what is the most forward-thinking response?',
    options: [
      'Stop doing SEO because Google is dead',
      'Shift content strategy toward bottom-of-funnel transactional and comparison queries where AI Overviews are less prevalent, optimize for featured snippet capture to feed AI Overviews, and build brand search demand through other channels',
      'Only focus on paid ads from now on',
      'Write longer blog posts to outrank AI Overviews'
    ],
    correct: 1,
    explanation: 'Strategic SEO teams are pivoting toward transactional intent where clicks still flow, optimizing structured content to be sourced by AI Overviews (maintaining visibility), and building brand demand so users search directly - a multi-layered response to the changing SERP landscape.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'A Shopify client currently gets 70% of organic traffic from 15 blog posts. AI tools now make it easy for competitors to replicate similar content. What strategic moat should you build?',
    options: [
      'Write more blog posts faster using AI',
      'Build programmatic SEO pages at scale using the client\'s proprietary data (customer reviews, product comparisons, regional pricing), create interactive tools, and develop topical authority through expert-led content that AI cannot easily replicate',
      'Block competitors from viewing the site',
      'Move all content behind a paywall'
    ],
    correct: 1,
    explanation: 'Proprietary data, interactive tools, and genuine expert content create defensible SEO moats. When AI makes generic content abundant, unique data assets and real expertise become the differentiators that competitors cannot copy with a prompt.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'With a 2-person SEO team handling multiple clients, how should AI strategically change the service delivery model?',
    options: [
      'Replace one team member with AI to cut costs',
      'Use AI to automate 60-70% of execution tasks (reporting, audits, keyword research, content drafts), enabling the team to take on more clients while repositioning as strategic advisors who focus on interpretation, client communication, and growth planning',
      'Keep doing everything manually to maintain quality',
      'Only use AI for writing blog posts'
    ],
    correct: 1,
    explanation: 'AI should expand the team\'s capacity and elevate their role - not replace headcount. Automating execution work lets a 2-person team handle the workload of 4-5, while the human value shifts to strategy, client relationships, and decision-making that AI cannot own.'
  },

  // ── P5: Risk & Ethics (ids 15-17) ──
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'Your team uses AI to generate 50 city-specific landing pages for a client\'s local SEO. Google\'s Spam Policies flag "auto-generated content" as a violation. When does this cross the line?',
    options: [
      'It is always a violation regardless of quality',
      'It crosses the line when the pages are nearly identical templates with only city names swapped, lack unique local value, and exist purely to manipulate rankings - but well-researched, locally-relevant pages with unique content per location are acceptable even if AI-assisted',
      'AI content is never a spam violation',
      'Only if Google manually reviews the site'
    ],
    correct: 1,
    explanation: 'Google\'s policy targets manipulative, low-value scaled content - not AI-assisted content per se. The differentiator is whether each page provides genuine unique value to users. Thin template pages with swapped city names are spam; AI-drafted pages with real local data and unique insights are not.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'A client asks you to use AI to mass-generate fake product reviews for their Shopify store to boost SEO. What is the correct response?',
    options: [
      'Do it but make them sound natural',
      'Refuse - fake reviews violate Google\'s policies, FTC guidelines, and platform terms of service. Instead, propose an AI-powered review collection workflow that automates post-purchase emails requesting genuine reviews',
      'Generate them but add a disclaimer',
      'Only generate 5-star reviews to avoid suspicion'
    ],
    correct: 1,
    explanation: 'Fake reviews are illegal under FTC regulations, violate Google and Shopify policies, and can result in penalties, delistings, and legal action. The ethical and effective alternative is automating legitimate review collection at scale.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'You discover that an AI content tool your team uses sends all client website data and keywords to a third-party server for processing. What is the risk and appropriate action?',
    options: [
      'No risk - all AI tools are secure',
      'This is a client data confidentiality risk. Review the tool\'s data processing agreement, check if it violates your client contracts\' NDAs, assess whether competitor-sensitive keyword strategies are being exposed, and switch to a tool with enterprise-grade data handling or self-hosted alternatives',
      'Ignore it - clients never check',
      'Only use the tool for smaller clients'
    ],
    correct: 1,
    explanation: 'Client keyword strategies and site data are competitively sensitive. Sending them to unvetted third-party servers can violate NDAs and expose strategic intelligence. The team must audit tool data practices and ensure compliance with client agreements.'
  },

  // ── P6:Tic Adoption & Culture (ids 18-20) ──
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Harsh wants to build an AI-first SEO workflow but the team resists because they believe AI content does not rank. How should he address this?',
    options: [
      'Force the team to use AI for everything immediately',
      'Run a controlled test: pick 5 existing underperforming pages, optimize them using an AI-assisted workflow (research, drafting, human refinement), track rankings and traffic over 60 days, and share results to demonstrate the impact with evidence rather than arguments',
      'Agree with the team and abandon AI adoption',
      'Show them articles about AI from LinkedIn'
    ],
    correct: 1,
    explanation: 'Resistance based on assumptions is best overcome with internal proof. A controlled A/B-style test on real client pages generates team-specific evidence, builds confidence through results, and creates a replicable process the team helped develop.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'The SEO team currently spends 40% of their time on repetitive tasks (pulling rank data, formatting reports, writing alt text). What adoption strategy makes AI stick long-term?',
    options: [
      'Buy every AI tool available and hope the team figures it out',
      'Identify the top 5 time-draining repetitive tasks, build or configure AI automations for each one with clear SOPs, measure time saved weekly, and reinvest saved hours into strategic client work that the team finds more rewarding',
      'Ban all manual processes immediately',
      'Wait until AI tools become easier to use'
    ],
    correct: 1,
    explanation: 'Sustainable AI adoption targets specific pain points with measurable time savings and reinvests those hours into higher-value work. When team members see their workload improve and their role elevate, adoption becomes self-reinforcing rather than top-down enforcement.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'To scale the SEO team\'s output with AI, what knowledge management system should be built first?',
    options: [
      'A shared Google Drive with random files',
      'A prompt library organized by task type (keyword research, content briefs, technical audits, meta tags, reporting narratives) with version-controlled prompts that include client-specific brand voice, industry context, and quality benchmarks - accessible to the whole team',
      'Each person keeps their own prompts privately',
      'No documentation needed - just use ChatGPT directly each time'
    ],
    correct: 1,
    explanation: 'A structured, shared prompt library ensures consistent output quality across team members, prevents knowledge silos, enables faster onboarding, and allows iterative improvement of prompts based on results - the foundation of a scalable AI-first SEO operation.'
  }
];

export default questionsSEO;
