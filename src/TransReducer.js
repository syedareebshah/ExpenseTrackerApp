const TransReducer = (state, action) => {
    console.log("...",TransReducer)
    switch (action.type) {
      case 'ADD TRANS':
        return [action.payload , ...state];
    }
  }

  export default TransReducer;