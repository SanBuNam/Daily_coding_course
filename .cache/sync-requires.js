const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/about.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/blogs.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/index.js"))),
  "component---src-pages-privacy-notice-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/privacy-notice.js"))),
  "component---src-pages-service-types-content-management-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/content-management.js"))),
  "component---src-pages-service-types-search-engine-optimization-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/search-engine-optimization.js"))),
  "component---src-pages-service-types-social-media-marketing-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/social-media-marketing.js"))),
  "component---src-pages-service-types-website-design-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/website-design.js"))),
  "component---src-pages-service-types-website-hosting-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/website-hosting.js"))),
  "component---src-pages-service-types-website-review-critique-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/website-review-critique.js"))),
  "component---src-pages-service-types-website-update-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/service-types/website-update.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/terms-and-conditions.js"))),
  "component---src-pages-thankyou-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Daily_coding_course/src/pages/thankyou.js")))
}

