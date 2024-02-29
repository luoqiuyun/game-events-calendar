import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCalendar, getImageList } from "components/helpers";
import { mockGames, mockCalendar } from 'assets/mocks'
import Month from './index';
import * as helpers from 'components/helpers';

describe('Month Component', () => {

  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Month calendar={mockCalendar} games={mockGames} />
      </Router>
    );

    const element1 = getByTestId('card-1');
    expect(element1).toBeInTheDocument();
    const element25 = getByTestId('card-25');
    expect(element25).toBeInTheDocument();
  });

  it('shows SelectedGame component when a game is selected', () => {
    const { getByTestId, getByText, container } = render(
      <Router>
        <Month calendar={mockCalendar} games={mockGames} />
      </Router>
    );

    const elem = container.getElementsByClassName("day-with-game")[0];
    fireEvent.click(elem);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Pre Order Now')).toBeInTheDocument();
  });

});
