import React, { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

const useStorage = (file)  => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //reference
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images'); //creates a new collection in the firstore database

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=> {
            setError(err)
        }, async() => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add( {
                url:url,
                createdAt:timestamp()
            });
            setUrl(url);
        })

    }, [file]);
    return { progress, url, error }
}
//the function is run anytime the file changes


export default useStorage
