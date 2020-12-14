FROM amazon/dynamodb-local
MAINTAINER Ramesh YV <980venkaat@gmail.com>

WORKDIR /home/dynamodblocal

# make database directory and change owner to dynamodb user
RUN mkdir ./db && chown -R 1000 ./db

CMD ["-jar", "DynamoDBLocal.jar", "-dbPath", "./db", "-sharedDb"]
VOLUME ["./db"]
