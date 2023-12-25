import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('renders properly', () => {
    const { getByText } = render(<Header />);
    const logoElement = getByText(/Home/i);

    expect(logoElement).toBeInTheDocument();
  });

  test('header links navigate to the correct pages', () => {
    const { getByText } = render(<Header />);
    const homeLink = getByText(/home/i);
    const aboutLink = getByText(/about/i);
    const contactLink = getByText(/contact/i);
    const quizLink = getByText(/start new quiz/i);

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(aboutLink.getAttribute('href')).toBe('/about');
    expect(contactLink.getAttribute('href')).toBe('/contact');
    expect(quizLink.getAttribute('href')).toBe('/quiz');
  });
});
