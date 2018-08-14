const initialState = [
  { id: 0, text: 'Fazer café' },
  { id: 1, text: 'Estudar GoNative' },
];
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
