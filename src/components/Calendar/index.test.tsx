import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { next, prev, getImageList } from 'components/helpers';
import { mockGames, mockCalendar } from 'assets/mocks'
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

it('renders without crashing', () => {
  const { getByText } = renderCalendar();
  expect(getByText(/Sunday/i)).toBeInTheDocument();
  expect(getByText(/Monday/i)).toBeInTheDocument();
  expect(getByText(/Tuesday/i)).toBeInTheDocument();
  expect(getByText(/Wednesday/i)).toBeInTheDocument();
  expect(getByText(/Thursday/i)).toBeInTheDocument();
  expect(getByText(/Friday/i)).toBeInTheDocument();
  expect(getByText(/Saturday/i)).toBeInTheDocument();
});
