import React, {useState} from 'react'
import { Fragment } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile ] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file with png or jpeg')

        }


        console.log(selected.name)
    }
    return (
        <Fragment>
            <form>
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                
                <div className="output">
                    {error && <div className="error"> {error} </div>}
                    { file && <div> {file.name} </div>}  {/**right side is executed if the left is true */}
                    { file &&  <ProgressBar file={file} setFile={setFile} /> } 
                </div>
            </form>
            
        </Fragment>
    )
}

export default UploadForm
