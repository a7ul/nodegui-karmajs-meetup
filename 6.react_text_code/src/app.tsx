import { Window, Text, View, hot } from "@nodegui/react-nodegui";
import React from "react";
const minSize = { width: 200, height: 500 };
class App extends React.Component {
  render() {
    return (
      <Window windowTitle="Text" minSize={minSize}>
        <View styleSheet={styleSheet}>
          <Text>Simple Text 💁🏻‍</Text>

          <Text>{`2*2*2 = 2<sup>3</sup>`}</Text>

          <Text>{`
          <html>
            <ul>
              <li> Hello </li>
              <li> World </li>
            </ul>
          </html>
          `}</Text>
        </View>
      </Window>
    );
  }
}

const styleSheet = `
  QLabel {
    font-size: 24px;
    qproperty-alignment: AlignCenter;
    padding: 10px;
  }  
`;

export default hot(App);
