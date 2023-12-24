import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";

import Home from "@pages/Home";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <Home />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
