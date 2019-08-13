import React, { useState, useEffect } from "react";
import { Text } from "react-native";

import "../styles/core/utilis";

export default function Timer(props) {
    const [timer, setTimer] = useState(180);

    useEffect(() => {
        if (timer !== 0) {
            const time = window.setTimeout(() => {
                setTimer(timer => timer - 1);
            }, 1000);
            return () => {
                window.clearTimeout(time);
            };
        }
    }, [timer]);

    return (
        <Text style={{ ...utilis.text_center, ...utilis.text_light }}>
            Resend code in {timer}
        </Text>
    );
}
