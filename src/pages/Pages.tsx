import styles from './Pages.module.scss';
import {Route, Routes} from 'react-router-dom';

import Home from './home';
import Elements from './elements';
import Hooks from './hooks';
import Test from './test';

export const Pages = () => {
  return (
    <div className={styles.container}>      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/elements" element={<Elements/>} />
            <Route path="/hooks" element={<Hooks/>} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    </div>
  )
}

export default Pages