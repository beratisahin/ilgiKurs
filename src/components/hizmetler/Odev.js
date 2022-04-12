import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Odev() {
    useDocumentTitle('Okul ve Ödev Takip Sistemi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Okul ve Ödev Takip Sistemi"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Okul ve Ödev Takip Sistemi?&nbsp;</strong></h4>

        <p class="hizmetyazi">Okul ve Ödev Takip Sistemi</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



