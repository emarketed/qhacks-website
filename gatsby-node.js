const {
  NODE_ENV,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

exports.createPages = ({ actions }) => {

  const { createRedirect } = actions;

  createRedirect({ fromPath: "/*", toPath: "/", isPermanent: true, force: true });
  createRedirect({ fromPath: "https://qhacks.ca/*", toPath: "https://qhacks.io/:splat", isPermanent: true, force: true });
  createRedirect({ fromPath: "https://qhacks-website.netlify.com/*", toPath: "https://qhacks.io/:splat", isPermanent: true, force: true });
};

exports.onCreateWebpackConfig = ({
  plugins,
  actions
}) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.NETLIFY_ENV": JSON.stringify(NETLIFY_ENV)
      })
    ]
  });
};
