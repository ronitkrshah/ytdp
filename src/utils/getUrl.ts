export function getUrl(URI: string): string {
  const regexp =
    /(?:https:\/\/)?w{0,3}\.?youtu\.?be(?:(?:[^' '\n\r]+v=)|(?:[^' '\n\r&#]*\/))([^' '\n\r&#]+)(?:&[^' '\n\r]+)?/;

  const result = URI.match(regexp);

  if (result === null) {
    return "";
  }

  return result[0];
}
