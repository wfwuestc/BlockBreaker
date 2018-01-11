class Editor extends Scenes {
  constructor(game) {
    super(game)
    this.x = document.querySelector('#xx') || 0
    this.y = document.querySelector('#yy') || 0
    this.levels = [[
      [0, 0,],
    ],]
    this.current = 0
    this.button = document.querySelector('.editor button')
    this.x.addEventListener('change', (e) => {
      log(e.target.value)
      this.levels[0][this.current][0] = e.target.value
     })
    this.y.addEventListener('change', (e) => {
      log(e.target.value)
      this.levels[0][this.current][1] = e.target.value
    })

    // 保存编辑结果
    // 读取关卡

    // 将关卡保存在localStorage
    // 进入游戏模式
  }

  draw() {
    var blocks = loadLevel(this.game, 1, this.levels)
    for (var i = 0; i < blocks.length; i++){
      var block = blocks[i]
      log(block)
      if (block.alive){
        this.game.drawImage(block)
      }
    }
  }
  update() {
  }
}