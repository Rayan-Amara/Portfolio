import React from "react";

import "./App.css";
import Navbar from './navbar';

import Intro from './intro';
import Partners from './partnes';
import Statistic from './statistic';
import Country from './country';
import Footer from './footer'

const tab = [
  {
  image:"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
   },
  {
    titre: "About us"
  },
  {
    titre: "Services"
    
  },
  {
    titre: "Departement",soustab: ["for entrepreneur", "for students", "for hobbyists"]
  }
];
const card =[
  {
    class:'box-1',
    span:'For patient',
    paragraph:'Find a doctor, book a visit and solve any health-related doubt',
    option:['CHOOSE COUNTRY','Argentina','Australia', 'Brazil', 'Chile',"Colombia", "Czech"],
    image:'https://www.docplanner.com/img/screen-marketplace@2x.png'
  },
  {
    class:'box-2',
    span:'For doctors',
    paragraph:'Save time managing visits and cut no-shows by half',
    image:'https://www.docplanner.com/img/screen-saas@2x.png'
  }]

const statCard=[
  {
    class:'item-1',
    icon:'https://www.docplanner.com/img/flag.png',
    titre:'Leader in 10countries',
    paragraph:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
  },
  {
    class:'item-1',
    icon:'https://www.docplanner.com/img/patients.png',
    titre:'30 million unique patients',
    paragraph:'visit us every month'
  },
  {
    class:'item-1',
    icon:'https://www.docplanner.com/img/visits.png',
    titre:'1.5 million appointments',
    paragraph:'booked last month'
  },
  {
    class:'item-1',
    icon:'https://www.docplanner.com/img/doctors.png',
    titre:'2 million active doctors',
    paragraph:'trust in our solutions'
  }
]
const country=[
  {
    image:"https://www.docplanner.com/images/warsaw.png",
    titre:'Warsaw',
    btn:'SEE OPENINGS',
    hover:'https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x',
   class:"image-line"
  },
  {
    image:"https://www.docplanner.com/images/barcelona.png",
    titre:'Barcelone',
    btn:'SEE OPENINGS',
    hover:'https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x',
    class:"image-line"
  },
  {
    image:"https://www.docplanner.com/images/istanbul.png",
    titre:'Istanbul',
    btn:'SEE OPENINGS',
    hover:'https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x'
    ,class:"image-line"

  },
  {
    image:"https://www.docplanner.com/images/rome.png",
     titre:'Rome',
    btn:'SEE OPENINGS',
    hover:'https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x'

  },
  {
    image:"https://www.docplanner.com/images/mexico-city.png",
    titre:'Mexico City',
    btn:'SEE OPENINGS',   
   hover:'https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x'

  },
  {
    image:"https://www.docplanner.com/images/cuiritiba.png",
    titre:'Curitiba',
    btn:'SEE OPENINGS',
    hover:'https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x'
  }]


function App() {
  return (
    <div>
      <Navbar tab={tab} />
      <Intro tabcards={card} />
      <Partners />
      <Statistic tabstatCard={statCard} />
      <Country  tabCountry={country} />
      <Footer />

    </div>
  );
}

export default App;
