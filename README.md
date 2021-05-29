# Rabbitmq-quick-start

RabbitMQ is a message broker: it accepts and forwards messages. You can think about it as a post office: when you put the mail that you want posting in a post box, you can be sure that Mr. or Ms. Mailperson will eventually deliver the mail to your recipient. In this analogy, RabbitMQ is a post box, a post office and a postman.

> The major difference between RabbitMQ and the post office is that it doesn't deal with paper, instead it accepts, stores and forwards binary blobs of data ‒ messages.

Terms used in RabbitMQ :

- Producing means nothing more than sending. A program that sends messages is a producer .
  
- A queue is the name for a post box which lives inside RabbitMQ. Although messages flow through RabbitMQ and your applications, they can only be stored inside a queue. A queue is only bound by the host's memory & disk limits, it's essentially a large message buffer. Many producers can send messages that go to one queue, and many consumers can try to receive data from one queue.
  
- Consuming has a similar meaning to receiving. A consumer is a program that mostly waits to receive messages.

> Note that the producer, consumer, and broker do not have to reside on the same host; indeed in most applications they don't. An application can be both a producer and consumer, too.

```txt
                           Queue works using FIFO
    ------------                                  ------------
    | Producer |  ->  [msq4,msg3,msg2,msg1] <---> | Consumer |
    ------------                                  ------------
    producers create data                    consumers retrieve data
```


### Listing queues

You may wish to see what queues RabbitMQ has and how many messages are in them. You can do it (as a privileged user) using the rabbitmqctl tool:

```sudo rabbitmqctl list_queues```
On Windows, omit the sudo:

```rabbitmqctl.bat list_queues```