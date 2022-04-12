import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';

import BusinessIcon from '@material-ui/icons/Business';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ContactlessIcon from '@material-ui/icons/Contactless';



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
            <li><a href="/vizyonumuz" class="menu-link">Vizyonumuz</a></li>
      
              
            </ul>
          </li>

          
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><CastForEducationIcon/>&nbsp;Hizmetlerimiz &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">

              <li><a href="/agiz-dis-sagligi/implant" class="menu-link">Tecrübeli Öğretmen Kadrosu</a></li>
              <li><a href="/agiz-dis-sagligi/protetik-dis-tedavisi" class="menu-link">Profesyonel Öğrenci Koçluğu</a></li>
              <li><a href="/agiz-dis-sagligi/zirkonyum-dis-kaplama" class="menu-link">Soru Çözüm ve Etüt Saatleri</a></li>
              <li><a href="/agiz-dis-sagligi/porselen-lamine" class="menu-link">Türkiye Geneli Deneme Sınavı</a></li>
              <li><a href="/agiz-dis-sagligi/dis-beyazlatma" class="menu-link">Okul ve Ödev Takip Sistemi</a></li>
              <li><a href="/agiz-dis-sagligi/dis-beyazlatma" class="menu-link">Kaliteli Yayınlar</a></li>

            
              
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="#" class="menu-link" style={{fontSize:"medium"}}><CameraAltIcon/>&nbsp;Galeri &nbsp;
              <span class="arrow"></span>
            </a>
            <ul class="submenu">
            
            <li><a href="/fotograflar" class="menu-link">Fotoğraf</a></li>
            <li><a href="/videolar" class="menu-link">Video</a></li>
      
              
            </ul>
          </li>
         
          <li><a href="/duyurular" class="menu-link" style={{fontSize:"medium"}}><ContactlessIcon/>&nbsp;Duyurular</a></li>
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}
