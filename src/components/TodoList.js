import React, { Component } from 'react';
import { List } from 'material-ui/List';

import TodoRow from './TodoRow';
import Footer from '../components/Footer';

class TodoList extends Component {
  state = {
    currentFilter: 'all',
  };

  handlemarkTodo = id => {
    return () => this.props.actions.markTodo(id);
  };

  handledelTodo = id => {
    return () => this.props.actions.delTodo(id);
  };

  handleFilter = filter => {
    this.setState({
      currentFilter: filter,
    });
  };

  handledelMarked = () => {
    this.props.actions.delMarked();
  };

  handlemarkAll = () => {
    this.props.actions.markAll();
  };

  render() {
    const { todos } = this.props;
    const { currentFilter } = this.state;

    const filteredTodos = todos.filter(({ completed }) => {
      switch (currentFilter) {
        case 'completed':
          return completed;
        case 'active':
          return !completed;
        default:
          return true;
      }
    });

    return (
      <div>
        <List>
          {filteredTodos.map(todo =>
            <TodoRow
              key={todo.id}
              todo={todo}
              handlemarkTodo={this.handlemarkTodo}
              handledelTodo={this.handledelTodo}
            />
          )}
        </List>
        <Footer
          todos={todos}
          handleFilter={this.handleFilter}
          currentFilter={currentFilter}
          handledelMarked={this.handledelMarked}
          handlemarkAll={this.handlemarkAll}
        />
      </div>
    );
  }
}

export default TodoList;