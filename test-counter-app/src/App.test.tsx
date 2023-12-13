import { describe, expect, it, test } from "vitest";
import App from "./App";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('The test',()=>{
    it("If Vite + React in App",async ()=>{
        render(<App/>)
        expect(screen.getByText('Vite + React')).toBeInTheDocument()
    
    })
    
    test("if initial value ===0",async ()=>{
        render(<App/>)
        expect(screen.getByText('count is 0')).toBeInTheDocument()

    })
    
    test("increment value in App",async ()=>{
        // Arrange
        render(<App/>)
        
        // Act
        await userEvent.click(screen.getByText('count is 0'))

        // Assert
        expect(screen.getByText('count is 1')).toBeInTheDocument()
    })
    
});

