"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDownload = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const node_fs_1 = __importDefault(require("node:fs"));
async function videoDownload({ title, URI, destination, }) {
    (0, ytdl_core_1.default)(URI, {
        filter: "videoandaudio",
        quality: "highest",
    })
        .on("data", () => {
        process.stdout.write(".");
    })
        .on("finish", () => {
        console.log(`\nDownload Finished [${title}]`);
    })
        .pipe(node_fs_1.default.createWriteStream(`${destination}/${title}.mp4`));
}
exports.videoDownload = videoDownload;
