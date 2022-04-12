import React from 'react'
import './DoktorOwl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import Ft from "./ft.PNG";
import Mt from "./mt.PNG";



//Owl Carousel Settings
const options = {
    margin: 5,
    autoplayHoverPause:true,
    responsiveClass: true,
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


export default function DoktorOwl() {
    return (
       
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={Ft} className="owlCarouselImageDoktor" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                        <p className="owlCarouselContentDoktor">Tarih Öğr. Fatma Yılmaz</p>
                        <p className="owlCarouselContentDoktorInfo">Fatma Yılmaz 2011 yılında Tokat Gazi Osman Paşa Üniversitesinden mezun olmuştur.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={Mt} className="owlCarouselImageDoktor" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                        <p className="owlCarouselContentDoktor">Fizik Öğr. Furkan Baysal</p>
                        <p className="owlCarouselContentDoktorInfo">Furkan Baysal 2010 yılında Tokat Gazi Osman Paşa Üniversitesinden mezun olmuştur. </p>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempDoktor">
                        <img src={Ft} className="owlCarouselImageDoktor" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                        <p className="owlCarouselContentDoktor">Tarih Öğr. Merve Güneş</p>
                        <p className="owlCarouselContentDoktorInfo">Merve Güneş 2011 yılında Tokat Gazi Osman Paşa Üniversitesinden mezun olmuştur.</p>
                        
                    </div>
                </div>
                    <div className="item owl-slider">
                        <div className="owlCarouselTempDoktor">
                            <img src={Mt} className="owlCarouselImageDoktor" alt="Tokat İlgi Kurs Merkezi" title="Tokat İlgi Kurs Merkezi"></img>
                        <p className="owlCarouselContentDoktor">Kimya Öğr. Ali Erdener</p>
                        <p className="owlCarouselContentDoktorInfo">Ali Erdener 2010 yılında Tokat Gazi Osman Paşa Üniversitesinden mezun olmuştur. </p>
                    </div>
                </div>
               
               
               
              
            
</OwlCarousel>


            
        
    )
}
