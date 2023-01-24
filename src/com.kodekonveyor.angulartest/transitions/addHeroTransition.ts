import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';

export function addHeroTransition(state: Heroes, action: { payload: Hero; }): Heroes {
    const newstate = state.concat([action.payload]);

    return newstate;
}
