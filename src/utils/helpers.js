// You can add common waits / swipe / scroll here.
// For now, just a placeholder.

module.exports = {
  async swipeUp(times = 1) {
    const { height, width } = await driver.getWindowRect();
    const startX = width / 2;
    const startY = height * 0.8;
    const endY = height * 0.2;

    for (let i = 0; i < times; i++) {
      await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 500 } },
        { action: 'moveTo', options: { x: startX, y: endY } },
        { action: 'release' }
      ]);
      await driver.pause(1000);
    }
  }
};
