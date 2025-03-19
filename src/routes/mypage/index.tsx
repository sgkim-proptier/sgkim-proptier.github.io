import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import MyPage from '../../components/view/mypage';

export const Route = createFileRoute('/mypage/')({
  component: () => (
    <>
      <Header title="마이페이지" isMyPage />
      <Container nonTransition>
        <MyPage />
      </Container>
    </>
  ),
});
