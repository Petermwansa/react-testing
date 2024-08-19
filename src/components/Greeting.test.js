import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
    test('renders Hello Peter as a text', () => {
        //  Arrange 
        render(<Greeting />);
    
    
        // Act 
        // ...nothing 
    
    
    
        // Assert 
        const helloWorldElement = screen.getByText('Hello Peter', { exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders I love react as a test if the button was not cliked', () => {
        //  Arrange 
        render(<Greeting />);
    
    
        // Act 
        // ...nothing 
    
    
    
        // Assert 
        const reactLoveElement = screen.getByText('I love React');
        expect(reactLoveElement).toBeInTheDocument();
    });


    test('render changed if the button was clicked', () => {
        // Arrange 
        render(<Greeting />);


        // Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        // Assert 
        const outputElement = screen.getByText('This was clicked');
        expect(outputElement).toBeInTheDocument();
    })


    test('render no first paragraph with the text: I love react. after the button was clicked', () => {
        // Arrange 
        render(<Greeting />);


        // Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        // Asserting 
        const outputElement = screen.queryByText('I love React');
        expect(outputElement).toBeNull();

    })
})
