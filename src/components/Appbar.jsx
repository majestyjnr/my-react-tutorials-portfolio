import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Appbar = () => {
    const [count, settitle] = useState(10)

    let classes = "mt-4 badge m-4 p-4";
    classes += (count == 0) ? "badge-warning" : "badge-primary";


    
    return (
        <div>
            <center>
                <span style={{fontSize: 30}} className={classes}>{count == 0 ? 'Zero' : count}</span>
                <br/>
                <button className="btn btn-primary btn-sm mt-4">Increment</button>
            </center>
        </div>
    )
}

export default Appbar
