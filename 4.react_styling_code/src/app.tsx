import { Text, Window, View, Button, hot } from "@nodegui/react-nodegui";
import React from "react";
const minSize = { width: 200, height: 100 };
class App extends React.Component {
  render() {
    return (
      <Window windowTitle="Hello 👋🏽" minSize={minSize}>
        <View id="container" styleSheet={styleSheet}>
          <Text style="color: green;">Hello World</Text>
          <Button id="btn" text="Click me" />
        </View>
      </Window>
    );
  }
}

const styleSheet = `
  #container {
    padding: 5px;
    flex: 1;
    align-items: 'center';
    justify-content: 'center';
  }
  #btn:hover {
    color: orange;
  }
`;

export default hot(App);
