import { Link, LinkProps } from '@tanstack/react-router';

interface TransitionLeftLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function TransitionLeftLink({ children, ...props }: TransitionLeftLinkProps) {
  return (
    <Link {...props} viewTransition={{ types: ['slide-left'] }}>
      {children}
    </Link>
  );
}
