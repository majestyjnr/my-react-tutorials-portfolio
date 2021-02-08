import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Appbar = () => {
    const [title, settitle] = useState('This is a React Component')

    return (
        <div>
            <center>
                <span style={{fontSize: 30}} className="mt-4 badge badge-warning m-4 p-4">{title}</span>
                <br/>
                <button className="btn btn-primary btn-sm mt-4">Increment</button>
            </center>
        </div>
    )
}

export default Appbar
