import React, { useEffect } from "react";

function BlackKey({ config, play, highlightKey }) {
    useEffect(()=>{
		console.log(highlightKey)
	}, [highlightKey])
    return (
        <div
            className="piano-keys key-black"
            onClick={() => play(config)}
            style={{
                left: config[2] + "px",
                top: "5px",
            }}
        >
            <div className="key">{config[3].toUpperCase()}</div> 
            <div className="node"> {config[0]+config[1]}</div>{" "}
        </div>
    );
}

export default BlackKey;
