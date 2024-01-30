import { Outlet } from 'react-router-dom';
export function HomeLayout() {
  return (
    <div>
      <div>Sidebar</div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
