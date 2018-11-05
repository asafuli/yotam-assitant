import youtube from "youtube-finder";
import { GAPI_KEY } from "../config/config.json";

export const searchVideos = async keyword => {
  let client = youtube.createClient({ key: GAPI_KEY });
  var params = {
    part: "snippet",
    q: keyword,
    maxResults: 15
  };
  let data = await client.search(params);
  let vids = data.items
    .map(vid => ({
      id: vid.id.videoId,
      thumb: vid.snippet.thumbnails.high.url
    }))
    .filter(vid => vid.id);
  console.log(data);
  console.log(vids);
  return vids;
};
