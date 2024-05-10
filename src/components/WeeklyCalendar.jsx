import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Stack } from '@mui/material';

const WeeklyCalendar = () => {
    // Get current date
    const currentDate = new Date();

    const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

    // Function to handle click on a day
    const handleDayClick = (day) => {
        setSelectedDay(day);
    };


    // Get the first day of the current week (Sunday)
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());

    // Generate the days of the week starting from Sunday
    const daysOfWeek = [...Array(7)].map((_, i) => {
        const date = new Date(firstDayOfWeek);
        date.setDate(date.getDate() + i);
        const dayOfMonth = date.getDate();
        const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, -1);
        const isSelected = selectedDay === dayOfMonth;

        return (
            <div
                key={i}
                className={`day ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDayClick(dayOfMonth)}
            >
                <Typography className="day-of-month" sx={{ lineHeight: "1rem", fontWeight: "bold" }}>{dayOfMonth}</Typography>
                <Typography className="day-of-week" sx={{ fontSize: "small" }}>{dayOfWeek}</Typography>
            </div>
        );
    });

    return (
        <div className="weekly-calendar">
            <div className="days-of-week">{daysOfWeek}</div>
        </div>
    );
};

export default WeeklyCalendar;
