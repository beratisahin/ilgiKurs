import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import Title from "../../title/Title";

function Belgelerimiz() {
    useDocumentTitle('Vizyonumuz - Tokat İlgi Kurs Merkezi');
    return (
        
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Vizyonumuz"
               />
                
                <div className="card-body col-12">
                    <br/>
                    
                    <h4 style={{color:"#55D1BC"}}>Misyonumuz</h4>
                    <p class="hizmet-text">Tokat İlgi Kurs Merkezi olarak gelişen teknolojiyi ve yenilikleri yakından izlemek, eğitim sektöründe öğrenci gelişimini amaç edinmek, kaliteli ve hızlı hizmet anlayışı ile ilerleyerek yolumuza devam etmek başlıca misyonumuzdur.</p>
                    <h4 style={{color:"#55D1BC"}}>Vizyonumuz</h4>
                    <p class="hizmet-text">Tokat İlgi Kurs Merkezi olarak, eğitim alanındaki tecrübemiz ile siz değerli öğrencilerimizin başarılarına ortak olup Tokat ve civar şehirlerden gelecek tüm öğrencilerimize en kaliteli hizmeti vermeyi hedeflemekteyiz. </p>
                    <h4 style={{color:"#55D1BC"}}>Değerlerimiz</h4>
                    <p class="hizmet-text">• Etkin ve kaliteli öğrenci yetiştirme programı uygulamak hedefimizdir.<br/>

                    • Tüm uygulamalarımızı etik kurallar çerçevesinde sürdürürüz.<br/>

                    • Ölçülebilen ve değerlendirilebilen bir sistem ile kendimizi sorgularız.<br/>

                    • İnsan kaynağımıza mesleki gelişim ve sürekli eğitim olanakları yaratırız.<br/>

                    • Sunduğumuz eğitim hizmetinde güvenilir ve şeffaf olmak, sürekliliği sağlamak toplumsal sorumluluğumuzdur.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Belgelerimiz

