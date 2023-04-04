import * as React from 'react';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import './App.css'

export default function MyApp() {
  return (
    <div className='App-Main'>
      <Header/>
      <div className='MT-16'/>
      <Banner/>
      <Footer/>
    </div>
  );
}
