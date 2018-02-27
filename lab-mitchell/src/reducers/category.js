let initialState = [];

export default (state=initialState, action) => { //initialState basically for page load
  let {type, payload} = action; //type of action we're dispatching, and payload

  switch(type) {
  case 'categoryEGORY_CREATE': return [...state, payload]; //hands in new item passed as payload, ...state CREATES AN ENTIRE NEW STATE ARRAY AY
  case 'categoryEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
  case 'categoryEGORY_DELETE': return state.filter(category => category.id !== payload.id);
  case 'categoryEGORY_RESET': return initialState;
  default: return state;
  }
};