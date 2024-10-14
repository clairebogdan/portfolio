import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import PerfectFit from './components/pages/PerfectFit'
import InstrumentCalc from './components/pages/InstrumentCalc'
import BogdanReeds from './components/pages/BogdanReeds'
import PackageDelivery from './components/pages/PackageDelivery'
import AppointmentManager from './components/pages/AppointmentManager';
import InventoryManager from './components/pages/InventoryManager';
import PrimeNumber from './components/pages/PrimeNumber';
import Roster from './components/pages/Roster';
import Chatbot from './components/pages/Chatbot';
import Hurricane from './components/pages/Hurricane';
import Website from './components/pages/Website';
import Maryland from './components/pages/Maryland';
import BogdanReedsWeb from './components/pages/BogdanReedsWeb';
import Immuta from './components/pages/Immuta';
import PreviousCareer from './components/pages/PreviousCareer';
import ScrollToTop from './ScrollToTop';
import FreelanceOboist from './components/pages/FreelanceOboist';

function App() {
  return (
    <Router>
      <ScrollToTop>

        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/freelance-oboe' exact component={FreelanceOboist} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/perfectfit' exact component={PerfectFit} />
          <Route path='/instrumentcalc' exact component={InstrumentCalc} />
          <Route path='/bogdanreeds' exact component={BogdanReeds} />
          <Route path='/packagedelivery' exact component={PackageDelivery} />
          <Route path='/appointmentmanager' exact component={AppointmentManager} />
          <Route path='/inventorymanager' exact component={InventoryManager} />
          <Route path='/primenumber' exact component={PrimeNumber} />
          <Route path='/roster' exact component={Roster} />
          <Route path='/chatbot' exact component={Chatbot} />
          <Route path='/hurricane' exact component={Hurricane} />
          <Route path='/website-project' exact component={Website} />
          <Route path='/maryland' exact component={Maryland} />
          <Route path='/bogdanreeds-web' exact component={BogdanReedsWeb} />
          <Route path='/immuta' exact component={Immuta} />
          <Route path='/previous-career' exact component={PreviousCareer} />
        </Switch>


      </ScrollToTop>
    </Router>
  )
}

export default App;
