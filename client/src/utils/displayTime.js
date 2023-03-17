const Time = () => {
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
};

export default Time;