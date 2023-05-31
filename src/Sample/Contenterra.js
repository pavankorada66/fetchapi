import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Style.css';
import axios from "axios";


function Contenterra(){
    const [Record, setRecord]=useState([]);
    
    useEffect(()=>{
        axios.get("https://www.reddit.com/r/reactjs.json")
    .then((response)=>{
        setRecord(response.data.data.children)})}
        ,[])
        //console.log(Record);
    useEffect(()=>{
        localStorage.setItem("step1",JSON.stringify(Record));},[Record])
    useEffect(()=>{
        const data=localStorage.getItem("step1")
        if(Record==null){
            setRecord(JSON.parse(data));
        }
        else{
            console.log(Record);
        }
    },[Record])
    
    return(
        <div>
           <h1 style={{display:"flex",justifyContent:"center",color:"blue"}}>Fetch APi </h1> 
           <div className="container-fluid">
                <div className="row row-cols-sm-1 row-cols-md-2 g-4 row-cols-lg-4 g-4 row-cols-xl-6 g-4 row-cols-xxl-8 g-4 ">  
                {
                    Record.map((item,i)=>{
                        return(<div className="col" key={i}>
                                   <div className="card h-100">
                                      <div className="card-body">
                                        <h5 className="card-title"><u className="card-text-title">Title:</u>{item.data.title}</h5>
                                        <p className="card-text"><h5><u className="card-text-title">Selftext_HTML:</u></h5>{item.data.selftext_html}</p>
                                        <a className="card-url" href="{item.data.url}">URL:{item.data.url}</a>
                                        <p className="card-score-value"><u className="card-score">Score:</u> {item.data.score}</p>
                                      </div>
                                    </div>
                               </div>)})}
                </div>  
           </div>
           <h6 style={{display:"flex",justifyContent:"right",color:"red"}}> developed by<i>@ pavandeepak.korada</i></h6>      
        </div>)
}

export default Contenterra;