# Matrix

Synapse
-------

  With registrations disabled, the only way to create an account on your Server is through the Admin Portal.  The Admin Portal is the preferred method for creating an account.

1. In your Start9 UI, under `Services > Synapse`, click "Launch UI"
1. Log in with your Admin Username and Password (located in Properties). For "Homeserver URL", do `not` enter your Homeserver address. Instead, enter your Admin Portal URL.

    ```admonish note

    This is the URL currently showing in your browser URL bar, excluding the path. e.g. https://exampleaddress.local or http://exampleaddress.onion.

    ```

    ![Synapse Admin](./assets/synapse-admin-1.png)


1. In the "Users" tab, you will notice the admin user already created.

1. In the "Users" tab, click "+ Create"

    ![Synapse Admin](./assets/synapse-admin-2.png)
   
1. Choose a User-ID, Displayname, and Password for your account. Optionally enter an email address under the 3PIDs section. It is not recommended to make this user a Server Administrator, as it is best to limit admin access.
   
    ![Synapse Admin](./assets/synapse-admin-3.png)
    