"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiService = void 0;
const axios_1 = __importDefault(require("axios"));
const node_https_1 = __importDefault(require("node:https"));
class ApiService {
    pipedApi = axios_1.default.create({
        baseURL: "https://pipedapi.kavin.rocks",
        timeout: 5000,
        timeoutErrorMessage: "Request Timed Out",
        headers: {
            "Content-Type": "application/json",
        },
        httpsAgent: new node_https_1.default.Agent({ keepAlive: true, keepAliveMsecs: 5000 }),
    });
    // Video Details
    async getVideoDetails(URI) {
        try {
            const response = await this.pipedApi.get(`/streams/${URI}`);
            return response.data;
        }
        catch (error) {
            console.log(error?.message);
        }
    }
    // Playlist Details
    async getPlaylistDetails(URI) {
        try {
            const response = await this.pipedApi.get(`/playlists/${URI}`);
            return response.data;
        }
        catch (error) {
            console.log(error?.message);
        }
    }
}
const apiService = new ApiService();
exports.apiService = apiService;
