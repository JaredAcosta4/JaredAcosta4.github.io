function moveScenery() {
  var sceneryTypes = [scenery.building, scenery.lamp];

  for (var typeIndex = 0; typeIndex < sceneryTypes.length; typeIndex++) {
    var sceneryType = sceneryTypes[typeIndex];

    for (
      var instanceIndex = 0;
      instanceIndex < sceneryType.instances.length;
      instanceIndex++
    ) {
      var instance = sceneryType.instances[instanceIndex];
      instance.x += (instance.speedX || 0) - currentLevel.speed;

      if (instance.x + instance.width < 0) {
        instance.x = sceneryType.loopWidth;
      }
    }
  }
}

function generateLevel() {
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);
  }
}

function create(obj) {
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  var matchingObjects = [];

  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      matchingObjects.push(gameObjects[i]);
    }
  }

  return matchingObjects;
}

function moveGameObjects(objectList) {
  var activeEnemy = null;

  if (objectList.length > 0 && objectList[0].type === "enemy") {
    for (var enemyIndex = 0; enemyIndex < objectList.length; enemyIndex++) {
      var candidate = objectList[enemyIndex];
      if (
        !candidate.retreating &&
        (!activeEnemy || candidate.x < activeEnemy.x)
      ) {
        activeEnemy = candidate;
      }
    }
  }

  for (var i = 0; i < objectList.length; i++) {
    var gameObject = objectList[i];

    if (gameObject.type === "enemy") {
      gameObject.attackCooldown = Math.max(0, gameObject.attackCooldown - 1);
    }

    var horizontalMovement = gameObject.speedX - currentLevel.speed;
    if (
      gameObject.type === "enemy" &&
      gameObject !== activeEnemy &&
      !gameObject.retreating
    ) {
      horizontalMovement = 0;
    }
    gameObject.x += horizontalMovement;
    gameObject.y += gameObject.speedY;

    if (gameObject.type === "enemy") {
      if (
        !gameObject.retreating &&
        gameObject.x < player.x + player.hitBoxWidth
      ) {
        gameObject.x = player.x + player.hitBoxWidth - 1;
      }

      if (
        gameObject.retreating &&
        gameObject.x + gameObject.hitWidth < player.x - 160
      ) {
        gameObject.toRemove = true;
      }
    }

    if (gameObject.speedY !== 0) {
      if (gameObject.y < gameObject.minY || gameObject.y > gameObject.maxY) {
        gameObject.speedY *= -1;
        gameObject.y = Math.max(
          gameObject.minY,
          Math.min(gameObject.y, gameObject.maxY),
        );
      }
    }
  }
}

function handleProjectileCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];

      if (isCollidingWithProjectile(currentObject, currentProjectile)) {
        handleProjectileObjectCollision(j, i);
        break;
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    if (currentObject.type !== "platform") {
      if (isGenericCollision(currentObject)) {
        if (currentObject.type === "enemy") {
          if (currentObject.attackCount === undefined) {
            currentObject.attackCount = 0;
            currentObject.attackCooldown = 0;
          }

          if (!currentObject.retreating && currentObject.attackCooldown === 0) {
            health = Math.max(0, health + currentObject.contactHealthChange);
            currentObject.attackCount += 1;
            currentObject.attackCooldown = 45;

            if (health <= 0) {
              currentAnimationType = animationTypes.frontDeath;
              frameIndex = 0;
            }

            if (currentObject.attackCount >= 2) {
              currentObject.retreating = true;
              currentObject.speedX = -5;
              currentObject.speedY = -1.5;
              currentObject.minY = Math.max(0, currentObject.y - 35);
              currentObject.maxY = Math.min(groundY, currentObject.y + 35);
            }
          }
        } else {
          handleHallebotGenericCollision(i);
        }
      }
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex += 1;
  gameObjects = [];

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
    return;
  }

  health = 100;
  currentLevel = LEVELS[currentLevelIndex];
  generateLevel();
}
