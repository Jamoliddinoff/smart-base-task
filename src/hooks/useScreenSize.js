import { useEffect, useState} from "react";

export default function useScreenSize () {
    let [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        });
        return () => {
            window.removeEventListener("resize", () => {
                setWidth(window.innerWidth)
            })
        }
    }, []);

    return {width};
}
