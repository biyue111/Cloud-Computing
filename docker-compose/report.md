## Project 2

In this project, we use two containers. One is named as `mysql` which is use to read the database of mysql. The second is `python-server` which servers as the frontend. It gets the data from container `mysql` and puts on port 8888. For more details of the docker-compose file, please refer to the code and comments.

```
# This docker-compose file contains four parts: version, services, networks and volumes
version: '3'
services:
# Two services are used.  
  mysql:
    image: mysql:5.6 
	# Pull the sql image from the offical site, create the container based on this image.
    container_name: ct-mysql # define the container name
    networks:
	# Choose the network
      - net 
    volumes:
	# Attach the volume to container and specify the path of the volume in the container
      - vol_mysql:/var/lib/mysql
    environment:
	# Set the password
      - MYSQL_ROOT_PASSWORD=P@ssw0rd

  python-server:
    build: 
	# Build the image and container from the docker-file ./docker/Dockerfile
      context: ./docker
      dockerfile: Dockerfile
    image: img-python-server:0.1 # Set image name
    container_name: ct-python-server # Set container name
    networks:
      - net
    ports:
	# Mapping the 8888 port of the container to the 8888 port of the host
      - "8888:8888"
    environment:
	# Set the host of this container
      - MYSQL_HOST=ct-mysql
networks:
# Create a defaut network name as 'net'
  net:
volumes:
# Create a defaut volume name as 'net'
  vol_mysql:
```

### Result
1. Run docker-compose file to create two containers: `docker-compose up`
2. Initialize the database of mysql: `mysql -h CT_MYSQL_IP -u root -p < db1_tbl1.sql`
3. Verify the system: `curl localhost:8888`
