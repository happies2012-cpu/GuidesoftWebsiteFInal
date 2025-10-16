const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Get environment variables
const isDev = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 3000;

let mainWindow;
let serverProcess;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, '../public/guidesoft-favicon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Remove menu bar
  mainWindow.setMenuBarVisibility(false);

  // Load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL(`http://localhost:${port}`);
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

// Start the Vite development server
const startViteServer = () => {
  return new Promise((resolve, reject) => {
    serverProcess = spawn('npm', ['run', 'dev'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
      shell: true
    });

    serverProcess.on('error', (error) => {
      console.error('Failed to start Vite server:', error);
      reject(error);
    });

    // Give the server some time to start
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDev) {
    try {
      await startViteServer();
    } catch (error) {
      console.error('Error starting development server:', error);
      dialog.showErrorBox('Error', 'Failed to start development server');
      app.quit();
      return;
    }
  }
  
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  
  // Kill the server process if it's running
  if (serverProcess) {
    serverProcess.kill();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers
ipcMain.handle('get-app-info', () => {
  return {
    name: app.getName(),
    version: app.getVersion(),
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node,
    platform: process.platform,
    arch: process.arch
  };
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.