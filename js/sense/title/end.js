class SceneEnd extends Scenes {
  constructor(game) {
    super(game)
    game.registerAction('r', function () {
      var s = SceneTitle.new(game)
      game.replaceScene(s)
    })
  }

  draw() {
    this.game.context.fillText('游戏结束 按r返回标题界面' , 160, 150)
  }
}