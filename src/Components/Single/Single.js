import React from 'react'
import Nav from '../Navbar/Nav'
import './Single.css'
import Data from '../JSON/datac.json'
import Footer from '../Footer/Footer'
const Single = () => {
  return (
    <>
    <Nav/>
      <span className='main_ss'>
        <div className='head_s'> book your show... </div>
        <span>
        { Data.map( data => 
        <>
        <span className='s_card'>
        <img className='con_i' src={data.show.image.original} />
        <div className='s_data'>
        <div className='name'> {data.show.name} </div>
    <div className='lang'>{data.show.language} </div>
    <div className='lang'>{data.show.genres[0]} || {data.show.genres[1]}</div>
    <div className=''>{data.show.schedule.days}|| {data.show.schedule.time} </div>
    <a href={data.show.officialSite}> <button>officialSite</button> </a>
    <div>{data.show.summary} </div>
    <span>
   
    <a href={data.show.officialSite}><button className='book' >book your movie</button> </a>
     </span>
        </div>

        </span>
     
        </>
        )}
        </span>
        <Footer/>
      </span>
      
    </>
  )
}

export default Single