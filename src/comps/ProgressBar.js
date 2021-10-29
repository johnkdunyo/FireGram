import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

function ProgressBar({file, setFile}) {
    const { progress, url} = useStorage(file);
   //console.log(progress)
   useEffect(()=>{
    if (url){
        setFile(null)
    }
   }, [url])



    return (
        <div className="progress-bar" style={{width: progress + '%'}}>
            
        </div>
    )
}

export default ProgressBar
