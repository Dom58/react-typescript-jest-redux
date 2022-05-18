import React from "react";
import ReactDOM from 'react-dom';
import {fireEvent, render, screen, cleanup} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { store } from '../../../redux/store';
import Addings from "../addition";

describe('Test addition component', () => {

    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <Addings  show="none" hide={()=> {}}/>
        </Provider>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
        cleanup();
    })

    it('Render addition components', () => {
        const theComp = render(
            <Provider store={store}>
                <Addings  show="none" hide={()=> {}}/>
            </Provider>
        );
        
        const paragraphs = container.querySelectorAll('p');
        const inputs = container.querySelectorAll('input');
        const buttons = container.querySelectorAll('button');
        
        expect(paragraphs).toHaveLength(1);
        expect(inputs).toHaveLength(2);
        expect(buttons).toHaveLength(4);

        expect(inputs[0].name).toBe('numb1');
        expect(inputs[1].name).toBe('numb2');
        expect(inputs[0].placeholder).toBe('Number 1...')
        expect(inputs[1].placeholder).toBe('Number 2...')

        const close = theComp.getAllByText('X');
        expect(close).toBeTruthy();

        const linkElement = screen.getAllByText('Add');
        expect(linkElement).toBeTruthy();
    });

    it('Should get all calculator buttons', async() => {
        const buttonsAdd = await screen.findAllByTestId('add');
        const buttonsSub = await screen.findAllByTestId('sub');
        const buttonsMult = await screen.findAllByTestId('mult');
        const buttonsDiv = await screen.findAllByTestId('div');

        expect(buttonsAdd).toHaveLength(1);
        expect(buttonsSub).toHaveLength(1);
        expect(buttonsMult).toHaveLength(1);
        expect(buttonsDiv).toHaveLength(1);
        
    });

    it('Should check all inputs value', async() => {
        const numb1: HTMLElement | any = await screen.getByPlaceholderText('Number 1...');
        const numb2: HTMLElement | any = await screen.getByPlaceholderText('Number 2...');
        
        userEvent.type(numb1, '50');
        userEvent.type(numb2, '8');
       
        expect(numb1.value).not.toMatch('567');
        expect(numb2.value).not.toMatch('82');

        expect(numb1).toHaveAttribute("type", "number");
        expect(numb2).toHaveAttribute("type", "number");
    });

    it('Should make an addition all of two numbers', async () => {
        const buttonsAdd = await  screen.getByTestId('add');
        
        const numb1: HTMLElement | any =  screen.getByPlaceholderText('Number 1...');
        const numb2: HTMLElement | any =  screen.getByPlaceholderText('Number 2...');
        
        userEvent.type(numb1, '50');
        userEvent.type(numb2, '2');

        fireEvent.click(buttonsAdd);
        expect(parseInt(numb1.value) + parseInt(numb2.value)).not.toBe(100);
        expect(parseInt(numb1.value) + parseInt(numb2.value)).toBe(52);
    });

    it('Should make an substract two numbers', async () => {
        const buttonsSub = await  screen.getByTestId('sub');
        
        const numb1: HTMLElement | any =  screen.getByPlaceholderText('Number 1...');
        const numb2: HTMLElement | any =  screen.getByPlaceholderText('Number 2...');
        
        userEvent.type(numb1, '50');
        userEvent.type(numb2, '2');

        fireEvent.click(buttonsSub);
        expect(parseInt(numb1.value) - parseInt(numb2.value)).not.toBe(3);
        expect(parseInt(numb1.value) - parseInt(numb2.value)).toBe(48);
    });

    it('Should make a multiplication of two numbers', async () => {
        const buttonsMult = await screen.getByTestId('mult');
        
        const numb1: HTMLElement | any =  screen.getByPlaceholderText('Number 1...');
        const numb2: HTMLElement | any =  screen.getByPlaceholderText('Number 2...');
        
        userEvent.type(numb1, '50');
        userEvent.type(numb2, '2');

        fireEvent.click(buttonsMult);
        expect(parseInt(numb1.value) * parseInt(numb2.value)).not.toBe(13);
        expect(parseInt(numb1.value) * parseInt(numb2.value)).toBe(100);
    });

    it('Should make a division of two numbers', async () => {
        const buttonsDiv = await screen.getByTestId('div');
        
        const numb1: HTMLElement | any =  screen.getByPlaceholderText('Number 1...');
        const numb2: HTMLElement | any =  screen.getByPlaceholderText('Number 2...');
        
        userEvent.type(numb1, '50');
        userEvent.type(numb2, '2');

        fireEvent.click(buttonsDiv);
        expect(parseInt(numb1.value) / parseInt(numb2.value)).not.toBe(13);
        expect(parseInt(numb1.value) / parseInt(numb2.value)).toBe(25);
    });

    it('should test snapshot of addition calculator', async() => {
        const tree = renderer.create(
            <Provider store={store}>
                <Addings  show="none" hide={()=> {}}/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();  
    });

    it('should test snapshot of addition calculator 2', async() => {
        const tree = renderer.create(
            <Provider store={store}>
                <Addings  show="block" hide={()=> {}}/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
