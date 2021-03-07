import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, ActivityIndicator } from 'react-native';
import { GlobalState } from '../../store/types';
import {
  Container,
  ScoreContainer,
  PlayerContainer,
  PlayerName,
  PlayerWins,
  PlayerAddWinButton,
  PlayerAddWinButtonText,
  ResultContainer,
  ResultTitle,
  ResultRow,
  ResultValue,
  SaveButton,
  SaveButtonText,
} from './styles';

import { addWin, finishGame } from '../../store/ducks/game';
import generateUniqueId from '../../utils/generateUniqueId';

const Game: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const game = useSelector((state: GlobalState) => state.game);

  useEffect(() => {
    if (!game.started) {
      navigation.navigate(`Home`);
    }
  }, [game, navigation]);

  const handleAddWin = useCallback(
    (player: string) => {
      dispatch(addWin(player));
    },
    [dispatch],
  );

  const winner = useMemo(() => {
    if (game.player1.wins === game.player2.wins) return `--`;

    if (game.player1.wins > game.player2.wins) return game.player1.name;

    return game.player2.name;
  }, [game]);

  const winDifference = useMemo(() => {
    const num = game.player1.wins - game.player2.wins;

    return Math.abs(num);
  }, [game]);

  const handleSave = useCallback(async () => {
    try {
      setLoading(true);

      const itemId = generateUniqueId();

      const jsonGame = JSON.stringify({
        id: itemId,
        player1: game.player1,
        player2: game.player2,
        winner,
        winDifference,
      });

      await AsyncStorage.setItem(`@game/${itemId}`, jsonGame);

      dispatch(finishGame());

      Alert.alert(`Game successfully saved!`);
    } catch (error) {
      Alert.alert(`Failed to save the game`, `Please, try again.`);
    } finally {
      setLoading(false);
    }
  }, [dispatch, game, winDifference, winner]);

  return (
    <Container>
      <ScoreContainer>
        <PlayerContainer>
          <PlayerName>{game.player1.name}</PlayerName>
          <PlayerWins>{game.player1.wins}</PlayerWins>
          <PlayerAddWinButton onPress={() => handleAddWin('player1')}>
            <PlayerAddWinButtonText>Add win</PlayerAddWinButtonText>
            <Icon name="plus" color="#fff" />
          </PlayerAddWinButton>
        </PlayerContainer>

        <PlayerContainer>
          <PlayerName>{game.player2.name}</PlayerName>
          <PlayerWins>{game.player2.wins}</PlayerWins>
          <PlayerAddWinButton onPress={() => handleAddWin('player2')}>
            <PlayerAddWinButtonText>Add win</PlayerAddWinButtonText>
            <Icon name="plus" color="#fff" />
          </PlayerAddWinButton>
        </PlayerContainer>
      </ScoreContainer>

      <ResultContainer>
        <ResultRow>
          <ResultTitle>Current winner:</ResultTitle>
          <ResultValue>{winner}</ResultValue>
        </ResultRow>

        <ResultRow>
          <ResultTitle>Win difference:</ResultTitle>
          <ResultValue>{winDifference}</ResultValue>
        </ResultRow>

        <SaveButton onPress={handleSave}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <SaveButtonText>Save game</SaveButtonText>
          )}
        </SaveButton>
      </ResultContainer>
    </Container>
  );
};

export default Game;
