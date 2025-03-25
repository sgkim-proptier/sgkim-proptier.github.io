import './styles/reset.css';
import './styles/common.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { OverlayProvider } from 'overlay-kit';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import NotFound from './components/common/notFound';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFound />;
  },
  context: { queryClient },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  // defaultViewTransition: preventDoubleTransition().onTransitionStart(),
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <OverlayProvider>
          <RouterProvider router={router} />
        </OverlayProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
