import { createFileRoute } from '@tanstack/react-router';

import Container from '../../components/common/container';
import Header from '../../components/common/header';
import MyPageUserEdit from '../../components/view/mypage/userEdit';

export const Route = createFileRoute('/mypage/user-edit')({
  component: () => (
    <>
      <Header isSubPage title="프로필편집" />
      <Container>
        <MyPageUserEdit />
      </Container>
    </>
  ),
});
