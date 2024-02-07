var config = {
  type: Phaser.AUTO, // AUTO - оптимальний вибір для рендерингу бо він автоматично намагається використовувати WebGL, але якщо браузер або пристрій не підтримує його, він повертається до Canvas
  width: 800,
  height: 600, //можна ставити будь-який розмір, але в туторіалі вибраний саме цей
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
