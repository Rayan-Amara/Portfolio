import React from "react";





const Intro= (props) => {
    console.log(props.tabcards)
  return( 
      <div className='first-container' >
            <div className="part-1">
                    <img className="small-logo" src="https://www.docplanner.com/img/sygnet.png" />
                    <p className="style-1">Making the healthcare experience more human</p>
            </div>
            <div className="part-2">
                    <p className="style-2">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. </p>
                    <p className="style-2">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. </p>
            </div>
            
            <div>
            <div className="part-3">

                {
                    props.tabcards.map(el=>(
                        <div className={el.class}>
                    <p className="style-3">{el.span}</p>
                    <p className="style-4">{el.paragraph}</p>
                    <img className="figure-1" src={el.image} />
                    {(el.option) ? ( <select className="button-1">{el.option.map(el=>(<option>{el}</option>))}</select>) :''}
                     
                    </div>))
                    }


                
            </div>  
            </div>                     
    </div>


)     
  }

export default Intro;
