import './modal.css';

import { Dialog, Modal, ModalOverlayProps } from 'react-aria-components';

import Button from '../button';

interface ConfirmProps extends ModalOverlayProps {
  isOpen: boolean;
  close: () => void;
  message: string;
  successCb?: () => void;
}

export default function Confirm({ isOpen, close, message, successCb }: ConfirmProps) {
  return (
    <Modal isDismissable isOpen={isOpen} onOpenChange={close}>
      <Dialog aria-label="Confirm">
        <p>{message}</p>
        <div>
          <Button onPress={close}>취소</Button>
          {successCb && <Button onPress={close}>연동하기</Button>}
        </div>
      </Dialog>
    </Modal>
  );
}
