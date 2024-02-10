

const ADDBIRD = "ADDBIRD";
const UNDO = "UNDO";
const LIKEBIRD = "LIKEBIRD";
const DELETE = "DELETE";

export const addbird = (name) => ({
  type: ADDBIRD,
  payload: name,
});

export const likebird = (birdid) => ({
  type: LIKEBIRD,
  payload: birdid,
});

export const deletebird = (birdid) => ({
  type: DELETE,
  payload: birdid,
});

export const undo = () => ({ type: UNDO });

const initialState = {
  bird: [],
};

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBIRD:
      return {
        ...state,
        bird: [
          ...state.bird,
          { name: action.payload, id: crypto.randomUUID(), like: 0 },
        ],
      };
    case LIKEBIRD:
      return {
        ...state,
        bird: state.bird.map((bird) =>
          bird.id === action.payload ? { ...bird, like: bird.like + 1 } : bird
        ),
      };
    case DELETE:
      return {
        ...state,
        bird: state.bird.filter((bird) => bird.id !== action.payload),
      };
    case UNDO:
      return {
        ...state,
        bird: state.bird.slice(0, state.bird - 1),
      };
    default: {
      return state;
    }
  }
};
export default birdReducer;
