const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App controls
  getAppVersion: () => ipcRenderer.invoke('app-version'),
  minimizeToTray: () => ipcRenderer.invoke('minimize-to-tray'),
  showWindow: () => ipcRenderer.invoke('show-window'),

  // Listen for events from main process
  onTogglePlayback: (callback) => {
    ipcRenderer.on('toggle-playback', callback);
  },
  onOpenSettings: (callback) => {
    ipcRenderer.on('open-settings', callback);
  },

  // Remove listeners
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});

// Expose a limited API for the renderer process
contextBridge.exposeInMainWorld('platform', {
  isElectron: true,
  platform: process.platform
});
