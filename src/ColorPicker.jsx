import React, {useState} from "react";
import tinycolor from 'tinycolor2';

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");
    const colorObj = tinycolor(color);
    const changeColor = (event) => {
        setColor(event.target.value);
        
    }


    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} copied to clipboard!`);
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="color-picker-container">
        <div className="color-display" >
        <div className="color-display-box" >
            <h1 className="title" >Selected Color:</h1>
             
        {/* <h2 htmlFor="color-picker">Select a color:</h2> */}
        <input id="color-picker" className="color-picker" type="color" value={color} onChange={changeColor} placeholder=" " style={{ backgroundColor: color }}/>
            
            <div>
                <h2>Hex: {color}</h2>
                <button onClick={() => copyToClipboard(color)}>Copy</button>
            </div>
            
            <div>
                <h2>RGB: {colorObj.toRgbString()}</h2>
                <button onClick={() => copyToClipboard(colorObj.toRgbString())}>Copy</button>
            </div>
            
            <div>
                <h2>HSL: {colorObj.toHslString()}</h2>
                <button onClick={() => copyToClipboard(colorObj.toHslString())}>Copy</button>
            </div>
            <br />
        </div>
        <br /><br />
        </div>
      
    </div>
    
);
}

export default ColorPicker;
