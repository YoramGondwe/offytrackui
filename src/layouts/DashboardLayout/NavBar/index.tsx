import React, { FunctionComponent, useContext, useEffect } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  // ShoppingBag as ShoppingBagIcon,
  ShoppingCart as ShopIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
} from "react-feather";
// import { useAuthState, useAuthDispatch, logout } from 'src/Provider';
import NavItem from "./NavItem";
import { AuthContext } from "../../../utils/context";
import { coreService } from "../../../utils/api/axios";
import { useQuery } from "react-query";

const items = [
  {
    href: "/",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/request",
    icon: PackageIcon,
    title: "Request Leave",
  },
  {
    href: "/leaveTypes",
    icon: TruckIcon,
    title: "Leave Types",
  },
  {
    href: "/settings",
    icon: ShopIcon,
    title: "Settings",
  },
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: theme.spacing(30),
    height: theme.spacing(7),
  },
}));

interface NavbarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const NavBar: FunctionComponent<NavbarProps> = ({
  onMobileClose,
  openMobile,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { setSession, user } = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchOrganization = async (): Promise<any> => {
    const { data } = await coreService.get(
      `/organizations/${user?.organization}`
    );
    return data;
  };
  const { data, isLoading } = useQuery(
    `organization${user?.organization}`,
    fetchOrganization
  );
  const handleLogout = () => {
    setSession({});
    localStorage.removeItem("token");
    history.push("/login");
  };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);
  if (isLoading && !data) {
    return <p>Loading...</p>;
  }

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          variant="rounded"
          //   src={user.business_logo}
          // to="/app/account"
          to="/"
        />
        <Typography color="textPrimary" variant="h5">
          {data.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {data.email}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        // bgcolor="background.dark"
      >
        <Typography align="center" gutterBottom variant="h4" />

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            color="primary"
            component="a"
            fullWidth
            variant="outlined"
            onClick={() => handleLogout()}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
