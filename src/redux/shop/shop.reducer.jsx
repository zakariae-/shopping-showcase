import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return currentState;
    }
}

export default shopReducer;