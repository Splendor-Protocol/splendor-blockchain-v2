#!/bin/bash

PASSWORD="Pl3n1TuD"

ls
pwd

plenitud-template-node key insert --base-path /data/node01 --chain ./customSpecRaw.json --scheme Sr25519 --suri "electric pass pioneer magnet reward upon gloom deal pigeon cluster snake width" --password $PASSWORD --key-type aura
plenitud-template-node key insert --base-path /data/node01 --chain ./customSpecRaw.json --scheme Ed25519 --suri "capital mixture elephant message current genre expire come absent monkey frog strike" --password $PASSWORD --key-type gran

plenitud-template-node --base-path /data/node01 \
  --chain ./customSpecRaw.json \
  --port 30333 \
  --rpc-port 9944 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name plenitud-node01 \
  --rpc-external --rpc-cors all \
  --no-mdns \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD
