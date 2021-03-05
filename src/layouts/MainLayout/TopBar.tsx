import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopBar: FunctionComponent = (props: any) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          {/* <Logo /> */}
          logo here
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
