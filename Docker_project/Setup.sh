docker image build -t vm2 ./VM2
docker image build -t vm1 ./VM1

docker network create --subnet=10.0.2.0/24 internal

docker container run -d --name vm2 --net=internal --ip 10.0.2.102 vm2
docker container run -d --name vm1 --net=internal --ip 10.0.2.103 -p 8888:8888 vm1
