import React, { useRef } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Simulation } from './components/Simulation'
import { Datavisuals } from './components/Datavisuals';
import { Simulator } from './components/SimulatorPage';



function App() {
  const statisticsRef = useRef(null);
  return (
    /*     <div>
      <Navbar />
      <Hero />
      <Statistics />
      <Simulation />
      <Routes>
        <Route path="/data" element={<Datavisuals />} />
      </Routes>
    </div>*/
    < Router >

      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero scrollToStatistics={() => statisticsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
            <div ref={statisticsRef}><Statistics /></div>

            <Simulation />
          </>
        } />

        <Route path="/data" element={<Datavisuals />} />

        <Route path='/sumlator' element={<Simulator />}/>
      </Routes>
    </Router >

  );

}

export default App;
