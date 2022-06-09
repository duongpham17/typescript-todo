import styles from './CustomBox.module.scss';
import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode,
    title: string
}

export const CustomBox = ({children, title}: Props ) => {
  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default CustomBox