MAGYARÁZAT:

main.js:
- ez a belépési pont, itt példányosítjuk a controllert(TTTController)

TTTController.js:
- kettős feladata van -- példányosítja a viewt és feliratkozik az eseménykezelőre
- eseménykezelőben hívja meg a modell megfelelő metódusait és a view megfelelő metódusait

TTTModel.js:
- csak adatokkal foglalkozik, előállítja az adatok tényleges állapotát
- leírja az aktuális állapotot és előállítja a következő állapotot
- léptető metódus a lista x-edik elemére beírja az elemet, majd növeli a lépést egyel és megnézi mi lesz a következő lépés
- kontroller lekéri az aktuális állapotot -- így tudja a pályát példányosítani, majd megjeleníteni az aktuális állapotot

Mező.js:
- egyetlen kis divet fog megjeleníteni (tudja hova kell létrehozni), itt tudjuk generálni a saját eseményt -- ez arra való, hogy megmondjuk éppen melyik elemre kattintottunk


