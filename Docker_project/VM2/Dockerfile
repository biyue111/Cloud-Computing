
FROM ubuntu:xenial

RUN apt update && \
    apt install -y git nodejs-legacy iputils-ping

RUN git clone https://github.com/biyue111/Cloud-Computing.git

RUN cd Cloud-Computing/Network_connections


EXPOSE 8889

CMD ["node","VM2_server.js"]
