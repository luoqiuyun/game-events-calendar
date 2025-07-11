import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockWeekImages, mockGames} from 'assets/mocks'
import Week from './index';

describe('Week component', () => {
  test('renders WeekDay components for each day', () => {
    const setWeekSelected = jest.fn();
    const setGameSelected = jest.fn();

    render(
      <Week
        week={1}
        days={mockGames}
        gameSelected={mockGames[0]}
        setWeekSelected={setWeekSelected}
        setGameSelected={setGameSelected}
        images={mockWeekImages}
      />
    );

    const weekDayElements = screen.getAllByRole('button');
    expect(weekDayElements).toHaveLength(mockGames.length);
  });
});
