import Link from 'next/link';
import type { CSSProperties, MouseEventHandler } from 'react';
import styles from './KontaktButton.module.css';

type Props = {
  children: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
  className?: string;
};

export default function KontaktButton({
  children,
  onClick,
  style,
  className,
}: Props) {
  return (
    <Link
      className={`${styles.button} ${className ?? ''}`}
      href="/kontakt"
      style={style}
      onClick={onClick}
      prefetch={true}
    >
      {children}
    </Link>
  );
}
