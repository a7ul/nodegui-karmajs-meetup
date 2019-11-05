import { Text, Window, hot } from "@nodegui/react-nodegui";
import React from "react";

const minSize = { width: 200, height: 100 };
class App extends React.Component {
  render() {
    return (
      <Window windowTitle="Hello 👋🏽" minSize={minSize}>
        <Text>Hello World</Text>
      </Window>
    );
  }
}

export default hot(App);
