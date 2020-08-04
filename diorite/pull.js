const core     = require('@actions/core');
const github   = require('@actions/github');
const util     = require('util');
const exec     = util.promisify(require('child_process').exec);


async function pull(path) {
  try {
      const { stdout, stderr } = await exec(`git_pull.sh ${path}`);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
  }catch (err) {
     console.error(err);
  };
};

try {
  pull (core.getInput("directory"));
} catch (error) {
  core.setFailed(error.message);
}
