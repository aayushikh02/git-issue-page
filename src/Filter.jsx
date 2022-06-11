import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuItem from "@mui/material/MenuItem";

const FilterOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const filters = [
    "Author",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ];

  return (
    <div xs={12} md={6}>
      {filters.map((filter) => {
        return (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
            >
              {filter}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Newest</MenuItem>
              <MenuItem onClick={handleClose}>Oldest</MenuItem>
            </Menu>
          </>
        );
      })}
    </div>
  );
};

export default FilterOptions;
