import Routes from "./Routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c23616",
    },
    secondary: {
      main: "#808080",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
