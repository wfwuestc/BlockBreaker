class Editor extends Scenes {
  constructor(game) {
    super(game)
    this.x = document.querySelector('#xx') || 0
    this.y = document.querySelector('#yy') || 0
    this.levels = [[
      [0, 0,],
    ],]
    this.current = 0
    this.button = document.querySelector('#addblock')
    this.addlevel = document.querySelector('#addlevel')
    this.backgame = document.querySelector('#togame')
    this.x.addEventListener('mousedown', (e) => {
      e.target.addEventListener('mousemove', (e) => {
        this.levels[0][this.current][0] = Number(e.target.value)
        this.blocks = loadLevel(this.game, 1, this.levels)
      })
    })
    this.y.addEventListener('mousedown', (e) => {
      e.target.addEventListener('mousemove', (e) => {
        this.levels[0][this.current][1] = Number(e.target.value)
        this.blocks = loadLevel(this.game, 1, this.levels)
      })
    })
    this.button.addEventListener('click', e => {
      e.preventDefault()
      this.current += 1
      let origin = [0, 0]
      this.levels[0].push(origin)
      this.blocks = loadLevel(this.game, 1, this.levels)
      this.x.value = 0
      this.y.value = 0
    })
    this.blocks = loadLevel(this.game, 1, this.levels)
    // 保存编辑结果
    this.addlevel.addEventListener('click', e => {
      e.preventDefault()
      levels.push(this.levels[0])
    })

    // 将关卡保存在localStorage

    // 进入游戏模式
    this.backgame.addEventListener('click', e => {
      e.preventDefault()
      var s = SceneTitle.new(game)
      game.replaceScene(s)
      var editorForm = document.querySelector('.editor')
      editorForm.style.display = 'none'
    })


  }

  draw() {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i]
      if (block.alive) {
        this.game.drawImage(block)
      }
    }

  }

  update() {
  }
}