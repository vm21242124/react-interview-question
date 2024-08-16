
import './App.css'

import React, { lazy } from 'react'
import { LazyLoadingEg } from './concepts/LazyLoading';
import { CostumHooksEg } from './concepts/CustomHooks';
import { CounterContextWrapper } from './concepts/CounterContext';
import ContextFetching from './concepts/ContextFetching';
import { Provider } from 'react-redux';
import Contercmp from './concepts/Contercmp';
import { store } from './concepts/Redux';
import Navbar from './ui/common/LeftMenu/Navbar';
import Hero from './ui/common/LeftMenu/Hero';
const About = lazy(()=>import('./ui/common/LeftMenu/About'));
const Contact = lazy(()=>import( './ui/common/LeftMenu/Contact'));
const ClassBasedComponents =lazy(()=>import('./concepts/ClassBasedComponents'));

const Services = lazy(()=>import("./ui/common/LeftMenu/Services"))



function App() {
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
  }

  return (
    <>
    {/* <CounterContextWrapper>
      <LazyLoadingEg/>
      <CostumHooksEg/>
      <ContextFetching/>
    </CounterContextWrapper>

    <Provider store={store}>
      <Contercmp/>
    </Provider> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Contact/>

    {/* <ClassBasedComponents title="Passed by props"/> */}
    </>
  )
}



export default App
