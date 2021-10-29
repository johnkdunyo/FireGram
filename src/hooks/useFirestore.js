import React , { useState, useEffect, Fragment } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

const useFirestore = ( collection ) => {
    const [ docs, setDocs ] = useState([]);

    useEffect(()=> {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=> {
            let documents = [];
            snap.forEach(doc => {
                documents.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [collection])


    return {docs }
}


export default useFirestore;