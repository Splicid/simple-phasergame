import React, { Component } from 'react'
import sky from './assets/sky1.jpg'
import Phaser from 'phaser'

class Game extends Component {

  constructor() {
    super();

    this.config = {
        type: Phaser.AUTO,
        width: 1200,
        height: 800,
        parent: "game",
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            preload: function(){
              this.load.image('sky', sky);
            },
            create: function(){
              this.add.image(600, 400, 'sky');
            },
            update: function(){

            }
        }
    };



  }
  componentDidMount() {
    this.game = new Phaser.Game(this.config);
 }

  render() {
    return (<div id="game"></div>)
  }
}

export default Game