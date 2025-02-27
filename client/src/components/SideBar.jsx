
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
      className= {selected === title ? "text-blue-500" : "text-gray-500"}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};

const SideBar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar collapsed={isCollapsed} className="h-full min-h-screen bg-blue-100">
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              // color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h7" className="font-serif">
                  GiftHub
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              {/* */}

              <Box textAlign="center">
                <Typography
                  variant="h5"
                  // color={colors.grey[100]}
                  fontWeight="bold"
                  // sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           
            <Link to='/dashboard'>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon className="" />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>

            <Link to='presentation'>
              <Item
                title="Form"
                icon={<EditNoteOutlinedIcon className="" />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to='query'>
            <Item
                title="Table"
                icon={<TableChartOutlinedIcon className=""/>}
                selected={selected}
                setSelected={setSelected}
              />
           </Link>

           {/* <Link>
            <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
           </Link> */}

           
           
            {/* <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            
          </Box>
          
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;

