import "./App.scss";
import Products from "./Components/Products";
import Nav from "./Components/Nav";
import DeleteItem from "./Components/DeleteItem";
import UserAccount from "./Components/UserAccount";

function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
      <UserAccount />
    </div>
  );
}

export default App;
