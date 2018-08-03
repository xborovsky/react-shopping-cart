import React, { Component } from 'react';
import './App.css';
import SizeSelect from './components/SizeSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes : []
    };
  }

  handleSizeSelect = (e) => {
    const selected = e.target.innerText;
    let selectedArr = [...this.state.selectedSizes];

    if (selectedArr.indexOf(selected) === -1) {
      selectedArr.push(selected);
    } else {
      selectedArr = selectedArr.filter(item => item !== selected);
    }

    this.setState({selectedSizes : selectedArr});
  };

  render() {
    const { selectedSizes } = this.state;

    return (
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <SizeSelect onSelect={this.handleSizeSelect} selected={selectedSizes} />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          TODO
        </div>
      </div>
    );
  }
}

export default App;
