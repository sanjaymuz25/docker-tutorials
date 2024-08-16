## Steps to run the project
Build the images
```
    docker-compose build
```

## To start the docker swarm services
Deploy and run the services
```
    docker stack deploy  -c ./docker-compose.yml node_app
```

## Check the running servcies
Check the running services
```
    docker service ls
```

## Scale the service 
The below command will start a new service instance
```
    docker service scale node_app_app=3
```