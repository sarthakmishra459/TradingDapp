"use client"
import React, { useState, useEffect } from 'react';
import { LinePlot, ResponsiveChartContainer, BarPlot } from '@mui/x-charts';
import { Box } from '@mui/material';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function Bitcoin() {
    const [chartData, setChartData] = useState({
        xAxis: [{ data: [] }],
        series: [{ curve: "linear", data: [] }],
        width: 400,
        height: 300,
    });
    const [price, setPrice] = useState(0.0);
    const [oldPrice, setOldPrice] = useState(0);
    const [color, setColor] = useState("white");
    const [pdata, setPdata] = useState([]);
    const [res, setRes] = useState([]);
    const [apiData, setApiData] = useState([0]);
    const [loader, setLoader] = useState(false);


    const handleSubmit = async () => {
        // Make a POST request to the FastAPI endpoint
        setRes([])
        setLoader(true)
        console.log('Making prediction with data: ', pdata);
        try {
            const response = await axios.post('https://trading-backend-o8je.onrender.com/predict/', {
                data: [pdata] // Assuming pdata is an array
            });

            // Parse the JSON response
            const data = response.data;


            const roundedPrediction = data.prediction.map(value => parseFloat(value.toFixed(2)));

            // Update the state with the rounded prediction
            setRes(roundedPrediction);
            setLoader(false);
            console.log(roundedPrediction);

        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const newPrice = parseFloat(data.p);

            setPrice(newPrice);

            if (newPrice > oldPrice) {
                setColor("green");
            } else if (newPrice < oldPrice) {
                setColor("red");
            } else {
                setColor("white");
            }

            setOldPrice(newPrice);
            setApiData(prevApiData => [...prevApiData.slice(-99), newPrice]);
            setChartData(prevData => {
                const newXAxisData = [...Array(Math.min(prevData.series[0].data.length + 1, 10)).keys()];
                const newSeriesData = [...prevData.series[0].data.slice(-9), newPrice];



                if (apiData.length === 100) {

                    setPdata(apiData)

                }
                return {
                    ...prevData,
                    series: [{ type: 'line', data: newSeriesData }],
                    xAxis: [{ data: newXAxisData, scaleType: 'band', id: 'x-axis-id', color }]
                };
            });
        };

        return () => {
            ws.close();
        };
    }, [oldPrice, apiData, color]);

    return (
        <div className='flex flex-col'>
            <div className="flex mr-8 h-[90vh] border border-2-white rounded-lg p-2 justify-center items-center shadow-md " style={{ scrollSnapAlign: 'start' }}>
                <div className='flex flex-col gap-2'>
                    <div className="text-green-500">Bitcoin</div>
                    <div className={color === "green" ? "text-green-500" : color === "red" ? "text-red-500" : "text-white"}>${price}</div>
                    {apiData.length === 100 && (
                        <button style={{ backgroundColor: '#22C55E',marginBottom:6 }} className='text-white  bg-green-500  rounded-xl' onClick={handleSubmit}>Predict</button>
                    )}
                    {apiData.length === 100 && (
                        <button style={{ backgroundColor: '#22C55E' }} className='text-white bg-green-500  mt-2 rounded-xl' onClick={() => {
                            setRes([])
                            setLoader(false)
                        }}>
                            Clear</button>
                    )}
                </div>
                <Box sx={{ width: '16vw', height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ResponsiveChartContainer
                        {...chartData}
                        sx={{
                            position: "relative", height: "6vh", width: "10vw", color: "white"
                        }}
                        height={200}
                    >
                        <LinePlot />
                    </ResponsiveChartContainer>
                </Box>
                {res.length > 0 ? (<Box sx={{ width: '16vw', height: "6vh", display: "flex", justifyContent: "center", alignItems: "center", padding: 1 }}>

                    <ResponsiveChartContainer
                        series={[
                            {
                                type: 'line',
                                data: res,
                            },
                            {
                                type: 'bar',
                                data: res,
                            },
                        ]}
                        xAxis={[
                            {
                                data: [...Array(Math.min(res.length + 1, 30)).keys()],
                                scaleType: 'band',
                                id: 'x-axis-id',
                            },
                        ]}
                        yAxis={[
                            {
                                min: Math.min(...res),
                                max: Math.max(...res),
                            },
                        ]}
                        sx={{
                            position: "relative", height: "1vh", width: "10vw", color: "white", alignItems: "center"
                        }}
                        height={200}
                    >
                        <LinePlot />
                        <BarPlot />
                    </ResponsiveChartContainer>

                </Box>) : <div>{loader === true ? <div><Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /></div> : <div></div>}</div>}
                


            </div>
            <div style={{ border: '1px solid white',width:40,borderRadius:"3px" }} className='text-white rounded-md text-center'>{apiData.length}</div>
            



        </div>
    );
}

export default Bitcoin;
