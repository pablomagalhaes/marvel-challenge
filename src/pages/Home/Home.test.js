import react from "react";

import { render } from "@testing-library/react";


import Home from "./index";

describe('Tests Home', () => {
    it('Ao Carregar a aplicação a Home precisa renderizar', () => {
        const { getByTestId } = render(<Home/>)
    })
})