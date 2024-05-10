import { Typography } from '@mui/material';
import React from 'react';

const CircularProgressBar = ({ progress }) => {
    const strokeWidth = 15; // Adjust the thickness of the progress bar
    const radius = 75; // Adjust the size of the circle
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <>
            <svg
                height={radius * 2}
                width={radius * 2}
                className="progress-bar"
                position="relative"
            >
                <circle
                    stroke="#ccc" // Color of the background circle
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#1976d2" // Color of the progress bar
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <Typography sx={{ color:'#1976d2', position: "absolute", top: "40%", left: "17%", fontSize: "1.25rem", fontWeight: "bold" }}>{progress}%</Typography>
        </>
    );
};

export default CircularProgressBar;