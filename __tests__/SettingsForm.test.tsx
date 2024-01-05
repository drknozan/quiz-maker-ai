import { render, screen, fireEvent } from '@testing-library/react';
import SettingsForm from '../src/components/SettingsForm';
import '@testing-library/jest-dom';

describe('SettingsForm', () => {
  test('renders properly', () => {
    render(<SettingsForm />);

    expect(
      screen.getByText(/Let the artificial intelligence create a quiz/i)
    ).toBeInTheDocument();
  });

  test('updates the form data on change', () => {
    render(<SettingsForm />);

    const difficultySelect = screen.getByLabelText(
      /Difficulty/i
    ) as HTMLSelectElement;
    fireEvent.change(difficultySelect, {
      target: { name: 'difficulty', value: 'medium' },
    });

    const languageSelect = screen.getByLabelText(
      /Programming Language/i
    ) as HTMLSelectElement;
    fireEvent.change(languageSelect, {
      target: { name: 'language', value: 'javascript' },
    });

    expect(difficultySelect.value).toBe('medium');
    expect(languageSelect.value).toBe('javascript');
  });
});
