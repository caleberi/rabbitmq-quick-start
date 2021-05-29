require("dotenv").config();
var amqp = require("amqplib/callback_api");
amqp.connect(process.env.RABBIT_URL, function (err, connection) {
  if (err) {
    throw err;
  }
  connection.createChannel(function (err, channel) {
    if (err) {
      throw err;
    }
    var queue = "hello";
    var msg = "hello world";
    channel.assertQueue(queue, {
      durable: false,
    });
    channel.sendToQueue(queue, Buffer.from(msg));
    console.log("[x] Sent %s", msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});
