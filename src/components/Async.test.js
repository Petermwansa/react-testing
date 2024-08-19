import { getByTitle, render, screen } from "@testing-library/react"
import Async from "./Async"


describe(' Async component', () => {

    test('renders post if request succeeds', async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First Post'}]
        })

        render(<Async />);


        const listeItemElement = await screen.findAllByRole('listitem');
        expect(listeItemElement).not.toHaveLength(0);

    })
})