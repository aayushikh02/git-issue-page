import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import ItemsList from "./ItemsList";
const tabs = {
  Code: <CodeIcon />,
  Issues: <AdjustOutlinedIcon />,
};
const GitIssuePage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={{ background: "#f4f9f9" }}
        indicatorColor="primary"
        value={1}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        {Object.keys(tabs).map((key) => {
          return <Tab label={key} icon={tabs[key]} iconPosition="start" />;
        })}
      </Tabs>
      <ItemsList />
    </Box>
  );
};

export default GitIssuePage;
