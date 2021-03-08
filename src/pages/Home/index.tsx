import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import { GlobalState } from '../../store/types';

import { startGame } from '../../store/ducks/game';

import {
  ButtonText,
  Container,
  ContinueButton,
  Title,
  SubTitle,
  HomeTextWrapper,
  InputContentWrapper,
} from './styles';

const Home: React.FC = () => {
  const game = useSelector((state: GlobalState) => state.game);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleStartGame = useCallback(() => {
    if (!game.player1.name || !game.player2.name) {
      Alert.alert(`Choose the players`);
      return;
    }

    dispatch(startGame());

    navigation.navigate(`Game`);
  }, [game, navigation.navigate, dispatch]);

  return (
    <Container>
      <HomeTextWrapper>
        <Title>Welcome to the Ping Pong Tracker!</Title>
        <SubTitle>Enter the names of the players to start.</SubTitle>
      </HomeTextWrapper>

      <InputContentWrapper>
        <Input player="player1" icon="user" placeholder="Player 1" />
        <Input player="player2" icon="user" placeholder="Player 2" />

        <ContinueButton onPress={handleStartGame}>
          <ButtonText>Continue</ButtonText>
        </ContinueButton>
      </InputContentWrapper>
    </Container>
  );
};

export default Home;
