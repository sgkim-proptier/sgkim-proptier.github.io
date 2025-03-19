import TransitionLeftLink from '../../common/transitionLeftLink';

export default function MyPageMenu() {
  return (
    <>
      <div>
        <button>공지사항</button>
        <button>고객센터</button>
      </div>
      <ul>
        <li>
          <TransitionLeftLink to="/mypage/user-info">개인정보 설정</TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink>부동산 전문가 인증 관리</TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink>푸시 알림 설정</TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink>앱버전 1.1.99</TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink>로그아웃</TransitionLeftLink>
        </li>
      </ul>
    </>
  );
}
