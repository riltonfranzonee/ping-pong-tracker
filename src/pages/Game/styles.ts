import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const ScoreContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 30px;
`;

export const PlayerContainer = styled.View`
  align-items: center;
  width: 50%;
  margin-bottom: 40px;
`;

export const PlayerName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 100%;
`;

export const PlayerWins = styled.Text`
  color: #fff;
  font-size: 38px;

  margin-bottom: 20px;
`;

export const PlayerAddWinButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #148df8;
  height: 40px;
  width: 130px;
  border-radius: 10px;
`;

export const PlayerAddWinButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ResultContainer = styled.View`
  margin-top: 20px;
  width: 90%;
  align-self: center;
`;

export const ResultRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ResultTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
`;

export const ResultValue = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #148df8;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
