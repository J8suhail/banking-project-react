import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Cardsection from './Cardsection';
import Sectiontwo from './Sectiontwo';
import SectionThree from './SectionThree';
import Loginform from './Loginform';
import './index.css';

function Home(){
    return(
        <>
        <Header/>
        <section id="outerbox">
        <Loginform/>
        <Cardsection/>
        </section>
        <Sectiontwo/>
        <SectionThree/>
        </>
  );
}

export default Home;