import { app, BrowserWindow, ipcMain, WebContents, Event } from "electron";
import path from "path";
import { safeMkdir } from "./utils/files";
import { exit, killPyProc, createServerProc } from "./utils/processes";
import {
  getModelsDir,
  getTrainingRunsDir,
  getAudioSynthDir,
  getDatasetsDir,
  getTextNormalizationRunsDir,
  getCleaningRunsDir,
} from "./utils/globals";
import "./handles/cleaningRuns";
import "./handles/datasets";
import "./handles/docker";
import "./handles/files";
import "./handles/models";
import "./handles/preprocessingRuns";
import "./handles/synthesis";
import "./handles/textNormalizationRuns";
import "./handles/trainingRuns";
import "./handles/install";
import "./handles/settings";

app.commandLine.appendSwitch("trace-warnings");

const mainWindow: BrowserWindow = null;

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(app.getAppPath(), ".media", "icon.png"),
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.maximize();

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createDirectories();
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const createDirectories = async () => {
  for (const path of [
    getModelsDir(),
    getTrainingRunsDir(),
    getAudioSynthDir(),
    getDatasetsDir(),
    getCleaningRunsDir(),
    getTextNormalizationRunsDir(),
  ]) {
    safeMkdir(path);
  }
};

app.on("web-contents-created", (e: Event, contents: WebContents) => {
  contents.on("new-window", (e, url: string) => {
    e.preventDefault();
    open(url);
  });
  contents.on("will-navigate", (e: Event, url: string) => {
    if (url !== contents.getURL()) e.preventDefault(), open(url);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("will-quit", exit);

ipcMain.handle("start-server", createServerProc);
ipcMain.handle("stop-run", killPyProc);
