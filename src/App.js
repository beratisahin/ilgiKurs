import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/kurumsal/hakkimizda/Hakkimizda";
import Belgerimiz from "./components/kurumsal/belgelerimiz/Belgelerimiz";
import Iletisim from "./components/iletisim/ContactForm";

import Implant from "./components/hizmetler/Implant";
import Ogretmen from "./components/hizmetler/Ogretmen";
import Ogrenci from "./components/hizmetler/Ogrenci";
import Soru from "./components/hizmetler/Soru";
import Sinav from "./components/hizmetler/Sinav";
import Odev from "./components/hizmetler/Odev";
import Yayin from "./components/hizmetler/Yayin";

import Fotograf from "./components/galeri/Fotograf";
import Video from "./components/galeri/Video.js";
import Duyuru from "./components/galeri/Duyuru.js";




function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          
           
          
            
            <Navbar />
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/anasayfa" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/vizyonumuz" component={Belgerimiz} />
            
            

            <Route path="/agiz-dis-sagligi/implant" component={Implant} />
            <Route path="/tecrubeli-ogretmen-kadrosu" component={Ogretmen} />
            <Route path="/profesyonel-ogrenci-koclugu" component={Ogrenci} />
            <Route path="/soru-cozum-ve-etut-saatleri" component={Soru} />
            <Route path="/turkiye-geneli-deneme-sinavi" component={Sinav} />
            <Route path="/okul-ve-odev-takip-sistemi" component={Odev} />
            <Route path="/kaliteli-yayinlar" component={Yayin} />


            <Route path="/fotograflar" component={Fotograf} />
            <Route path="/videolar" component={Video} />
            <Route path="/duyurular" component={Duyuru} />


            
            <Route path="/iletisim" component={Iletisim} />

          
           
          </Switch>
          
         
          <hr className="footerHr"/>
          <div className="col-12">
            <Foooter />
          </div>
          
          
        </div>
      </div>
    </Router>
  );
}

export default App;

