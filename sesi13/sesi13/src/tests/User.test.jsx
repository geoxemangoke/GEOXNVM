import User from "../pages/User"

describe('User Test' , () => {
    it('should render text "Name: Mrs. Dennis Schulist"', () => {
        render(
            <BrowserRouter>
                <User/>
            </BrowserRouter>
        )
        
        const title  = screen.getByText('Name: Mrs. Dennis Schulist')
        expect(title).toBeInTheDocument()
    })
})