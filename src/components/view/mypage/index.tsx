import TransitionLeftLink from '../../common/transitionLeftLink';

export default function MyPage() {
  return (
    <>
      <div>일반인 프로필(공통)</div>
      <div>전문가 프로필</div>
      <TransitionLeftLink to="/mypage/user-edit">프로필 편집</TransitionLeftLink>
      <div>프로필 편집 / 팔로우 /팔로우취소</div>
      <div>마이페이지 메뉴(작성글 / 댓글 / 좋아요 등)</div>
      <div>마이페이지 메뉴에 따른 게시글 리스트</div>
    </>
  );
}
