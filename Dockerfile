FROM docker.io/paritytech/ci-linux:production as builder
WORKDIR /plenitud
COPY . /plenitud
RUN cargo build --locked --release

FROM docker.io/library/ubuntu:20.04
LABEL description="Plenitud Node Template"

COPY --from=builder /plenitud/target/release/plenitud /usr/local/bin
COPY --from=builder /plenitud/init-node-server.sh /init-node-server.sh
RUN chmod +x /init-node-server.sh

RUN useradd -m -u 1000 -U -s /bin/sh -d /node-dev node-dev && \
  mkdir -p /chain-data /node-dev/.local/share && \
  chown -R node-dev:node-dev /chain-data && \
  ln -s /chain-data /node-dev/.local/share/academy-pow && /usr/local/bin/plenitud --version

RUN mkdir -p /data/node01 && chown -R node-dev:node-dev /data/node01

USER node-dev

EXPOSE 30333 9933 9944 9615
VOLUME ["/chain-data"]

