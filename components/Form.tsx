import styles from "../styles/Form.module.sass";
import { useState } from "react";

export default function Form() {
    const [colorValue, setColorValue] = useState("#ff0000");
    const [rgbValue, setRgbValue] = useState("");

    return (
        <div className={styles.form}>
            <h1>FORM</h1>
            <input
                type="text"
                value={colorValue}
                onChange={(e) => {
                    const cr = e.target.value;
                    setColorValue(cr);

                    const res = `rgb(${})`;

                    setRgbValue(res);
                }}
            />
            <input type="text" value={rgbValue} readOnly />
            <div
                style={{
                    backgroundColor: rgbValue,
                    width: "100px",
                    height: "100px",
                }}
            ></div>
        </div>
    );
}
