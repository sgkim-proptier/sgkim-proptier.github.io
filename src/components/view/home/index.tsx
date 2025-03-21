import { overlay } from 'overlay-kit';

import BottomSheet from '../../common/bottomSheet';
import Alert from '../../common/modal/alert';
import Confirm from '../../common/modal/confirm';

export default function Home() {
  return (
    <>
      test Home1
      <button
        onClick={() =>
          overlay.open((props) => {
            return (
              <BottomSheet {...props}>
                <div style={{ height: '300px', background: 'red' }}>
                  12374192i7389127931279389127
                </div>
              </BottomSheet>
            );
          })
        }
      >
        바텀시트 오픈
      </button>
      <hr />
      <button
        onClick={() =>
          overlay.open((props) => {
            return (
              <Alert
                message="신고 내용은 이실장넷 이용약관 및 정책에 의해서 처리되며, 허위 신고시 서비스 이용이 제한될 수 있어요."
                {...props}
              />
            );
          })
        }
      >
        Alert
      </button>
      <hr />
      <button
        onClick={() =>
          overlay.open((props) => {
            return (
              <Confirm
                {...props}
                successCb={() => alert('연동하기')}
                message={'이실장에서 완료한 중개사인증 정보가 있습니다. 간편하게 연동하시겠습니까?'}
              />
            );
          })
        }
      >
        Confirm
      </button>
    </>
  );
}
