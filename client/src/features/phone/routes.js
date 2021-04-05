// import { NavLink} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import PhoneList from 'src/features/phone/pages/list/PhoneList';
import NotFound from 'src/features/phone/pages/NotFound';
import PhoneDetail from 'src/features/phone/pages/detail/PhoneDetail';
import PhoneCreatePage from 'src/features/phone/pages/creation/PhoneCreationPage';

const routes = [
  {
    path: '',
    element: <DashboardLayout />,
    children: [
      { path: '/phones', element: <PhoneList /> },
      { path: '/phones/detail/:id', element: <PhoneDetail /> },
      { path: '/phones/create', element: <PhoneCreatePage /> },
      { path: '/', exact: true, element: <Navigate to="/phones" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
