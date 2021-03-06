import { createSelector } from 'reselect';

const userSelector = state => state.users;

export const getUserId = createSelector([userSelector], state => state.uid);
export const getUserName = createSelector(
   [userSelector],
   state => state.username
);
export const getIsSignedIn = createSelector(
   [userSelector],
   state => state.isSignedIn
);
export const getProductsInCart = createSelector(
   [userSelector],
   state => state.cart
);
export const getOrdersHistory = createSelector(
   [userSelector],
   state => state.orders
);

