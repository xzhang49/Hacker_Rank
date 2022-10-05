import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const DateDisplay = props => (
  <Paper className="container">
    <List>
      <ListItem>
        <ListItemText>
          Day: {props.apiResponse.slice(3, 5).replace(/^0+/, "")}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Month: {props.apiResponse.slice(0, 2).replace(/^0+/, "")}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Year: {props.apiResponse.slice(6, 10)}</ListItemText>
      </ListItem>
    </List>
  </Paper>
);

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
};

export default DateDisplay;
