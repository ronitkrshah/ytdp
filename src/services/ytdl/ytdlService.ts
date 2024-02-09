import ytdl from "ytdl-core";
import ProgressBar from "progress";
import fs from "node:fs";

type DownloadProps = {
  title: string;
  URI: string;
  destination: string;
};
let bar: ProgressBar;

export async function videoDownload({
  title,
  URI,
  destination,
}: DownloadProps) {
  console.log("Downloading", title);

  ytdl(URI, {
    filter: "video",
    quality: "highest",
  })
    .on("response", (res) => {
      bar = new ProgressBar("Downloading [:bar] :percent :etas :total", {
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
    .pipe(fs.createWriteStream(`${destination}/${title}.mp4`));
}
