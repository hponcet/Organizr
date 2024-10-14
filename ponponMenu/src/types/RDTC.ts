export type RDTCTorrentDownload = {
  rdSize: number;
  rdSpeed: number;
  files: {
    id: 1;
    path: string;
    bytes: number;
  }[];
  rdStatusRaw: "downloading";
};

export type TorrentDowload = {
  name: string;
  speed: number; // in octets
  readableSpeed: string;
  size: number; // in octets
  state: "downloading";
  rdProgress: number; // rdProgress/total files
};
