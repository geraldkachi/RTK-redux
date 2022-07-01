import React from 'react'
import Button from '../Button'

interface FormType {
    setReqType: React.Dispatch<React.SetStateAction<string>>;
    reqType: string
}
const Form = ({ reqType, setReqType }: FormType) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <Button
                    {...{ reqType }}
                    {...{ setReqType }}
                    buttonText="posts"
                />
                <Button
                    {...{ reqType }}
                    {...{ setReqType }}
                    buttonText="users"
                />
                <Button
                    {...{ reqType }}
                    {...{ setReqType }}
                    buttonText="comments"
                />
            </form>
        </div>
    )
}

export default Form