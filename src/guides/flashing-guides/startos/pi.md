# Flashing StartOS - Raspberry Pi

This guide is for flashing StartOS to a microSD card for use on a Raspberry Pi.

**Contents**

- [Download](#download)
- [Flash](#flash)
- [Install](#install)

## Download

1.  Visit the <a href="https://github.com/Start9Labs/start-os/releases/latest" target="_blank">Github release page</a> to find the latest version of StartOS.

1.  At the bottom of the page, under "Assets", download the `startos-..._raspberrypi.img.gz` file.

1.  Verify the SHA256 checksum against the one listed on GitHub (optional but recommended).

    - **Mac**. Open a terminal window and run the following, replacing `startos-0..._raspberrypi.img.gz` with the path/name of the file:

          openssl dgst -sha256 startos-0..._raspberrypi.img.gz

    - **Linux** Open a terminal window and run the following, replacing `startos-0..._raspberrypi.img.gz` with the path/name of the file:

          sha256sum startos-0..._raspberrypi.img.gz

    - **Windows** Open a PowerShell and run the following, replacing `Downloads` with the directory where you downloaded the file, and `startos-0..._raspberrypi.img.gz` with the name of the file:

          cd Downloads
          Get-FileHash startos-0..._raspberrypi.img.gz

## Flash

1. Download and install <a href="https://www.balena.io/etcher" target="_blank">balenaEtcher</a> onto your Linux, Mac, or Windows computer.

1. Insert your microSD card into your computer, either directly or using an adapter.

1. Open balenaEtcher.

1. Click "Select Image" and select the `.img.gz` image you just downloaded.

1. Click "Select Target" and select your microSD card.

   ```admonish warning

   BE ABSOLUTELY CERTAIN you have selected the correct target microSD card. Whatever drive you select will be **COMPLETELY ERASED**!
   ```

1. Click "Flash!". You may be asked to approve the unusually large disk target and/or enter your password. Both are normal.

## Install

1. For the Raspberry Pi, flashing and installing are essentially the same thing. Simply remove the newly-flashed microSD card and insert it into your Raspberry Pi.
