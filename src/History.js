import React, {useState, useEffect} from 'react';

function History() {
    const [data, setData] = useState('');
    const getInfo = async () => {
        try{
            let response = await fetch('https://api.spacexdata.com/v3/history/2');
            let info = await response.json();
            setData(info);
            return;
        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
            <center><h3>SPACE X </h3></center>
            
            <center><b><h1> {data.title}</h1></b></center>
            <h4>History Number: {data.id}</h4>
            <h4>DATE: {data.event_date_utc}</h4>
            <h4>Flight Number: {data.flight_number}</h4>
            
            <center><b><h1> {data.details}</h1></b></center>
           
        </div>
    )
}

export default History;