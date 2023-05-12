import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Mortgage from "./Components/Mortgage";
import Partners from "./Components/Partners";
import InNumbers from "./Components/InNumbers";
import Advantages from "./Components/Advantages";
import BestOfTheMonth from "./Components/BestOfTheMonth";
import MajorService from "./Components/MajorService";
import Reviews from "./Components/Reviews";
import Question from "./Components/Question";
import PrivateClientsAndConsultants from "./Components/PrivateClientsAndConsultants";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Mortgage/>
            <Partners/>
            <InNumbers/>
            <Advantages/>
            <BestOfTheMonth/>
            <MajorService/>
            <Reviews/>
            <Question/>
            <PrivateClientsAndConsultants/>
            <Footer/>
        </div>
    );
}

export default App;
