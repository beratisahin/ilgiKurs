import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MainLogo from "../header/ilgiKursMerkezi.png";
import SettingsCell from "@material-ui/icons/SettingsCell";





import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Medisam Ağız ve Diş Sağlığı Polikliniği" alt="Tokat İlgi Kurs Merkezi">
              <img
                src={MainLogo}
                alt="logo"
                style={{ width: "30rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily:"sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Kurulduğumuz günden bu yana istikrarlı bir büyüme kaydetmiş ve her geçen gün gücüne güç katmıştır. Bu süreçte birçok meslek dalında öğrenci yetiştirmiş en seçkin öğrenci guruplarını sınava hazırlamış ve sonuçlar alarak, danışmanlık ve eğitim hizmetlerinde ön sıralarda kendine yer edinmiştir. İlgi Kurs Merkezi, alanında uzman yönetici kadrosu, eğitim koçları ve güçlü öğretmen kadrosu ile birlikte kaliteli eğitimi en sağlıklı şekilde vermeyi amaç edinmiştir.
            </p>
          </div>


          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "12px",marginBottom:"2rem"  }}>
            <b style={{ color: "#3d667c", fontSize: "18px" }}>Çalışma Takvimi</b>
            <hr/>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px"}}>
                            <td>Pazartesi</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Salı</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Çarşamba</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Perşembe</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Cuma</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Cumartesi</td>
                            <td>09:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Pazar</td>
                            <td>Kapalı</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
                   
                        <p style={{color:"red",fontSize:"13px"}}></p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#3d667c", fontWeight: "bold", fontSize: "18px" }}>
              Tokat İlgi Kurs Merkezi
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/medisamadsp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://wa.me/+905461054500"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="tel: +905422130993"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>

            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:tokatilgilkursmerkezi@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              tokatilgilkursmerkezi@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905422130993"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsCell style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0542 213 09 93  <FontAwesomeIcon icon="coffee" size="lg" />
              <br />
            <br/>
              <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +903562130993"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0356 213 09 93  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1123751275436!2d36.53736451539363!3d40.33985307937422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407db9fbf021f42f%3A0x77e8eb8ff325ac2c!2zQWx0xLF5w7x6ZXZsZXIsIMSwbWFtbMSxayBDZC4gTm86NCwgNjAyMDAgVG9rYXQgTWVya2V6L1Rva2F0!5e0!3m2!1str!2str!4v1649692137802!5m2!1str!2str"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Altıyüzevler Mah. İmamlık Cad. No:4 <br/> Merkez / Tokat{" "}

             
            </p>
          </div>

          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1123751275436!2d36.53736451539363!3d40.33985307937422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407db9fbf021f42f%3A0x77e8eb8ff325ac2c!2zQWx0xLF5w7x6ZXZsZXIsIMSwbWFtbMSxayBDZC4gTm86NCwgNjAyMDAgVG9rYXQgTWVya2V6L1Rva2F0!5e0!3m2!1str!2str!4v1649692137802!5m2!1str!2str" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905422130993" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905422130993" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}
