import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { contactContent } from "../../content/contact/contact";

function Sidebar() {
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Box p="10px">
        <Typography
          sx={{
            color: "#333",
            fontWeight: `600`,
            textTransform: `uppercase`,
            fontFamily: "Fjalla One",
          }}
        >
          Categories
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            ml: "4px",
            fontFamily: "Cormorant",
          }}
          onClick={preventDefault}
        >
          {contactContent.map((contact) => (
            <NavLink
              to={`/contact/${contact.key}`}
              style={({ isActive }) => ({
                color: isActive ? "#a27eaf" : "white",
              })}
            >
              <Link
                component={Typography}
                style={{
                  color: "#61456a",
                  fontFamily: "Arial",
                }}
                underline="hover"
              >
                {contact.key}
              </Link>
            </NavLink>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
