import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button} from 'react-onsenui';

// load Onsen UI library
import 'onsenui';

class App extends React.Component {

  render() {
    return (
      <Page>
        <div>Hello from ONSENUI2!</div>
        <Button>Onsen UI Button2</Button>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
