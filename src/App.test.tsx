import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import SearchLocation from './subcomponents/SearchLocation';
import ResultRow from './subcomponents/ResultRow';
import Event from './models/Event';



test("Keyword Input is on the page", () => {
	render(<SearchLocation />);
	const keywordElement = screen.getByRole("textbox", {name: "keywordInput"});
	expect(keywordElement).toBeInTheDocument();
});

test("Postal Code Input is on the page", () => {
	render(<SearchLocation />);
	const postalCodeElement = screen.getByRole("textbox", {name: "postalCodeInput"});
	expect(postalCodeElement).toBeInTheDocument();
});

test("Start Date Input is on the page", () => {
	render(<SearchLocation />);
	const startDateElement = screen.getByRole("dateInput", {name: "startDate"});
	expect(startDateElement).toBeInTheDocument();
});

test("End Date Input is on the page", () => {
	render(<SearchLocation />);
	const endDateElement = screen.getByRole("dateInput", {name: "endDate"});
	expect(endDateElement).toBeInTheDocument();
});


// test("Search button works", () => {
//   const spy = jest.fn();
// 	render(<SearchLocation />);
// 	const button = screen.getByRole("button", {name: "onSubmit"});
//   fireEvent.click(button)
// 	expect(spy).toHaveBeenCalled();
// });


// can add two more tests using fireEvent.change to test keyword input and postal code.
