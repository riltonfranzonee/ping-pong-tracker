import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Home from '../../pages/Home';
import { Provider } from 'react-redux';
import store from '../../store';

const mockedNavigationNavigate = jest.fn();

jest.mock(`@react-navigation/native`, () => {
  return {
    useNavigation: () => ({ navigate: mockedNavigationNavigate })
  }
})

describe('Home Page', () => {
  it('should contain two player name inputs', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  
    const player1Input = getByPlaceholderText('Player 1');
    const player2Input = getByPlaceholderText('Player 2');

    expect(player1Input).toBeTruthy();
    expect(player2Input).toBeTruthy();
  });


  it('should be able to start a game', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  
    const player1Input = getByPlaceholderText('Player 1');
    const player2Input = getByPlaceholderText('Player 2');
    const continueButton = getByText('Continue');

    fireEvent.changeText(player1Input, 'Player 1 Test');
    fireEvent.changeText(player2Input, 'Player 2 Test');

    fireEvent.press(continueButton);

    expect(mockedNavigationNavigate).toHaveBeenCalledWith('Game');
  })


});
