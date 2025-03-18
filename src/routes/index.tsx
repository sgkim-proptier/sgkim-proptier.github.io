import { createFileRoute } from '@tanstack/react-router';

import Button from '../components/common/button';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/"!
      <Button>초기화</Button>
      <Button variant="primary">초기화</Button>
      <Button variant="primary" disabled>
        초기화
      </Button>
    </div>
  );
}
