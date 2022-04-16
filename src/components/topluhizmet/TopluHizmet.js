import React from 'react';
import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";


import m1 from "./hizmetFotolar/m1.jpeg";
import m2 from "./hizmetFotolar/m2.jpeg";
import m3 from "./hizmetFotolar/m3.jpeg";
import m4 from "./hizmetFotolar/m4.PNG";
import m5 from "./hizmetFotolar/m5.jpeg";
import m6 from "./hizmetFotolar/m6.jpeg";


export default function TopluHizmet() {
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"-2rem"}}>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Tecrübeli Öğretmen Kadrosu"
                    taslakphoto={m1}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/tecrubeli-ogretmen-kadrosu"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Profesyonel Öğrenci Koçluğu"
                    taslakphoto={m2}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/profesyonel-ogrenci-koclugu"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Soru Çözüm ve Etüt Saatleri"
                    taslakphoto={m3}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/soru-cozum-ve-etut-saatleri"
                />      
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Türkiye Geneli Deneme Sınavı"
                    taslakphoto={m4}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/turkiye-geneli-deneme-sinavi"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Okul ve Ödev Takip Sistemi"
                    taslakphoto={m5}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/okul-ve-odev-takip-sistemi"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Kaliteli Yayınlar"
                    taslakphoto={m6}
                    taslaktext="Geleceğinizle 'İLGİ'leniyoruz. İLGİ kazandırır... İLGİde kayıt zamanı... ERKEN KAYIT avantajlarımız başlamıştır..."
                    taslaklink="/agiz-dis-sagligi/kanal-ve-dolgu-tedavisi"
                />
            </div>
            

        </div>
        

    

    )
}
