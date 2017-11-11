import React from 'react'
import { Container } from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Admin extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Container>
          <h2>Admin</h2>
        </Container>
      </MuiThemeProvider>
    );
  }
}
