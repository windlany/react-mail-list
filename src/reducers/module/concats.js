const initConcats = [
  { relative: 'family', name: 'mom12312312321', tel: '12334232321'},
  { relative: 'family', name: 'father', tel: '123345'},
  { relative: 'friend', name: 'tom', tel: '123345'}
]

const concats = (state = initConcats, action)=> {  
  switch(action.type) {
    case 'DELETE':
      var current = state;
      current.splice(action.index, 1); 
      return current;
    case 'SET_INFO':
      var current = state;
      current[action.index] = Object.assign({}, state[action.index], action.obj);
      return current;
    default:
      return state;
  }
}

export default concats;
