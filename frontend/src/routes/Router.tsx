import { Route, Routes } from 'react-router-dom';

import AppLayout from '@/layouts/AppLayout/AppLayout';
// import Path from '@/constants/path';

// import Login from '@/pages/Login/Login';
// import Dashboard from '@/pages/Dashboard/Dashboard';

const Router = () => {
  return (
    <Routes>
      {/* レイアウトなし */}
      {/* <Route path={Path.Login} element={<Login />} /> */}

      {/* レイアウトあり */}
      <Route element={<AppLayout />}>
        {/* <Route
          path={Path.Dashboard}
          element={<Dashboard />}
        /> */}
      </Route>
    </Routes>
  );
};

export default Router;
