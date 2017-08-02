

export const SeenNotifications = (state = null, action) => {
  switch (action.type) {

  case 'SET_SEEN_NOTIFICATIONS':
    return action.payload;
  default:
    return state;

  }
};

export const UnseenNotifications = (state = null, action) => {
  switch (action.type) {

  case 'SET_UNSEEN_NOTIFICATIONS':
    return action.payload;
  case 'FOLLOW_NOTIFICATION':
    console.log('**** unseen notifications on emit: ', [...state, action.payload]);
    return [...state, action.payload];
  default:
    return state;

  }
};
