module.exports = {
  default: {
    require: ["step_definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress"],
    paths: ["features/**/*.feature"]
  }
};
