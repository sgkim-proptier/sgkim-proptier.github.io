import { Sheet } from 'react-modal-sheet';

export default function BottomSheet({
  isOpen,
  close,
  unmount,
  children,
}: {
  isOpen: boolean;
  close: () => void;
  unmount?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Sheet isOpen={isOpen} onClose={close} onCloseEnd={unmount} detent="content-height">
      <Sheet.Backdrop onTap={close} />
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
