import styles from './Navbar.module.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/elements">Elements</Link></li>
          <li><Link to="/hooks">Hooks</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
    </div>
  )
}

export default Navbar