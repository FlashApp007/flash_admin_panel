import styles from './main_panel.module.css';
import { Sidebar } from './components/Sidebar';
import { MainPanelRoutes } from './routes';
import Navbar from './components/layout/Navbar';

export function MainPanel() {
  return (
    <div className={styles['container']}>
      <Navbar/>
      <div className="main-panel-layout">
        <Sidebar />
        <div className="main-content">
          <MainPanelRoutes />
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
