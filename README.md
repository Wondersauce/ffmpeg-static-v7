# ffmpeg-static-v7

## Install
`npm i https://github.com/Wondersauce/ffmpeg-static-v7.git`

## Important, for Next js or other compiled projects with temp directories

Make sure to include this script to get the right path. Otherwise you won't get the right path to the binary.

```javascript
import { execSync } from "child_process";
const ffmpegPath = require("@wondersauce/ffmpeg-static-v7");

if (!ffmpegPath) {
  throw new Error(
    "Error: install @wondersauce/ffmpeg-static-v7 'npm i https://github.com/Wondersauce/ffmpeg-static-v7.git'"
  );
}

// IMPORTANT: If you are using Next js, unfortunately you can't get the right binary path because the binary,
// gets compiled to another directory where the binary is located. So, you need to use this function to get the right path.
// outside of next js or code that is not being compiled just use the require("@wondersauce/ffmpeg-static-v7") directly.
export default function nextFfmpegPath() {
  return execSync(
    `node -e 'console.log(require("@wondersauce/ffmpeg-static-v7"))'`
  )
    .toString()
    .replaceAll("\n", "");
}
```