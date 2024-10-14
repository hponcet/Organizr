import rdtc from "apis/rdtc";
import { useEffect, useState } from "react";
import { TorrentDowload } from "types/RDTC";

export function useDownloads() {
  const [torrentDownloads, setTorrentDownloads] = useState<TorrentDowload[]>(
    []
  );

  async function getTorrentsInfos() {
    try {
      const torrentDownloads = await rdtc.getTorrentsInfos();
      console.log(torrentDownloads);
      setTorrentDownloads(torrentDownloads);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTorrentsInfos();
    const interval = setInterval(
      getTorrentsInfos,
      torrentDownloads.length ? 2000 : 10000
    );
    return () => clearInterval(interval);
  }, [torrentDownloads.length > 0]);

  return { torrentDownloads };
}
