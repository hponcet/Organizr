import { Modal, type ModalProps } from "components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { API_URI } from "../../constants";
import { apiRequest } from "apis/request";

export function InvitationModal(modalProps: ModalProps) {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["invitations"],
    queryFn: () => apiRequest("GET", "invitations"),
  });

  console.log(data);

  return (
    <Modal {...modalProps}>
      <div style={{ padding: 20 }}>
        <h1>Invitations</h1>
        <p>Here are your invitations:</p>
        <ul>
          <li>Invitation 1</li>
          <li>Invitation 2</li>
          <li>Invitation 3</li>
        </ul>
      </div>
    </Modal>
  );
}
