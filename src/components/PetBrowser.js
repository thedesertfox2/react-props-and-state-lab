import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    let animals = this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} name={pet.name} age={pet.age} type={pet.type} weight={pet.weight} gender={pet.gender} isAdopted={pet.isAdopted}/>)
    return <div className="ui cards" >{animals}</div>
  }
}

export default PetBrowser
