import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Slider from "../slider/Slider";
import DoktorOwl from "../doktorlar/DoktorOwl.js";
import Klinik from "../klinik/Klinik.js";

import Test from "../test/Test";


import TopluHizmet from "../topluhizmet/TopluHizmet.js";


function Home() {
  return (
    <div>
 
      <div className="col-12 homepageSlider" style={{width:"80%",justifyContent:"center",margin:"auto"}}>
        <p className="acilDurumMobil" style={{display:"none"}}>Kayıtlarımız başlamıştır</p>
         <Slider/>  
      </div>
      
      <div className="col-12">
            <NedenBercislina/>
      </div>
      
      <br/>
      <hr/>
      <div className="row">
        <TopluHizmet/>
      </div>
        
      {/* <hr/>
      <div className="col-12">
        <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#3d667c",fontFamily: "'Times New Roman', Times, serif;"}}>Öğretmenlerimiz</h2>
        <DoktorOwl/> 
        
      </div> */}
      
      <br/>
      <hr/>
      <div className="col-12">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#3d667c",fontFamily: "'Times New Roman', Times, serif;"}}>Sınıflarımız</h2>
         <Klinik/>
      </div>
     
      
      <br/>
      <hr/>
      
      <div className="col-12">
            <Mail/>
      </div>
      <br/>
      <div className="row m-2">
         

          <div className="col-lg-12  col-12 harita" style={{marginTop:"2.5rem"}}>
                    <p className="harita_baslik">Lokasyonumuz</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1123751275436!2d36.53736451539363!3d40.33985307937422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407db9fbf021f42f%3A0x77e8eb8ff325ac2c!2zQWx0xLF5w7x6ZXZsZXIsIMSwbWFtbMSxayBDZC4gTm86NCwgNjAyMDAgVG9rYXQgTWVya2V6L1Rva2F0!5e0!3m2!1str!2str!4v1649692137802!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #2E6772 solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
                
          </div> 

      </div>

    </div>
  );
}

export default Home;
