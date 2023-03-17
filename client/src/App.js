import React, { useEffect, useRef, useState } from "react";

export default function App() {
    const newDate = useRef(new Date());

    const [currentHours, setCurrentHours] = useState(newDate.current.getHours());
    const [currentMinutes, setCurrentMinutes] = useState(
        newDate.current.getMinutes()
    );
    const [currentSeconds, setCurrentSeconds] = useState(
        newDate.current.getSeconds()
    );
    setInterval(() => {
        newDate.current = new Date();
        setCurrentHours(newDate.current.getHours());
        setCurrentMinutes(newDate.current.getMinutes());
        setCurrentSeconds(newDate.current.getSeconds());
    }, 1000);
    const nowTime = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
    useEffect(() => {
        console.log(nowTime);
    });
    return (
        <div>
        <h2>This is the Start of Project 3!</h2>
        <h3>{nowTime}</h3>
        </div>
    );
}