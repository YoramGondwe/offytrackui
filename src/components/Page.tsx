import React, { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet";

// eslint-disable-next-line react/display-name
const Page = forwardRef(
  (
    {
      children,
      title = "",
      ...rest
    }: { children: ReactNode; title: string; className?: string },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any
  ) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);

export default Page;
