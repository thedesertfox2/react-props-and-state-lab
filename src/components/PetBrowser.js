import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    let animals = this.props.pets.map(pet => <Pet key={pet.id} name={pet.name} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted}/>)
    return <div className="ui cards" >{animals}</div>
  }
}

export default PetBrowser
