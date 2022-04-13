import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

import r2 from "./i2.jpeg";
import r3 from "./i3.jpeg";
import r4 from "./i4.jpeg";
import r6 from "./i6.jpeg";
import r8 from "./i8.jpeg";
import r11 from "./i11.jpeg";




//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    },
  };


export default function Klinik() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r2} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r3} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r4} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r6} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r8} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r11} className="owlCarouselImageKlinik" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                
              
                
                
               
              
                
                

</OwlCarousel>


            
        
    )
}

