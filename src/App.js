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

import Implant from "./components/hizmetler/agiz-dis-sagligi/Implant";
import Protetik from "./components/hizmetler/agiz-dis-sagligi/Protetik";
import Zirkonyum from "./components/hizmetler/agiz-dis-sagligi/Zirkonyum";
import Porselen from "./components/hizmetler/agiz-dis-sagligi/Porselen";
import Beyazlatma from "./components/hizmetler/agiz-dis-sagligi/Beyazlatma";
import Ortodonti from "./components/hizmetler/agiz-dis-sagligi/Ortodonti";
import Pedodonti from "./components/hizmetler/agiz-dis-sagligi/Pedodonti";
import Kanal from "./components/hizmetler/agiz-dis-sagligi/Kanal";
import Periodontoloji from "./components/hizmetler/agiz-dis-sagligi/Periodontoloji";
import Dijital from "./components/hizmetler/agiz-dis-sagligi/Dijital";



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
            <Route path="/agiz-dis-sagligi/protetik-dis-tedavisi" component={Protetik} />
            <Route path="/agiz-dis-sagligi/zirkonyum-dis-kaplama" component={Zirkonyum} />
            <Route path="/agiz-dis-sagligi/porselen-lamine" component={Porselen} />
            <Route path="/agiz-dis-sagligi/dis-beyazlatma" component={Beyazlatma} />
            <Route path="/agiz-dis-sagligi/ortodonti" component={Ortodonti} />
            <Route path="/agiz-dis-sagligi/pedodonti" component={Pedodonti} />
            <Route path="/agiz-dis-sagligi/kanal-ve-dolgu-tedavisi" component={Kanal} />
            <Route path="/agiz-dis-sagligi/periodontoloji" component={Periodontoloji} />
            <Route path="/agiz-dis-sagligi/dijital-dis-hekimligi" component={Dijital} />

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

