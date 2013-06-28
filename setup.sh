#!/bin/bash
sudo apt-get update -y
sudo apt-get install python-software-properties python g++ make -y
sudo add-apt-repository ppa:chris-lea/node.js -y
sudo apt-get update -y
sudo apt-get install nodejs -y
sudo apt-get install -y git-core
git clone git://github.com/RobertPope/StartupEngineering.git
