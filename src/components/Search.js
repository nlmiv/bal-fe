import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

const BAL_URL = 'https://whispering-tundra-16985.herokuapp.com/flights.json';

// Search for flights based on destination
// On submit provide from, to, date to query backend
class Search extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    } ;
    this.fetchFlights = this.fetchFlights.bind(this)
  }

  fetchFlights () {
    axios.get(BAL_URL).then((res) => {
        console.log('i got results',res);
        this.setState({ flights: res.data })
        // setTimeout(fetchSecrets, 5000) // recursion
        this.props.history.push('/flights');
        // renders the /flights component on the page via withRouter higher-order component
      })
  }

  render() {
    console.log(this.props.history);
    return (
      <div>
      <h1>Search for Flights</h1>
        <SearchForm onSubmit={ this.fetchFlights } />
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      // from: '',
      // to: '',
      // date: ''
    };
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit()
    // this.setState({content: ''}) // clear the content for state
    console.log('Search form submitted');
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input id='from' type="search" placeholder="Sydney"  />
        <input id='to' type="search" placeholder="Melbourne" />
        <input id='to' type="date" placeholder="Melbourne" />
        <input type="submit" />
      </form>
    );
  }

}

export default withRouter(Search);
