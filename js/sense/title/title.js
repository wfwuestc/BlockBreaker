class SceneTitle extends Scenes {
  constructor(game) {
    super(game)
    game.registerAction('k', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
    game.registerAction('r', function () {
      var s = Editor.new(game)
      game.replaceScene(s)
      var editorForm = document.querySelector('.editor')
      editorForm.style.display = 'block'
    })

  }

  draw() {
    this.game.context.fillText('按K开始游戏', 160, 150)
    this.game.context.fillText('按R开始编辑关卡', 160, 180)
  }
}
