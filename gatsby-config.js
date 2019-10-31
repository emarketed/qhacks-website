const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://cocky-goldstine-b62d22.netlify.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = https://cocky-goldstine-b62d22.netlify.com,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? https://cocky-goldstine-b62d22.netlify.com : NETLIFY_DEPLOY_URL;

const allowCrawling = {
  policy: [{ userAgent: '*' }],
  sitemap: null
};

const disallowCrawling = {
  policy: [{ userAgent: '*', disallow: ['/'] }],
  sitemap: null,
  host: null
};

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "QHacks Website"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-72429502-3",
        head: false,
        anonymize: false,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "QHacks",
        short_name: "QHacks",
        start_url: "/",
        background_color: "#00205b",
        theme_color: "#c81c2e",
        display: "minimal-ui",
        icon: "src/assets/img/logo/qhacksAppIcon.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: allowCrawling,
          development: disallowCrawling,
          'branch-deploy': disallowCrawling,
          'deploy-preview': disallowCrawling
        }
      }
    }
  ]
};
