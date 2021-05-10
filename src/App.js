import "./App.scss";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu, Sidebar } from "semantic-ui-react";

// import components
import Header from "./components/Header";
import Search from "./components/Search";
import Cart from "./components/Cart";

function App() {
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
              width="wide"
              style={{ backgroundColor: "#084c44" }}
            >
              <Cart toggle={toggleVisible} />
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
              <div className="App">
                <Grid>
                  <Grid.Column>
                    <Grid.Row data-testid="header">
                      <Header toggle={toggleVisible} />
                    </Grid.Row>
                    <Grid.Row data-testid="search">
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
