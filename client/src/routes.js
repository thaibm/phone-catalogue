import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import PhoneList from 'src/pages/PhoneList';
import NotFound from 'src/pages/NotFound';
import PhoneDetail from 'src/pages/PhoneDetail';
import PhoneCreate from 'src/pages/PhoneCreation';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'phones', element: <PhoneList /> },
      { path: 'phones/detail/:id', element: <PhoneDetail /> },
      { path: 'phones/create', element: <PhoneCreate /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
