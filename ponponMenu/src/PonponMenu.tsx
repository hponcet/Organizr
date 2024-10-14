import { Menu } from "components/Menu/Menu";
import { AppContext } from "contexts/AppContexts";
import { useContext, useState } from "react";
import { Badge } from "rsuite";

import "styles/index.scss";
import { InvitationModal } from "views/InvitationModal/InvitationModal";

export function PonponMenu() {
  const { torrentDownloads } = useContext(AppContext);

  const [invitationModalOpen, setInvitationsModal] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          right: 30,
          bottom: 30,
          zIndex: 100,
          backgroundColor: "red",
          pointerEvents: "all",
        }}
      >
        <div style={{ position: "relative" }}>
          <Menu
            options={[
              {
                label: "Invitations",
                onClick: () => setInvitationsModal(true),
              },
              { label: "Option 2", onClick: () => console.log("Option 2") },
              { label: "Option 3", onClick: () => console.log("Option 3") },
            ]}
          />
          {torrentDownloads.length ? (
            <Badge
              content={torrentDownloads.length}
              style={{ zIndex: 10, position: "absolute", top: -30, left: -10 }}
            />
          ) : null}
        </div>
      </div>
      <InvitationModal
        isOpen={invitationModalOpen}
        onClose={() => setInvitationsModal(false)}
      />
    </div>
  );
}
