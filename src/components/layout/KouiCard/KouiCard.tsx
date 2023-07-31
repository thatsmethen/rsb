import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './KouiCard.scss';

type BorderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ShadowSize = 'sm' | 'md' | 'lg';

type KouiCardProps = {
  borderRadius?: BorderSize;
  borderColor?: string;
  shadow?: ShadowSize;
  shadowOpacity?: number;
  backgroundColor?: string;
  dark?: boolean;
  children?: ReactNode;
};

export const KouiCard: React.FC<KouiCardProps> = ({
  borderRadius = 'md',
  borderColor = 'black',
  shadow = 'md',
  shadowOpacity = 0.5,
  backgroundColor = 'white',
  dark = false,
  children,
}) => {
  const cardClass = classNames(
    'koui-card__inner',
    `koui-card__inner--border-${borderRadius}`,
    `koui-card__inner--border-color-${borderColor}`,
    `koui-card__inner--shadow-${shadow}`,
    `koui-card__inner--shadow-opacity-${shadowOpacity}`,
    `koui-card__inner--background-${backgroundColor}`,
    { 'koui-card__inner--dark': dark },
  );

  return <div className={cardClass}>{children}</div>;
};
