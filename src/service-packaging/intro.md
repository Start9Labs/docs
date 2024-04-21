# Introduction

StartOS is a _Server OS_. It is a Linux distro that is optimized for administering _servers_. Mac, Windows, iOS, Android, and other Linux distros, such as Debian and Ubuntu, are optimized for administering _clients_, such as phones or laptops. Using these operating systems to administer a server requires "popping the hood" and using the command line. Server administration involves compiling software, permissioning file systems, editing configuration files, managing dependencies, configuring network interfaces, generating certificates, monitoring health, creating backups, etc etc. It is a serious undertaking that requires significant time and expertise. For developers and system administrators, StartOS provides huge time savings over traditional Linux workflows. For everyone else, it makes administering a server possible.

The StartOS graphical interface is a private website, accessible from a local monitor or remote web browser. Through it, users can discover, download, install, configure, monitor, back up, and generally manage any variety of self-hosted, open-source software.

What makes this experience possible is a unique package format that permits services/apps/nodes to take advantage of StartOS APIs. In its most basic form, a package is just a thin metadata wrapper around a service that allows it to be discovered, installed, and run on StartOS. Beyond that, StartOS APIs grant developers an incredible degree of creative capacity to define the end-user experience for their service. Developers can:

- display instructions and tool tips
- present alerts and warnings under certain conditions
- run arbitrary code on install, update, and uninstall
- represent configuration files as validated forms with all varieties of form inputs
- define command line scripts and commands that present as buttons with optional inputs
- write health checks that run on an interval and are optionally displayed
- automatically install and configure dependencies
- maintain state and optionally expose particular values to users or dependent services
- grant users flexible networking options such as LAN (.local + IP/port), Tor (.onion), and clearnet
- offer one-click, encrypted backups of targeted data
- and more...

In the next section, we will explore the StartOS APIs and how to access them using type safe Start-SDK.
