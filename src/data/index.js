import questionsShopifyDev from './questions-shopify-dev';
import questionsWordpressDev from './questions-wordpress-dev';
import questionsFrontendDesigner from './questions-frontend-designer';
import questionsUiuxDesigner from './questions-uiux-designer';
import questionsQA from './questions-qa';
import questionsSEO from './questions-seo';
import questionsPaidAds from './questions-paid-ads';
import questionsPM from './questions-pm';
import questionsHR from './questions-hr';
import questionsMernDev from './questions-mern-dev';

const questionSets = {
  shopify_dev: questionsShopifyDev,
  wordpress_dev: questionsWordpressDev,
  mern_dev: questionsMernDev,
  frontend_designer: questionsFrontendDesigner,
  uiux_designer: questionsUiuxDesigner,
  qa: questionsQA,
  seo: questionsSEO,
  paid_ads: questionsPaidAds,
  pm: questionsPM,
  hr: questionsHR
};

export function getQuestions(category) {
  return questionSets[category] || questionsShopifyDev;
}
