import ytdl from "ytdl-core";
import fs from "node:fs";

type DownloadProps = {
  title: string;
  URI: string;
  destination: string;
};

export async function videoDownload({
  title,
  URI,
  destination,
}: DownloadProps) {
  ytdl(URI, {
    filter: "videoandaudio",
    quality: "highest",
  })
    .on("data", () => {
      process.stdout.write(".");
    })
    .on("finish", () => {
      console.log(`\nDownload Finished [${title}]`);
    })
    .pipe(fs.createWriteStream(`${destination}/${title}.mp4`));
}
