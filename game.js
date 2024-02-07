var config = {
  type: Phaser.AUTO, // AUTO - оптимальний вибір для рендерингу бо він автоматично намагається використовувати WebGL, але якщо браузер або пристрій не підтримує його, він повертається до Canvas
  width: 800,
  height: 600, //можна ставити будь-який розмір, але в туторіалі вибраний саме цей
   physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("star", "assets/star.png");
  this.load.image("bomb", "assets/bomb.png");
  this.load.spritesheet("dude", "assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
} //функція preload додає спрайти (поки не додає безпосередньо в гру)

function create() {
  this.add.image(400, 300, "sky"); //додає фон

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
} //додає спрайти безпосередньо в гру

function update() {
  platforms = this.physics.add.staticGroup(); // Це створює нову групу статичної фізики та призначає її локальним змінним платформам
}


