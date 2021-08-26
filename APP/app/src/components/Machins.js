
import React, { useState, useEffect } from 'react';
import SingleMachine from './SingleMachine';


export default function Machins() {
    const [slitter, setSlitter] = useState([]);

    const url = "https://my-json-server.typicode.com/Dam-o/slitter/slitter";

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
                        <SingleMachine
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








