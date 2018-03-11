# useful links:
[4 types of connections](http://blog.csdn.net/ixidof/article/details/12685549)

[VirtualBox manual: Virtual networking](https://www.virtualbox.org/manual/ch06.html)

[Markdown Guide](https://guides.github.com/features/mastering-markdown/)

# Overview

|               | Nat | Bridge Adapter | Internal | Host-only Adapter
| ------------- | :-: | :------------: | :------: | :---------------:
|VM to Host     |ok   |ok              |          |
|Host to VM     |no   |ok              |          |
|Between VMs    |no   |ok              |          |
|VM to Internet |ok   |ok              |          |
|Internet to VM |no   |ok              |          |

# Nat
HAN Chen

Network address translation (NAT) is a method of remapping one IP address, usually an intranet IP, into another by modifying network address information, to solve the problems of:
1. Insufficient IP address in LAN(local area network).
2. Reassignment of IP address in case of public IP changed.
3. Security reasons

## Features

Under NAT mode, the client behinds NAT router cannot be accessed by other servers, including the servers outside NAT with real public IP address and clients under the same NAT router. In another word, the NAT only provides the client a single-way to access to internet service.

## Classification
There are three types of NAT: Static NAT, Pooled NAT, and Network Address Port Translation (NAPT). Among these, NAPT is the most commonly used one. In VirtualBox, the NAT mode is also NAPT. It maps internal addresses to different ports of an IP address of an external network and adds a port number selected by the NAT device to this address. It can hide small or medium-sized networks behind a legitimate IP address.adds a port number selected by the NAT device to this address.

# Bridge Adapter

In this mode, VM can access the network through the bridge created by a device driver on the host system. This driver, which is called "net filter" driver, can be considered as a virtual Ethernet switch. It gets data from and injects data into the physical network adapter. Each VM needs to have its own IP address which can be set manually or automatically with a DHCP server. Therefore, VM acts just like a device connecting directly to the network and can fully participate in the network. 

One should in mind that if mutiple VMs are running at the same time, each of them needs to have a unique address. Depending on the host operating system and the hypervisor, there are some limitations when using wireless interfaces:
* VitrualBox 
  * On **Macintosh** hosts, only IPv4 and IPv6 is supported over AirPort. 
  * On **Linux** hosts, only IPv4 and IPv6 is supported. 
  * On **Solaris** hosts, there is no support for using wireless interfaces.

* VMware 
  * Wireless network bridging is supported for **Windows** hosts.

BI Yue

# Internal
HE Mingcheng

# Host-only Adapter
GAN Lu
