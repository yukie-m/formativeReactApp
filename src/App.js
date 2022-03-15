import "./App.scss";
import Products from "./Components/Products";
import Nav from "./Components/Nav";
import UserAccount from "./Components/UserAccount";
import YourSelling from "./Components/YourSelling";

function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
    </div>
  );
}

export default App;
