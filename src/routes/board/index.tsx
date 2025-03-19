import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import Board from '../../components/view/board';

export const Route = createFileRoute('/board/')({
  component: () => (
    <>
      <Header title="전체 게시판" />
      <Container nonTransition>
        <Board />
      </Container>
    </>
  ),
});
