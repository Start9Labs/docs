# Connecting over Tor (Linux)

#### Contents

- [Debian / Ubuntu](#debian--ubuntu)
- [Arch / Garuda / Manjaro](#arch--garuda--manjaro)
- [CentOS / Fedora / RHEL](#centos--fedora--rhel)

```admonish tip

After completing the guide below for your system, you can confirm Tor is running with:

    systemctl status tor

In the rare event that Tor is having connectivity issues, reset the connection:

    sudo systemctl restart tor
```

## Debian/Ubuntu

This should work for most Debian-like systems, such as Debian, Ubuntu, Mint, PopOS etc.

<!-- @TODO should this paragraph be under "Debain Systems"? -->

The following instructions will install the LTS (Long Term Support) version of Tor from your distro's default repository. If you would always like the latest stable release, the Tor Project maintains their own Debian/Ubuntu repository. The instructions for connecting to this official Tor Project repository can be found <a href="https://support.torproject.org/apt/tor-deb-repo" target="_blank">here</a>.

1.  Open a terminal and install/start Tor:

        sudo apt update && sudo apt install tor

## Arch / Garuda / Manjaro

1.  Open a terminal and install/start Tor:

        sudo pacman -S tor

## CentOS / Fedora / RHEL

1.  Configure the Tor Project package repository by pasting the following into a shell/Terminal session:

        ```bash
        os=$(cat /etc/os-release|grep "^ID="|cut -d= -f2|sed "s/\"//g") && \
        sudo cat << EOF > /etc/yum.repos.d/tor.repo
        [Tor]
        name=Tor for $os \$releasever - \$basearch
        baseurl=https://rpm.torproject.org/$os/\$releasever/\$basearch
        enabled=1
        gpgcheck=1
        gpgkey=https://rpm.torproject.org/$os/public_gpg.key
        cost=100
        EOF
        ```

1.  Open a terminal and install Tor:

        sudo dnf install tor

1.  Enable tor service:

        sudo systemctl enable --now tor
