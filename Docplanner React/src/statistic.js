import React from "react";





const Statistic= (props) => {
  return( 
        <div className="container-2">
   
            <div className="container-2-left">
                <p className="style-5">The world's</p><p className="style-5">biggest healthcare platform</p>
                <p className="style-6">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</p>
                <img className="big-logo" src="https://www.docplanner.com/img/logo.png" />
            </div>
            <div className="container-2-right">
               
                        
                            {props.tabstatCard.map(el=>(
                                <div className={el.class}>
                            <img scr={el.icon} srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" />
                                <p className="style-7">{el.titre}</p>
                                <p className="style-8">{el.paragraph} </p>
                                </div>))}
                                
                        
                        
                </div>
                <div>
                </div>
               
            

        
        </div>)
      
      
  }

export default Statistic;
