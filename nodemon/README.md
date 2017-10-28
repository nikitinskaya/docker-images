run: 
docker run --name myname -p 4321:3333 -itd mynode:latest

open:
on localhost:4321

change:
docker exec -it myname nano s.mjs
