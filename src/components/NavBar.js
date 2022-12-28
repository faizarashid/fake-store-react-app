import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartIcon from "../assets/cart.svg";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Home", "Products", "Contact", "login"];

function NavBar(props) {
  const [toggle, setToggle] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector((state) => {
    console.log(state);
    return state.CartReducer.cartItems;
  });
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Store
      </Typography>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink to="/home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="product" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink to="/products" />
          </ListItemButton>
        </ListItem>
        <ListItem key="About" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink to="/about" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const CartCircle = styled.div`
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #13122e;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85em;
    @media (max-width: 500px) {
      position: initial;
    }
  `;
  const NavCartItem = styled.div`
    position: relative;
    img {
      @media (max-width: 500px) {
        display: none;
      }
    }
  `;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <NavLink to={"/" + item}>{item}</NavLink>
              </Button>
            ))}
          </Box>
          <NavLink to="/cart" onClick={() => setToggle(!toggle)}>
            <p>Cart</p>
            <i className="fas fa-shopping-cart"></i>
            <NavCartItem>
              <img src={CartIcon} alt="Shopping cart" />
              {/* If the number of cartItems is greater than 0, display the
                    number of items in the cart */}
              {cartItems.length > 0 && (
                <CartCircle>{cartItems.length}</CartCircle>
              )}
            </NavCartItem>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
