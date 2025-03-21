import './modal.css';

import { Dialog, Modal, ModalOverlayProps } from 'react-aria-components';

import Button from '../button';

interface AlertProps extends ModalOverlayProps {
  isOpen: boolean;
  close: () => void;
  message: string;
}

export default function Alert({ isOpen, close, message }: AlertProps) {
  return (
    <Modal isDismissable isOpen={isOpen} onOpenChange={close}>
      <Dialog aria-label="Alert">
        <Button onPress={close}>닫기</Button>
        <p>{message}</p>
        <Button onPress={close}>확인</Button>
      </Dialog>
    </Modal>
  );
}
