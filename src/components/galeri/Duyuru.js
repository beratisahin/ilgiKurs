import "../hizmetler/Implant.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function Duyuru() {
    useDocumentTitle('Duyurular - Tokat İlgi Kurs Merkezi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Duyurular"
               />
                
                <div className="card-body col-12">
                    <br/>
                      
                </div>
            </div>
            
        </div>
    )
}