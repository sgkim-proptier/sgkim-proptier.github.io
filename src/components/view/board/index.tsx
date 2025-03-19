import { Link } from '@tanstack/react-router';

import TransitionLeftLink from '../../common/transitionLeftLink';

export default function Board() {
  return (
    <>
      <ul>
        <li>
          <Link
            to={'/board/$boardId'}
            params={{
              boardId: '1',
            }}
            viewTransition={{ types: ['slide-right'] }}
          >
            게시글1 더비즈 대표 공인중개사
            <div>
              즐거운 수요일입니다. 이번주도 오늘만 지나가면 또 절반이 지나가고 곧 휴일이네요!
            </div>
          </Link>
        </li>
        <li>
          더비즈 대표 공인중개사
          <div>즐거운 수요일입니다. 이번주도 오늘만 지나가면 또 절반이 지나가고 곧 휴일이네요!</div>
        </li>
        <li>
          더비즈 대표 공인중개사
          <div>즐거운 수요일입니다. 이번주도 오늘만 지나가면 또 절반이 지나가고 곧 휴일이네요!</div>
        </li>
        <li>
          더비즈 대표 공인중개사
          <div>즐거운 수요일입니다. 이번주도 오늘만 지나가면 또 절반이 지나가고 곧 휴일이네요!</div>
        </li>
      </ul>
      <TransitionLeftLink to="/board/write">글쓰기</TransitionLeftLink>
      <hr />
      <TransitionLeftLink to="/board/search">검색</TransitionLeftLink>
    </>
  );
}
