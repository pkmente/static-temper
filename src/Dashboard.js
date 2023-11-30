import React, { useState, useEffect } from 'react';
import { Input, Card } from 'react-rainbow-components';
import "./Dashboard.css";

const Dashboard = () => {
    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [voltage, setVoltage] = useState();
    const [current, setCurrent] = useState();
    

    useEffect(() => {
        setInterval(() => {
            fetch("https://backendtemp.onrender.com/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setTemperature(data.temperature);
                    setHumidity(data.humidity);
                    setVoltage(data.voltage);
                    setCurrent(data.current);

                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
    }, []);

    const inputStyles = {
        width: 200,
    };



    return (
        <div className='front_page_cls'>
            <div className='header'>
<h1>Burgeon technologies
</h1>
<h3>Sensors Live Data</h3>
            </div>
        <div className='front_page'>
            <div className='card-cls'>
                <Card className='card'>
                    <div>
                        <Input
                            label="Temperature"
                            value={temperature}
                            placeholder="Temperature"
                            type="text"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                             disabled
                        />
                        <Input
                            label="Humidity"
                            value={humidity}
                            placeholder="Humidity"
                            type="text"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                            disabled
                        />
                        <Input
                            label="voltage"
                            value={voltage}
                            placeholder="Voltage"
                            type="text"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                             disabled
                        />
                        <Input
                            label="current"
                            value={current}
                            placeholder="Current"
                            type="text"
                            className="rainbow-p-around_medium"
                            style={inputStyles}
                             disabled
                        />
                    </div>
                </Card>
            </div>
        </div>
        </div>
    );
}
export default Dashboard;
