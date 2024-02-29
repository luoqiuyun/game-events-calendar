import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { next, prev, getImageList } from 'components/helpers';
import { mockGames, mockCalendar, daysOfWeek } from 'assets/mocks'
import Calendar from './index';

const renderCalendar = (props = {}) => {
  const utils = render(
    <BrowserRouter>
      <Calendar
        games={mockGames}
        calendar={mockCalendar}
        setCalenda={() => {}}
      />
    </BrowserRouter>
    
  );
  return {...utils};
};

it('renders all weekdays without crashing - method 1', () => {
  const { getByText } = renderCalendar();

  daysOfWeek.forEach(day => {
    const dayElement = getByText(day);
    expect(dayElement).toBeInTheDocument();
    expect(dayElement).toHaveClass('week-day');
  });
});

it('renders all weekdays without crashing - method 2', () => {
  const { getByText } = renderCalendar();

  expect(getByText(/Sunday/i)).toBeInTheDocument();
  expect(getByText(/Monday/i)).toBeInTheDocument();
  expect(getByText(/Tuesday/i)).toBeInTheDocument();
  expect(getByText(/Wednesday/i)).toBeInTheDocument();
  expect(getByText(/Thursday/i)).toBeInTheDocument();
  expect(getByText(/Friday/i)).toBeInTheDocument();
  expect(getByText(/Saturday/i)).toBeInTheDocument();
});
