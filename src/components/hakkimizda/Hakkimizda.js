
import './hakkımızda.css';
import React from 'react';
import useDocumentTitle from '../../useDocumentTitle';
import Title from "../title/Title";

function Hakkimizda() {
    useDocumentTitle('Hakkımızda - Tokat İlgi Kurs Merkezi');
    return (
        
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Hakkımızda"
               />
                
                <div className="card-body col-12">
                    <br/>
                    <h4 style={{color:"#ef3a23"}}>Hikayemiz</h4>
                    <p class="hizmet-text" >“Hiçbir Başarı Tesadüf Değildir.”

Tokat İlgi Kurs Merkezinin öyküsü. Anadolu’nun şirin bir kenti olan Tokat'ta kurulmuştur. Tokat İlgi Kursu Merkezi, kurulduğu günlerde inanıyordu “hiçbir başarının tesadüf olmadığına...” Bu mütevazı başlangıcın ciddi bir eğitim kervanına dönüşeceğine... Ülkenin dört bir yanında bir eğitim meşalesi tutuşturacağına... Türkiye’nin en ücra köşelerine kadar ulaşacağına... Bu inançla çıktı yola…

Tokat İlgi Kurs Merkezi; gelecekte ülkemizin dört bir yanında yer alıp güzel Türkiyemizi uluslararası platformlarda başarılı bir şekilde bizleri temsil edecek öğrencilerin yetiştirilmesinde bütün gayretiyle eğitim vermeye ve fedakarlık yapmaya devam edecektir.</p>     
                 
                <h4 style={{color:"#ef3a23"}}>Vizyonumuz</h4>
                <p class="hizmet-text">
                    
                        Her yerde ve her zaman başarılı olacak, Geleceği şimdiden hazır, 21. yüzyılın;
                        <ul style={{paddingLeft:"4rem"}}>
                            <li>Yaratıcı,</li>
                            <li>Dünyaya uyumlu,</li>
                            <li>Sorunlara çözüm üreten,</li>
                            <li>Girişken,</li>
                            <li>Yurtsever,</li>
                            <li>Yüksek donanımlı,</li>
                            <li>Üretken,</li>
                            <li>Dinamik,</li>
                            <li>Öğrenmeyi seven,</li>
                        </ul>
  Bireylerin yetiştirildiği bir kurum olmaktır. </p>
                <h4 style={{color:"#ef3a23"}}>Misyonumuz</h4>
                <p class="hizmet-text">
                    <ul style={{paddingLeft:"4rem"}}>
                        <li>Öğrencilerimizin; kendine güvenen, ideallerini gercekleştirmaye istekli, toplum içinde başkalarının hak ve özgürlüklerine saygı duyan birey olmalarını sağlamak</li>
                        <li>Her çocuğun içindeki yaratıcı, çok yönlü, kendi haklarını koruyabilen, güven, hoşgörü ve sevginin hakim olduğu bir ortam yaratmak,</li>
                        <li>Kurumumuzu; öğrencileri, ögretmenleri, ve velileri ile çevrede örnek gösterebilecek ve gurur duyacak bir kurum haline getirmek,</li>
                        <li>Öğrencilerimizin istek ve ihtiyaçlarını en kısa sürede giderecek, onları başarıya götüren yolda motive edip, umut ve güveni aşılayarak hedeflerine emin adımlarla gitmelerini sağlamak,</li>
                        <li>Çocuklarımıza mutlu ve başarılı bireyler olma isteğini ve yeteneğini kazandırmaktır.</li>
                    
                    </ul>
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Hakkimizda
