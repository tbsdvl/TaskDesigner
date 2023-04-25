const figlet = require("figlet");

module.exports = {
  /**
   * Displays the title.
   * @returns A resolved promise if the title is logged in the console.
   */
  display: async () => {
    return new Promise((resolve) => {
      figlet(
        "Task Designer",
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
