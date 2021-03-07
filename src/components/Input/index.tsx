import React, { useState, useRef, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, TextInput, Icon } from './styles';

import { IGameState, setPlayer } from '../../store/ducks/game';

import { GlobalState } from '../../store/types';

interface InputProps extends TextInputProps {
  player: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.FC<InputProps> = ({ player, icon, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const inputValue = useSelector(
    (state: GlobalState) => state.game[player].name,
  );

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputChange = useCallback(
    value => {
      dispatch(
        setPlayer({
          player,
          name: value,
        }),
      );
    },
    [player, dispatch],
  );

  return (
    <Container isFocused={isFocused}>
      <Icon
        name={icon}
        color={isFocused || !!inputValue ? '#148DF8' : '#666360'}
        size={20}
      />
      <TextInput
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleInputChange}
        value={inputValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
