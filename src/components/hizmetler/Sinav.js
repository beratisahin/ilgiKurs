import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Sinav() {
    useDocumentTitle('Türkiye Geneli Deneme Sınavları');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Türkiye Geneli Deneme Sınavları"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Türkiye Geneli Deneme Sınavları?&nbsp;</strong></h4>

        <p class="hizmetyazi">Türkiye Geneli Deneme Sınavları</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



