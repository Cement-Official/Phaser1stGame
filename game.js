var config = {
  type: Phaser.AUTO, // AUTO - оптимальний вибір для рендерингу бо він автоматично намагається використовувати WebGL, але якщо браузер або пристрій не підтримує його, він повертається до Canvas
  width: 800,
  height: 600, //можна ставити будь-який розмір, але в туторіалі вибраний саме цей
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
var platforms;
var player;

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

  platforms.create(400, 568, "ground").setScale(2).refreshBody();

  platforms.create(600, 400, "ground");
  platforms.create(50, 250, "ground");
  platforms.create(750, 220, "ground");

  player = this.physics.add.sprite(100, 450, "dude"); //додає нашого гравця

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
  this.physics.add.collider(player, platforms);
} //додає спрайти безпосередньо в гру

function update() {
  platforms = this.physics.add.staticGroup(); // Це створює нову групу статичної фізики та призначає її локальним змінним платформам
}


