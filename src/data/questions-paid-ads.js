const questionsPaidAds = [
  // ── P1: Tool Awareness (ids 1-3) ──────────────────────────────────
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which AI-powered feature inside Google Ads automatically adjusts bids in real time based on the likelihood of a conversion?',
    options: [
      'Manual CPC bidding',
      'Smart Bidding (e.g., Target ROAS, Maximize Conversions)',
      'Ad scheduling multipliers',
      'Keyword insertion macros'
    ],
    correct: 1,
    explanation: 'Smart Bidding is Google\'s umbrella term for AI-driven bid strategies - Target ROAS, Target CPA, Maximize Conversions, and Maximize Conversion Value - all of which use machine learning signals at auction time to set optimal bids.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Meta\'s Advantage+ Shopping Campaigns use AI to automate which combination of campaign elements?',
    options: [
      'Only ad placements across Facebook and Instagram',
      'Creative selection, audience targeting, placement, and budget allocation simultaneously',
      'Only lookalike audience creation from seed lists',
      'Only A/B testing of landing pages post-click'
    ],
    correct: 1,
    explanation: 'Advantage+ Shopping Campaigns consolidate creative, targeting, placement, and budget decisions into a single AI-managed campaign - reducing the need for multiple ad sets and manual audience segmentation.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'A Shopify store runs Google Shopping ads. Which AI tool can automatically generate optimized product titles, descriptions, and attributes from a raw Merchant Center feed?',
    options: [
      'Google Trends dashboard',
      'Feedonomics / DataFeedWatch with AI enrichment features',
      'Google Search Console performance reports',
      'Shopify Flow automation builder'
    ],
    correct: 1,
    explanation: 'Feed management platforms like Feedonomics and DataFeedWatch use AI to rewrite product titles with high-intent keywords, fill missing attributes, and optimize feed data - directly improving Shopping ad relevance and impression share.'
  },

  // ── P2: Workflow Integration (ids 4-7) ─────────────────────────────
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'You manage Google Ads for 6 Shopify clients. How should you integrate AI to scale weekly search term analysis across all accounts?',
    options: [
      'Manually review the search terms report in each account every Monday',
      'Use a script or tool like ChatGPT/Claude with exported search term CSVs to bulk-classify intent, flag negatives, and surface new keyword opportunities',
      'Rely entirely on Google\'s auto-applied recommendations without review',
      'Only check search terms when ROAS drops below target'
    ],
    correct: 1,
    explanation: 'Exporting search term data and running it through an LLM lets you classify intent (branded, competitor, informational, transactional), flag irrelevant queries for negatives, and discover high-potential terms across all accounts in minutes instead of hours.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'Which is the most practical first step for integrating AI into your existing paid ads reporting workflow?',
    options: [
      'Replace all dashboards with a custom-built AI reporting tool from scratch',
      'Use an AI assistant (e.g., ChatGPT) to auto-generate client-ready performance summaries from exported campaign data',
      'Stop sending reports and let clients check the ad platform directly',
      'Wait until Google Ads builds a native AI reporting feature'
    ],
    correct: 1,
    explanation: 'The fastest workflow win is feeding exported performance data into an LLM to generate narrative summaries, highlight anomalies, and draft recommendations - saving hours of manual reporting while maintaining quality.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'A client\'s Meta remarketing campaign has 40+ ad variations. How should AI fit into the creative refresh workflow?',
    options: [
      'Let all 40 ads run indefinitely and let Meta\'s algorithm sort winners',
      'Use AI to analyze fatigue signals (rising frequency, declining CTR), auto-generate replacement copy/hooks, and flag underperformers for creative rotation',
      'Pause all ads every 2 weeks and start fresh regardless of performance',
      'Only create new ads when the client requests them'
    ],
    correct: 1,
    explanation: 'AI should monitor fatigue indicators (frequency, CTR decay, CPM spikes), generate fresh copy variations from winning angles, and trigger rotation - turning creative management from reactive to systematic.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Workflow Integration',
    question: 'You need to build audience segments for a Shopify jewellery brand running Meta Ads. Which AI-integrated workflow produces the most qualified audiences?',
    options: [
      'Only use broad targeting and let Meta figure it out',
      'Combine Shopify customer data (LTV, AOV, purchase frequency) with AI clustering to create seed audiences, then layer Meta\'s Advantage+ optimization on top',
      'Manually pick interest-based audiences from Facebook\'s category list',
      'Duplicate competitor ad targeting using a spy tool without any customization'
    ],
    correct: 1,
    explanation: 'AI clustering on first-party Shopify data (RFM segmentation) creates high-quality seed audiences. When fed into Meta as custom audiences for lookalikes with Advantage+ layered on top, it combines data quality with algorithmic reach.'
  },

  // ── P3: Prompt & Output Skills (ids 8-11) ──────────────────────────
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Prompt & Output Skills',
    question: 'You want ChatGPT to write Google Responsive Search Ad copy for a Shopify health supplement store. Which prompt approach yields the best output?',
    options: [
      '"Write some Google Ads for my supplement store"',
      '"Act as a Google Ads specialist. Write 15 headlines (max 30 chars) and 4 descriptions (max 90 chars) for a Shopify store selling organic ashwagandha. Target audience: health-conscious women 25-45. USPs: clinically tested, 90-day supply, free shipping over $50. Tone: confident, benefit-led. Include at least 3 headlines with a CTA."',
      '"Generate ad headlines for supplements"',
      '"Make ads that convert well"'
    ],
    correct: 1,
    explanation: 'High-quality ad copy prompts must include: role assignment, character limits (platform constraints), specific product details, audience definition, USPs, tone direction, and structural requirements. Vague prompts produce generic, unusable output.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Prompt & Output Skills',
    question: 'An AI tool generates Meta ad primary text that reads: "Our product is really great and you should totally buy it because it\'s amazing." What is the most critical issue with this output?',
    options: [
      'It is too short for a Meta primary text',
      'It lacks specificity - no concrete benefit, no proof point, no audience relevance, and no hook to stop the scroll',
      'It uses the word "amazing" which Meta disapproves',
      'It should be written entirely in uppercase for visibility'
    ],
    correct: 1,
    explanation: 'AI output without specificity fails in paid media. Effective ad copy requires a hook, a concrete benefit or proof point, audience-relevant language, and a clear CTA. A skilled operator recognises weak AI output and refines the prompt.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Prompt & Output Skills',
    question: 'When using AI to generate ad copy variations for A/B testing, what is the best practice for structuring your request?',
    options: [
      'Ask for one perfect ad and run it without testing',
      'Request multiple variations that each isolate one variable (hook, CTA, social proof, urgency) while keeping other elements consistent',
      'Ask AI to make each variation as different as possible with no common thread',
      'Generate 50 variations and pick randomly'
    ],
    correct: 1,
    explanation: 'Effective A/B testing requires isolating variables. Prompting AI to vary one element at a time (e.g., same body copy but different hooks) produces test-ready creative that yields statistically meaningful learnings.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Prompt & Output Skills',
    question: 'You prompt an AI to analyze a Google Ads account and it responds with: "Your campaigns look fine, consider increasing budget." How should a skilled ads operator handle this?',
    options: [
      'Accept the recommendation and increase budget immediately',
      'Reject the output as too vague, re-prompt with specific data (CTR by ad group, quality scores, search impression share, conversion rates by device/geo) and ask for segment-level diagnosis',
      'Forward the AI\'s response directly to the client',
      'Conclude that AI is not useful for ads analysis'
    ],
    correct: 1,
    explanation: 'Generic AI output indicates a weak prompt or insufficient data input. A skilled operator feeds granular performance data and asks for segment-specific analysis - not vague overviews - to extract actionable insights.'
  },

  // ── P4: Critical Evaluation (ids 12-14) ────────────────────────────
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Evaluation',
    question: 'Google Ads\' AI recommends adding 200 broad match keywords from auto-suggestions to a tightly structured Shopify brand campaign. What is the correct evaluation?',
    options: [
      'Apply all recommendations - Google\'s AI knows best',
      'Critically evaluate: bulk broad match additions can dilute targeting, inflate spend on irrelevant queries, and cannibalize existing exact/phrase match structure - review each suggestion against actual search intent data before applying',
      'Ignore all Google recommendations permanently',
      'Apply them but reduce the daily budget to compensate'
    ],
    correct: 1,
    explanation: 'Google\'s auto-recommendations optimize for Google\'s revenue, not your client\'s ROAS. Broad match expansion without negative keyword governance can destroy account structure. Critical evaluation means cross-referencing recommendations against search term reports and conversion data.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Evaluation',
    question: 'An AI audience research tool suggests targeting "people interested in luxury watches" for a Shopify store selling $25 fashion watches. What is the critical flaw?',
    options: [
      'The audience is too small to be useful',
      'The interest category implies high-income luxury buyers whose purchase intent and price expectations are fundamentally misaligned with a $25 product - AI-suggested audiences must be validated against actual product-market fit',
      'Luxury watch enthusiasts also buy affordable watches, so the targeting is fine',
      'The only issue is that Meta charges more for luxury audiences'
    ],
    correct: 1,
    explanation: 'AI tools suggest audiences based on semantic similarity, not purchase behavior alignment. A "luxury watches" audience expects $500+ products - showing them $25 watches wastes ad spend. Critical evaluation requires matching audience intent to actual product positioning and price point.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Evaluation',
    question: 'Your AI bid management tool reports a 6x ROAS on a Google Shopping campaign, but the client says actual revenue doesn\'t match. What is the most likely AI/tracking issue to investigate first?',
    options: [
      'The AI tool must be correct - tell the client to recheck their bank statements',
      'Investigate attribution discrepancies: check for duplicate conversion tracking, overly long attribution windows, cross-device inflation, and whether the AI tool is counting view-through or assisted conversions as direct conversions',
      'The issue is always ad fraud, so install fraud detection immediately',
      'Ignore the discrepancy - platform-reported ROAS is the industry standard'
    ],
    correct: 1,
    explanation: 'AI-reported ROAS often inflates due to attribution model differences, duplicate conversion tags, view-through attribution, and cross-device assumptions. A critical evaluator audits the tracking setup and compares platform data against actual Shopify revenue before trusting AI metrics.'
  },

  // ── P5: Strategic Mindset (ids 15-17) ──────────────────────────────
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'A Shopify DTC brand asks you to "just run some ads." Strategically, what AI-first approach creates the most long-term value?',
    options: [
      'Launch campaigns immediately with broad targeting to start collecting data',
      'Propose an AI-powered audit-first engagement: analyze existing data (Shopify analytics, past ad accounts, customer segments) with AI tools to build a data-backed media strategy before spending any ad budget',
      'Suggest they try running ads themselves using Meta\'s automated tools',
      'Start with the maximum budget to generate results quickly'
    ],
    correct: 1,
    explanation: 'An AI-first strategist uses tools to rapidly audit existing performance data, identify high-value customer segments, and build a media plan grounded in evidence - before spending a dollar. This positions you as a strategic advisor, not a button-pusher.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'Which metric is most important when evaluating whether AI-driven bid automation is actually outperforming manual bidding for a Shopify client?',
    options: [
      'Click-through rate alone',
      'Blended ROAS or cost-per-acquisition measured against the same time period, audience, and budget - controlling for variables to make a valid comparison',
      'Total impressions served',
      'Number of keywords in the campaign'
    ],
    correct: 1,
    explanation: 'Comparing AI vs. manual bidding requires controlled conditions - same budget, same audience, same time period. The meaningful metric is the business outcome (ROAS or CPA), not vanity metrics like impressions or clicks.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Strategic Mindset',
    question: 'A client running Shopify Plus wants to scale from $10K to $50K/month ad spend across Google and Meta. What AI-first scaling strategy minimizes wasted spend?',
    options: [
      'Multiply all campaign budgets by 5x on the same day',
      'Use AI to identify highest-LTV customer segments from Shopify data, prioritize budget allocation to proven ROAS-positive campaigns, incrementally scale with AI monitoring for diminishing returns, and expand to new audiences only after exhausting high-intent segments',
      'Launch on 5 new ad platforms simultaneously to diversify',
      'Increase budgets only on weekends when competition is lower'
    ],
    correct: 1,
    explanation: 'Scaling intelligently means using AI to rank segment profitability, allocate budget to proven winners first, monitor marginal ROAS as spend increases, and only expand to prospecting audiences once high-intent demand is captured. Sudden 5x jumps trigger algorithmic instability and wasted spend.'
  },

  // ── P6: Future Readiness (ids 18-20) ───────────────────────────────
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'Future Readiness',
    question: 'Google is deprecating third-party cookies and increasing reliance on AI-modeled conversions. How should a paid ads specialist prepare?',
    options: [
      'No preparation needed - Google will handle everything automatically',
      'Build a first-party data strategy now: implement server-side tracking (Google Enhanced Conversions, Meta CAPI), enrich CRM data for audience building, and develop consent-based data collection - because AI models are only as good as the signal they receive',
      'Switch entirely to SEO and abandon paid ads',
      'Stockpile third-party cookie data before the deadline'
    ],
    correct: 1,
    explanation: 'Post-cookie AI bidding depends on first-party signal quality. Specialists who implement server-side tracking, Enhanced Conversions, and CAPI now will have stronger data foundations for AI optimization - those who don\'t will see campaign performance degrade as AI models lose signal.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'Future Readiness',
    question: 'AI-generated ad creative (images, video, copy) is becoming production-ready. How does this change the paid ads specialist\'s role in the next 2 years?',
    options: [
      'Ad specialists will become obsolete since AI handles everything',
      'The role shifts from creative production to creative strategy and AI orchestration - specialists will direct AI tools with brand guidelines, test frameworks, and performance data to produce high-volume, on-brand creative variations at a pace humans alone cannot match',
      'Nothing changes - clients will always prefer fully human-made ads',
      'Specialists should refuse to use AI creative to protect job security'
    ],
    correct: 1,
    explanation: 'AI creative tools make production cheaper and faster, but strategic direction - which hooks to test, which audiences need which messaging, how to maintain brand consistency at scale - becomes the high-value skill. The specialist becomes a creative strategist and AI operator, not a copywriter.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'Future Readiness',
    question: 'Predictive AI models can now forecast campaign performance before launch using historical data. How should this capability reshape the paid ads planning process?',
    options: [
      'It has no practical impact - forecasts are never accurate',
      'Use predictive models to simulate budget scenarios, estimate ROAS at different spend levels, and identify likely diminishing return thresholds - turning media planning from guesswork into data-backed projections that improve client confidence and reduce wasted test spend',
      'Replace all testing with AI predictions and never run actual experiments',
      'Only use predictions for annual planning, not monthly campaigns'
    ],
    correct: 1,
    explanation: 'Predictive AI doesn\'t replace testing but dramatically improves planning. Running simulations before committing budget lets you set realistic client expectations, allocate spend more efficiently, and identify the point of diminishing returns before you hit it - a major competitive advantage.'
  }
];

export default questionsPaidAds;
