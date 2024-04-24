# Running Tor (Linux)

#### Contents

- [Debian Systems](#debian-systems)
- [Arch / Garuda / Manjaro](#arch--garuda--manjaro)
- [CentOS / Fedora / RHEL](#centos--fedora--rhel)

## Debian Systems

This should work for most Debian-like systems, such as Debian, Ubuntu, Mint, PopOS etc.

The following instructions will install the LTS (Long Term Support) version of Tor from your distro's default repositories. If you would always like the latest stable release, the Tor Project maintains their own Debian repository. The instructions for connecting to this official Tor Project repository can be found [here](https://support.torproject.org/apt/tor-deb-repo/).

1.  Open a terminal and install Tor:

        sudo apt update && sudo apt install tor

## Arch / Garuda / Manjaro

1.  Open a terminal and install Tor:

        sudo pacman -S tor

## CentOS / Fedora / RHEL

1.  Configure the Tor Package repository. Add the following to `/etc/yum.repos.d/tor.repo`:

        [Tor]
        name=Tor for Enterprise Linux $releasever - $basearch
        baseurl=https://rpm.torproject.org/centos/$releasever/$basearch
        enabled=1
        gpgcheck=1
        gpgkey=https://rpm.torproject.org/centos/public_gpg.key
        cost=100

    For Fedora, the "name" line should be `Tor for Fedora $releasever - $basearch`

1.  Open a terminal and install Tor:

        sudo dnf install tor

1.  Enable tor service:

        sudo systemctl enable --now tor

```admonish tip

For any of these distros, you can confirm that Tor is running by running:

    systemctl status tor

In the rare event that Tor is having connectivity issues, reset the connection:

    sudo systemctl restart tor

```
