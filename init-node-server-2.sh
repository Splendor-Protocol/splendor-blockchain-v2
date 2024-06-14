#!/bin/bash

PASSWORD="Pl3n1TuD"

# plenitud-template-node key insert --base-path /data/node02 --chain prod --scheme Ecdsa --suri "joke wealth damage glide mom search hundred cream school brown alone general" --password $PASSWORD --key-type aura

plenitud-template-node --base-path /data/node02 \
  --chain prod \
  --port 30334 \
  --rpc-port 9945 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name plenitud-node02 \
  --rpc-external --rpc-cors all \
  --no-mdns \
  --node-key 2980169f85d6d5e7f82b62ff01ce679bfd3d8dedc0d244c556336da97f03fc8b \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD \
  --bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWSNspXwaLmtTec78keeP7KKPDapFJyYXxqtSFWsZzeCo2
