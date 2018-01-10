class Editor extends Scenes {
  constructor(game) {
    super(game)
    this.x = document.querySelector('#xx') || 0
    this.y = document.querySelector('#yy') || 0
    this.blocks = []
    this.current = 0
    this.button = document.querySelector('.editor button')

    this.x.addEventListener('change', (e) => {
      log(e.target.value)
      this.blocks[this.current] = [this.x, this.y]
     })
    this.y.addEventListener('change', (e) => {
      log(e.target.value)
      this.blocks[this.current] = [this.x, this.y]
    })
  }

  draw() {
    // for (var i = 0; i < blocks.length; i++){
    //   var block = blocks[i]
    //   if (block.alive){
    //     this.game.drawImage(block)
    //   }
    // }
  }
}