import { useRouter } from '@tanstack/react-router';

import TransitionLeftLink from '../transitionLeftLink';
import styles from './header.module.css';

export default function Header({
  title,
  isSubPage,
  isMyPage,
}: {
  title?: string;
  isSubPage?: boolean;
  isMyPage?: boolean;
}) {
  const router = useRouter();
  return (
    <header className={styles.header}>
      {isSubPage && <button onClick={() => router.history.back()}>Back</button>}
      {title && <h1>{title}</h1>}
      {isMyPage && <TransitionLeftLink to="/mypage/menu">햄버거메뉴</TransitionLeftLink>}
    </header>
  );
}
