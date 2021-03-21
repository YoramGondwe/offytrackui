import React, { FunctionComponent, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Page from "../../components/Page";
import MainLayout from "../../layouts/MainLayout";
import axios from "axios";
import { AuthContext } from "../../utils/context";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export const LoginView: FunctionComponent = () => {
  const classes = useStyles();
  const { setSession } = useContext(AuthContext);
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = React.useState(false);

  return (
    <MainLayout>
      <Page className={classes.root} title="Login">
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="sm">
            <Formik
              initialValues={{
                identifier: "yoram3@domain.com",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                identifier: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
                password: Yup.string()
                  .max(255)
                  .required("Password is required"),
              })}
              onSubmit={async (values) => {
                const { data, status } = await axios.post(
                  "/auth/local",
                  values
                );
                if (status === 200) {
                  setSession({ user: data });
                  localStorage.setItem("token", data.jwt);
                  history.push("/");
                  window.location.reload();
                }
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
                touched,
                values,
              }) => (
                <Form>
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2">
                      Welcome to Offytrack
                    </Typography>
                  </Box>
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2">
                      Sign in
                    </Typography>
                  </Box>
                  {error && (
                    <Box mt={3} mb={1}>
                      <Typography
                        align="center"
                        style={{ color: "red" }}
                        variant="body1"
                      >
                        Incorrect Email/Password
                      </Typography>
                    </Box>
                  )}
                  <TextField
                    error={Boolean(touched.identifier && errors.identifier)}
                    fullWidth
                    helperText={touched.identifier && errors.identifier}
                    label="Email Address"
                    margin="normal"
                    name="identifier"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.identifier}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {isSubmitting ? "Signing In ..." : " Sign in now"}
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Don&apos;t have an account?{" "}
                    <Link
                      component={RouterLink}
                      to="/app/register"
                      variant="h6"
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      </Page>
    </MainLayout>
  );
};
