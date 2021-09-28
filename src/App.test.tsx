import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SearchLocation from './subcomponents/SearchLocation';



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Input is on the page", () => {
	render(<SearchLocation />);
	const keywordElement = screen.getByRole("textbox", {name: "keywordInput"});
	expect(keywordElement).toBeInTheDocument();
});

