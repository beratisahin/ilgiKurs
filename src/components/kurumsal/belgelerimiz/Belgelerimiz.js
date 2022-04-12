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
                   
                    <p class="hizmet-text" >Tokat İlgi Kurs Merkezi olarak gelişen teknolojiyi ve yenilikleri yakından izlemek, dental sektörde müşteri memnuniyetini amaç edinmek, kaliteli ve hızlı hizmet anlayışı ile ilerleyerek yolumuza devam etmek başlıca misyonumuzdur.</p>     
                </div>
            </div>
            
        </div>
    )
}

export default Belgelerimiz

