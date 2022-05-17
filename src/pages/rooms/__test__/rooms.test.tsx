import React from "react";
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store';
import AllRooms from "../rooms";

describe('Test Rooms component', () => {

    let containerRooms: HTMLDivElement;

    beforeEach(() => {
        containerRooms = document.createElement('div');
        document.body.appendChild(containerRooms);
        ReactDOM.render(
        <Provider store={store}>
            <AllRooms />
        </Provider>, containerRooms);
    })

    afterEach(() => {
        document.body.removeChild(containerRooms);
        containerRooms.remove();
    })

    it('Render rooms card ', () => {
        const news = render(
            <Provider store={store}>
                <AllRooms />
            </Provider>
        );
        
        const paragraphs = containerRooms.querySelectorAll('h2 a');
        const a = containerRooms.querySelectorAll('a');
        const lists = containerRooms.querySelectorAll('lists-container');
    
        expect(paragraphs).toHaveLength(1);
        expect(a).toHaveLength(1);
        expect(lists).toHaveLength(0);

        const linkElement = screen.getAllByText('Rooms');
        expect(linkElement).toBeTruthy();

     })

})
