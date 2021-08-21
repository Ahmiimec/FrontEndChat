import Main from './components/Main/Main'
import { withRouter , BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider,connect } from 'react-redux';
import store from './redux/store/store';
import * as actions from './redux/actions/index';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Main/>
    </Provider>
    </Router>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
