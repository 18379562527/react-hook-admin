import { Link, Outlet } from 'umi';
import styles from './index.less';

import Menu from './menu/menu'
import Breadcrumb from './breadcrumb/breadcrumb'

export default function Layout() {
  return (
    <div className={styles.browserBox}>
      <div className={styles.menu}><Menu /></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Breadcrumb />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}