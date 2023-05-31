import './index.css';

import FooterContainer from './components/Footer/FooterContainer';
import TaskListContainer from './components/TaskList/TaskListContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <section className="todoapp">
      <HeaderContainer />
      <section className="main">
        <TaskListContainer />
        <FooterContainer />
      </section>
    </section>
  );
};

export default App;
