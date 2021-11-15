class Game {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width, chess) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
      this.chess = chess;
    }
    

    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
  
    sayHistory() {
      console.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).');
    }
  
    onDrop (source, target, piece, newPos, oldPos, orientation) {
      console.log('Source: ' + source)
      console.log('Target: ' + target)
      console.log('Piece: ' + piece)
      console.log('New position: ' + Chessboard.objToFen(newPos))
      console.log('Old position: ' + Chessboard.objToFen(oldPos))
      console.log('Orientation: ' + orientation)
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  
      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      })
      if (move === null) return 'snapback'
    }//onDrop

}//class Game

//   export default class {}
  export { Game };