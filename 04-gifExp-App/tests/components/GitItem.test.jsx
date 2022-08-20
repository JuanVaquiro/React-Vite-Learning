import { render } from "@testing-library/react";
import GitItem from "../../src/components/GitItem";

describe('test en el compoenntes gititme', () => {
    test('debe de hacer match con el snapshot', () => {
        
        render(<GitItem />)
    });
});