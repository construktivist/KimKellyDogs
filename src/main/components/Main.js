import React from 'react'
import { Container } from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Container>
          <h2>Main</h2>
        </Container>
      </MuiThemeProvider>
    );
  }
}
