import React from 'react';

import { cn } from '../../libs';
import styles from './TransactionStatus.module.scss';

interface StatusProps {
  leftIcon?: React.ReactNode;
  status: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const TransactionStatus = ({
  leftIcon,
  status,
  className,
  variant = 'primary',
}: StatusProps) => {
  return (
    <div
      className={cn(
        'flex items-center text-xs py-1.5 px-2 gap-2 border rounded',
        className,
        styles[`${variant}`],
      )}
    >
      {leftIcon}
      {status}
    </div>
  );
};
