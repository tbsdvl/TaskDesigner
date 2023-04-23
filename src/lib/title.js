const figlet = require("figlet");

module.exports = {
  displayTitle: () => {
    return new Promise((resolve) => {
      figlet("Work Designer", (err, title) => {
        if (err) {
          process.exit(1);
        }
        console.log(title);
        resolve();
      });
    });
  },
};
