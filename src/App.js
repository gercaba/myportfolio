import './App.css';
import {About} from './Componentes/About';
import {Contact} from './Componentes/Contact';
import {Navbar} from './Componentes/Navbar';
import {Projects} from './Componentes/Projects';
import {Skills} from './Componentes/Skills';
import {GeneralContextProvider } from './Context/GeneralContext';


//https://www.freecodecamp.org/espanol/news/como-crear-un-portafolio-web-con-react/

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
