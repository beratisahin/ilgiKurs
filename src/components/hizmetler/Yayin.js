import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Yayin() {
    useDocumentTitle('Kaliteli Yayınlar');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Kaliteli Yayınlar"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Kaliteli Yayınlar?&nbsp;</strong></h4>

        <p class="hizmetyazi">Kaliteli Yayınlar</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



