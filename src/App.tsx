import "./App.css";
import LayoutContainer from "./components/layout-container/LayoutContainer";
import Routing from "./core/routing/Routing";

function App() {
  return (
    <LayoutContainer>
      <Routing />
    </LayoutContainer>
  );
}

export default App;
