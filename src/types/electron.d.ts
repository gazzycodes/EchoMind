export interface ElectronAPI {
  getAppVersion: () => Promise<string>;
  minimizeToTray: () => Promise<void>;
  showWindow: () => Promise<void>;
  onTogglePlayback: (callback: () => void) => void;
  onOpenSettings: (callback: () => void) => void;
  removeAllListeners: (channel: string) => void;
}

export interface Platform {
  isElectron: boolean;
  platform: string;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
    platform: Platform;
  }
}
