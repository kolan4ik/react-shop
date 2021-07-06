export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loadin: false,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        alertName: payload.alertName,
        order: state.order.filter(item => item.id !== payload.id),
      };
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex(item => item.id === payload.id);
      let newState = [];
      if (itemIndex < 0) {
        newState = {
          ...state,
          alertName: payload.name,
          order: [
            ...state.order,
            {
              ...payload,
              counter: 1,
            },
          ],
        };
      } else {
        const newOrder = state.order.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              counter: item.counter + 1,
            };
          } else {
            return item;
          }
        });
        newState = {
          ...state,
          alertName: payload.alertName,
          order: [...newOrder],
        };
      }
      return newState;

    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isVisibleBasket: !state.isVisibleBasket,
      };

    case 'INC_GOODS':
      return {
        ...state,
        order: state.order.map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              counter: item.counter + 1,
            };
          } else {
            return item;
          }
        }),
      };
    case 'DEC_GOODS':
      return {
        ...state,
        order: state.order.map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              counter: item.counter !== 0 ? item.counter - 1 : 0,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
}
