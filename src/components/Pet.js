import React from 'react'

class Pet extends React.Component {
  
  
  render() {
    // debugger
    console.log(this.props.gender)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name}
            <br></br>
            {this.props.gender === "male" ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">{this.props.isAdopted ? "adopted" : "not adopted"}</button>
          <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
