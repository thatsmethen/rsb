import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './RsbCard.scss';

type BorderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ShadowSize = 'sm' | 'md' | 'lg';
type BackgroundColor = 'blue' | 'green' | 'red' | 'white' | 'black' | 'grey' | 'dark-grey' | 'light-grey' | 'yellow';

export type RsbCardProps = {
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

export const RsbCard: React.FC<RsbCardProps> = ({
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
    'rsb-card',
    `rsb-card--border-${borderRadius}`,
    `rsb-card--border-color-${borderColor}`,
    `rsb-card--shadow-${shadow}`,
    `rsb-card--shadow-opacity-${shadowOpacity}`,
    `rsb-card--background-${backgroundColor}`,
    { 'rsb-card--dark': dark },
    { 'rsb-card--outlined': outlined },
    { 'rsb-card--clickable': onClick },
  );

  return (
    <div className={cardClass} onClick={onClick}>
      {image && <img src={image} alt={'Placeholder'} />}
      {children}
    </div>
  );
};
