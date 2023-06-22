import { useEffect, useRef, useState } from "react"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

export const useDate = () => {
    const [date, setDate] = useState<Dayjs>(dayjs());
    const intervalIds = useRef<NodeJS.Timeout[]>([]); 

    useEffect(() => {
        const intervalID = setInterval(() => {
            if(dayjs().format("DD-MM-YYYY:HH:mm") !== date.format("DD-MM-YYYY:HH:mm")) {
                setDate(dayjs());
            }
        }, 1000);

        intervalIds.current.push(intervalID);

        return () => {
            intervalIds.current.forEach(id => {
                clearInterval(id);
            });
        }
    }, [date]);

    return { date };
}