"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchApi = void 0;
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
function fetchApi(URI) {
    axios_1.default
        .get(URI, {
        timeout: 10000,
        httpsAgent: new https_1.default.Agent({ keepAlive: true, keepAliveMsecs: 10000 }),
    })
        .then((data) => {
        return data;
    })
        .catch((error) => {
        console.log(error);
    });
}
exports.fetchApi = fetchApi;
