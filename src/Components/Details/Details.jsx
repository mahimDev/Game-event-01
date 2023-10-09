import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";
import { useEffect, useState } from "react";


const Details = () => {
    const data = useLoaderData(null)
    const [value, setValue] = useState({})
    const perams = useParams()
    useEffect(() => {
        const currentItem = data.find(item => item.id == perams.id)
        setValue(currentItem)
    }, [])
    console.log(perams)
    return (
        <div>
            <Detail value={value}></Detail>

        </div>
    );
};

export default Details;