import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import MyPageUserInfo from '../../components/view/mypage/userInfo';

export const Route = createFileRoute('/mypage/user-info')({
  component: () => (
    <>
      <Header isSubPage title="{회원명}님의 회원정보" />
      <Container>
        <MyPageUserInfo />
      </Container>
    </>
  ),
});
