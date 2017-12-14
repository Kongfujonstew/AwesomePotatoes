//replace following values with those from .env

module.exports = {
  "setupFiles": ["jest-localstorage-mock"],
  "globals": {
    "__DEV__": true,
    "AUTH0_DOMAIN": "AUTH0_DOMAIN",
    "AUTH0_CLIENT_ID": "AUTH0_CLIENT_ID",
    "GRAPHCOOL_URI": "GRAPHCOOL_URI"
  }
};
