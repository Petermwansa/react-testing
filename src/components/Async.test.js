import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe(' Async component', () => {

    test('renders post if request succeeds', async () => {

        render(<Async />);


        const listeItemElement = await screen.findAllByRole('listitem');
        expect(listeItemElement).not.toHaveLength(0);

    })
})