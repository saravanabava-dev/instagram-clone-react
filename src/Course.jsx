import PropTypes from 'prop-types'
import unnamed from './assets/unnamed.jpg'
import { useEffect, useState } from 'react';
function Course(props){
   
    const [purchased,setPurchase]=useState(false)

    const [discount,setdiscount]=useState(props.amt)
function functi(a){

setPurchase(true);
   setdiscount(discount-a) 
   console.log(true)

}

    return(
        <nav className="code">

           <img src={props.image} alt="" className="img"></img>
            <h1>{props.name}</h1>
            <h5>{props.role}</h5>
                <h4>{discount}</h4> 
            <button onClick={ ()=>functi(20)}>discounts</button>
        <button onClick={()=>props.delete(props.id)}>deletes</button>
        <p>{purchased ?"purchased":"Not purchased"}</p>

        </nav>
    );
    
}

/*Course.propTypes={
    name: PropTypes.string,
    year: PropTypes.number, 
    show:PropTypes.bool
}
/*Course.defaultProps = {
    name:"automata",
    role:"Null",
}
 default props not working   */  
export default Course

