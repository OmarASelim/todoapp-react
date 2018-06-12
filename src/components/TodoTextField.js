import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class Header extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    const { value: text } = e.target;

    this.setState({
      text,
    });
  };

  onKeyDown = e => {
    const { value } = e.target;

    if (e.which === 13) {
      this.props.onSubmit(value);

      this.setState({
        text: '',
      });
    }
  };

  render() {
    return (
      <TextField
        hintText="List item"
        floatingLabelText="List item"
        value={this.state.text}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        style={styles.textField}
      />
    );
  }
}

const styles = {
  textField: {
    width: '100%',
    fontSize: 20,
  },
};

export default Header;