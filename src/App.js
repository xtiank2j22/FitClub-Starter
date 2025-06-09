import "./App.css";
import Hero from './components/Hero/Hero';
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";


function App() {
  return (
    <div className="App">
    {/* the hero section */}
      <Hero />
      {/* program section */}
      <Programs/>
      {/* section for the reasons */}
      <Reasons/>
    </div>
  );
}

export default App;
