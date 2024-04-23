# Getting SMTP Credentials

There are several StartOS services that are capable of sending emails, such as BTCPay Server, Ghost, Gitea, Nextcloud, Synapse, and Vaultwarden, using third party email (SMTP) servers. The guides below are for using Gmail or Amazon SES for SMTP, but you may also use another third party provider of your choice.

#### Contents

- [Gmail](#raspberry-pi)
- [Amazon SES](#all-other-devices)

## Gmail

1.  Access your Google 2-step verification settings: https://myaccount.google.com/signinoptions/two-step-verification.

1.  Enable 2-Step verification if not already.

1.  Under "App Passwords" (bottom), add a new App Password.

1.  Choose a name for the new App Password. You may call it anything, such as "SMTP", then click "Create".

1.  A random 16-character password will be created and shown to you. This is your app password. Save it somewhere secure, such as your Vaultwarden password manager, then click "Done".

1.  Now you can use this SMTP account for any service that has the capability to send an email. The table below shows all the details you may need:

    | Parameter  | Value                          |
    | ---------- | ------------------------------ |
    | Host       | smtp.gmail.com                 |
    | Port       | 587                            |
    | Encryption | TLS                            |
    | Username   | your-username@gmail.com        |
    | Password   | your App Password (form above) |

## Amazon SES

Refer to the <a href="https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html" target="_blank">Amazon SES docs</a>.
