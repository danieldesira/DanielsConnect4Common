# Daniel's Connect4 Common
NPM package with common Daniel's Connect4 functionality.

## Changelog
### 0.1.30 (Beta - 10/09/2023 6:15PM Malta time)
* Added dimensions getter in default class: `getDimensions()`

### 0.1.29 (Beta - 27/08/2023 11:59PM Malta time)
* Removed `isTokenValid` property to `PlayerInfo` model

### 0.1.28 (Beta - 22/08/2023 0:25AM Malta time)
* Added `isTokenValid` property to `PlayerInfo` model

### 0.1.27 (Beta - 12/08/2023 1:25AM Malta time)
* Added `dimensions` property to `PlayerInfo` model

### 0.1.26 (Beta - 08/08/2023 11:50PM Malta time)
* Changed `BoardLogic` constructor to accept just one dimension type parameter

### 0.1.25 (Beta - 08/08/2023 0:15AM Malta time)
* Add `BoardDimensions` enum

### 0.1.24 (Beta - 07/08/2023 2:45PM Malta time)
* Add board setters

### 0.1.23 (Beta - 07/08/2023 1:50AM Malta time)
* Provide public `resetBoard` method in `BoardLogic` class

### 0.1.22 (Beta - 07/08/2023 1:45AM Malta time)
* Dropped `board` parameter for pending methods in `BoardLogic` class

### 0.1.21 (Beta - 07/08/2023 1:30AM Malta time)
* Added `dimensions` constant
* Modified `BoardLogic` class to allow multiple board dimensions

### 0.1.20 (Beta - 04/08/2023)
* Included `PlayerStats` and `PlayerInfo` models

### 0.1.19 (Beta - 30/07/2023)
* Included docs which can be retrieved using local server
* Removed `PlayerNameMessage` model
* Included `playerName` in `InitialMessage` model

### 0.1.18 (Beta - 12/07/2023)
* Reorganised exports to be imported in a single line
* Introduced `skipTurnMaxWait` constant

### 0.1.17 (Beta - 02/07/2023)
* Added ` color ` check for ` isActionMessage() ` method
* Introduced ` ErrorMessage ` model

### 0.1.16 (Beta - 02/07/2023)
* Added ` color ` property to ` ActionMessage ` model

### 0.1.15 (Beta - 02/07/2023)
* Removed inactivity model
* Introduced ` switchTurn() ` function

### 0.1.14 (Beta - 14/06/2023)
* Introduced ` DisconnectMessage ` model

### 0.1.13 (Beta - 14/06/2023)
* Added ` GameMessage.isCurrentTurnMessage() ` method

### 0.1.12 (Beta - 14/06/2023)
* Fixed export for ` CurrentTurnMessage ` model

### 0.1.11 (Beta - 14/06/2023)
* Added ` CurrentTurnMessage ` model

### 0.1.10 (Beta - 01/06/2023)
* Renamed instances of Dot to Coin

### 0.1.9 (Beta - 31/05/2023)
* Set default exports

### 0.1.8 (Beta - 23/05/2023)
* Introduced ` randomiseColor() ` function

### 0.1.7 (Beta - 07/05/2023)
* Dot enum reverted to numerical values abstracting away from front-end

### 0.1.6 (Beta - 19/04/2023)
* Sort issue with build by prebuilding and republishing

### 0.1.5 (Beta - 19/04/2023)
* Include ` PlayerNameMessage ` model

### 0.1.4 (Beta - 16/04/2023)
* Include network data models

### 0.1.3 (Beta - 16/04/2023)
* Sort issue with build by prebuilding and republishing

### 0.1.2 (Beta - 16/04/2023)
* Included ` putDot() ` method

### 0.1.1 (Beta - 15/04/2023)
* Attempt to fix library entry

### 0.1.0 (Beta - 15/04/2023)
* Basic functionality ported to package