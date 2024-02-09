import axios, { AxiosError } from "axios";
import https from "node:https";

class ApiService {
  private pipedApi = axios.create({
    baseURL: "https://pipedapi.kavin.rocks",
    timeout: 5000,
    timeoutErrorMessage: "Request Timed Out",
    headers: {
      "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({ keepAlive: true, keepAliveMsecs: 5000 }),
  });

  // Video Details
  async getVideoDetails(URI: string) {
    try {
      const response = await this.pipedApi.get(`/streams/${URI}`);
      return response.data;
    } catch (error) {
      console.log((error as AxiosError)?.message);
    }
  }

  // Playlist Details
  async getPlaylistDetails(URI: string) {
    try {
      const response = await this.pipedApi.get(`/playlists/${URI}`);
      return response.data;
    } catch (error) {
      console.log((error as AxiosError)?.message);
    }
  }
}

const apiService = new ApiService();

export { apiService };
