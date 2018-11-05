const initConcats = [
  { relative: 'family', name: 'mom12312312321', tel: '12334232321'},
  { relative: 'family', name: 'father', tel: '123345'},
  { relative: 'friend', name: 'tom', tel: '123345'}
]

const concats = (state = initConcats, action)=> {  
  // current和state不同地址才能触发componentWillReceiveProps
  let current = Object.assign([], state); 
  switch(action.type) {
    case 'DELETE':
      current.splice(action.index, 1); 
      return current;
    case 'SET_INFO':
      current[action.index] = Object.assign({}, state[action.index], action.obj);
      return current;
    case 'ADD': 
      current.push(action.concat);
      return current;
    default:
      return state;
  }
}

export default concats;
