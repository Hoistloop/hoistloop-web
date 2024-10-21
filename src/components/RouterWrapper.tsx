import type { PartialStoryFn, StoryContext } from "@storybook/csf";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

export default function withRouter(
  Story: PartialStoryFn,
  { parameters }: StoryContext,
) {
  const {
    initialEntries = ["/"],
    initialIndex,
    routes = ["/"],
  } = parameters?.router || {};

  const rootRoute = createRootRoute();

  const children = routes.map((path: string) =>
    createRoute({
      path,
      getParentRoute: () => rootRoute,
      component: Story,
    }),
  );

  rootRoute.addChildren(children);

  const router = createRouter({
    history: createMemoryHistory({ initialEntries, initialIndex }),
    routeTree: rootRoute,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <RouterProvider router={router} />;
}

declare module "@storybook/csf" {
  interface Parameters {
    router?: {
      initialEntries?: string[];
      initialIndex?: number;
      routes?: string[];
    };
  }
}
