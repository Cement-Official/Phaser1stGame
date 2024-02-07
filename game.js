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

function preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png",
        { frameWidth: 32, frameHeight: 48, }
    );
} //функція preload додає картинки (поки не додає безпосередньо в гру)

function create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 300, "star");
} //додає картинки в гру

function update() {}
