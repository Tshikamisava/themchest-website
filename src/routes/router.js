import { createBrowserRouter } from 'react-router-dom';
import ContactUs from '../pages/contact/ContactUs';
import HomePage from '../pages/home/HomePage';
import ProjectsPage from '../pages/projects/ProjectsPage';
import ServicesPage from '../pages/services/ServicesPage';
import ClientRoutes from './ClientRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientRoutes />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'gallery',
                element: <ProjectsPage />
            },
            {
                path: 'services',
                element: <ServicesPage />
            },
            {
                path: 'contact',
                element: <ContactUs />
            }
        ]
    },
    // Commented out the login and dashboard routes
    // {
    //     path: 'login',
    //     element: <Login />,
    // },
    // {
    //     path: 'dashboard',
    //     element: <DashboardHome />,
    //     children: [
    //         {
    //             path: 'projects',
    //             element: <DashboardProjects />
    //         },
    //         {
    //             path: 'add',
    //             element: <DashboardProjectsAdd />
    //         }
    //     ]
    // },
]);

export default router;
