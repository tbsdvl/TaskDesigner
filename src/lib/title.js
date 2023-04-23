const figlet = require("figlet");

module.exports = {
  display: () => {
    return new Promise((resolve) => {
      figlet(
        "Work Designer",
        {
          font: "Doom",
        },
        (err, title) => {
          if (err) {
            process.exit(1);
          }
          console.log(title);
          resolve();
        }
      );
    });
  },
};
