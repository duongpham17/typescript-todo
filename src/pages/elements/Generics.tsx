import React, { ReactNode } from 'react';

interface GenericsProps<T> {
  items: T[],
  render: (item: T) => ReactNode,
}

export const Generics = <T,>({items, render}: GenericsProps<T>) => {
  return (
    <div>
      {items.map((el, index) => 
        <div key={index}>
          {render(el)}
        </div>
      )}
    </div>
  )
}

export default Generics;