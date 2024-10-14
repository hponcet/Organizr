import { RDTCTorrentDownload, TorrentDowload } from "types/RDTC";
import { request } from "./request";

const API = "http://192.168.1.111:6500/Api";

function formatSpeed(speed: number) {
  if (speed < 1024) {
    return `${speed} B/s`;
  } else if (speed < 1024 * 1024) {
    return `${(speed / 1024).toFixed(2)} KB/s`;
  } else {
    return `${(speed / 1024 / 1024).toFixed(2)} MB/s`;
  }
}

async function getTorrentsInfos(): Promise<TorrentDowload[]> {
  // const files = await request<RDTCTorrentDownload[]>(`${API}/Torrents`, {
  //   method: "GET",
  // });

  return [];
  // files.map((file) => ({
  //   name: file.files[0].path,
  //   speed: file.rdSpeed,
  //   readableSpeed: formatSpeed(file.rdSpeed),
  //   size: file.rdSize,
  //   state: file.rdStatusRaw,
  //   rdProgress: 0,
  // }));
}

const rdtc = {
  getTorrentsInfos,
};

export default rdtc;
