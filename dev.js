const { spawn } = require('child_process');
const waitOn = require('wait-on');
const { exec } = require('child_process');

// Start the frontend dev server
const devProcess = spawn('npm', ['run', 'dev'], {
  cwd: './frontend',
  stdio: 'inherit',
  shell: true,
});

// Wait for the server to be ready, then open the browser
waitOn({ resources: ['http://localhost:3000'] }, function (err) {
  if (err) {
    console.error('Error waiting for server:', err);
    process.exit(1);
  }
  // Open the browser (Windows)
  exec('start http://localhost:3000');
}); 