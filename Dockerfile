FROM ubuntu:latest

# Setting the environment ip address
# By setting the host to 0.0.0.0 we are telling the container to listen on all interfaces at port 8080
ENV HOST=0.0.0.0


# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Kolkata

# Update and install packages
RUN apt-get update && apt-get install -y \
    sudo \
    build-essential \
    curl 

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Add a new user with sudo privileges
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

# Set the default shell for the docker user to /bin/bash
RUN chsh -s /bin/bash docker

# Copy all contents to the container
COPY . /root/frontend

EXPOSE 8080

# Start sshd and a bash shell when connecting to the container
##Frontend
CMD cd /root/frontend && npm install && npm run build && npm run serve