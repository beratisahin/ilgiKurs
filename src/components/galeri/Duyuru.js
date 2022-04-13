import "./Duyuru.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import rsm from "./i7.jpeg";

export default function Duyuru() {
    useDocumentTitle('Duyurular - Tokat İlgi Kurs Merkezi');
    return (
        <div className="col-12" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px",margin:"1rem"}}>
            
               <Title 
                    page_title="Duyurular"
               />
                <br/>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"50rem",marginBottom:"1.5rem"}}>
                        <img src={rsm} className="d-block img-responsive blogPhoto" title="" alt="" ></img>
                        <h4 className="blogTitle">Kayıt Başvurusu Hk</h4>
                            <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Kurslarımızın kontenjanı sınırlı sayıda olup başvurunun fazla olması durumunda kayıtlar başvuru önceliğine göre yapılacaktır.  Kurslar açılmadan önce tarafınıza mutlaka bilgilendirme mesajı gönderilecektir.
                                    Lütfen katılmayacağınız bir kursa ön kayıt işlemi yapmayınız. 
                                    2020 - 2021 Eğitim Öğretim yılında Çelebi Kurs Merkezimiz ve Karatay ilçemiz sınırları içerisinde bulunan diğer kurs merkezlerimizde açacağımız kurslara ön kayıt işleminizi aşağıdaki linke tıklayarak yapabilirsiniz.</p>
                            </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"50rem",marginBottom:"1.5rem"}}>
                        <img src={rsm} className="d-block img-responsive blogPhoto" title="" alt="" ></img>
                        <h4 className="blogTitle">Kayıt Başvurusu Hk</h4>
                            <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Kurslarımızın kontenjanı sınırlı sayıda olup başvurunun fazla olması durumunda kayıtlar başvuru önceliğine göre yapılacaktır.  Kurslar açılmadan önce tarafınıza mutlaka bilgilendirme mesajı gönderilecektir.
                                    Lütfen katılmayacağınız bir kursa ön kayıt işlemi yapmayınız. 
                                    2020 - 2021 Eğitim Öğretim yılında Çelebi Kurs Merkezimiz ve Karatay ilçemiz sınırları içerisinde bulunan diğer kurs merkezlerimizde açacağımız kurslara ön kayıt işleminizi aşağıdaki linke tıklayarak yapabilirsiniz.</p>
                            </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"50rem",marginBottom:"1.5rem"}}>
                        <img src={rsm} className="d-block img-responsive blogPhoto" title="" alt="" ></img>
                        <h4 className="blogTitle">Kayıt Başvurusu Hk</h4>
                            <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Kurslarımızın kontenjanı sınırlı sayıda olup başvurunun fazla olması durumunda kayıtlar başvuru önceliğine göre yapılacaktır.  Kurslar açılmadan önce tarafınıza mutlaka bilgilendirme mesajı gönderilecektir.
                                    Lütfen katılmayacağınız bir kursa ön kayıt işlemi yapmayınız. 
                                    2020 - 2021 Eğitim Öğretim yılında Çelebi Kurs Merkezimiz ve Karatay ilçemiz sınırları içerisinde bulunan diğer kurs merkezlerimizde açacağımız kurslara ön kayıt işleminizi aşağıdaki linke tıklayarak yapabilirsiniz.</p>
                            </div>
                </div>
           

                <br/>

                
            
        </div>
    )
}