import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from './components/Hero/Hero';
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
    {/* the hero section */}
      <Hero />
      {/* program section */}
      <Programs/>
      {/* section for the reasons */}
      <Reasons/>
      {/* section for plans */}
      <Plans/>
      {/* section for testimonials */}
      <Testimonials/>
      {/* section for join */}
      <Join/>
      {/* section for footer */}
      <Footer/>

    </div>
  );
}

export default App;
