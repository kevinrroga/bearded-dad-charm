import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  innerClassName?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  innerClassName = '',
  color = '#D48B2E',
  speed = '5s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = (as || 'button') as React.ElementType;

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
      style={{ padding: `${thickness}px 0` }}
      {...(rest as object)}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-60 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-60 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={`relative z-[1] rounded-full ${innerClassName}`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
