import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";

import Home from "@pages/Home";
import PageLayout from "@components/PageLayout";
import ServicesPage from "@pages/Services";
import CareersPage from "./pages/Careers";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <PageLayout>
        <Outlet />
      </PageLayout>
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

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: function Services() {
    return <ServicesPage />;
  },
});
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function Services() {
    return <AboutPage />;
  },
});
const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: function Services() {
    return <ContactPage />;
  },
});
const careersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: function Services() {
    return <CareersPage />;
  },
});
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  careersRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
