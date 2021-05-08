import "./App.css";
import React, { useContext, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Checkbox,
  Grid,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";
import { CartContext } from "./components/CartProvider";
import { clearCart } from "./cartReducer";

// import components
import Header from "./components/Header";
import Search from "./components/Search";
import Cart from "./components/Cart";

function App() {
  const { cart, dispatch } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Header toggle={toggleVisible} />
      </Grid.Column>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="scale down"
            direction="right"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Cart />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic className="App">
              <Search />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default App;
