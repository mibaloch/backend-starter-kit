var cron = require("node-cron");

namespace crons {
  export const sampleCronJob = () => {
    console.log("cron jobran");
  };
}

export const initializeCronJobs = () => {
  // cron.schedule("0 0 * * *", async function () {
  //   console.log("Cron job added");
  // });

  // Run every minute
  cron.schedule("* * * * *", async function () {
    console.log("Cron job added");

  });
};

export default crons;
