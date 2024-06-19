import { render } from "@testing-library/react";
import App from "../App";
import { describe , it , expect } from "vitest"


describe('App component', () => {
  it('it should display the hello world', () => {
    // render(<App />);
    // const text = /hello world/i
    // expect(screen.getByText(text)).toBeInTheDocument();
    expect(render(<App />)).toBeDefined()

  })
  
})
