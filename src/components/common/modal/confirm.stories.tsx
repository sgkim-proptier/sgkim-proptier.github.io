import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '../button';
import Confirm from './confirm';

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  title: 'Components/Common/Modal/Confirm',
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: false,
      description: 'Confirm 모달의 열림 상태를 제어합니다',
      defaultValue: false,
    },
    message: {
      control: false,
      description: 'Confirm 모달의 내용을 제어합니다',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Example: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Confirm
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          successCb={() => alert('연동하기')}
          message={'이실장에서 완료한 중개사인증 정보가 있습니다. 간편하게 연동하시겠습니까?'}
        />
        <Button onPress={() => setIsOpen(true)}>Confirm 오픈</Button>
        {/* 
        *** 실제 사용 코드 예시 ***

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
        </button> */}
      </>
    );
  },
};
