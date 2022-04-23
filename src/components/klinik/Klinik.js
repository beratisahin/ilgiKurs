import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

import r1 from "./s1.jpeg";
import r2 from "./s2.jpeg";
import r3 from "./s3.jpeg";
import r4 from "./s4.jpeg";
import r5 from "./s5.jpeg";
import r6 from "./s6.jpeg";
import r7 from "./s7.jpeg";
import r8 from "./s8.jpeg";
import r9 from "./s9.jpeg";
import r10 from "./s10.jpeg";
import r11 from "./s11.jpeg";
import r12 from "./s12.jpeg";




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
        <div class="col-12">
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r1} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r2} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r3} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r4} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r5} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r6} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r7} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r8} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r9} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r10} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r11} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={r12} className="owlCarouselImageKlinik" loading="lazy" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                    </div>
                </div>
             
                
            </OwlCarousel>
        </div>

            
        
    )
}

