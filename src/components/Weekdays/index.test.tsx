import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { daysOfWeek } from 'assets/mocks'
import Weekdays from './index';

describe('Weekdays component', () => {
  test('renders all days of the week', () => {
    render(<Weekdays />);
    
    daysOfWeek.forEach(day => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
      expect(dayElement).toHaveClass('week-day');
    });
  });
});
