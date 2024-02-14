import {createStore} from 'redux';
import cakeReducer from './cakes/cakeReducer';


const store = createStore(cakeReducer);

export default store;
// Import Provider form 'react-redux' library that helps us to provide this store to react components