import { Modal as RSModal, ModalProps as RSModalProps } from "rsuite";

export type ModalProps = RSModalProps & {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <RSModal open={isOpen} onClose={onClose}>
      {children}
    </RSModal>
  );
}
