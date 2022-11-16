import React from "react";





const Navbar= (props) => {
  return( 

          <div className="navbar">
            <div className="navbar-left">
                    <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" /> 
            </div>

              <ul className='navbar-right'>
               
                {
                    props.tab.map ( (el,i )=> (
                      <li key={i}className='blue gris'> { el.titre}
                      {(el.soustab) ? ( <ul className='list'> {el.soustab.map( currentElt => ( <li className='dropdown-contenent-link'><a href='#' className='lien'>{currentElt}</a></li> ) )} </ul>) :''}
                      </li>
            
                ))
              }
              </ul>
   
  </div>)
      
      
  }

export default Navbar;
