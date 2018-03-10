# useful links:
[4 types of connections](http://blog.csdn.net/ixidof/article/details/12685549)

[VirtualBox manual: Virtual networking](https://www.virtualbox.org/manual/ch06.html)

[Markdown Guide](https://guides.github.com/features/mastering-markdown/)

# Overview

|               | Nat | Bridge Adapter | Internal | Host-only Adapter
| ------------- | :-: | :------------: | :------: | :---------------:
|VM to Host     |     |ok              |          |
|Host to VM     |     |ok              |          |
|Between VMs    |     |ok              |          |
|VM to Internet |     |ok              |          |
|Internet to VM |     |ok              |          |

# Nat
HAN Chen

# Bridge Adapter

In this mode, VM can access the network through the bridge created by a device driver on the host system. This driver can be considered as a virtual Ethernet switch. It gets data from and injects data into the physical network adapter. Therefore, VM has its own IP address and acts just like an individual device connecting directly to the network.
BI Yue

# Internal
HE Mingcheng

# Host-only Adapter
GAN Lu
