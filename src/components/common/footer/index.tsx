import { Link } from '@tanstack/react-router';

import TransitionLeftLink from '../transitionLeftLink';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link to="/">
            <span className={`${styles.icon} ${styles.icon_home}`}></span>
            <span>홈</span>
          </Link>
        </li>
        <li>
          <TransitionLeftLink to="/board">
            <span className={`${styles.icon} ${styles.icon_building}`}></span>
            <span>전체게시판</span>
          </TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink to="/moim" viewTransition>
            <span className={`${styles.icon} ${styles.icon_group}`}></span>
            <span>모임</span>
          </TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink to="/mypage" viewTransition>
            <span className={`${styles.icon} ${styles.icon_note}`}></span>
            <span>마이페이지</span>
          </TransitionLeftLink>
        </li>
        <li>
          <TransitionLeftLink to="/broker" viewTransition>
            <span className={`${styles.icon} ${styles.icon_setting}`}></span>
            <span>only중개사만</span>
          </TransitionLeftLink>
        </li>
      </ul>
    </footer>
  );
}
