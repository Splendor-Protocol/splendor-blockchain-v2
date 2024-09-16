FROM docker.io/paritytech/ci-linux:production as builder
WORKDIR /splendor
COPY . /splendor
RUN cargo build --locked --release

FROM docker.io/library/ubuntu:20.04
LABEL description="splendor Node Template"

COPY --from=builder /splendor/target/release/splendor-template-node /usr/local/bin
COPY --from=builder /splendor/init-node-server.sh /init-node-server.sh
COPY --from=builder /splendor/init-node-server-2.sh /init-node-server-2.sh
COPY --from=builder /splendor/customSpec.json /customSpec.json
COPY --from=builder /splendor/customSpecRaw.json /customSpecRaw.json
RUN chmod +x /init-node-server.sh
RUN chmod +x /init-node-server-2.sh
RUN chmod +x /customSpec.json
RUN chmod +x /customSpecRaw.json

RUN useradd -m -u 1000 -U -s /bin/sh -d /node-dev node-dev && \
  mkdir -p /chain-data /node-dev/.local/share && \
  chown -R node-dev:node-dev /chain-data && \
  ln -s /chain-data /node-dev/.local/share/splendor && /usr/local/bin/splendor-template-node --version

RUN mkdir -p /data/node01 && chown -R node-dev:node-dev /data/node01
RUN mkdir -p /data/node02 && chown -R node-dev:node-dev /data/node02

USER node-dev

VOLUME ["/chain-data"]

