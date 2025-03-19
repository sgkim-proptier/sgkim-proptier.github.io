import { createFileRoute } from '@tanstack/react-router';

import Header from '../../components/common/header';

export const Route = createFileRoute('/board/write')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header title="쓰기" isSubPage />
      Hello "/board/write"!
    </div>
  );
}
