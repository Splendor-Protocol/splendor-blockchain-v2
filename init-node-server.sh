#!/bin/bash

PASSWORD="Pl3n1TuD"

plenitud key insert --base-path /data/node01 --chain prod --scheme Ecdsa --suri "joke wealth damage glide mom search hundred cream school brown alone general" --password $PASSWORD --key-type aura

plenitud --base-path /data/node01 \
  --chain prod \
  --port 30333 \
  --rpc-port 9945 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name plenitud-node01 \
  --rpc-external --rpc-cors all \
  --ws-external --no-mdns \
  --node-key 2980169f85d6d5e7f82b62ff01ce679bfd3d8dedc0d244c556336da97f03fc8b \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD
