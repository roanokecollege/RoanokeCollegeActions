const core     = require('@actions/core');
const github   = require('@actions/github');
const util     = require('util');
const exec     = util.promisify(require('child_process').exec);


async function safe (path) {
  try {
    const { stdout, stderr } = await exec(`git config --global --add safe.directory ${path}`);
    console.log('stdout:', stdout);
    if (stderr != '') {
      console.error('stderr:', stderr);
    }
  } catch (err) {
    console.error(err);
  }
}

async function pull(path) {
  try {
      const { stdout, stderr } = await exec(`git_pull.sh ${path}`);
      console.log('stdout:', stdout);
      if (stderr != '') {
        console.error('stderr:', stderr);
      }
  }catch (err) {
     console.error(err);
  };
};

try {
  const dir = core.getInput("directory");
  safe (dir);
  pull (dir);
} catch (error) {
  core.setFailed(error.message);
}
