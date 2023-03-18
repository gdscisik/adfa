const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "DonateRequestService" },
  transports: [
    new winston.transports.File({
      filename: "src/logs/DonateRequestLogs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "src/logs/DonateRequestLogs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "src/logs/DonateRequestLogs/combined.log",
    }),
  ],
});

module.exports = logger;
//
// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }
