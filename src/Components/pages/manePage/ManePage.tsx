import React from "react";
import Header from "../../Header";
import {RoutesNavLink} from "../../../routes/RoutesNavLink/RoutesNavLink";
import Mortgage from "../../Mortgage";
import Partners from "../../Partners";
import InNumbers from "../../InNumbers";
import Advantages from "../../Advantages";
import BestOfTheMonth from "../../BestOfTheMonth";
import MajorService from "../../MajorService";
import Reviews from "../../Reviews";
import Question from "../../Question";
import PrivateClientsAndConsultants from "../../PrivateClientsAndConsultants";
import Footer from "../../Footer";



const ManePage = () => {
  return(
      <div>
          <Header/>
          <RoutesNavLink />
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
  )
}

export default ManePage