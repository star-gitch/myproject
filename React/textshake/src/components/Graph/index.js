import React from "react";
import { Line } from "react-chartjs-2";

const data = {
    labels: [
        "Apr 2020",
        "May 2020",
        "Jun 2020",
        "Jul 2020 ",
        "Aug 2020",
        "Sep 2020",
        "Oct 2020",
        "Nov 2020",
        "Dec 2020",
    ],
    datasets: [
        {
            label: "Sentiment",
            data: [0.5, -0.4, 0.3, 0.5, 0.8, -0.7, 0.9, -0.4, 0.3],
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Graph = () => (
    <>
        <Line data={data} options={options} />
    </>
);

export default Graph;
