const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following) => following !== action.payload
          ),
        },
      };
    case "CREATE_POST":
      return {
        ...state,
        user: {
          ...state.user,
          postCount: action.payload,
        },
      };
    case "DELETE_POST":
      return {
        ...state,
        user: {
          ...state.user,
          postCount: action.payload,
        },
      };
    case "UPLOAD_PICS":
      return {
        ...state,
        user: {
          ...state.user,
          profilePic: action.payload.profilePic,
          coverPic: action.payload.coverPic,
        },
      };
    case "BOOK":
      return {
        ...state,
        user: {
          ...state.user,
          savedArray: [...state.user.savedArray, action.payload],
        },
      };
    case "UNBOOK":
      return {
        ...state,
        user: {
          ...state.user,
          savedArray: state.user.savedArray.filter(
            (savedArray) => savedArray !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default AuthReducer;
