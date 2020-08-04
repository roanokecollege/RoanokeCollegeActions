const core     = require('@actions/core');
const github   = require('@actions/github');
const exec     = require('child_process');

try {
  const path = core.getInput('directory');
  exec ('git_pull.sh ' + path,
        (err, stdout, stderr) => {
          if (err) {
            console.error (err);
          } else {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          }
        }
  );
} catch (error) {
  core.setFailed(error.message);
}
