import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 90%;
  align-self: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

export const SubTitle = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-size: 20px;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #148df8;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const HomeTextWrapper = styled.View`
  margin-top: 45%;
  position: absolute;
`;

export const InputContentWrapper = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`;
