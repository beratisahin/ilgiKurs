import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';

import BusinessIcon from '@material-ui/icons/Business';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoodIcon from '@material-ui/icons/Mood';
import İlgiKursMerkezi from "../header/ilgiKursMerkezi.png";
export default class Navbar extends Component {
  componentDidMount () {
    const script = document.createElement("script");

  
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function () {
      this.classList.toggle("close");
    });
  

    document.body.appendChild(script);
}
  render() {
    
    return (
    
         <header>
          <nav class="navbar">
            <div class="branding">
              <a href="/anasayfa">
                <img  className="MedisamLogo" title="Medisam Ağız ve Diş Sağlığı Polikliniği" src={İlgiKursMerkezi}></img>
              </a>
                
            </div>
            <label for="input-hamburger" class="hamburger "></label>
            <input type="checkbox" id="input-hamburger" hidden></input>
        <ul class="menu">
          <li><a href="/" class="menu-link" style={{fontSize:"medium"}}><HomeIcon/>&nbsp;Ana Sayfa</a></li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><BusinessIcon/>&nbsp;Kurumsal &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/hakkimizda" class="menu-link">Hakkımızda</a></li>
            <li><a href="/belgelerimiz" class="menu-link">Belgelerimiz</a></li>
            <li><a href="/hekimlerimiz" class="menu-link">Hekimlerimiz</a></li>
            <li><a href="/referanslarimiz" class="menu-link">Referanslarımız</a></li>

              
              
            </ul>
          </li>

          
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><LocalHospitalIcon/>&nbsp;Hizmetlerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">

              <li><a href="/agiz-dis-sagligi/implant" class="menu-link">İmplant</a></li>
              <li><a href="/agiz-dis-sagligi/protetik-dis-tedavisi" class="menu-link">Protetik Diş Tedavisi</a></li>
              <li><a href="/agiz-dis-sagligi/zirkonyum-dis-kaplama" class="menu-link">Zirkonyum Diş Kaplama</a></li>
              <li><a href="/agiz-dis-sagligi/porselen-lamine" class="menu-link">Porselen Lamine</a></li>
              <li><a href="/agiz-dis-sagligi/dis-beyazlatma" class="menu-link">Diş Beyazlatma</a></li>
            
              
            </ul>
          </li>
          <li><a href="/galeri" class="menu-link" style={{fontSize:"medium"}}><CameraAltIcon/>&nbsp;Galeri</a></li>
         
          
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
