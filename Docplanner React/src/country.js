import React from "react";

const Country= (props) => {
  return( 
      <div className="container-3">
             <div className="part-1">
                <p className="style-9 center test">Improve the lives of millions. Change yours forever</p>
                <div className="box-size-1 center">
                        <p className="style-6 center">More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
                </div>      
            </div>
            
                
             <div className="images"> 
                    {props.tabCountry.map(el=>(
                    
                       
                   <div className="image-line">
                    
                        <div className="office ">
                                <a href="/career?&amp;loc=poland#jobs-offers"> 
                                    <img className="img-100" scr={el.image} srcset={el.hover} />
                                </a>
                                <div className="down-part">
                                        <a href="#"> {el.titre}</a>
                                        <button className="button-2" onclick="window.location.href = '#';">{el.btn}</button>
        
                                </div>    
                        </div>
                       
                       </div>
                       
                        
                    ))} 
                 </div>
                               
    </div>


)     
  }

export default Country;
