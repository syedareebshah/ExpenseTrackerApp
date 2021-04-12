const TransReducer = (state, action) => {

  let newState = [...state];

  switch (action.type) {
    case 'ADD TRANS':
      return [action.payload, ...state];
    case 'Delete':

      // let arr = state;
      var x = action.payload.id
      // arr = arr.forEach((trans) => arr.push(+trans.amount))
      // var z = arr[x]
      newState.splice(x, 1);
      // state = arr;

      // console.log("yee", arr)
      return newState;



  }
}

export default TransReducer;