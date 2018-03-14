docker image build -f ./VM2/Dockerfile -t VM2 .
docker image build -f ./VM1/Dockerfile -t VM1 .

docker container run -d -p 8888:8888 VM2
docker container run -d VM1
