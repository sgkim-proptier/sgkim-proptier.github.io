import { createFileRoute } from '@tanstack/react-router';

import Header from '../../components/common/header';

export const Route = createFileRoute('/board/search')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header title="검색" isSubPage />
      Hello "/board/search"!
    </div>
  );
}
