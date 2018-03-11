# useful links:
[4 types of connections](http://blog.csdn.net/ixidof/article/details/12685549)

[VirtualBox manual: Virtual networking](https://www.virtualbox.org/manual/ch06.html)

[Markdown Guide](https://guides.github.com/features/mastering-markdown/)

# Overview

|               | Nat | Bridge Adapter | Internal | Host-only Adapter
| ------------- | :-: | :------------: | :------: | :---------------:
|VM to Host     |ok   |ok              |no        |ok
|Host to VM     |no   |ok              |no        |ok
|Between VMs    |no   |ok              |ok        |ok
|VM to Internet |ok   |ok              |no        |no
|Internet to VM |no   |ok              |no        |no

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

One should in mind that if multiple VMs are running at the same time, each of them needs to have a unique address. Depending on the host operating system and the hypervisor, there are some limitations when using wireless interfaces:
* VirtualBox 
  * On **Macintosh** hosts, only IPv4 and IPv6 are supported over AirPort. 
  * On **Linux** hosts, only IPv4 and IPv6 are supported. 
  * On **Solaris** hosts, there is no support for using wireless interfaces.

* VMware 
  * Wireless network bridging is supported by **Windows** hosts.

BI Yue

# Internal
HE Mingcheng

In this mode, the VM can directly communicate with other VMs on the same host which connect to the same internal network. All traffic on internal network stays within the host and is only visible to other VMs which are on that virtual network. Internal Networking is a totally isolated network. It works even when the Host is not connected to a real network. However the VMs using Internal Network cannot communicate to the host or other hosts because they don't belong to a same network and the host also cannot see the internal VMs.

Although all these things which can be done using internal networking can also be done with Bridged networking, there are security advantages with Internal Networking. In bridged networking mode, all traffic goes through a physical interface of the host system. If two or more VMs on the same machine need to have some private communication, hide their data from both the host system and the user, Internal Networking has its advantage.

Internal Networking is good for testing a separate, clean network and a high security demand network which is only communicate between the VMs and not used to communicate with the host and real network.

# Host-only Adapter
GAN Lu

Host-only network creates a network which connects the virtual machine with the host computer. The host can communicate with the virtual machine in host-only mode while other hosts who aren't in this network don't use the same network segment as VM. By using a virtual Ethernet adapter which is visible to the host operating system, the virtual machine share the same isolated virtual network with the host computer. Addresses on this network are provided by the virtual box DHCP server. Without NAT, the virtual machine can’t connect with Internet. Besides, two VMs in the same network can connect with each other by using the same virtual network adapter. The isolated system created by host-only mode can improve the security. We can apply this mode for example in an internal conference. Only the persons who participate the conference can share the files.
