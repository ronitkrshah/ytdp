"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDownload = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const progress_1 = __importDefault(require("progress"));
const node_fs_1 = __importDefault(require("node:fs"));
let bar;
async function videoDownload({ title, URI, destination, }) {
    console.log("Downloading", title);
    (0, ytdl_core_1.default)(URI, {
        filter: "video",
        quality: "highest",
    })
        .on("response", (res) => {
        bar = new progress_1.default("Downloading [:bar] :percent :etas :total", {
            incomplete: " ",
            complete: "=",
            total: parseInt(res?.headers["content-length"], 10),
        });
    })
        .on("data", (data) => {
        bar.tick(data.length);
    })
        .on("finish", () => {
        console.log("Download Finished");
    })
        .pipe(node_fs_1.default.createWriteStream(`${destination}/${title}.mp4`));
}
exports.videoDownload = videoDownload;
