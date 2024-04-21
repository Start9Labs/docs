# Migrating LND to StartOS

This guide is for users seeking to migrate their LND nodes from Umbrel, RaspiBlitz, or myNode to StartOS - without closing any channels.

```admonish danger

After migrating an LND wallet to StartOS, _never_ restart your old node. Turning on your old node will likely result in the broadcast of old channel states and loss of funds!
```

1. Ensure your Umbrel, RaspiBlitz, or myNode device is running on the same LAN as your Start9 server.

1. Install LND onto StartOS is not already.

<!-- @TODO do we need to start LND first? -->

1. Start LND.

1. Stop LND.

1. In the "Actions" menu for LND, select the appropriate action for your node (Umbrel, RaspiBlitz, myNode), then provide its IP address and password(s) when prompted. If you are unsure of its IP address, you may need to check your router.

   ```admonish warning

   Performing this action will delete the current LND node on StartOS. If you have funds on this node, make sure to transfer them to another wallet before running the migration.
   ```

1. The migration action may take several minutes to complete. Once the action has completed and your old node has been unplugged, you may safely start LND on StartOS. **Remember - _never_ restart your old node after the migration has completed!**
