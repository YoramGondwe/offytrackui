import React, { FunctionComponent, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
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
  User as UserIcon,
  Globe as GlobeIcon,
  Layers as LayersIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
} from "react-feather";
// import { useAuthState, useAuthDispatch, logout } from 'src/Provider';
import NavItem from "./NavItem";

const items = [
  {
    href: "/",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/inventory",
    icon: PackageIcon,
    title: "Inventory",
  },
  {
    href: "/app/orders",
    icon: TruckIcon,
    title: "Orders",
  },
  {
    href: "/app/shops",
    icon: ShopIcon,
    title: "Shops",
  },
  {
    href: "/app/agents",
    icon: UserIcon,
    title: "Agents",
  },
  {
    href: "/app/regions",
    icon: GlobeIcon,
    title: "Regions",
  },
  {
    href: "/app/shoptypes",
    icon: LayersIcon,
    title: "Shop Types",
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
  //   const history = useHistory();
  //   const dispatch = useAuthDispatch();
  //   const { user } = useAuthState();
  const user = {
    business_name: "the names",
    email: "yoramemail",
  };

  //   const handleLogout = () => {
  //     logout(dispatch);
  //     history.push('/app/login');
  //   };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

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
          {user.business_name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.email}
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
            onClick={() => console.debug()}
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

// NavBar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool,
// };

// NavBar.defaultProps = {
//   onMobileClose: () => {},
//   openMobile: false,
// };

export default NavBar;
