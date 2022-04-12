import "./Implant.css";

import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Ogretmen() {
    useDocumentTitle('Tecrübeli Öğretmen Kadrosu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Tecrübeli Öğretmen Kadrosu"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Tecrübeli Öğretmen Kadrosu?&nbsp;</strong></h4>

        <p class="hizmetyazi">Tecrübeli Öğretmen Kadrosu</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



