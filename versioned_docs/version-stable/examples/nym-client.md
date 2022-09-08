---
sidebar_label: Building Nym Peaps
description: "Guide on how to build apps with Nym"
hide_title: false
title: Building Nym Peaps
---

## Build Native apps with Nym

In this section, we'll be build a simple chat app using Nym for handling the network traffic. This guide is broken into different parts.

### Prerequisites

You'll need to get the Nym Client. This is available for download at the [release page](https://github.com/nymtech/nym/releases/download/nym-binaries-1.0.2/nym-client).

:::note
The `run` command might output more information on the terminal than what is printed here. However, we had to truncate it to make it more concise.
:::

### Setup client

Initialize the Nym Client.

```
./nym-client init --id <client_id>
```

This command will output something similar to this.

<details>
  <summary>console output</summary>

      Initialising client...
      Saved all generated keys
      Saved configuration file to "/home/mx/.nym/clients/<client_id>/config/config.toml"
      Using gateway: BNjYZPxzcJwczXHHgBxCAyVJKxN6LPteDRrKapxWmexv
      Client configuration completed.




      The address of this client is: 7bxykcEH1uGNMr8mxGABvLJA44nbYt6Rp7xXHhJ4wQVk.HpnFbaMJ8NN1cp5ZPdPTc2GoBDnG4Jd51Sti32tbf3tF@BNjYZPxzcJwczXHHgBxCAyVJKxN6LPteDRrKapxWmexv

</details>

Now that we have a new client for our app, use the `run` command to open a socket for listening to requests from applications.

```
./nym-client run --id <client_id>
```

<details>
  <summary>console output</summary>

      _ __  _   _ _ __ ___
     | '_ \| | | | '_ \ _ \
     | | | | |_| | | | | | |
     |_| |_|\__, |_| |_| |_|
            |___/

             (client - version 1.0.2)

    2022-09-08T07:59:14.796Z INFO nym_client::client > Starting nym client
    2022-09-08T07:59:14.855Z INFO nym_client::client > Obtaining initial network topology
    2022-09-08T07:59:15.105Z INFO nym_client::client > Starting topology refresher...
    2022-09-08T07:59:15.105Z INFO nym_client::client > Starting received messages buffer controller...
    2022-09-08T07:59:15.258Z INFO nym_client::client > Starting mix traffic controller...
    2022-09-08T07:59:15.258Z INFO nym_client::client > Starting real traffic stream...
    2022-09-08T07:59:15.258Z INFO nym_client::client > Starting loop cover traffic stream...
    2022-09-08T07:59:15.258Z INFO nym_client::client > Starting websocket listener...
    2022-09-08T07:59:15.258Z WARN client_core::client::received_buffer > failed to recover fragment from raw data: MalformedFragmentError. The whole underlying message might be corrupted and unrecoverable!
    2022-09-08T07:59:15.258Z INFO nym_client::websocket::listener > Running websocket on "127.0.0.1:1977"
    2022-09-08T07:59:15.258Z INFO nym_client::client > Client startup finished!
    2022-09-08T07:59:15.258Z INFO nym_client::client > The address of this client is: BxRctoguFjrgRrtv4hjgZCJJNmwGDfqMKDUtU3MZE6tn.BGKPwnEvpGB2WLpE1aG71DtoXAGHXVaxkhPpCvuTNHNV@4WgKhJdmUffz4e1o1ftVAGS3HnG56LiNAxA9dmaekrVd

</details>

:::note
The `run` command might output more information on the terminal than what is printed here. However, we had to truncate it to make it more concise.
:::

We now have our Nym Client running and ready to receive request on port `1977`.
