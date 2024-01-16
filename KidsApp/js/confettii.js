const defaultsheart = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};
function launchConfettiHeart() {
  confetti({
    ...defaultsheart,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaultsheart,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaultsheart,
    particleCount: 10,
    scalar: 4,
  });
}

const defaultsemo = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
};
const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

function launchConfetti() {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

function launchUnicornConfetti() {
  confetti({
    ...defaultsemo,
    particleCount: 50,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🦄", "🦄"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 25,
    scalar: 3,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🦄", "🦄"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 10,
    scalar: 4,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🦄", "🦄"],
      },
    },
  });
}
function launchPandaConfetti() {
  confetti({
    ...defaultsemo,
    particleCount: 50,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐼", "🐼"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 25,
    scalar: 3,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐼", "🐼"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 10,
    scalar: 4,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐼", "🐼"],
      },
    },
  });
}
function launchAnimalConfetti() {
  confetti({
    ...defaultsemo,
    particleCount: 50,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🦁", "🐯"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 25,
    scalar: 3,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐮", "🐷"],
      },
    },
  });
  confetti({
    ...defaultsemo,
    particleCount: 10,
    scalar: 4,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐥", "🐶"],
      },
    },
  });
}
