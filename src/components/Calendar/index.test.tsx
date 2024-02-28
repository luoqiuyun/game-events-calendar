import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { next, prev, getImageList } from 'components/helpers';
import Calendar from './index';

const mockGames = [
  {
    "id": "939705715c6b3898dd3da5",
    "dom": 1,
    "launchDate": "2023-14-29T21:32:46.879Z",
    "title": "Metal Gear Solidv: The Phantom Pain",
    "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
    "imageFilenameThumb": "metal-gear-solid__1x1",
    "imageFilenameFull": "metal-gear-solid__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
    "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
  },
];

const mockCalendar = {
  days: 31,
  firstDay: 1,
  year: 2024,
  month: 1
};

const renderCalendar = (props = {}) => {
  const utils = render(
    <BrowserRouter>
      <Calendar games={mockGames} calendar={mockCalendar} setCalenda={() => {}} />
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
