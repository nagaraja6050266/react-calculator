import { useState } from "react";
import Button from "./Button.jsx";

function App() {
    const [dispContent, setDispContent] = useState("");
    const [errorFlag, setErrorFlag] = useState(0);

    const buttonContents = [
        { content: "(", type: "operator", fn: () => addContent("(") },
        { content: ")", type: "operator", fn: () => addContent(")") },
        { content: "DEL", type: "delete", fn: () => deleteContent() },
        { content: "/", type: "operator", fn: () => addContent("/") },
        { content: "7", type: "number", fn: () => addContent("7") },
        { content: "8", type: "number", fn: () => addContent("8") },
        { content: "9", type: "number", fn: () => addContent("9") },
        { content: "*", type: "operator", fn: () => addContent("*") },
        { content: "4", type: "number", fn: () => addContent("4") },
        { content: "5", type: "number", fn: () => addContent("5") },
        { content: "6", type: "number", fn: () => addContent("6") },
        { content: "-", type: "operator", fn: () => addContent("-") },
        { content: "1", type: "number", fn: () => addContent("1") },
        { content: "2", type: "number", fn: () => addContent("2") },
        { content: "3", type: "number", fn: () => addContent("3") },
        { content: "+", type: "operator", fn: () => addContent("+") },
        { content: "C", type: "ans", fn: () => clearContent() },
        { content: "0", type: "number", fn: () => addContent("0") },
        { content: ".", type: "operator", fn: () => addContent(".") },
        { content: "=", type: "ans", fn: () => evaluate() },
    ];

    const addContent = (value) => {
        if (errorFlag) {
            setErrorFlag(0);
            clearContent();
        }
        setDispContent((d) => d + value);
    };

    const evaluate = () => {
        try {
            setDispContent(eval(dispContent).toString());
        } catch (error) {
            setDispContent("Error");
            setErrorFlag(1);
        }
    };

    const clearContent = () => {
        setDispContent("");
    };

    const deleteContent = () => {
        setDispContent((d) => d.slice(0, -1));
    };

    return (
        <>
            <div className="calc-container">
                <div className="display-box">
                    <div className="display-content">{dispContent}</div>
                </div>
                <div className="buttons-container">
                    {buttonContents.map((b, i) => (
                        <button onClick={b.fn} className={b.type}>
                            <Button key={i} buttonValue={b.content} />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
