import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const[data, setData]=useState(null);
    const[isPending, setisPending] = useState(true);
    const[error, setError] =useState(null);
    useEffect(()=>{
        const abortController = new AbortController();
        setTimeout(()=>{
            fetch(url,{Signal: abortController.signal})
            .then(res=>{
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json()
            })
            .then((data)=>{
                console.log(data);
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err=>{
                if(err.name==="AbortError"){
                    console.log('fetch aborted')
                }else{
                    console.log(err.message)
                }
            })
        },1000)
        return()=>abortController.abort();
    },[url])
    return{data, isPending, error}
}
export default useFetch;