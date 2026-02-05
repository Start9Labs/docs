# Trusting Your Root CA (Linux)

#### Contents

- [Debian Systems](#debian-systems)
- [Arch / Garuda](#arch--garuda)
- [CentOS / Fedora](#centos--fedora)
- [Additional Steps for Chromium Browsers](#additional-steps-for-chromium-browsers)

## Debian Systems

This should work for most Debian-based systems, such as Debian, Ubuntu, Mint, PopOS etc.

1.  Ensure you have [downloaded your Root CA](../../../user-manual/trust-ca.md#download-your-root-ca).

1.  Open a terminal and run::

        sudo apt update
        sudo apt install -y ca-certificates p11-kit

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads

1.  Add your Root CA to your OS trust store. Be certain to replace `adjective-noun` with your server's unique hostname in the first command:

        adjnoun=adjective-noun
        sudo mkdir -p /usr/share/ca-certificates/start9
        sudo cp "${adjnoun}.crt" /usr/share/ca-certificates/start9/
        sudo bash -c "echo 'start9/${adjnoun}.crt' >> /etc/ca-certificates.conf"
        sudo update-ca-certificates

    If successful, you will see the output `1 added`.

1.  If using Firefox or Tor Browser, complete this [final step](../../misc-guides/firefox-guides/ca.md#debian--ubuntu).

1.  If using a Chromium browser, such as Chrome or Brave, complete this [final step](#additional-steps-for-chromium-browsers).

## Arch / Garuda

1.  Ensure you have [downloaded your Root CA](../../../user-manual/trust-ca.md#download-your-root-ca).

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads

1.  Add your Root CA to your OS trust store. Be certain to replace `adjective-noun` with your server's unique hostname in the second command:

        sudo pacman -S ca-certificates
        sudo cp "adjective-noun.crt" /etc/ca-certificates/trust-source/anchors/
        sudo update-ca-trust

    Despite no output from the last command, you can test your app right away.

## CentOS / Fedora

1.  Ensure you have [downloaded your Root CA](../../../user-manual/trust-ca.md#download-your-root-ca).

1.  In `/etc/systemd/resolved.conf`, ensure you have `MulticastDNS=Yes`.

1.  Restart systemd-resolved

        sudo systemctl restart systemd-resolved

1.  Move into the directory where you downloaded your Root CA (usually `~/Downloads`), for example:

        cd ~/Downloads

1.  Add your Root CA to your OS trust store. Be certain to replace `adjective-noun` with your server's unique hostname in the second command:

        sudo yum install ca-certificates
        sudo cp "adjective-noun.crt" /etc/pki/ca-trust/source/anchors/
        sudo update-ca-trust

    <!-- @TODO no output? -->

## Additional Steps for Chromium Browsers

On Linux, Chromium browsers require extra configuration to trust your Root CA. These instructions should work for Chrome, Brave, Vivaldi and other Chrome-based browsers.

1. In the URL bar, enter `chrome://settings/certificates`.

1. Click `Authorities > Import`.

1. Select your adjective-noun.crt file.

1. Check "Trust this certificate for identifying websites".

1. Click OK.
