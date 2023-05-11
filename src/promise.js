function playGame() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = "win";
      if (result === "win") {
        resolve("You have won!");
      } else {
        reject("You have lost!");
      }
    }, 1);
  });
}

module.exports = playGame