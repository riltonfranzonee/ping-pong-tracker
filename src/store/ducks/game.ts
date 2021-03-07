import produce from 'immer';
import { IGameState, IAction, ISetPlayer } from '../types';

export const ActionTypes = {
  SET_PLAYER: '@game/set_player',
  ADD_WIN: '@game/add_win',
  START: '@game/start',
  FINISH: '@game/finish',
};

const initialState: IGameState = {
  started: false,
  player1: {
    name: '',
    wins: 0,
  },
  player2: {
    name: '',
    wins: 0,
  },
};

export default function game(
  state = initialState,
  { type, payload }: IAction,
): IGameState {
  return produce(state, (draft: IGameState | any) => {
    switch (type) {
      case ActionTypes.SET_PLAYER:
        draft[payload.player].name = payload.name;
        break;
      case ActionTypes.ADD_WIN:
        draft[payload.player].wins++;
        break;
      case ActionTypes.START:
        draft.started = true;
        break;
      case ActionTypes.FINISH:
        return initialState;
      default:
        break;
    }
  });
}

export function setPlayer(data: ISetPlayer): IAction {
  return {
    type: ActionTypes.SET_PLAYER,
    payload: data,
  };
}

export function addWin(player: string): IAction {
  return {
    type: ActionTypes.ADD_WIN,
    payload: {
      player,
    },
  };
}

export function startGame(): IAction {
  return {
    type: ActionTypes.START,
  };
}

export function finishGame(): IAction {
  return {
    type: ActionTypes.FINISH,
  };
}
