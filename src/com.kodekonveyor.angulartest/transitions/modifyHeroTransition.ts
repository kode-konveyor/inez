import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';

export function modifyHeroTransition(state: Heroes, action: { payload: Hero; }): Heroes {
  const newState = state.map(
    h => {
      if (h.id === action.payload.id) {
        return action.payload;
      }
      return h;
    }
  );
  return newState
}
