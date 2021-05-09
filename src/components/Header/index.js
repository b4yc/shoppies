import React from "react";
import { Button, Icon, Grid } from "semantic-ui-react";
import "./styles.scss";

const Header = ({ toggle }) => {
  return (
    <Grid columns={2} className="header">
      <Grid.Column floated="left">
        <img src={"shoppies-logo.png"} alt="logo" className="logo"></img>
      </Grid.Column>
      <Grid.Column floated="right">
        <div>
          <Button
            icon
            labelPosition="right"
            animated="vertical"
            floated="right"
            size="large"
            onClick={(e, data) => {
              toggle();
            }}
            style={{
              backgroundColor: "#084c44",
              color: "white",
              padding: "10px",
            }}
          >
            Your Nominations
            <Icon name="heart" />
          </Button>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Header;
