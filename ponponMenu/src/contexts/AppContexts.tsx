import { useDownloads } from "hooks/useDownloads";
import { createContext, useMemo, useState } from "react";
import { TorrentDowload } from "types/RDTC";

export type AppContextType = {
  torrentDownloads: TorrentDowload[];
};

export const AppContext = createContext<AppContextType>({
  torrentDownloads: [],
});

export function AppContextProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const { torrentDownloads } = useDownloads();

  const examContextValue = useMemo(
    (): AppContextType => ({ torrentDownloads }),
    [torrentDownloads]
  );

  return (
    <AppContext.Provider value={examContextValue}>
      {children}
    </AppContext.Provider>
  );
}
