import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      className={clsx(styles.button, variant && styles[variant], className)}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}
