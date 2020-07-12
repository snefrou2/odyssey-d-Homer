import React from "react";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



function App() {
  return <MuiThemeProvider  >
  <Grid  container
  alignItems='center'
  style={{ height:  '100%' }}>
      <Grid  item  xs={12} sm={10}>
          <Paper
          elevation={4}
          style={{ margin:  32 }}
          >
              <Grid  container
              alignItems='center'
              justify='center'>
                <Grid  item  xs={12}  sm={6}

style={{ 'text-align':  'center' }}>

<img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer"  />

</Grid>
                  <Grid  item  xs={12} sm={6} 
                  alignContent='center'
                  >
                    
                      <SignUp  />
                     
                  </Grid>
              </Grid>
          </Paper>
      </Grid>
  </Grid>
</MuiThemeProvider>
}

export default App;
