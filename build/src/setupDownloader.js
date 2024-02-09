"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDownloader = void 0;
const get_youtube_id_1 = __importDefault(require("get-youtube-id"));
const apiService_1 = require("./api/apiService");
const ytdlService_1 = require("./services/ytdl/ytdlService");
async function setupDownloader({ destination, mergeVideo, playlist, uri, }) {
    // Video ID
    let videoId = (0, get_youtube_id_1.default)(uri);
    if (videoId === null)
        videoId = "";
    if (destination === undefined)
        destination = process.cwd();
    // If playlist false download Video
    if (!playlist) {
        console.log("Fetching Data...");
        const videoData = await apiService_1.apiService.getVideoDetails(videoId);
        await (0, ytdlService_1.videoDownload)({
            title: videoData.title.replaceAll(/[\W_]/g, " "),
            URI: uri,
            destination,
        });
    }
    else {
        // Download Full Playlist
        console.log("Fetching Data ...");
        // Extract PlaylistID from URI
        let matchArr = uri.match(/(?<=list=)[\w-]+/);
        let playlistId = "";
        if (matchArr !== null)
            playlistId = matchArr[0];
        const playlistData = await apiService_1.apiService.getPlaylistDetails(playlistId);
        playlistData.relatedStreams.map(async (video, index) => {
            // Extract videoId from URL
            let videoID = video.url.match(/(?<=\?v=)[\w-]+/)[0];
            let videoLink = `https://www.youtube.com/watch?v=${videoID}`;
            const videoTitle = mergeVideo === true
                ? String(index)
                : video.title.replaceAll(/[\W_]/g, " ");
            // Download Video
            await (0, ytdlService_1.videoDownload)({
                URI: videoLink,
                title: videoTitle,
                destination: destination === undefined ? process.cwd() : destination,
            });
        });
    }
}
exports.setupDownloader = setupDownloader;
