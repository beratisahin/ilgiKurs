import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Soru() {
    useDocumentTitle('Soru Çözüm ve Etüt Saatleri');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Soru Çözüm ve Etüt Saatleri"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Soru Çözüm ve Etüt Saatleri?&nbsp;</strong></h4>

        <p class="hizmetyazi">Soru Çözüm ve Etüt Saatleri</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



