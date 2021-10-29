import React, { Fragment } from 'react';
import useFirestore from '../hooks/useFirestore';

//import { motion } from 'framer-motion';


function ImageGrid( { setSelectedImage}) {
    const { docs } = useFirestore('images');
    //console.log(docs)

    return (
        <Fragment>
            <div className="img-grid">
                {docs && docs.map(doc => (
                    <div className="img-wrap" key={doc.id}
                    onClick={()=> setSelectedImage(doc.url)}
                    whileHover={{
                        opacity:1
                    }}>
                        <img src={doc.url} alt={doc.url} />
                    </div>
                ))}
            </div>
            
        </Fragment>
    )
}

export default ImageGrid;
