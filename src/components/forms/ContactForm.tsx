import React, { useState } from "react";
import './index.css';
import { IGuest as Props } from '../../App';

interface IProps {
    guests: Props["guests"]
    setGuests: React.Dispatch<React.SetStateAction<Props["guests"]>>
}

interface IErrors {
    errors: {
        error: String
    }[]
}

const ContactForm: React.FC<IProps> = ({guests, setGuests}) => {

    const [input, setInput] = useState({
        name: "",
        email: "", 
        age: "",
        bio: ""
    });

    const [errors, setErrors] = useState<IErrors['errors']>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = ():void => {
        if(!input.age || !input.name || !input.email || !input.bio){
            return setErrors([{error: 'Name is required!,Email is required!,Age is required!,Bio is required!'}]);
        }
        if(isNaN(parseInt(input.age))) {
            return setErrors([{error: 'Age should be a number!'}]);
        } else {
            setGuests([
                ...guests,
                {
                    name: input.name,
                    email: input.email,
                    age: parseInt(input.age),
                    bio: input.name
                }
            ]);
            return setErrors([]);
        } 
    }
    
    return (
        <div className="contactForm">
            <h1>Contact Me</h1>
            <hr />
            <div className="contactForms">
                <input type="text" name="name" required={true} placeholder="Full Name..." className="inputs"  value={input.name} onChange={handleChange} style={{border: errors&&errors.length > 0 ?'1px solid brown': ''}}/>
                <input type="email" name="email" required={true} placeholder="Email..." className="inputs" value={input.email}  onChange={handleChange} style={{border: errors&&errors.length > 0 ?'1px solid brown': ''}}/>
                <input type="text"  name="age" placeholder="Age..." className="inputs" value={input.age}  onChange={handleChange} style={{border: errors&&errors.length > 0 ?'1px solid brown': ''}}/>
                <textarea  name="bio" placeholder="Bio..." className="textarea" value={input.bio} onChange={handleChange} style={{border: errors&&errors.length > 0 ?'1px solid brown': ''}} />

                <button className="buttonSubmit" onClick={handleSubmit}>Submit</button>
                {errors&&
                    <p>
                        {errors.map((err, i) => (
                            <li className="error" key={i+1}>{err.error.replaceAll(',', `${i+1}`)}</li>
                            ))
                        }
                    </p>
                }
            </div>
        </div>
    )
}

export default ContactForm;
