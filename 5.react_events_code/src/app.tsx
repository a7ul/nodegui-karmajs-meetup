import { Window, Button, hot } from "@nodegui/react-nodegui";
import React from "react";

const buttonHandler = {
  clicked: () => {
    console.log("Clicked");
  },
  pressed: () => {
    console.log("Pressed");
  }
};
class App extends React.Component {
  render() {
    return (
      <Window windowTitle="Events">
        <Button on={buttonHandler} text="Click me" />
      </Window>
    );
  }
}

export default hot(App);
