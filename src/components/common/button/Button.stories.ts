import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 제어합니다',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: '기본 버튼',
    // onPress: (e) => alert('Hello world!'),
    variant: undefined,
    // label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary 버튼',
    variant: 'primary',
    // label: 'Button',
  },
};
export const Disabled: Story = {
  args: {
    children: 'Disabled 버튼',
    isDisabled: true,
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
