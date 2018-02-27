let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'categoryEGORY_CREATE': return [...state, payload];
  case 'categoryEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
  case 'categoryEGORY_DELETE': return state.filter(category => category.id !== payload.id);
  case 'categoryEGORY_RESET': return initialState;
  default: return state;
  }
};