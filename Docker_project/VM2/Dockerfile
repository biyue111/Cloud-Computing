FROM ubuntu:xenial

RUN apt update && \
    apt install -y git nodejs-legacy vim

RUN git clone https://github.com/biyue111/Cloud-Computing.git

EXPOSE 8888

WORKDIR /Cloud-Computing/Network_connections/

CMD ["node", "VM2_server.js"]

