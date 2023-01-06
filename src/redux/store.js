import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';

const store = configureStore({
    reducer: rootReducers,
    devTools: true,
})

export default store;
