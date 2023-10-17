import AppContent from "../AppContent/AppContent";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

  return (
    <Router >

      <AppHeader />
      <AppContent />
      <AppFooter />

    </Router>
  )
}

export default App;