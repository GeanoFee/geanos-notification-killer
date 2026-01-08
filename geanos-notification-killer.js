
Hooks.once("ready", () => {
  if (!game.user.isGM) {
    const nullFn = () => {};
    ui.notifications._notify = nullFn;
    ui.notifications.info = nullFn;
    ui.notifications.warn = nullFn;
    ui.notifications.error = nullFn;
    console.log("No Player Notifications: UI notifications disabled for this player.");
  }
});
