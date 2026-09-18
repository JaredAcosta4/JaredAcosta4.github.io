// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [
      { x: 100, y: 175, width: 150, height: 150 },
      { x: 1050, y: 100, width: 90, height: 90 },
    ],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 250, width: 100, height: 240, speedX: -1 },
      { x: 500, width: 140, height: 320, speedX: -1.5 },
      { x: 850, width: 110, height: 280, speedX: -2 },
      { x: 1200, width: 160, height: 360, speedX: -1 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 150, width: 50, height: 150, speedX: -3 },
      { x: 700, width: 50, height: 190, speedX: -3 },
      { x: 1150, width: 50, height: 160, speedX: -3 },
    ],
  },
};
