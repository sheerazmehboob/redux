import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    // Wrapping div with provider but still it does'nt know about our store we can do that using props
    <Provider store={store}>
    {/* we typically provide this store at the top level so every component can access it */}
    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/> 
    </div>
    </Provider>
  );
}

export default App;
