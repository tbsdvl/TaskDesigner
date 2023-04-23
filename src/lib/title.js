const figlet = require("figlet");

module.exports = {
  /**
   * Displays the title.
   * @returns A resolved promise if the title is logged in the console.
   */
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
