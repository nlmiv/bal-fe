import React, { Component } from 'react';
import Seat from './Seat';


class Flights extends Component {
  constructor() {
    super();
    this.state = {
      userSelectedSeat: '',
    };
  }

  // this function is for Seat(child) to communicate with Flights(parent)
  // when a seat button is clicked, its id is passed on to Flights(parent)
  handleClick = (id) => {
    this.setState({userSelectedSeat: id});
  }

  // handles select seat button
  _handleSelect = (event) => {
    event.preventDefault();
    console.log(this.state.userSelectedSeat);
    // To Do: send info back to backend
  }

  render() {
    return (
      <div>
        <h1>Select your preferred seat</h1>
        <form className="seat-allocation-form">
          <p>ROW A</p>
          <div className="row">
             <div className="left">
               <Seat id="a1" reservedBy="Hessam" checked={ this.state.userSelectedSeat === 'a1' } onClick={ this.handleClick } />
               <Seat id="a2" reservedBy="" checked={ this.state.userSelectedSeat === 'a2' } onClick={ this.handleClick } />
               <Seat id="a3" reservedBy="" checked={ this.state.userSelectedSeat === 'a3' } onClick={ this.handleClick } />
             </div>

             <div className="right">
             <Seat id="a4" reservedBy="Mina" checked={ this.state.userSelectedSeat === 'a4' } onClick={ this.handleClick } />
             <Seat id="a5" reservedBy="" checked={ this.state.userSelectedSeat === 'a5' } onClick={ this.handleClick } />
             <Seat id="a6" reservedBy="" checked={ this.state.userSelectedSeat === 'a6' } onClick={ this.handleClick } />
             </div>
           </div>

          <p>ROW B</p>
          <div className="row">
             <div className="left">
             <Seat id="b1" reservedBy="" checked={ this.state.userSelectedSeat === 'b1' } onClick={ this.handleClick } />
             <Seat id="b2" reservedBy="" checked={ this.state.userSelectedSeat === 'b2' } onClick={ this.handleClick } />
             <Seat id="b3" reservedBy="" checked={ this.state.userSelectedSeat === 'b3' } onClick={ this.handleClick } />
             </div>

             <div className="right">
             <Seat id="b4" reservedBy="" checked={ this.state.userSelectedSeat === 'b4' } onClick={ this.handleClick } />
             <Seat id="b5" reservedBy="" checked={ this.state.userSelectedSeat === 'b5' } onClick={ this.handleClick } />
             <Seat id="b6" reservedBy="" checked={ this.state.userSelectedSeat === 'b6' } onClick={ this.handleClick } />
             </div>
           </div>

           <button onClick={ this._handleSelect } >Select Seat</button>
        </form>
      </div>
    );
  }
}

export default Flights;
