import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from '@/components/AppHeader/AppHeader';
import SideMenu from '@/components/SideMenu/SideMenu';

import {
  Content,
  Layout,
  Main,
  Root,
} from './styles';

const AppLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Root>
      <Layout>
        <SideMenu
          open={open}
          setOpen={setOpen}
        />

        <Main>
          <AppHeader setOpen={setOpen} />

          <Content>
            <Outlet />
          </Content>
        </Main>
      </Layout>
    </Root>
  );
};

export default AppLayout;