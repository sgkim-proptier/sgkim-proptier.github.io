import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import MyPageMenu from '../../components/view/mypage/menu';

export const Route = createFileRoute('/mypage/menu')({
  component: () => (
    <>
      <Header isSubPage />
      <Container>
        <MyPageMenu />
      </Container>
    </>
  ),
});
