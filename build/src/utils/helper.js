"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
const package_json_1 = require("../../package.json");
const helperText = `
YT-Downloader v${package_json_1.version}

Usage:
\t ytdp <link>

Options:
\t --version \t -v \t Display Version
\t --help \t -h \t Display Help
\t --playlist \t -p \t Download All Videos from playlist
\t --merge \t -m \t Merge Downloaded videos in one single video. Requires --playlist option
\t --output \t -o \t Directory for downloaded file(s). Default ${process.cwd()}
`;
class Helper {
    // version
    version() {
        console.log(package_json_1.version);
    }
    // help
    help() {
        console.log(helperText);
    }
}
const helper = new Helper();
exports.helper = helper;
