import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import Overview from "./Overview";
import Developer from "./Developer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Overview />
      <Developer />
    </div>
  );
}
