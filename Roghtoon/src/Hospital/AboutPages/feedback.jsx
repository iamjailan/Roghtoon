import React from "react";
import {BiLogoGmail} from "react-icons/bi"

export default function Feedback(){
    const [formValue, setFormValue] = React.useState({
        name: "",
        email: "",
        message: ""
})
function handleChange(e){
    setFormValue(prevValue => {
        const {name, value} = e.target
        return {
            ...prevValue,
            [name] : value
        }
    })
}
function handleSubmit(e){
    e.preventDefault()
    formValue.email = ""
}
function sendForm(e){
    setFormValue("")
    formValue.email = ""
}
    return (
        <section className="feedback">
            <main className="feedback--page">
                <form className="feedback--form" onSubmit={handleSubmit} method="GET">
                    <label>Name:</label>
                    <input 
                    name="name" 
                    placeholder="e.g. Attal" 
                    value={formValue.name}
                    onChange={handleChange}
                    type="text" />
                    <label>E-mail:</label>
                    <input 
                    name="email" 
                    placeholder="example@gmail.com" 
                    value={formValue.email}
                    onChange={handleChange}
                    type="email" />
                    <label>Message:</label>
                    <textarea 
                    name="message" 
                    className="feedback--textarea" 
                    placeholder="i have..."
                    value={formValue.message}
                    onChange={handleChange}
                    ></textarea>
                    <button type="submit" onClick={() => sendForm()}>Send</button>
                </form>
            </main>
            <div className="feedback--email">
                <p className="about--icon"><BiLogoGmail /></p>
                <h4>Or Contact with our E-mail</h4>
                <p> Our email address, rogh@info.com, can also be used for any feedback or questions you may have. Please don't hesitate to reach out to us. We are here to support and assist you in any way we can, if your feedback dose's not answered you can you this option please note that may our patient services part can't fast answer your, please after submitting the form wait some hours, please note that if you patient please contact with our mobile number</p>
            </div>
        </section>
    )
}