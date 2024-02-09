"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleArgs = void 0;
const setupDownloader_1 = require("./setupDownloader");
const getUrl_1 = require("./utils/getUrl");
const helper_1 = require("./utils/helper");
function handleArgs(args) {
    const dlProps = {
        uri: "",
        destination: process.cwd(),
        mergeVideo: false,
        playlist: false,
    };
    // chcek for 0 args
    if (args.length === 0) {
        helper_1.helper.help();
        process.exit(0);
    }
    args.map((arg, i) => {
        switch (arg) {
            // version
            case "--version":
            case "-v":
                helper_1.helper.version();
                process.exit(0);
            // help
            case "--help":
            case "-h":
                helper_1.helper.help();
                process.exit(0);
            // playlist
            case "--playlist":
            case "-p":
                dlProps.playlist = true;
                break;
            // merge
            case "--merge":
            case "-m":
                dlProps.mergeVideo = true;
                break;
            // destination
            case "--output":
            case "-o":
                dlProps.destination = args[i + 1];
                break;
            case (0, getUrl_1.getUrl)(arg):
                dlProps.uri = arg;
                break;
        }
    });
    (0, setupDownloader_1.setupDownloader)(dlProps);
}
exports.handleArgs = handleArgs;
