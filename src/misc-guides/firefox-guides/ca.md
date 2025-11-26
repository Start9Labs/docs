# Trusting your Root CA (Firefox)

These guides apply to Firefox, Firefox ESR, Librewolf, and Thunderbird. Mozilla apps need to be configured to use the certificate store of your device. Please refer to their [blog post](https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/) for an explanation (TLDR: for security purposes).

#### Contents

- [Mac/Windows](#mac--windows)
- [Debian/Ubuntu](#debian--ubuntu)
- [Android/Graphene](#android--graphene)
- [Arch/Garuda/CentOS/Fedora](#arch--garuda--centos--fedora)

## Mac / Windows

1. Open Firefox and enter `about:config` in the URL bar. Accept any warnings that appear.

1. Search for `security.enterprise_roots.enabled` and set the value to "true".

1. Restart Firefox

## Debian / Ubuntu

1.  In the hamburger menu, click "Settings". Search for `security devices` and select "Security Devices..."

1.  When the Device Manager dialog window opens, click "Load".

1.  Give the Module Name a title, such as "System CA Trust Module". For the Module filename, paste in `/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so` and hit "OK".

    ```admonish tip

    The path to p11-kit-trust.so will be slightly different if your processor's architecture is not x86_64.
    ```

1.  Verify that the new module shows up on the left hand side and click "OK" in the bottom right:

1.  Restart Firefox

## Android / Graphene

```admonish warning

The regular Firefox app will not work. You must use `Firefox Beta [Firefox Beta](https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta).
```

1. Go to `Menu > Settings > About Firefox` and tap the Firefox icon 5 times to enable "developer mode".

1. Go back to `Menu > Settings > Secret Settings` (at the bottom), and tap "Use third party CA certificates".

## Arch / Garuda / CentOS / Fedora

No special steps required.
