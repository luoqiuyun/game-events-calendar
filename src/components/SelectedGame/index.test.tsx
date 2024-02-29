import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockImages, mockGame } from 'assets/mocks'
import SelectedGame from './index';

describe('SelectedGame component', () => {
  test('displays game details correctly', () => {
    render(<SelectedGame game={mockGame} images={mockImages} weekSelected={true} />);
    expect(screen.getByText('TEST GAME: The Adventure This is a test game summary.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Pre Order Now' })).toBeInTheDocument();
  });

  test('opens learn more link when Learn More button is clicked', () => {
    const originalOpen = window.open;
    window.open = jest.fn();
    render(<SelectedGame game={mockGame} images={mockImages} weekSelected={true} />);
    fireEvent.click(screen.getByRole('button', { name: 'Learn More' }));
    expect(window.open).toHaveBeenCalledWith(mockGame.learnMoreLink, '_blank');
    window.open = originalOpen;
  });
});
