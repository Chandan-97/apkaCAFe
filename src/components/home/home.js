import * as React from 'react';
import Header from '../header/header'
import Banner from '../banner/banner'
import Footer from '../footer/footer'
import './home.css'

export default function Home() {
    return (
        <div className='Home-Main'>
            <Header />
            <div className='MT-16' />
            <Banner />
            <Footer />
        </div>
    );
}