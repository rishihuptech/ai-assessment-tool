const questionsWordpressDev = [
  // ── P1: Tool Awareness (ids 1-3) ──────────────────────────────────
  {
    id: 1,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'Which AI tool can generate a fully functional WordPress child theme scaffold - including style.css header, functions.php with enqueue hooks, and template overrides - from a single prompt?',
    options: [
      'ChatGPT or Claude with a detailed prompt describing the parent theme and required overrides',
      'Canva AI - it now exports WordPress theme ZIPs',
      'Google Bard only, because it has direct WordPress API access',
      'Yoast SEO\'s built-in AI theme generator',
      'I don\'t know / I want to learn'
    ],
    correct: 0,
    explanation: 'ChatGPT and Claude can both generate complete child theme scaffolds when given a clear prompt specifying the parent theme, required template files, and enqueue structure. No AI tool has direct WordPress API access for theme creation.'
  },
  {
    id: 2,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'You need to debug a white-label client\'s custom theme where Advanced Custom Fields (ACF) repeater data renders on staging but returns empty on production. Which AI-assisted workflow is most effective?',
    options: [
      'Ask ChatGPT to rewrite the entire theme from scratch using Gutenberg blocks instead',
      'Use Cursor IDE to inspect the template file, paste the ACF field group export JSON and wp_options diff into Claude, and ask it to identify environment-specific issues like object cache interference or field group sync mismatches',
      'Install an AI plugin on the production site that auto-fixes ACF issues',
      'Use GitHub Copilot autocomplete to randomly try different ACF function calls until one works',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'ACF repeater issues between environments often stem from field group sync (JSON vs database), object caching, or serialized data mismatches. Feeding the field group export and environment diffs into Claude or ChatGPT lets the AI pinpoint the root cause systematically.'
  },
  {
    id: 3,
    pillar: 'P1',
    pillarName: 'Tool Awareness',
    question: 'When using Cursor IDE for WordPress theme development, what is the most effective way to leverage its AI capabilities for writing custom WP_Query implementations?',
    options: [
      'Cursor cannot understand PHP - it only works with JavaScript frameworks',
      'Type the full query manually and use Cursor only for syntax highlighting',
      'Open the relevant template file, write a comment describing the query requirements (post type, taxonomy, meta query, pagination), and let Cursor\'s AI generate the WP_Query with proper argument structure, then review and adjust',
      'Cursor automatically detects your database schema and writes queries without any input',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Cursor\'s AI reads your file context and inline comments to generate accurate WP_Query code. Providing clear comments about post type, taxonomy filters, meta queries, and pagination requirements produces the most reliable output. You still need to review for edge cases like post status and permissions.'
  },

  // ── P2: Prompt Craft (ids 4-7) ────────────────────────────────────
  {
    id: 4,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'A white-label agency partner needs a custom WordPress theme for a law firm. Which prompt structure will produce the most production-ready theme functions.php from ChatGPT?',
    options: [
      '"Write me a WordPress theme for a lawyer website"',
      '"Act as a senior WordPress developer. Generate a functions.php for a custom theme targeting PHP 8.1+ and WordPress 6.4+. Include: theme support registration (custom-logo, post-thumbnails, html5, title-tag), two nav menu locations (primary, footer), a custom post type \'case-studies\' with taxonomy \'practice-area\', proper enqueue for styles/scripts with versioning via filemtime(), and widget areas for sidebar and footer. Follow WordPress coding standards. No plugin dependencies."',
      '"Make a functions.php with everything a law firm needs, be creative"',
      '"Generate PHP code for WordPress, include all features"',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'Effective prompts for WordPress code generation specify the PHP/WP version targets, exact features needed, coding standards to follow, and constraints (like no plugin dependencies). This eliminates ambiguity and produces code that can go into a white-label delivery with minimal revision.'
  },
  {
    id: 5,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You want Claude to convert a static HTML/CSS landing page into a WordPress page template. Which prompt approach gets the best result?',
    options: [
      '"Convert this HTML to WordPress"',
      '"Make this HTML file work in WordPress somehow"',
      'Paste the full HTML, specify the theme structure (parent theme, template hierarchy location), ask Claude to split it into get_header/get_footer calls, replace hardcoded content with ACF fields or the_content(), convert asset paths to get_template_directory_uri(), and maintain the existing CSS class structure',
      'Ask Claude to install a plugin that imports HTML files automatically',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Providing the actual HTML plus specific WordPress conversion instructions - template hierarchy placement, dynamic content strategy (ACF vs native), asset path conversion, and CSS preservation - gives Claude the full context needed to produce a drop-in template file.'
  },
  {
    id: 6,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'You are using AI to generate a WordPress REST API custom endpoint for a headless setup that returns filtered portfolio items. Which prompt detail is MOST critical to include for secure, performant output?',
    options: [
      'The color scheme of the portfolio items',
      'Authentication method (nonce vs application password vs JWT), permission_callback implementation, sanitization of query parameters with sanitize_text_field/absint, and response schema using rest_ensure_response()',
      'Which AI tool the agency partner prefers you use',
      'The hosting provider\'s name so the AI can optimize for their servers',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'Security and data handling are the most critical details for REST API endpoint generation. Specifying authentication, permission callbacks, input sanitization functions, and response formatting ensures the AI produces code that passes security review rather than generating a functional but vulnerable endpoint.'
  },
  {
    id: 7,
    pillar: 'P2',
    pillarName: 'Prompt Craft',
    question: 'An AI-generated WordPress template includes inline styles, no escaping on output, and uses query_posts() instead of WP_Query. What is the best prompt to fix all issues at once?',
    options: [
      '"Fix the bugs in this code"',
      '"Refactor this WordPress template to meet WordPress VIP coding standards: replace query_posts() with a new WP_Query instance and wp_reset_postdata(), move all inline styles to the enqueued stylesheet, apply esc_html() / esc_attr() / esc_url() / wp_kses_post() to every output based on context, and replace any direct $_GET/$_POST access with sanitized equivalents. Return the corrected template and a summary of every change."',
      '"Run WordPress coding standards check on this"',
      '"Make it follow best practices" with no further detail',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'Listing each specific violation and its correct replacement (query_posts to WP_Query, inline styles to enqueued CSS, context-appropriate escaping functions) gives the AI a clear checklist. Requesting a change summary ensures nothing is silently modified or missed.'
  },

  // ── P3: Workflow Integration (ids 8-11) ───────────────────────────
  {
    id: 8,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your team receives a PSD/Figma design for a 12-page static WordPress site from a white-label partner. How should AI be integrated into the development workflow?',
    options: [
      'Use AI to auto-generate the entire theme from a screenshot of the design with no review',
      'Skip AI entirely - static sites are too simple to benefit from it',
      'Break the workflow into phases: use AI to generate the base theme scaffold and reusable components (header, footer, CTA blocks), use Cursor for template-by-template buildout with AI-assisted code completion, use Claude to generate ACF field group configurations from the design specs, then manually review and QA every output before client delivery',
      'Install a WordPress AI plugin that reads Figma files and builds the site automatically',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'A phased AI integration - scaffold generation, AI-assisted coding in Cursor, field configuration generation, with manual QA gates - balances speed with quality. White-label work demands pixel-perfect output, so AI accelerates each step but human review remains essential.'
  },
  {
    id: 9,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You maintain 15 white-label WordPress sites across different hosting environments. A critical WordPress core security patch drops. How do you use AI to handle the update workflow efficiently?',
    options: [
      'Let WordPress auto-update all sites and hope nothing breaks',
      'Use ChatGPT to generate a per-site update checklist script that: queries each site\'s WP version and active plugin list via WP-CLI, identifies potential conflicts with the patch changelog, creates staging backup commands, generates a rollback procedure per host, and produces a client-facing status report template - then execute updates manually per the generated plan',
      'Ask AI to directly SSH into all 15 servers and run updates simultaneously',
      'Ignore the patch until clients report issues',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'AI excels at generating structured update plans from known inputs (WP versions, plugin lists, hosting specifics). The developer retains control over execution while AI eliminates the repetitive planning work. Never let AI directly access production servers or skip staging validation.'
  },
  {
    id: 10,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'You are building a custom WordPress theme and want to use AI to speed up creating consistent template parts. What is the most practical approach?',
    options: [
      'Build the header template-part manually, then use Claude or ChatGPT to generate matching footer, sidebar, and other template parts by providing the header code as a style/structure reference along with the specific content requirements for each part',
      'Generate every template file independently with separate prompts and hope they match',
      'AI cannot help with WordPress template parts',
      'Use AI to merge all template parts into a single index.php file',
      'I don\'t know / I want to learn'
    ],
    correct: 0,
    explanation: 'Using one completed template part as a reference gives the AI a concrete style guide (naming conventions, CSS classes, HTML structure) to follow. This "reference-based generation" approach produces consistent output across template parts and dramatically reduces styling inconsistencies.'
  },
  {
    id: 11,
    pillar: 'P3',
    pillarName: 'Workflow Integration',
    question: 'Your agency uses Git-based deployments for WordPress sites. A junior developer asks how AI should fit into the Git workflow for theme development. What is the correct guidance?',
    options: [
      'AI-generated code should bypass code review since AI doesn\'t make mistakes',
      'Never commit AI-generated code to version control',
      'AI-generated code goes through the same Git workflow as human code: feature branch, code review (with a note that it was AI-assisted), automated linting via PHPCS with WordPress coding standards ruleset, staging deployment and testing, then merge to main. The commit message should indicate AI assistance for audit trail transparency.',
      'Create a separate repository for AI-generated code so it doesn\'t mix with human code',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'AI-generated code must follow identical version control processes as human-written code. Noting AI assistance in commits and PRs ensures transparency during code review. Automated linting catches standards violations regardless of code origin. The goal is quality parity, not source segregation.'
  },

  // ── P4: Critical Thinking (ids 12-14) ─────────────────────────────
  {
    id: 12,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'ChatGPT generates a WordPress custom login page that uses wp_signon() with credentials passed via GET parameters and stores the result in a cookie with no httponly or secure flags. What is your assessment?',
    options: [
      'The code works, so it is ready for production',
      'This has multiple critical security vulnerabilities: credentials in GET parameters are logged in server access logs, browser history, and referrer headers; cookies without httponly are accessible to JavaScript (XSS risk); missing secure flag allows transmission over HTTP. Reject the code entirely and re-prompt specifying POST method, wp_nonce_field verification, secure cookie handling via wp_set_auth_cookie(), and HTTPS enforcement.',
      'Just add an SSL certificate and the code becomes secure',
      'This is only a problem on shared hosting, not dedicated servers',
      'I don\'t know / I want to learn'
    ],
    correct: 1,
    explanation: 'AI-generated authentication code must be scrutinized heavily. GET-based credentials, insecure cookies, and missing nonce verification are each independently critical vulnerabilities. A WordPress developer must recognize all three and know the correct WordPress API functions (wp_set_auth_cookie, wp_nonce_field, wp_signon with POST) to replace them.'
  },
  {
    id: 13,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'Claude generates a custom Gutenberg block that uses innerHTML to render user-submitted content and stores data using meta fields with no sanitize_callback. You need this block for a white-label client site that accepts contact form submissions. How do you evaluate this?',
    options: [
      'innerHTML is the standard React approach - this is fine',
      'Add a CAPTCHA and the security issues are resolved',
      'The block has two critical flaws: innerHTML creates XSS vulnerability (should use RichText component or dangerouslySetInnerHTML with DOMPurify as a last resort for read-only content), and meta fields without sanitize_callback allow unsanitized data into the database. Re-prompt Claude specifying: use WordPress block editor components for rendering, register meta with sanitize_callback using wp_kses_post or a custom sanitizer, and validate on both save and render.',
      'This only matters if the site has user registration enabled',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Contact form data flowing into blocks without sanitization is a direct XSS and stored injection vector. WordPress provides RichText components for the block editor and sanitize_callback for meta registration specifically to prevent these issues. Both must be specified when re-prompting AI for corrected code.'
  },
  {
    id: 14,
    pillar: 'P4',
    pillarName: 'Critical Thinking',
    question: 'An AI generates a WordPress plugin that uses $wpdb->query() with direct string concatenation from $_POST data to insert custom table records. It also uses update_option() to store serialized user objects. What concerns should you raise?',
    options: [
      'Both patterns are standard WordPress development practices',
      'Only the serialized data storage is a problem; direct queries are fine',
      'The $wpdb->query() with string concatenation is SQL injection vulnerability - must use $wpdb->prepare() with placeholders. Storing serialized user objects in wp_options creates a PHP object injection risk if the data is later unserialized from untrusted input, and bloats the autoloaded options table. Use $wpdb->insert() with proper data type formatting, and store user references by ID in a custom table rather than serializing entire objects.',
      'This is safe as long as you use a security plugin like Wordfence',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'SQL injection via string concatenation and PHP object injection via unsafe unserialization are among the most dangerous WordPress vulnerabilities. $wpdb->prepare() is mandatory for parameterized queries, and serialized objects in wp_options create both security and performance problems. Security plugins cannot protect against application-level code vulnerabilities.'
  },

  // ── P5: Adaptability (ids 15-17) ──────────────────────────────────
  {
    id: 15,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'WordPress 6.5 introduces a significant change to the Block Editor API that breaks several AI-generated custom blocks your team deployed across client sites. How do you adapt?',
    options: [
      'Pin all sites to WordPress 6.4 permanently and never update',
      'Wait for the AI tools to update their training data before fixing anything',
      'Feed the WordPress 6.5 changelog and migration guide into Claude or ChatGPT along with your broken block code, ask it to identify the specific deprecated APIs and generate updated versions using the new API. Test the fixes on staging, create a migration playbook for future core updates, and update your team\'s AI prompt templates to reference the latest Block Editor API version.',
      'Rewrite all blocks from scratch without AI assistance',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Feeding current documentation into AI compensates for training data lag. The key adaptability pattern is: identify the change, provide the AI with current docs, generate fixes, validate on staging, then systematize the learning (updated prompt templates, migration playbooks) so the team handles future breaking changes faster.'
  },
  {
    id: 16,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'A white-label partner who previously only needed static WordPress sites now asks for a site with dynamic filtering, AJAX-loaded content, and a custom API integration. How do you adapt your AI-assisted workflow?',
    options: [
      'Decline the project - your team only does static sites',
      'Build it entirely without AI since dynamic sites are too complex for AI assistance',
      'Extend your existing AI workflow: use Claude to generate the REST API endpoints and AJAX handlers, use Cursor for the JavaScript/jQuery frontend logic with AI-assisted autocomplete, prompt ChatGPT with the third-party API documentation to generate the integration layer with proper error handling, and apply the same review/QA process you use for static builds',
      'Install a page builder plugin and use its built-in dynamic features instead of custom code',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Adaptability means extending your existing AI-assisted workflow to new complexity levels rather than abandoning it or avoiding the challenge. The same tools (Claude, Cursor, ChatGPT) can handle dynamic WordPress requirements when given appropriate context - API docs, data structures, and interaction specs.'
  },
  {
    id: 17,
    pillar: 'P5',
    pillarName: 'Adaptability',
    question: 'You discover that ChatGPT consistently generates WordPress code using deprecated functions (like mysql_* functions, the old Customizer API patterns, and shortcode-heavy approaches instead of blocks). How do you adapt?',
    options: [
      'Switch to a different AI tool entirely and abandon ChatGPT',
      'Accept the deprecated code since it still works',
      'Build a "WordPress coding context" preamble that you prepend to every prompt - specifying the minimum WP/PHP version, that all database operations must use $wpdb, that the Customizer is deprecated in favor of theme.json and Full Site Editing patterns, and that new UI should use block patterns instead of shortcodes. Save this as a reusable system prompt or Claude Project instruction.',
      'Report the issue to OpenAI and wait for a fix',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'Creating a reusable context preamble that enforces modern WordPress standards is the most practical adaptation. It corrects for AI training data lag without switching tools, ensures consistency across your team, and can be version-updated as WordPress evolves. This is a systems-level fix rather than a per-prompt workaround.'
  },

  // ── P6: AI-First Mindset (ids 18-20) ──────────────────────────────
  {
    id: 18,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'Your agency wants to reduce the average build time for a 10-page custom WordPress theme from 40 hours to under 20 hours. Which AI-first approach is most realistic?',
    options: [
      'Have AI generate the entire theme with zero human involvement',
      'Use AI only for writing documentation after the theme is manually built',
      'Build an AI-first pipeline: generate theme scaffold and functions.php via Claude (save ~3hrs), use Cursor for template buildout with AI code completion (save ~8hrs), generate ACF field configurations from a structured spec via ChatGPT (save ~3hrs), use AI for responsive CSS adjustments and cross-browser fixes (save ~4hrs), and allocate the remaining ~22hrs to design interpretation, QA, client-specific customization, and revisions',
      'Hire more developers instead of using AI',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'An AI-first mindset applies AI to every phase where it adds measurable value while preserving human judgment for design interpretation and quality assurance. The 50% time reduction is realistic because AI eliminates boilerplate and accelerates repetitive tasks, but creative and QA work still requires human expertise.'
  },
  {
    id: 19,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'A team member argues that using AI for WordPress development is "cheating" and produces lower quality code than writing everything manually. How does an AI-first mindset reframe this?',
    options: [
      'Agree and stop using AI tools',
      'AI code is always superior to human code - no review needed',
      'AI is a force multiplier, not a replacement. It handles boilerplate, enforces consistency (when properly prompted), and frees developer time for architecture decisions, edge case handling, and performance optimization. Code quality depends on the developer\'s ability to prompt effectively, critically review output, and integrate AI into a disciplined workflow - the same skills that make manual coding excellent.',
      'Only senior developers should be allowed to use AI',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'The AI-first mindset recognizes that AI amplifies developer capability rather than replacing it. Quality is determined by the developer\'s review process and prompt precision, not by whether AI was involved. The strongest developers use AI to eliminate low-value work and invest that time in higher-impact decisions.'
  },
  {
    id: 20,
    pillar: 'P6',
    pillarName: 'AI-First Mindset',
    question: 'You want to build a repeatable, AI-first delivery system for white-label WordPress projects so any developer on your team can deliver consistently. What is the strongest foundation?',
    options: [
      'Let each developer use AI however they prefer - standardization kills creativity',
      'Ban AI and rely on traditional coding standards documentation only',
      'Create a shared AI toolkit: a library of tested prompt templates per task type (theme setup, CPT registration, ACF configs, template parts, responsive fixes), a WordPress-specific system prompt preamble enforcing coding standards and version targets, a Cursor IDE configuration with project-level AI context rules, and a QA checklist that includes AI-specific review items (escaping, deprecated functions, hardcoded values). Version-control the toolkit alongside your theme starter.',
      'Subscribe to a premium AI tool that guarantees WordPress-quality output',
      'I don\'t know / I want to learn'
    ],
    correct: 2,
    explanation: 'An AI-first delivery system is built on standardized prompts, shared context configurations, and AI-aware QA processes - version-controlled and iterable like any other development asset. This ensures consistent output quality across team members regardless of individual AI skill level and turns AI proficiency into an organizational capability rather than a personal one.'
  }
];

export default questionsWordpressDev;
