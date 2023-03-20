import './App.css';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import {Navbar} from './Components/Navbar';
import {Projects} from './Components/Projects';
import {Skills} from './Components/Skills';
import {GeneralContextProvider } from './Context/GeneralContext';

function App() {
  return (
    <main >
<GeneralContextProvider>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
</GeneralContextProvider>

    </main>
  );
}

export default App;
