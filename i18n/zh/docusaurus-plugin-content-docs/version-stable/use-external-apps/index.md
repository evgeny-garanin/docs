---
sidebar_label: 集成Nym的应用程序
description: "Tutorials for building Privacy Enhanced Applications (or integrating existing apps with Nym)"
hide_title: false
title: 集成Nym的应用程序
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';


Nym是一个通用系统，我们的目标是为互联网流量和交易提供最强大的保护。

该系统仍然处于早起阶段，但它已经能够运行，你今天就可以开始使用它。

许多现有的应用程序都能够使用SOCKS5代理协议，他们可以使用`nym-socks5-client`（Nym Socks5客户端）来连接到Nym网络发送网络流量，就像这样：

<!-- ![Socks5 architecture](/img/docs/nym-socks5-architecture.png) -->
<ThemedImage
  alt="Overview diagram of the Nym network"
  sources={{
    light: useBaseUrl('/img/docs/nym-socks5-architecture.png'),
    dark: useBaseUrl('/img/docs/nym-socks5-architecture-dark.png'),
  }}
/>

Nym网络已经运行混合节点、`nym-network-requester`（Nym网络请求器）和`nym-client`（Nym客户端）组件。为了在现有的应用程序使用Nym，你只需要设置`nym-socks5-client`。

:::note注意

如果你还没有设置本地的socks5客户端，请先按照[这里](/docs/stable/developers/develop-with-nym/socks5-client)的说明设置客户端再继续下面的步骤。

:::

请注意，我们正在运行的nym-network-requester只对特定的应用程序有效，我们并没有运行一个开放的代理服务器，我们有一个允许使用混合网络的应用程序列表（目前包含Blockstream Green、Electrum和KeyBase）。我们可以根据需求添加其他应用程序，只需在我们的开发者频道中与我们交流（KeyBase Dev频道）。或者，你可以[设置你自己的](/docs/stable/run-nym-nodes/nodes/requester) `nym-network-requester`，如果你能访问一个服务器，这并不难做到。

不过，Nym SOCKS5代理做了一些相当有趣和不同的事情，它不是简单地在TCP数据流之间复制数据，而是直接从它所运行的机器上发出请求，它做了以下工作：

* 接收一个TCP数据流，例如一个来自加密钱包的请求
* 将TCP数据流分割成多个Sphinx数据包，给它们分配序列号，同时为更多数据保留TCP连接
* 将Sphinx数据包通过混合网络发送到一个nym-network-requester，数据包在通过混合网络时被转发和混合
* nym-network-requester使用序列号重新组合出原始的TCP流，并发出原本的请求
* nym-network-requester然后再反向执行整个过程，把收到的响应分成Sphinx数据包，并通过混合网络发回给加密钱包
* 加密钱包收到它的数据，甚至没有注意到它不是在和一个 "正常 "的SOCKS5代理对话

