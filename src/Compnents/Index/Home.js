import React, { Component } from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";

function Home (){
 const getData =(data) => {
      console.log(data)
   }

   
        return (
            <div>
                <Header />
                <Login onSubmit={getData} />
            </div>
        );
   
}

export default Home;