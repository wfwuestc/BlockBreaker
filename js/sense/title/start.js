var SceneEnd = function (game) {
  var s = {
    g: game,
  }
  // 初始化
  s.draw = function () {

    //draw labels
    game.context.fillText('游戏结束' , 10, 290)
  }
  s.update = function () {

  }
  return s
}