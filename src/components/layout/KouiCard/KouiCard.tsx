import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import './KouiCard.scss';

type BorderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ShadowSize = 'sm' | 'md' | 'lg';

export type KouiCardProps = {
  borderRadius?: BorderSize;
  borderColor?: string;
  shadow?: ShadowSize;
  shadowOpacity?: number;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  image?: string;
  outlined?: boolean;
  title?: string;
  content?: string;
  dark?: boolean;
  children?: any;
};

export const KouiCard: React.FC<KouiCardProps> = ({
  borderRadius = 'md',
  borderColor = 'black',
  shadow = 'md',
  shadowOpacity = 0.5,
  backgroundColor = 'white',
  image,
  outlined = false,
  onClick,
  dark = false,
  children,
}) => {
  const cardClass = classNames(
    'koui-card',
    `koui-card--border-${borderRadius}`,
    `koui-card--border-color-${borderColor}`,
    `koui-card--shadow-${shadow}`,
    `koui-card--shadow-opacity-${shadowOpacity}`,
    `koui-card--background-${backgroundColor}`,
    { 'koui-card--dark': dark },
    { 'koui-card--outlined': outlined },
    { 'koui-card--clickable': onClick },
  );

  return (
    <div className={cardClass} onClick={onClick}>
      {image && <img src={image} alt={'Placeholder'} />}
      {children && <span>{children}</span>}
    </div>
  );
};
