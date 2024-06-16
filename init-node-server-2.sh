#!/bin/bash

PASSWORD="Pl3n1TuD"

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
