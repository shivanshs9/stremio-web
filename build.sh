#! /bin/sh

set -eux

mkdir -p .docker

COMMIT=$(git rev-parse --short HEAD)
docker build -f Dockerfile.prod -t shivanshs9/stremio-web:$COMMIT .

docker save --output .docker/stremio-web-$COMMIT.tar shivanshs9/stremio-web:$COMMIT

# sudo k3s ctr images import .docker/stremio-web-$COMMIT.tar