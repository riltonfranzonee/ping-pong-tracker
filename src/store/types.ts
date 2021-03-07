export interface GlobalState {
  game: IGameState | any;
}

export interface IPlayer {
  name?: string;
  wins: number;
}

export interface IGameState {
  started: boolean;
  player1: IPlayer;
  player2: IPlayer;
}
export interface IAction {
  type: string;
  payload?: any;
}

export interface ISetPlayer {
  player: string;
  name: string;
}
