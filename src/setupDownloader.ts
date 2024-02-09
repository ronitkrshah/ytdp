import getYouTubeID from "get-youtube-id";
import { apiService } from "./api/apiService";
import { videoDownload } from "./services/ytdl/ytdlService";

export async function setupDownloader({
  destination,
  numbered,
  playlist,
  uri,
}: UserCommandProps) {
  // Video ID
  let videoId = getYouTubeID(uri);

  if (videoId === null) videoId = "";
  if (destination === undefined) destination = process.cwd();

  // If playlist false download Video
  if (!playlist) {
    console.log("Fetching Data...");

    const videoData = await apiService.getVideoDetails(videoId);
    await videoDownload({
      title: videoData.title.replaceAll(/[\W_]/g, " "),
      URI: uri,
      destination,
    });
  } else {
    // Download Full Playlist
    console.log("Fetching Data ...");
    // Extract PlaylistID from URI
    let matchArr = uri.match(/(?<=list=)[\w-]+/);
    let playlistId = "";
    if (matchArr !== null) playlistId = matchArr[0];

    const playlistData = await apiService.getPlaylistDetails(playlistId);

    console.log("Downloading Videos ...");

    playlistData.relatedStreams.map(async (video: any, index: number) => {
      // Extract videoId from URL
      let videoID = video.url.match(/(?<=\?v=)[\w-]+/)[0];
      let videoLink = `https://www.youtube.com/watch?v=${videoID}`;
      const videoTitle =
        numbered === true
          ? `${String(index)} - ${video.title.replaceAll(/[\W_]/g, " ")}`
          : video.title.replaceAll(/[\W_]/g, " ");

      // Download Video
      await videoDownload({
        URI: videoLink,
        title: videoTitle,
        destination: destination === undefined ? process.cwd() : destination,
      });
    });
  }
}
