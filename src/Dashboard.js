import React from 'react';
import './index.css';
import './Dashboard.css';
import Header from './Header';
import SectionThree from './SectionThree';
import AddCard from'./image/AddCard.jpg';
import DashSecOne from './DashSecOne';
import DashSecTwo from './DashSecTwo';
import DashSecThree from './DashSecThree';

function  Dashboard(){
    return (
        <>
        <Header/>
        <body>
        <section id="dashboard">
        <DashSecOne/>
        <div id="rightContentD">
          <DashSecTwo/>
          <DashSecThree/>  
        </div>
        </section>
              
        </body>
        <SectionThree/>
</>

        );
    }
    
export default Dashboard;