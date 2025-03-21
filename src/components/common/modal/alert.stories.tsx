import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '../button';
import Alert from './alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Common/Modal/Alert',
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: false,
      description: 'Alert 모달의 열림 상태를 제어합니다',
      defaultValue: false,
    },
    message: {
      control: false,
      description: 'Alert 모달의 내용을 제어합니다',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Example: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Alert
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          message={
            '신고 내용은 이실장넷 이용약관 및 정책에 의해서 처리되며, 허위 신고시 서비스 이용이 제한될 수 있어요.'
          }
        />
        <Button onPress={() => setIsOpen(true)}>Alert 오픈</Button>
        {/* 
        *** 실제 사용 코드 예시 ***

<button
          onClick={() =>
            overlay.open((props) => {
              return (
                <Alert
                  {...props}
                  message="신고 내용은 이실장넷 이용약관 및 정책에 의해서 처리되며, 허위 신고시 서비스 이용이 제한될 수 있어요."                  
                />
              );
            })
          }
        >
          Alert
        </button> */}
      </>
    );
  },
};
