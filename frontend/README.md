## För G ska följande krav uppfyllas:

- [x]  Skapat ett fullstack mapp med ett backend & frontend (ej fungerande)
- [x]  Ladda upp flowers projektet på frontend
- [x]  Skapat en SQL databas utifrån JSON-flowers-filen
- [x]  Använd **Express** och en **SQL-databas** (till exempel SQLite).
- [x]  Applikationen ska **fungera som en sammanhängande helhet**. Frontend-delen ska kommunicera med backend-delen som i sin tur ska kommunicera med databasen.
- [x]  Applikationens frontend ska kunna **presentera** (via `GET` och `SELECT`) uppgifter från databasen. Frontend-delen ska **hämta JSON** från backend-delen. Rendera uppgifterna i HTML-element (använd **inte** `alert` eller liknande).
- [x]  Ta emot och använd minst en **adressparameter** i backend-applikationen.

## För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:

- [x]  Applikationens frontend ska kunna **ändra** (via `POST/PUT/DELETE` och `INSERT/UPDATE/DELETE`) **uppgifter i databasen**. Frontend-delen ska **skicka JSON** till backend-delen. Ändringen ska gå att se på webbsidan.
- [x]  Svara med en annan statuskod än `200 OK` i minst en request handler (till exempel `201 Created` när en resurs skapas).
- [ ]  Ta emot och använd minst en **query-parameter** i backend-applikationen. (En adressparameter behöver användas även om detta krav uppfylls.)
- [x]  All kod ska vara **enhetligt formaterad**.

Uppgiften ska göras **individuellt**.

Lämna in koden (både backend och frontend) som en **Zip-fil** här på ITHS Distans. `node_modules`-mapparna ska **inte** ingå i filarkivet som lämnas in
