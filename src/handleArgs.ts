import { setupDownloader } from "./setupDownloader";
import { getUrl } from "./utils/getUrl";
import { helper } from "./utils/helper";

export function handleArgs(args: Array<string>) {
  const dlProps: UserCommandProps = {
    uri: "",
    destination: process.cwd(),
    numbered: false,
    playlist: false,
  };

  // chcek for 0 args
  if (args.length === 0) {
    helper.help();
    process.exit(0);
  }

  args.map((arg, i) => {
    switch (arg) {
      // version
      case "--version":
      case "-v":
        helper.version();
        process.exit(0);

      // help
      case "--help":
      case "-h":
        helper.help();
        process.exit(0);

      // playlist
      case "--playlist":
      case "-p":
        dlProps.playlist = true;
        break;

      // merge
      case "--numbered":
      case "-n":
        dlProps.numbered = true;
        break;

      // destination
      case "--output":
      case "-o":
        dlProps.destination = args[i + 1];
        break;

      case getUrl(arg):
        dlProps.uri = arg;
        break;
    }
  });

  setupDownloader(dlProps);
}
