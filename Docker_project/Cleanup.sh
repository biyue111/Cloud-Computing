docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker image rm vm1
docker image rm vm2

docker network rm internal
