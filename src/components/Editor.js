import React, { useState } from 'react'
import './Editor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown'
import { FaArrowsAlt } from "react-icons/fa";
import { FaCompressAlt } from "react-icons/fa";
import data from "./data"


const Editor = () => {
    const [input, setInput] = useState(data);
    const [btnE, setBtnE] = useState(true);
    const [btnP, setBtnP] = useState(true);



    return (
        <>
            <div className={`editor ${btnE ? "" : "fullviewE"}`}>
                <div className="header">
                <h6>Editor</h6>
                <button className="icon" onClick={()=>{setBtnE(!btnE)}}>{btnE?<FaArrowsAlt />:<FaCompressAlt/>}</button>

                </div>
                <textarea className="input" value={input} onChange={(e) => { setInput(e.target.value) }}></textarea>

            </div>

            <div className={`preview ${btnP ? "" : "fullviewP"}`}>
                <div className="header">
                <h6>preview</h6>
                <button className="icon" onClick={()=>{setBtnP(!btnP)}}>{btnP?<FaArrowsAlt />:<FaCompressAlt/>}</button>
                
                </div>
                <div className="output"><ReactMarkdown>{input}</ReactMarkdown></div>
            </div>
        </>
    )
}

export default Editor;
