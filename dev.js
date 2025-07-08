const { spawn } = require('child_process');
const tcpPortUsed = require('tcp-port-used');

// Start the backend dev server
const backend = spawn('npm', ['run', 'start:dev'], {
  cwd: './',
  stdio: 'inherit',
  shell: true,
});

// Start the frontend dev server
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: './frontend',
  stdio: 'inherit',
  shell: true,
});

async function waitForServers() {
  console.log('Waiting for servers to start...');
  try {
    // Wait for backend (port 3001)
    await tcpPortUsed.waitUntilUsed(3001, 500, 30000); 
    console.log('Backend is ready.');

    // Wait for frontend (port 3000)
    await tcpPortUsed.waitUntilUsed(3000, 500, 30000);
    console.log('Frontend is ready.');

    console.log('Both servers are ready. Opening browser...');
    const open = (await import('open')).default;
    await open('http://localhost:3000');
  } catch (err) {
    console.error('Error waiting for servers:', err);
    // Don't exit process, just log the error, as servers might be running.
  }
}

waitForServers();
