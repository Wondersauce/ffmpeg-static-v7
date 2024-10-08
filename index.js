const os = require("os");
const path = require("path");

const basePath = path.resolve(__dirname, "./ffmpegPath");

function getFFmpegPath() {
  const platform = os.platform();
  const arch = os.arch();
  let ffmpegPath = 'ffmpeg';

  if (platform === "win32") {
    ffmpegPath = path.resolve(basePath, "windows/ffmpeg.exe");
  } else if (platform === "darwin") {
    ffmpegPath = path.resolve(basePath, "mac/ffmpeg");
  } else if (platform === "linux") {
    if (arch === "x64") {
      ffmpegPath = path.resolve(basePath, "linux/amd64/ffmpeg");
    } else if (arch === "ia32") {
      ffmpegPath = path.resolve(basePath, "linux/i686/ffmpeg");
    } else {
      throw new Error(`Error: Ffmpeg unsupported architecture: ${arch}`);
    }
  } else {
    throw new Error(`Error: Ffmpeg unsupported platform: ${platform}`);
  }

  return ffmpegPath;
}

const ffmpegPath = getFFmpegPath();

module.exports = ffmpegPath;