import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './KouiCard.scss';

type BorderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ShadowSize = 'sm' | 'md' | 'lg';
type BackgroundColor = 'blue' | 'green' | 'red' | 'white' | 'black' | 'grey' | 'dark-grey' | 'light-grey' | 'yellow';

export type KouiCardProps = {
  borderRadius?: BorderSize;
  borderColor?: BackgroundColor;
  shadow?: ShadowSize;
  shadowOpacity?: number;
  backgroundColor?: BackgroundColor;
  onClick?: MouseEventHandler<HTMLDivElement>;
  image?: string;
  outlined?: boolean;
  title?: string;
  content?: string;
  dark?: boolean;
  children?: ReactNode;
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
      {children}
    </div>
  );
};
