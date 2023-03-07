// Actions
const SET_GREETING = 'greetings/greetings/SET_GREETING';
const LINK = 'http://127.0.0.1:3000/api/random_greeting';

// initial state
const initialState = {
  greeting: '',
};

// Reducer
export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GREETING:
      return {
        ...state,
        greeting: action.payload.greeting_text,
      };

    default:
      return state;
  }
}

// Action Creators
const setGreetingAction = (greetingObj) => ({
  type: SET_GREETING,
  payload: greetingObj,
});

const fetchGreetingObj = () => async (dispatch) => {
  await fetch(LINK, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((res) => {
      const msg = {
        greeting_text: res.greeting_text,
      };
      dispatch(setGreetingAction(msg));
    });
};

export { fetchGreetingObj, setGreetingAction };
