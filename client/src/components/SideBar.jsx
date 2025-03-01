
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';


const Item = ({ title, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [active, setActive] = useState(false)
  
  return (
    <MenuItem
      active={selected === title}
      className= {selected === title ? "text-blue-500" : "text-gray-400 hover:text-black"}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor="hsl(225, 39%, 13%)"
        className="h-full min-h-screen"
      >
        <Menu>
          <div className="p-4 flex justify-between items-center text-white">
            {!isCollapsed && (
              <Typography variant="h7" className="font-serif text-yellow-200" style={{ fontFamily: "cursive" }}>
                GiftHub
              </Typography>
            )}
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon className="text-white" />
            </IconButton>
          </div>

          {!isCollapsed && (
            <Box mb="25px" textAlign="center">
              <Typography variant="h5" fontWeight="bold" color="white">
                Ed Roh
              </Typography>
            </Box>
          )}

          {/* 🔹 Sidebar Menu Items with Hover Effect */}
          <Box paddingLeft={isCollapsed ? "" : "10%"}>
            <Link to="/dashboard">
              <Item
                title="Dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="presentation">
              <Item
                title="Form"
                icon={<EditNoteOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="query">
              <Item
                title="Table"
                icon={<TableChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};



export default SideBar;

