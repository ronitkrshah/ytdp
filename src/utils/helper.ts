import { version } from "../../package.json";

const helperText = `
YT-Downloader v${version}

Usage:
\t ytdp <link>

Options:
\t --version \t -v \t Display Version
\t --help \t -h \t Display Help
\t --playlist \t -p \t Download All Videos from playlist
\t --numbered \t -n \t Merge Downloaded videos in one single video. Requires --playlist option
\t --output \t -o \t Directory for downloaded file(s). Default ${process.cwd()}
`;

class Helper {
  // version
  version() {
    console.log(version);
  }

  // help
  help() {
    console.log(helperText);
  }
}

const helper = new Helper();

export { helper };
