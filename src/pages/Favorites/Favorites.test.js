import react from "react";

import { render } from "@testing-library/react";


import Favorites from "./index";

describe('Tests Favorites', () => {
    it('Ao Carregar a lista de favoritos esta página precisa renderizar', () => {
        const { getByTestId } = render(<Favorites/>)
    })
})