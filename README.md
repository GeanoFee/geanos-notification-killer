# Geano's Notification Killer

![Geano's Notification Killer Showcase](https://github.com/GeanoFee/geanos-notification-killer/blob/main/showcase.jpg?raw=true)

System-agnostic, lightweight FoundryVTT module that enhances player immersion by suppressing UI notifications for non-GM users.

## 🎯 Purpose

During gameplay, players often get bombarded with error messages, warnings, and notifications that they cannot act upon. These interruptions break immersion and create unnecessary distraction from the game itself. This module silently handles these notifications in the background, allowing players to focus on what matters most - the game.

## ✨ Features

- **Seamless Integration**: Automatically detects player vs GM roles
- **Complete Notification Suppression**: Disables all UI notification types for players
  - Error messages
  - Warning notifications  
  - Info notifications
  - General notifications
- **GM Preservation**: Game Masters continue to receive all notifications as normal
- **Zero Configuration**: Works immediately upon installation
- **Lightweight**: Minimal performance impact

## 🚀 Installation

- **Manifest URL**: `https://github.com/GeanoFee/geanos-notification-killer/releases/latest/download/module.json`

## 🎮 Why Use This Module?

**For Players:**
- Maintains immersion during gameplay
- Eliminates frustration from unhelpful error messages
- Cleaner, distraction-free interface

**For Game Masters:**
- Reduces player complaints about error spam
- Allows players to focus on roleplay and game mechanics
- Maintains GM visibility for troubleshooting

## 🔍 Technical Details

The module hooks into FoundryVTT's notification system on client ready and:
1. Checks if the current user is a GM
2. If not a GM, replaces notification functions with null operations
3. Logs the successful disabling for debugging purposes

## 🏷️ Compatibility

- **FoundryVTT Version**: v9+ (tested on v12)
- **System Compatibility**: Universal (works with any game system)

---

*Made with ❤️ for the FoundryVTT community*

