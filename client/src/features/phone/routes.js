// import { NavLink} from 'react-router-dom';
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
      { path: '', element: <PhoneList /> },
      { path: '/detail/:id', element: <PhoneDetail /> },
      { path: '/create', element: <PhoneCreatePage /> },
      { path: '404', element: <NotFound /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // {
  //   path: '/',
  //   element: <DashboardLayout />,
  //   children: [
  //     { path: '404', element: <NotFound /> },
  //     // { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // }
];

export default routes;
