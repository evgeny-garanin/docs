---
sidebar_label: Overview
description: "Overview of the current status of the Typescript SDK"
hide_title: false 
title: "Overview"  
---
 
The Nym Typescript SDK allows developers to start building browser-based Mixnet applications quickly, by simply importing the SDK into their code via NPM. 

The SDK will be made up of several components, each allowing developers to interact with different parts of Nym's infrastructure: 

| Component | Usecase                                                                                                               | Released | 
| --------- | --------------------------------------------------------------------------------------------------------------------- | -------- |
| Mixnet    | Create clients, subscribe to Mixnet events, send messages                                                             |  ✔️       |
| Coconut   | Create & verify Coconut credentials                                                                                   |  ❌      | 
| Validator | Sign & broadcast blockchain transactions, query the https://docs-release-1-1-1.ci.nymte.ch/docs/stable/overview/      |  ❌      | 


### What is currently supported (and why) 
Currently there are examples for several different frameworks which can be run in the browser: 
* [Plain html](https://github.com/nymtech/nym/tree/release/v1.1.1/sdk/typescript/examples/plain-html)
* [Create-react-app](https://github.com/nymtech/nym/tree/release/v1.1.1/sdk/typescript/examples/react-webpack-with-theme-example) 
* [Vanilla Typescript](https://github.com/fmtabbara/nym-sdk-vanilla-template) 

You may want to run this via a framework that isn't on this list, such as Angular, or NodeJS. **Here be dragons**, as these frameworks will probably use a different bundler than the examples listed above, which are all using Webpack. 

The choice of bundler relates to a key aspect of how the SDK functions, as it runs the Wasm blob created from the Rust code in LINK TO CLIENT REPO, and places it in a web worker. This allows us to keep the work done by the client - such as the heavy lifting of creating and multiply-encrypting Sphinx packets - in a seperate thread from our UI for useability. 

The SDK exposes an interface that allows developers to interact with the Wasm blob inside the webworker. 

Support for environments such as NodeJS, and environments with different bundlers will be added soon. 

| Bundler | Supported | 
| ------- | --------- | 
| Webpack |  ✔️        |
| Packer  |  ❌       |
| __      |  ❌       |


| Environment      | Supported | 
| ---------------- | --------- | 
| Browser          |  ✔️        |
| Headless NodeJS  |  ❌       |
| Electron Desktop |  ❌       |

