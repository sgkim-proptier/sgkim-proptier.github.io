import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '../button';
import BottomSheet from './index';

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: 'Components/Common/BottomSheet',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Example: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <BottomSheet isOpen={isOpen} close={() => setIsOpen(false)}>
          <div style={{ height: '300px', background: 'red' }}>12374192i7389127931279389127</div>
        </BottomSheet>
        <Button onPress={() => setIsOpen(true)}>바텀시트 오픈</Button>

        {/* 
        *** 실제 사용 코드 예시 ***

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
      </button> */}
      </>
    );
  },
};
