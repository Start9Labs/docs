# Getting SMTP Credentials

There are several StartOS services that are capable of sending emails, such as BTCPay Server, Ghost, Gitea, Nextcloud, Synapse, and Vaultwarden, using third party email (SMTP) servers. The guides below are for using Gmail or Amazon SES for SMTP, but you may also use another third party provider of your choice.

#### Contents

- [Gmail](#gmail)
- [Amazon SES](#amazon-ses)
- [Proton Mail](#proton-mail)

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

To use Amazon SES you will need:

* An Amazon Web Services (AWS) account. If you don't have one, you can [register here](https://aws.amazon.com/) for free.
* To set up Amazon Simple Email Service (SES) on AWS, from [inside your AWS](https://aws.amazon.com/ses) console, also free for a time within [certain limits](https://aws.amazon.com/ses/pricing/).
* Optional: To purchase your own domain name to send emails from, then add the domain records Amazon provides you. This will allow you to request 'Production Access' to send emails to unverified addresses (i.e. to more than just your own email address).

You can then refer to the [Amazon SES docs](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html) to create a SMTP user. 

## Proton Mail

Access to Proton Mail's SMTP settings is currently only made available by Proton to their customers with **Proton for Business**, as well as certain higher tier individual and family plans (**Proton Duo**, **Proton Family** – both with "SMTP Submission" as a listed feature), and then only when you point a custom domain to your account.

To set up Proton Mail for SMTP you will need:

* To purchase and point a domain name from a domain registrar to Proton's servers by following this guide here: [Custom Domain](https://proton.me/support/custom-domain)
* To follow the steps in the secion **How to set up SMTP** in the guide here: [SMTP Submission](https://proton.me/support/smtp-submission)
