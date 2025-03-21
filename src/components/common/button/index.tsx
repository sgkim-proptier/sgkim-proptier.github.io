import clsx from 'clsx';
import { Button as HeadlessButton, ButtonProps as AriaButtonProps } from 'react-aria-components';

import styles from './button.module.css';

interface ButtonProps extends AriaButtonProps {
  variant?: 'default' | 'primary';
}

export default function Button({ variant = undefined, ...props }: ButtonProps) {
  return <HeadlessButton className={clsx(styles.button, variant && styles[variant])} {...props} />;
}
