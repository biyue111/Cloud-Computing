# useful links:
[4 types of connections](http://blog.csdn.net/ixidof/article/details/12685549)

[Markdown Guide](https://guides.github.com/features/mastering-markdown/)

# Nat
HAN Chen

# Bridge Adapter
BI Yue

# Internal
HE Mingcheng

In this mode, the VM can directly communicate with other VMs on the same host which connect to the same internal network. All traffic on internal network stays within the host and is only visible to other VMs which are on that virtual network. Internal Networking is a totally isolated network. It works even when the Host is not connected to a real network. However the VMs using Internal Network cannot communicate to the host or other hosts because they don't belong to a same network and the host also cannot see the internal VMs.

Although all these things which can be done using internal networking can also be done with Bridged networking, there are security advantages with Internal Networking. In bridged networking mode, all traffic goes through a physical interface of the host system. If two or more VMs on the same machine need to have some private communication, hide their data from both the host system and the user, Internal Networking has its advantage.

Internal Networking is good for testing a separate, clean network and a high security demand network which is only communicate between the VMs and not used to communicate with the host and real network. 

# Host-only Adapter
GAN Lu
