import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext';
import { SidebarProvider } from './SidebarContext'

const PrivateRoutes = () => {
    const { user } = useAuth();
    return user ? (
        <SidebarProvider>
            <Outlet />
        </SidebarProvider>
    ) : <Navigate to="/sign_in" />
}

export default PrivateRoutes;