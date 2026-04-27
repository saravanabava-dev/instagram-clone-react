import { useEffect, useState } from 'react';

const useFetch=(url)=>{
     const [coursesli,setcourse]=useState(null)
const [error,seterror]=useState(null);

    useEffect(()=>{
setTimeout(()=>{
    fetch(url).then(response=>{
      if(!response.ok){
        throw Error("not receivind")
      }
console.log(response);
return response.json()
    }).then((data)=>{
        setTimeout(() => {
            
     
        setcourse(data)
    })
},60000).catch(error=>{
   console.log(error.message)
  seterror(error.message)
    })
},[])},60000)
return [setcourse,coursesli,error];
}

export default useFetch