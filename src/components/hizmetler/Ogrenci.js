
import "./Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Ogrenci() {
    useDocumentTitle('Profesyonel Öğrenci Koçluğu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Profesyonel Öğrenci Koçluğu"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>

                   
        <h4><strong>Profesyonel Öğrenci Koçluğu?&nbsp;</strong></h4>

        <p class="hizmetyazi">Profesyonel Öğrenci Koçluğu</p>




      
                   
                    
                </div>
            </div>
            
        </div>
    )
}



