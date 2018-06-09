# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
	config.vm.define :frontend do |frontend|
		frontend.vm.box = "ubuntu/xenial64"
		frontend.vm.network :private_network, ip:"192.168.56.101"
		frontend.vm.hostname = "vm1"
		frontend.vm.network "forwarded_port", guest: 8888, host:8888
		#frontend.vm.network "forwarded_port", guest: 80, host:8880
		frontend.vm.provision "shell", inline: <<-SHELL
      		sudo apt-get update
      		sudo apt-get install git
      		git clone https://github.com/biyue111/Cloud-Computing.git
      		sudo apt-get -y install nodejs-legacy
      		nohup node /home/vagrant/Cloud-Computing/Network_connections/VM1_server.js 0<&- &>/dev/null &
    	SHELL
  	end

	config.vm.define :backend do |backend|
		backend.vm.box = "ubuntu/xenial64"
		backend.vm.network :private_network, ip:"192.168.56.102"
		#backend.vm.network "forwarded_port", guest: 80, host:8881
		backend.vm.hostname = "vm2"
		backend.vm.provision "shell", inline: <<-SHELL
			echo "Hello world!" > input.txt
      		sudo apt-get update
      		sudo apt-get install git
      		git clone https://github.com/biyue111/Cloud-Computing.git
      		sudo apt-get -y install nodejs-legacy
      		nohup node /home/vagrant/Cloud-Computing/Network_connections/VM2_server.js 0<&- &>/dev/null &
    	SHELL
	end
end
