import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import { Box, styled } from "@mui/material";

const MainLayout = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
