import react from "react";

import { findByTestId, render } from "@testing-library/react";

import SearchBar from "./index";

describe('Tests Search Input', () => {
    it('Ao Carregar a Home este componente é renderizado',  async () => {
        const { getByTestId } = render(<SearchBar/>)
    })
})