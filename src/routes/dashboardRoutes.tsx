import { AppSidebar } from '@/components/common/AppSidebar';
import NavDash from '@/components/common/NavDash';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

function DashboardRoutes() {
  return (
    <div className='w-full'>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full overflow-hidden'>
          <NavDash />
          <div className='p-4'>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
      <p>Dashboard</p>
    </div>
  );
}

export default DashboardRoutes;
