docker image build -t vm2 ./VM1
docker image build -t vm1 ./VM2

docker network create --subnet=10.0.2.0/24 internal

docker container run -d --net=internal --ip 10.0.2.102 vm2
docker container run -d --net=internal --ip 10.0.2.103 -p 8888:8888 vm1
