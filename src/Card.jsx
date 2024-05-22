import React from 'react'
import './App.css'
import { FcApproval } from "react-icons/fc";
// const Card = (props) => {
const Card = ({id, dp, name, url}) => {
    // const [id, dp, name, url]= props;
  return (
    <div className='card-parent'>
        <div className="card">
            <img src={dp} alt="" className='avtarStyle'/>
  
            <h4>{id} </h4>
           
            <h2>{name} <FcApproval /></h2> 
            <p>profile URL: <a href={url} style={{color:'blue'}}>{url}</a></p>
            
        </div>
    </div>
  )
}

export default Card
