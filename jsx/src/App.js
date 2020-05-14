import React from 'react';
import './App.css';
import image2 from "./imageInSrc.jpg"

function App() {
  return ( 
    <div className='body'>
    <div style={{border:'solid  1 , black , maxWidth:"100vw"'}}>  
 
    	<h1 className='title  red'>sahar</h1>  
 
        	<span>
            <img className='jsx' src={image2}/> 
            </span>
            <span> 
             	<img className='ht' src={"/imageInPublic.jpg"} />  
            </span>
    </div>  
 
    <video className='vid' style={{ width:"320", height:"240"   }} controls>  
  
        <source src="myVideo.mp4" type="video/mp4"/>
    </video> 
  </div>
  
  );
}

export default App;
