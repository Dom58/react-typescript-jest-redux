import React from "react";
import { IGuest } from '../pages/home';
import './index.css';

const Contacts: React.FC<IGuest> = ({guests}) => {

    const lists = (): JSX.Element[] => {
        return guests.map((guest,i) => {
            return (
                <li className="lists" key={i+1}>
                    <div>
                        <p>
                            <span>{i+1}. {guest.name} |  </span>
                            <span className="email">{guest.email}</span>
                            <> {' | '} {guest.age} years</>
                        </p>
                    </div>
                </li>
            )
        })
    }
    
    return (
        <div className="lists-container">
            <ul data-testid="contacts">
                {lists()}
            </ul>
        </div>
    )
}

export default Contacts

