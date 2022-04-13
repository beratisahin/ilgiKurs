
import './hakkımızda.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import Title from "../../title/Title";

function Hakkimizda() {
    useDocumentTitle('Hakkımızda - Medisam Ağız ve Diş Sağlığı Polikliniği');
    return (
        
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Hakkımızda"
               />
                
                <div className="card-body col-12">
                    <br/>
                    <h4 style={{color:"#55D1BC"}}>Hikayemiz</h4>
                    <p class="hizmet-text" >“Hiçbir Başarı Tesadüf Değildir”

Tokat İlgi Kurs Merkezinin öyküsü. Anadolu’nun şirin bir kenti olan Tokat'ta kurulmuştur. Tokat İlgi Kursu Merkezi, kurulduğu günlerde inanıyordu “hiçbir başarının tesadüf olmadığına...” Bu mütevazı başlangıcın ciddi bir eğitim kervanına dönüşeceğine... Ülkenin dört bir yanında bir eğitim meşalesi tutuşturacağına... Türkiye’nin en ücra köşelerine kadar ulaşacağına... Bu inançla çıktı yola…

Tokat İlgi Kurs Merkezi; gelecekte ülkemizin dört bir yanında yer alıp güzel Türkiyemizi uluslararası platformlarda başarılı bir şekilde bizleri temsil edecek öğrencilerin yetiştirilmesinde bütün gayretiyle eğitim vermeye ve fedakarlık yapmaya devam edecektir.</p>     
                 
                </div>
            </div>
            
        </div>
    )
}

export default Hakkimizda
