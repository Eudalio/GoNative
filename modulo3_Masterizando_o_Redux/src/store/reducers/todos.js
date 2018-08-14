const initialState = [
  'Fazer café',
  'Estudar GoNative',
];
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}
