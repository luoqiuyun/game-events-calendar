import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { daysOfWeek } from 'assets/mocks'
import Weekdays from './index';

describe('Weekdays component', () => {
  test('renders all days of the week - approach 1', () => {
    render(<Weekdays />);
    
    daysOfWeek.forEach(day => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
      expect(dayElement).toHaveClass('week-day');
    });
  });

  test('renders all days of the week - approach 2', () => {
    const { getByText } = render(<Weekdays />);
    
    expect(getByText(/Sunday/i)).toBeInTheDocument();
    expect(getByText(/Monday/i)).toBeInTheDocument();
    expect(getByText(/Tuesday/i)).toBeInTheDocument();
    expect(getByText(/Wednesday/i)).toBeInTheDocument();
    expect(getByText(/Thursday/i)).toBeInTheDocument();
    expect(getByText(/Friday/i)).toBeInTheDocument();
    expect(getByText(/Saturday/i)).toBeInTheDocument();
  });
});
