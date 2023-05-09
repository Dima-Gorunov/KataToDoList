import './index.css';
import { Component } from 'react';

import FooterContainer from './components/Footer/FooterContainer';
import TaskListContainer from './components/TaskList/TaskListContainer';
import HeaderContainer from './components/Header/HeaderContainer';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <HeaderContainer />
        <section className="main">
          <TaskListContainer />
          <FooterContainer />
        </section>
      </section>
    );
  }
}

export default App;
