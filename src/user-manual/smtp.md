# Sending Emails

> [!WARNING]
> This guide is _not_ for using StartOS as an email server. It is for granting StartOS the simple ability to _send_ emails through a 3rd party email server.

## Use Case

Adding SMTP credentials to StartOS makes it possible for certain services to send email notifications. Many services, such as NextCloud, Vaultwarden, Gitea, and others expect to send emails and require SMTP credentials to send them.

By default, no services have access to your SMTP credentials. You must grant access to each service explicitly.

## Instructions

1. Obtain SMTP credentials from a [3rd party provider](../misc-guides/smtp-credentials.md)

1. In `System > Email` enter your SMTP credentials and hit "Save".

1. On the same page, send yourself a test email. Remember to check your spam folder. If the email goes to spam, mark it as not spam.

1. For each service you want to use the credentials to send emails, go to the dashboard of that service, click "Actions", and locate the relevant action.
