import "./App.scss";
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
    <div>
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              direction="right"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="large"
              style={{ backgroundColor: "#084c44" }}
            >
              <Cart toggle={toggleVisible} />
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
              <div className="App">
                <Grid>
                  <Grid.Column>
                    <Grid.Row>
                      <Header toggle={toggleVisible} />
                    </Grid.Row>
                    <Grid.Row>
                      <Search toggle={toggleVisible} />
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
