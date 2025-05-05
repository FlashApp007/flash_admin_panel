import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Flash Admin</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
