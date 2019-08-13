import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(cleanup)

it('renders ', () => {
    const {asFragment} = render(<Dashboard />)
    expect(asFragment()).toMatchSnapshot()
});

it('initializes with 0 ball and 0 strikes', () => {
    const {getByText} = render(<Dashboard />)

    expect(getByText("Balls: 0")).toHaveTextContent("0")
    expect(getByText("Strikes: 0")).toHaveTextContent("0")
})

it('updateStats sets the strikes to 1 when selected option is strike and update stats button is clicked', () => {
    // Arrange
    const {getByText} = render(<Dashboard intitialActivity="st" initialStrikes={0} />)

    // Act
    fireEvent.click(getByText("Update Stats"))

    // Assert
    expect(getByText("Strikes: 1")).toHaveTextContent("1")
})

it('updateStats sets the strike to 0 when stikes are already 2 and another strike is made when update stats button is clicked', () => {
    // Arrange
    const {getByText} = render(<Dashboard initialStrikes={2} intitialActivity="st" /> )

    // Act
    fireEvent.click(getByText("Update Stats"))

    // Assert
    expect(getByText("Strikes: 0")).toHaveTextContent("0")
})