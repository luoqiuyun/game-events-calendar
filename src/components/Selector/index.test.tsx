import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockCalendar } from 'assets/mocks'
import Selector from './index';

describe('Selector component', () => {
  test('displays the correct month and year', () => {
    render(<Selector calendar={mockCalendar} prevMonth={() => {}} nextMonth={() => {}} />);
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  test('calls prevMonth when previous button is clicked', () => {
    const prevMonth = jest.fn();
    render(<Selector calendar={mockCalendar} prevMonth={prevMonth} nextMonth={() => {}} />);

    fireEvent.click(screen.getByText('‹'));
    expect(prevMonth).toHaveBeenCalled();
  });

  test('calls nextMonth when next button is clicked', () => {
    const nextMonth = jest.fn();
    render(<Selector calendar={mockCalendar} prevMonth={() => {}} nextMonth={nextMonth} />);

    fireEvent.click(screen.getByText('›'));
    expect(nextMonth).toHaveBeenCalled();
  });
});
