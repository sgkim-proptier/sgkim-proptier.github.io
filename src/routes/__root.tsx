import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Footer from '../components/common/footer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // const routerState = useRouterState();
  // const isDisablePage = routerState.statusCode === 404;

  return (
    <>
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
