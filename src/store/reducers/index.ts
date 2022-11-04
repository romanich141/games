interface IAction {
  type: string,
  payload?: unknown
}

interface IState {
  
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
      case 'SET_POSTS':
          return {
              ...state,
              posts: action.payload
          };
      default:
          return state;
  }
};