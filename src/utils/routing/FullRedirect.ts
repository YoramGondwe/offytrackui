import { FunctionComponent } from "react";

interface Props {
  to: { pathname: string; search?: string };
}

/**
 * Like the Redirect component from react-router
 * except that it does a full window-level redirect
 */
export const FullRedirect: FunctionComponent<Props> = (props) => {
  const {
    to: { pathname, search = "" },
  } = props;

  window.location.replace(`${pathname}${search}`);

  return null;
};
