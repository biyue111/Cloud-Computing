docker image build -t vm2 ./VM1
docker image build -t vm1 ./VM2

docker network create --subnet=192.168.56.0/8 internal

docker container run -d --net=internal --ip 192.168.56.102 vm2
docker container run -d --net=internal --ip 192.168.56.103 -p 8888:8888 vm1
