import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 제어합니다',
      defaultValue: false,
    },
    // variant: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: '기본 버튼',
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
    disabled: true,
    // variant: 'primary',
    // label: 'Button',
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
