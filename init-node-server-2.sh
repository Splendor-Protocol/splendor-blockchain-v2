#!/bin/bash

PASSWORD="Pl3n1TuD"

ls
pwd

echo "antes de 1"
plenitud-template-node key insert --base-path /data/node02 --chain ./customSpecRaw.json --scheme Sr25519 --suri "electric pass pioneer magnet reward upon gloom deal pigeon cluster snake width" --password $PASSWORD --key-type aura

echo "despues de 1"

plenitud-template-node key insert --base-path /data/node02 --chain ./customSpecRaw.json --scheme Ed25519 --suri "capital mixture elephant message current genre expire come absent monkey frog strike" --password $PASSWORD --key-type gran

echo "despues de 2"

plenitud-template-node --base-path /data/node02 \
  --chain ./customSpecRaw.json \
  --port 30334 \
  --rpc-port 9945 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name plenitud-node02 \
  --rpc-external --rpc-cors all \
  --no-mdns \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD \
  --bootnodes /ip4/104.236.195.108/tcp/30333/p2p/12D3KooWSNspXwaLmtTec78keeP7KKPDapFJyYXxqtSFWsZzeCo2
