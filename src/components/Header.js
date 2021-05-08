import React from "react";
import { Button } from "semantic-ui-react";
const Header = ({ toggle }) => {
  return (
    <div>
      <img src={"shoppies-logo.png"} alt="logo"></img>
      <Button
        color="green"
        icon="heart"
        onClick={(e, data) => {
          toggle();
        }}
      />
    </div>
  );
};

export default Header;
