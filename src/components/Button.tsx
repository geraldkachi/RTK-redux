import { ReactNode } from "react"
interface ButtonType {
    setReqType: React.Dispatch<React.SetStateAction<string>>;
    reqType: string;
    buttonText: string;
    children?: ReactNode;
}
const Button = ({ children, reqType, setReqType, buttonText }: ButtonType) => {
    return (
        <button className={buttonText === reqType ? "selected" : ''}
            type='button'
            onClick={() => setReqType(buttonText)}
        >
            {children || buttonText || `Press me`}
        </button>
    )
}

export default Button