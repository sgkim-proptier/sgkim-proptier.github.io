import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import Certification from '../../components/view/mypage/certification';

export const Route = createFileRoute('/mypage/certification')({
  component: () => (
    <>
      <Header title="부동산 전문가 인증" isSubPage />
      <Container>
        <Certification />
      </Container>
    </>
  ),
});
