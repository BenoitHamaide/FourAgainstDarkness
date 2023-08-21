import "./App.scss"
import Header from "./Components/Header/Header";
import Personnages from "./Components/Personnages/Personnages";
import ScrollToBottomButton from "./Components/ScrollToBottomButton/ScrollToBottomButton"
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <ScrollToBottomButton />
      <Header />
      <Personnages />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
