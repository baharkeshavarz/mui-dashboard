import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
              <SideBar/>
              <main className="content">
                <Topbar/>
                <Routes>
                  <Route path="/" element={<Dashboard/>} />
                  <Route path="/team" element={<Team/>} />
                  <Route path="/contacts" element={<Contacts/>} />
                  <Route path="/invoices" element={<Invoices/>} />
                  <Route path="/form" element={<Form/>} />
                 </Routes>
              </main>
            </div>
       </ThemeProvider>
       </ColorModeContext.Provider>
  );
}

export default App;



/* <CssBaseline/>: reset the css to default  */