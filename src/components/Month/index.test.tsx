import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // needed if useLocation is used inside the component
import { getCalendar, getImageList } from "components/helpers";
import { mockWeeks, mockGames} from 'assets/test-mocks'
import Month from './index';
import * as helpers from 'components/helpers';

const mockCalendar = {"days":29,"firstDay":4,"month":2,"year":2024};

describe('Month Component', () => {

  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Month calendar={mockCalendar} games={mockGames} />
      </Router>
    );

    const element = getByTestId('card-1');
    expect(element).toBeInTheDocument();
  });

  it('shows SelectedGame component when a game is selected', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Month calendar={mockCalendar} games={mockGames} />
      </Router>
    );
    fireEvent.click(getByTestId('card-2'));
  });

});
