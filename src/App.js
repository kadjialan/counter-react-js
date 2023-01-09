import { Component } from "react";

const image = [
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/portrait-of-a-goat-james-w-johnson.jpg',
    name: 'goat'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/machka-2001-james-w-johnson.jpg',
    name: 'cat'
  },
  {
    src: 'https://render.fineartamerica.com/images/rendered/default/flat/puzzle/images/artworkimages/medium/2/leopard-portrait-kyslynskahal.jpg?&targetx=0&targety=-206&imagewidth=1000&imageheight=1163&modelwidth=1000&modelheight=750&backgroundcolor=2D2320&orientation=0&producttype=puzzle-18-24&brightness=112&v=6',
    name: 'lion'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/dog-nature-4-james-w-johnson.jpg',
    name: 'dog'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/portrait-of-a-rooster-james-w-johnson.jpg',
    name: 'hen'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/horned-toad-james-w-johnson.jpg',
    name: 'lizard'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/background-noise-james-w-johnson.jpg',
    name: 'rabbit'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/pet-dragonfly-james-w-johnson.jpg',
    name: 'insect'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/go-fish-james-w-johnson.jpg',
    name: 'fish'
  },
  {
    src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/free-range-pig-james-w-johnson.jpg',
    name: 'pig'
  }
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  add() {
    this.setState({count: (this.state.count +1) % image.length})
  }

  sub() {
    const count = this.state.count - 1
    this.setState({count: count < 0? image.length -1: count})
  }
  render() {
    return <div className="content">
      <div className="imageholder">
        <img src={image[this.state.count].src} alt={image[this.state.count].name} width ={200}></img>
        <p>{image[this.state.count].name}</p>
      </div>
      <div className="main">
      <button className="minus" onClick={this.sub.bind(this)}> &lang;</button>
      <div className="numb">{this.state.count}</div>
      <button className="add" onClick={this.add.bind(this)}> &rang; </button>
      </div>
    </div>

  }
}
