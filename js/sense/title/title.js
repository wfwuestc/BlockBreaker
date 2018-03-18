class SceneTitle extends Scenes {
  constructor(game) {
    super(game)
    game.registerAction('k', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }

  draw() {
    this.game.context.fillText('按K开始游戏', 160, 150)
  }
}
