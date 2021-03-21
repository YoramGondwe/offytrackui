import { ElementType, ReactNode } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

interface RenderProps extends Props {
  render: () => ReactNode;
}

interface ComponentProps extends Props {
  component: ElementType;
}

export type RouteProps = RenderProps | ComponentProps;
