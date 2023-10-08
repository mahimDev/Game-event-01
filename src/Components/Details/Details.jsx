import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";


const Details = () => {
    const data = useLoaderData(null)

    return (
        <div>

            {
                data.map(value => <Detail key={value.id} value={value}></Detail>)
            }
        </div>
    );
};

export default Details;