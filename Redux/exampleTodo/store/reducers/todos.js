// state: ['Fazer café', 'Estudar React','Entrar na comunidade']
// action: addTodo('Entrar na comunidade')
// type: 'ADD_TODO', 'REMOVE_TODO'

const INITIAL_STATE = [
  {id: 1, text: 'Fazer café'},
  {id: 2, text: 'Estudar ReactJS'},
  {id: 3, text: 'Almoçar ReactJS'},
];

export default function todos(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: action.payload.text}]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
      default:
      return state;
  }
}