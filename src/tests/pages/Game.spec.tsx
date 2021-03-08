import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Game from '../../pages/Game';
import { Provider } from 'react-redux';
import store from '../../store';

const mockedNavigationNavigate = jest.fn();

const mockedAsyncSave = jest.fn();

jest.mock(`@react-native-async-storage/async-storage`, () => {
  return {
    setItem: mockedAsyncSave
  }
})

jest.mock(`@react-navigation/native`, () => {
  return {
    useNavigation: () => ({ navigate: mockedNavigationNavigate })
  }
})

describe('Game Page', () => {
  it('should be able to add a win to a player', () => {
    const {getByTestId , getByText } = render(
      <Provider store={store}>
        <Game/>
      </Provider>
    );
  
    const addWinButton = getByTestId('player1Button');
    const playerScore = getByTestId('player1Score');

    fireEvent.press(addWinButton);

    expect(playerScore.children[0]).toBe('1');
  }) 

  it('should be able to finish the game', () => {
    const {getByTestId , getByText } = render(
      <Provider store={store}>
        <Game/>
      </Provider>
    );
  
    const saveButton = getByText('Save game');

    fireEvent.press(saveButton);

    expect(mockedNavigationNavigate).toHaveBeenCalledWith('Home');
  })
});
