#!/bin/bash

PASSWORD="Pl3n1TuD"

splendor-template-node key insert --base-path /data/node02 --chain ./customSpecRaw.json --scheme Sr25519 --suri "capital mixture elephant message current genre expire come absent monkey frog strike" --password $PASSWORD --key-type aura
splendor-template-node key insert --base-path /data/node02 --chain ./customSpecRaw.json --scheme Ed25519 --suri "capital mixture elephant message current genre expire come absent monkey frog strike" --password $PASSWORD --key-type gran

splendor-template-node --base-path /data/node02 \
  --chain ./customSpecRaw.json \
  --port 30334 \
  --rpc-port 9945 \
  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
  --validator \
  --rpc-methods Unsafe \
  --name splendor-node02 \
  --rpc-external --rpc-cors all \
  --no-mdns \
  --node-key 74dbaaaf149528373090ee17d3605b53d7175e8affd63f53aaf6e22101d3356e \
  --pruning archive \
  --offchain-worker always \
  --password $PASSWORD \
  --bootnodes /ip4/104.236.195.108/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp
