import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'adarsh gupta',
      state: 'goa',
      address: 'main road',
      pincode: '224141'
    }
  }
  
  handlename = (event) => {
    this.setState({name: event.target.value})
  }
  handlestate = (event) => {
    this.setState({state: event.target.value})
  }
  handleaddress = (event) => {
    this.setState({address: event.target.value})
  }
  handlepincode = (event) => {
    this.setState({pincode: event.target.value})
  }

  handlesubmit = (event) => {
    // alert('Name: ${this.state.name}',
    //         'Number: ${this.state.number}',
    //         'State : ${this.state.state}',
    //         'Address: ${this.state.line1address}',
    //         'Pincode: ${this.state.pincode}'
    //         );
            alert(JSON.stringify(this.state));
            event.preventDefault()
  }

  render () {
    return (
      <form className="demoForm" onSubmit = {this.handlesubmit}>
        <h2>Delivery Address</h2>
        <div className="inputName">
          <label htmlFor="name">Full Name </label>
          <input type="text" required className="form-control" name="name" value={this.state.name}
            onChange={this.handlename}  placeholder="Name" />
        </div>
        <div className="inputName">
          <label htmlFor="number" > Contact Number </label>
          <input type="number" className="form-control" name="number"
            placeholder="Number"  />
        </div>
        <div className="container">
            <div className="f-group">
                <label htmlFor="" className="inputName">State</label>
                <select name="slct1" id="slct1" onChange="populate(this.id,'slct2')" onClick={window['populate']}>
                    <option value="">Select State</option>
                    <option value="assam">ASSAM</option>
                    <option value="goa">GOA</option>
                </select>
            </div>
            <div className="f-group">
                <label htmlFor="" className="inputName">City</label>
                <select name="slct2" id="slct2"></select>
            </div>
        </div>
        <div className="inputName">
          <label htmlFor="line1address">Address 1 </label>
          <input type="line1address" className="form-control" name="line1address" value={this.state.address}
             onChange={this.handleaddress} placeholder="Line 1 Address" />
        </div>
        <div className="inputName">
          <label htmlFor="line2address">Address 2 </label>
          <input type="line2address" className="form-control" name="line2address"
            placeholder="Line 2 Address" />
        </div>
        <div className="inputName">
          <label htmlFor="landmark">Landmark </label>
          <input type="landmark" className="form-control" name="landmark"
            placeholder="Landmark" />
        </div>
        <div className="inputName">
          <label htmlFor="pincode">Pincode </label>
          <input type="number" className="form-control" name="pincode" value={this.state.pincode}
            onChange={this.handlepincode}  placeholder="Pincode" />
        </div>
        <button type="reset" className="btn btn-primary2">RESET</button>
        <button type="submit" className="btn btn-primary1">SUBMIT</button>
      </form>
      
    )
  }
}

export default Form;
