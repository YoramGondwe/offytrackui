import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Page from "../components/Page";
import DashboardLayout from "../layouts/DashboardLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));
export const Dashboard: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title="Dashboard">
        dashboard jhhj
      </Page>
    </DashboardLayout>
  );
};
