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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall

    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)"
    ); // bottom wall

    createPlatform(-50, -50, 50, canvas.height + 500); // left wall

    createPlatform(
      canvas.width,
      -50,
      50,
      canvas.height + 100
    ); // right wall


    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////


    // ==============================
    // TODO 1 - PLATFORMS
    // ==============================

    createPlatform(0, 620, 260, 20);

    createPlatform(280, 540, 220, 20);

    createPlatform(520, 450, 220, 20);

    createPlatform(770, 360, 220, 20);

    createPlatform(1020, 470, 220, 20);

    createPlatform(1180, 300, 220, 20);

    createPlatform(650, 650, 180, 20);


    // ==============================
    // EXTRA CHALLENGE
    // MOVING PLATFORM
    // ==============================

    // Moves vertically between y = 330 and y = 450
    createPlatform(
      1160,
      420,
      140,
      20,
      "orange",
      0,
      0,
      0,
      330,
      450,
      1
    );


    // ==============================
    // EXTRA CHALLENGE
    // BAD PLATFORMS
    // ==============================

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


    // ==============================
    // TODO 2 - COLLECTABLES
    // ==============================

    createCollectable(
      "steve",
      350,
      490,
      0.5,
      0.2
    );

    createCollectable(
      "grace",
      830,
      310,
      0.5,
      0.2
    );

    createCollectable(
      "database",
      1220,
      250,
      0.5,
      0.2
    );

    createCollectable(
      "max",
      1090,
      420,
      0.5,
      0.2
    );


    // ==============================
    // TODO 3 - CANNONS
    // ==============================

    createCannon(
      "left",
      430,
      1500
    );

    createCannon(
      "right",
      510,
      1800
    );

    createCannon(
      "top",
      900,
      2200
    );


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});