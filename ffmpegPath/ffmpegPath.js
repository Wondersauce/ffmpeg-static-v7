const os = require("os");
const path = require("path");

function getFFmpegPath() {
  const platform = os.platform();
  const arch = os.arch();
  let ffmpegPath = 'ffmpeg';

  const basePath = path.resolve(__dirname, "src/lib/ffmpegPath");

  if (platform === "win32") {
    ffmpegPath = path.join(basePath, "windows/ffmpeg.exe");
  } else if (platform === "darwin") {
    ffmpegPath = path.join(basePath, "mac/ffmpeg");
  } else if (platform === "linux") {
    if (arch === "x64") {
      ffmpegPath = path.join(basePath, "linux/amd64/ffmpeg");
    } else if (arch === "ia32") {
      ffmpegPath = path.join(basePath, "linux/i686/ffmpeg");
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
