import React, { Component } from 'react';
import axios from 'axios';
import Seat from './Seat';

const ROOT_URL = 'https://whispering-tundra-16985.herokuapp.com/'
const RESERVATIONS_URL = (ROOT_URL + "reservations")
const FLIGHT_URL = (ROOT_URL + "flights")

// ➕  Add
let localReservationObj = {}
let localFlightObj = {}

// const resObjectHardCode = [{ a1: null,  a2:"Mai",  a3: null,  a4: null,  a5: null,  a6: null}, { b1: null,  b2: null,  b3: null,  b4: null,  b5: null,  b6: null}, { c1:"Pers",  c2:"Joe",  c3: null,  c4: null,  c5 :"Joel",  c6: null}]


// creating funcitons here becuase scoping is giving me a headache 😅
const updateLocalReservationObj = function(userSelectedSeat){
  // let json = JSON.parse(resObjectHardCode)
  let rowNumber = userSelectedSeat.charAt(0);
  rowNumber = rowNumber.charCodeAt(0) - 97
  let row = localReservationObj[rowNumber]
  row[userSelectedSeat] = 'user-name'
}

// const reservations = [
//   {a1: "Rita", a2: null, a3: null},
//   {b1: null, b2: "Tom", b3: null },
//   {c1: "Sam", c2: null, c3: null },
// ];

const rowIndices = ["A", "B", "C", "D"];

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

  // //handles select seat button
  // _handleSelect = (event) => {
  //   event.preventDefault();
  //   // To Do: send info back to backend
  //   console.log(this.state.userSelectedSeat);
  // }


  _handleSubmit = (event) => {
    event.preventDefault();
    // has the user selected anything? if not error
    if (!this.state.userSelectedSeat) return alert('You must select a seat first')

    const reservation = {
      flight_id: 5,
      seat_number: 'a2',
      user_id: 3
    }

    axios.post(RESERVATIONS_URL, {reservation}).then((response) => {
      console.log('Posting a new reservation:')
      console.log(response)
    });

    // update our reservation obj to match selected seat
    console.log("funciton is called")
    updateLocalReservationObj("a1");


  // console.log(localFlightObj);
    // localFlightObj
    axios.patch(`${FLIGHT_URL}/5.json`, localFlightObj).then((response) => {
        console.log('editing flight obj:')
        console.log(response)
    });

  }

  componentDidMount() {

     // get flight from DB
    axios.get(`${FLIGHT_URL}/5.json`).then((res) => {
      console.log('getting existing flight obj, saving as local flight obj:')
      localFlightObj = res.data;
      console.log(localFlightObj)

      // add reservation obj to state of component
      localReservationObj = JSON.parse(localFlightObj.reservation_obj)

      }
    )
  }

  // renders row number from const array rowIndices
  renderRowIndex = (i) => {
    return rowIndices[i];
  }

  renderReservations = (arrObj) => {

    // Loop reservations, render row,
    // for each key in row render seat
    return reservations.map((row, index) => {
      return (
        <div key={index}>
          <p>ROW {this.renderRowIndex(index)}</p>
          <div className="row" key={index}>
             <div className="left">
               {Object.keys(row).map(seat => {
                 return (
                   <Seat key={seat} id={seat} reservedBy={row[seat]} checked={ this.state.userSelectedSeat === seat } onClick={ this.handleClick } />
                 )
               })}
             </div>
           </div>
         </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Select your preferred seat</h1>
        <form className="seat-allocation-form">

          {this.renderReservations()}

           <button onClick={ this._handleSubmit } >Select Seat</button>
        </form>
      </div>
    );
  }
}

export default Flights;
