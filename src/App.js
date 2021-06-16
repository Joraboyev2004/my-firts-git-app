import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Nav'
import Footer from './Components/Footer';
import Footerr from './Components/Footerr';
const Home = lazy(()=> import('./pages/Home'));
const Portfolio = lazy(()=> import('./pages/Portfolio'))
const About = lazy(()=> import('./pages/About'))
const Services = lazy(()=> import('./pages/Services'))
const Blog = lazy(()=> import('./pages/Blog'))
const Contact = lazy(()=> import('./pages/Contact'))

function App() {
  return (
    <div className="App">
       <Suspense fallback={ <><h1 className='text-center'>404 NOT FOUND</h1></> }>
          <BrowserRouter>
          <header className='header'>
              <NavigationBar /> 
          </header>
                  <Switch>

                       <Route exact path='/' component={ Home } />
                       <Route exact path='/portfolio' component={ Portfolio } /> 
                       <Route exact path='/about' component={ About } />  
                       <Route exact path='/servicess' component={ Services } />  
                       <Route exact path='/blog' component={ Blog } />
                       <Route exact path='/contact' component={ Contact } />
                  </Switch>
            <footer className='footer'>
              <Footer />
              <Footerr />
          </footer>        
          </BrowserRouter>
       </Suspense>
    </div>
  );
}

export default App;
