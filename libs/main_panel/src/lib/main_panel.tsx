import styles from './main_panel.module.css';
import { Sidebar } from './components/Sidebar';
import { MainPanelRoutes } from './routes';

export function MainPanel() {
  return (
    <div className={styles['container']}>
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
