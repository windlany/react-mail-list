let initUserState = {
  id: '',
  name: '',
  tel: '',
  psw: ''
}

const user = (state = initUserState, action)=> {
  switch(action.type) {
    case 'LOGIN':
      return action.userInfo;
    default:
      return state;
  }
}

export default user;
