import clsx from 'clsx';

export default function Container({
  nonTransition = false,
  children,
}: {
  nonTransition?: boolean;
  children: React.ReactNode;
}) {
  return <main className={clsx({ transition: !nonTransition })}>{children}</main>;
}
