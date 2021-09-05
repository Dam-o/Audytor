
import React, { useState, useEffect } from 'react';
import MachineWidget from './MachineWidget';



export default function Machins() {
    const [slitter, setSlitter] = useState([]);

    const url = "https://sliiter-fake-api.herokuapp.com/slitter";

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setSlitter(data))
            .then(err => console.log(err))
    }, [])



    return (
        <>
            {
                slitter.map((item, index) => {
                    return (
                        <MachineWidget
                            key={index}
                            name={item.name}
                            type={item.type}
                            audit={item.lastAudit}
                        />
                    )
                })
            }

        </>


    )
}








