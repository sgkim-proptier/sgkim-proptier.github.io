import { createFileRoute } from '@tanstack/react-router';

import Header from '../../components/common/header';

export const Route = createFileRoute('/board/$boardId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { boardId } = Route.useParams();
  return (
    <div>
      <Header title="게시글 상세" isSubPage />
      Hello "/board/$detail"!{boardId}
    </div>
  );
}
