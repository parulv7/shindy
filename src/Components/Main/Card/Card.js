import React from 'react'
import Data from "../../JSON/datac.json"
import { Link } from 'react-router-dom'
import './Card.css'
const Card = () => {
  return (
    <>
    
    <span className='card'>
        <div className='card_m'>Popular shows airing tonight</div>
        
        <Link className='flex'  to="/info">
   { Data.map( data =>
    <>
   
   <span>
    {/* {
        data.show.map (get =>{
            return(
              
               
            )
        })
    } */}
    <div className='grid' >
    <img src={data.show.image.medium} />
    <div className='name'> {data.show.name} </div>
    <div className='lang'>{data.show.language} </div>
    <div className='lang'>{data.show.genres[0]}</div>
</div>
    </span>
    </>
       
              
     
        )}
        </Link>
        
        </span>
       </>
  )
}

export default Card