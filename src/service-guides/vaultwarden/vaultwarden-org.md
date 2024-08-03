# Organizations in Vaultwarden

## Creating an Organization

If you want to share passwords amongst friends or family, you can do so using the "Organizations" feature of Vaultwarden.

1. Inside your [Web Vault](vaultwarden-webvault), click `New Organization`

    ![](./assets/create-org.png)

1. Give your organization a name and enter your email. ``Note``: You can enter whatever you want for email, even `fake@email.com`. Because you are self-hosting, the email is not used for anything at all.

    ![](./assets/org-details.png)


## Adding Others to Your Organization

.. warning::
   After you have completed signed up new members to your Vaultwarden server, it is highly recommended that you disable new user signups inside your :ref:`Admin Dashboard<vaultwarden-admin>` --> General Settings --> Allow new signups --> uncheck the box.

1. Tell the user to create an account on your Vaultwarden server. This must be done *before* you invite them.

1. Inside the Organization page, click Manage --> `Invite User`

    ![](./assets/invite-user.png)

1. Decide what permissions you want the member to have and click "Save". In the below example, the member will be a manager and have access to all collections.

    ![](./assets/user-permissions.png)

1. The new member should automatically show as `Accepted`.  If the user shows as `Invited`, Remove their account by clicking the settings icon to the right of their email address, and make sure they sign up *before* you invite them, as mentioned in Step 1.  Once they show as `Accepted`, click the settings icon on the right and click "Confirm":

    ![](./assets/confirm-user.png)

1. You will be presented with a fingerprint phrase. The new member can verify this phrase inside their own dashboard, but because you are self-hosting and adding users manually, you can just click "Confirm".

    ![](./assets/verify-user.png)

The new member should now be able to see the organization in their own dashboard or client apps.
