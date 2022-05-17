import React from "react";
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux'
import SingleRoom from "../room";
import { store } from '../../../redux/store';

describe('Test Room component', () => {

    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <SingleRoom />
        </Provider>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Render correctly the single room document', () => {
       const paragraphs = container.querySelectorAll('h2');
       const headings = container.querySelectorAll('h1');
       const a = container.querySelectorAll('a');
       expect(paragraphs).toHaveLength(2);
       expect(headings).toHaveLength(1);
       expect(a).toHaveLength(2);

       const imgs = container.querySelector('img');
       expect(imgs).toBeInTheDocument();
    });

    it('Render room of a single card ', () => {
        render(
            <Provider store={store}>
                <SingleRoom />
            </Provider>
        );
        
        const paragraphs = container.querySelectorAll('h2');
        const headings = container.querySelectorAll('h1');
        const a = container.querySelectorAll('a');

        expect(paragraphs).toHaveLength(1);
        expect(headings).toHaveLength(1);
        expect(a).toHaveLength(2);

        
        const linkElement = screen.getAllByText('More Rooms');
        expect(linkElement).toBeTruthy();

     })

})
