#!/bin/bash

PASSWORD="Pl3n1TuD"

splendor-template-node key insert --base-path /data/node01 --chain ./customSpecRaw.json --scheme Sr25519 --suri "electric pass pioneer magnet reward upon gloom deal pigeon cluster snake width" --password $PASSWORD --key-type aura
splendor-template-node key insert --base-path /data/node01 --chain ./customSpecRaw.json --scheme Ed25519 --suri "electric pass pioneer magnet reward upon gloom deal pigeon cluster snake width" --password $PASSWORD --key-type gran

splendor-template-node --base-path /data/node01 \
  --chain ./customSpecRaw.json \
  --port 30333 \
  --rpc-port 9944 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name splendor-node01 \
  --rpc-external --rpc-cors all \
  --no-mdns \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001 \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD
