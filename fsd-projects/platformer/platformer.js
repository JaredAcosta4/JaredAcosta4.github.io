$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");

      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);

      firstTimeSetup = false;

      // start game
      setInterval(main, 1000 / frameRate);
    }


    // ==========================================
    // GAME WALLS - DO NOT MODIFY
    // ==========================================

    createPlatform(
      -50,
      -50,
      canvas.width + 100,
      50
    ); // top wall


    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)"
    ); // bottom wall


    createPlatform(
      -50,
      -50,
      50,
      canvas.height + 500
    ); // left wall


    createPlatform(
      canvas.width,
      -50,
      50,
      canvas.height + 100
    ); // right wall



    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////



    // ==========================================
    // TODO 1 - PLATFORMS
    // ==========================================


    // Starting platform
    createPlatform(
      0,
      620,
      260,
      20
    );


    // Platform 2
    createPlatform(
      280,
      540,
      220,
      20
    );


    // Platform 3
    createPlatform(
      520,
      450,
      220,
      20
    );


    // Platform 4 - high middle
    createPlatform(
      770,
      360,
      220,
      20
    );


    // Platform 5
    createPlatform(
      1020,
      470,
      220,
      20
    );


    // Platform 6 - final high area
    createPlatform(
      1180,
      300,
      220,
      20
    );


    // Lower middle platform
    createPlatform(
      650,
      650,
      180,
      20
    );



    // ==========================================
    // EXTRA CHALLENGE
    // MOVING PLATFORM
    // ==========================================

    // Moves vertically
    createPlatform(
      900,        // x
      550,        // y
      140,        // width
      20,         // height
      "orange",   // color

      null,       // minX
      null,       // maxX
      0,          // speedX

      430,        // minY
      570,        // maxY
      1           // speedY
    );



    // ==========================================
    // EXTRA CHALLENGE
    // BAD / DEATH PLATFORMS
    // ==========================================


    createBadPlatform(
      260,
      700,
      300,
      20,
      "red"
    );


    createBadPlatform(
      850,
      700,
      300,
      20,
      "red"
    );



    // ==========================================
    // TODO 2 - COLLECTABLES
    //
    // TOTAL = 10
    // ==========================================


    // 1 - starting platform
    createCollectable(
      "steve",
      120,
      560,
      0,
      1
    );


    // 2 - second platform
    createCollectable(
      "kennedi",
      350,
      490,
      0,
      1
    );


    // 3 - third platform
    createCollectable(
      "max",
      600,
      400,
      0,
      1
    );


    // 4 - high platform
    createCollectable(
      "grace",
      850,
      310,
      0,
      1
    );


    // 5 - right platform
    createCollectable(
      "max",
      1080,
      420,
      0,
      1
    );


    // 6 - final high platform
    createCollectable(
      "database",
      1260,
      250,
      0,
      1
    );


    // 7 - lower middle platform
    createCollectable(
      "diamond",
      700,
      600,
      0,
      1
    );


    // 8 - another final collectable
    createCollectable(
      "steve",
      1340,
      250,
      0,
      1
    );



    // ==========================================
    // MOVING COLLECTABLES
    // ==========================================


    // 9 - moves across the high platform
    createCollectable(
      "diamond",
      790,
      300,
      0,
      1,

      790,   // minX
      930,   // maxX
      2      // speed
    );


    // 10 - moves across the right platform
    createCollectable(
      "kennedi",
      1050,
      410,
      0,
      1,

      1050,  // minX
      1170,  // maxX
      1.5    // speed
    );



    // ==========================================
    // TODO 3 - CANNONS
    //
    // TOTAL = 7
    // ==========================================


    // Cannon 1
    // Left side
    createCannon(
      "left",
      350,
      1300
    );


    // Cannon 2
    // Lower left
    createCannon(
      "left",
      580,
      1700
    );


    // Cannon 3
    // Upper right
    createCannon(
      "right",
      220,
      1500
    );


    // Cannon 4
    // Lower right - faster shooting
    createCannon(
      "right",
      520,
      1100
    );


    // Cannon 5
    // Top - shoots downward
    createCannon(
      "top",
      600,
      1700
    );


    // Cannon 6
    // Bottom - shoots upward
    createCannon(
      "bottom",
      900,
      1900
    );



    // ==========================================
    // EXTRA CHALLENGE
    // MOVING CANNON
    // ==========================================


    // Cannon 7
    // Moves across the top of the screen
    // and shoots larger projectiles

    createCannon(
      "top",

      1050,   // starting position

      1300,   // milliseconds between shots

      30,     // projectile width
      30,     // projectile height

      850,    // minimum position
      1250,   // maximum position

      2       // movement speed
    );



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});