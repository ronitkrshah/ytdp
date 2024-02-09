"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
function getUrl(URI) {
    const regexp = /(?:https:\/\/)?w{0,3}\.?youtu\.?be(?:(?:[^' '\n\r]+v=)|(?:[^' '\n\r&#]*\/))([^' '\n\r&#]+)(?:&[^' '\n\r]+)?/;
    const result = URI.match(regexp);
    if (result === null) {
        return "";
    }
    return result[0];
}
exports.getUrl = getUrl;
