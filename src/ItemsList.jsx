import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import moment from "moment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilterOptions from "./Filter";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import userImage from "./images/user.jpg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Badge from "@mui/material/Badge";

const ItemsList = () => {
  const mapStatus = {
    open: "opened",
    close: "closed",
  };

  const mapColor = {
    e7e7e7: "primary",
    "9149d1": "secondary",
    d4c5f9: "info",
  };

  const [issues, setIssues] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => res.json())
      .then((data) => setIssues(data));
  }, []);

  const convertTime = (date) => {
    return moment(date).fromNow();
  };

  return (
    <Box sx={{ border: "1px solid", borderColor: "divider", margin: "4%" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper", paddingTop: 0 }}>
        <ListItem
          alignItems="flex-start"
          secondaryAction={<FilterOptions />}
          sx={{ background: "#f4f9f9" }}
        >
          <ListItemAvatar sx={{ marginTop: "5px", minWidth: "35px" }}>
            <AdjustOutlinedIcon />
          </ListItemAvatar>
          <ListItemText primary={`${issues?.length} Open`} />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          className="divider"
          sx={{ marginLeft: 0 }}
        />
        {issues &&
          issues.map((item) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar sx={{ minWidth: "35px" }}>
                    <AdjustOutlinedIcon color="success" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Grid container spacing={2}>
                          <Grid item xs={11}>
                            {item.title}
                            {item.labels &&
                              item.labels.map((label) => {
                                return (
                                  <Chip
                                    sx={{ marginLeft: "10px" }}
                                    label={label.name}
                                    color={mapColor[label.color] || "error"}
                                    size="small"
                                  />
                                );
                              })}
                          </Grid>
                          <Grid item xs={1}>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <ListItemAvatar>
                                  <Avatar
                                    alt="Remy Sharp"
                                    src={userImage}
                                    sx={{ width: "25px", height: "25px" }}
                                  />
                                </ListItemAvatar>
                              </Grid>
                              <Grid item xs={6}>
                                {item.comments > 0 && (
                                  <Badge
                                    badgeContent={item.comments}
                                    color="primary"
                                  >
                                    <ChatBubbleOutlineIcon />
                                  </Badge>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        #{item.number} {mapStatus[item.state]}{" "}
                        {convertTime(item.created_at)} by {item.user.login}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className="divider"
                  sx={{ marginLeft: 0 }}
                />
              </>
            );
          })}
      </List>
    </Box>
  );
};

export default ItemsList;
