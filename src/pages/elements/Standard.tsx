import React, { ReactNode, ReactElement } from 'react';

interface ItemsProps {
  children: ReactNode,
  heading?: ReactElement,
  title: string,
}

export const Standard = (props: ItemsProps) => {

  const {children, title, heading} = props;

  return (
    <div>
      <b>{title}</b>
      {heading}
      {children}
    </div>
  )
}

export default Standard