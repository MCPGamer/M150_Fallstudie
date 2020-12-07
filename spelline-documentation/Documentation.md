# Dokumentation zu M150_Fallstudie

## Table of Contents
1. [Mockups]
2. [Konzept] 
3. [Workflow] 
4. [Datenschutz] 
5. [Zahlungsverkehr]
6. [Kostenberechnung]
7. [Umsetzung] 
8. [Journal] 

## Mockups
Die Mockups sind im selben Ordner wie dieses MD abeglegt und werden immer mit vollem Filenamen erwähnt.

Das Login Fenster, welches in "spelline-login-page.PNG" dargestellt ist, soll simpel sein und einfach seinen Zweck 
erfüllen. Dazu reichen die Felder Name und Password aus.

Auf der Ansicht in "spelline-upload-page.PNG" kann man das Dokument, welches man korrigiert haben will hochladen. 
Auf der rechten Seite werden zuoberst die Wörter gezählt welche im Dokument enthalten sind. Darunter kann man dann 
auswählen welches Level von Korrektur man haben möchte und im Preisfeld wird dann berechnet wie viel die gesamte 
Korrektur kosten wird (die Raten sind unter dem Abschnitt Kostenberechnung zu finden).

Unter "spelline-expert-view.PNG" ist die Ansicht welche die Experten haben werden wenn sie offene Korrekturen sehen. 
Dort sehen sie Dann welches Level die angefragte Korrektur ist, wie viel sie verdienen würden und wie viele Wörter das 
Dokument hat.\
Was man hier eventuell noch hinzufügen könnte wären, ein Themenbereich, eine Priorität, ein Fertigstelldatum und der 
Button um das Korrigierte Dokument wieder hochzuladen und zurückzugeben fehlt auch.

Der Admin der Seite kann beide Ansichten sehen.

## Konzept
Wir haben uns für die Idee entschieden, ein Korrekturportal für Texte umzusetzen da dies uns von den Vorschlägen am 
meisten anspricht. Dabei wollen wir uns konkret in die Sicherheitsaspekte vertiefen und diese Implementieren 
(Datenschutz, Https / SSL Protokolle, etc…). Anschliessend würden wir den Rest des Projektes konkret definieren und 
ausarbeiten, darunter fallen Aspekte wie Zahlungsprozesse, Registration, Login, Expertenansicht oder Preisberechnungen. 
Dies würden wir über eine Reactapplikation lösen.

## Workflow
Der Ablauf für eine einzelne Datei ist wie folgt. Zuerst lädt der User die Datei hoch und durchläuft den Zahlungsprozess. 
Danach wird das Dokument ans Backend geschikt. Von da an wird es in der Liste angezeigt, auf welche die Experten Zugriff 
haben, um ihre Arbeit zu wählen. Sobald der Experte eine der Datein annimmt wird diese auf “In Progress” gesetzt, die 
anderen Experten sehen den Auftrag nicht mehr und der Experte hat jetzt die Möglichkeit das Dokument zu uploaden. Wenn 
der Experte das File wieder uploaded wird eine Email and den Kunden generiert welche ihm das Korrekturs PDF zukommen lässt.

## Datenschutz
Der wichtigste Punkt im Datenschutz sind die Userdaten, insbesondere das Passwort. Dieses wird direkt nach ausfüllen des 
Loginfelds verhasht und nicht mehr als Klartext verwendet.\ Der Zweite Punkt ist die Filesicherheit. Wir haben geschaut, 
dass das File im Frontend bleibt bis der Request an die DB ausgeführt wird.\Dazu wollten wir sicherstellen das unsere 
Webseite auf HTTPS läuft, jedoch war ein SSL Zertifikat anzufordern nicht ihm Score der Arbeit.

## Zahlungsverkehr
Um den Zahlungsverkehr abzuwickeln haben wir uns für Kreditkarte und Paypal entschieden. Für die Kredikarte verwendet 
man am besten ein Tool wie Stripe. Dadurch kann man eine gewisse Sicherheit garantieren da man weniger Daten speichern 
muss. Für Papayl gibt es eine sehr einfache Developementimplentation welche die ganzen Sicherheitsaspekte übernimmt.

## Kostenberechnung
Die Kostenberechnung basiert auf zwei Faktoren: der Anzahl Wörter und dem Korrektur Level. Die Tarife werden pro Wort 
und Level entschieden. Dazu gibt es drei verschiedene Tarife: Basic, welches eine schnelle Kontrolle ist welche sich 
hauptsächlich auf Grammatik und gröbere Textfehler fokussiert, Professional beinhaltet genaueres Feedback auf Textstruktur 
und Aufbau wie auch Formulierungen und Schönheitsfehler und schlussendlich noch Professional Express.\
Die Preise sind, CHF 0.02 / Wort für Basic, CHF 0.04 / Wort für Professional und CHF 0.06 / Wort für Professional Express. 
Zudem gibt es eine Mindesttarif welcher bei 200 Worten liegt. Kürzere Texte werden trotzdem diesen Preis bezahlen müssen.

## Umsetzung
Zuerst haben wir uns mit dem Login beschäftigt. Dabei war uns vor allem wichtig, dass das Passwort immer verhasht ist. 
Um den Datenschutz zu gewährleisten, arbeiten wir immer nur mit einem MD5 verhashten Login.\
Hier fehlen noch die Optionen zur Registrierung und zum anlegen eines neuen Passworts. Somit muss für das testen der 
Applikation der DB Dump (DB-Export.sql) importiert werden, dieser beinhalte folgende Benutzer:

Email | Passwort | Berechtigung
---|---|---|
User|12345|User
Expert|54321|Expert
Admin|Secure.Password|Admin

Anschliessend haben wir uns mit der Userview und dem Fileupload auseinandergesetzt. Bereits implementiert per drag'n'drop 
oder per Button ein File, nur PDFs, hochladen kann. Sobald er dies gemacht hat, kann er das Level auswählen und 
anschliessend Zahlen. Nach der Zahlung geht der Request an die DB raus.\
Hier offen ist das herauslesen der Anzahl Wörter und dementsprechend auch die Preisberechnung. Ebenso den 
Zahlungsverkehr vorerst  ausgelassen und somit wird der Request direkt per Auswahl der Zahlungsmethode abgeschickt. 
Dieser ist jedoch noch nicht ganz funktional, da es komplex war das File via Post mit den restlichen Daten zusammen zu 
schicken.

Da der Upload noch nicht funktional implementiert ist, haben wir mit der Expertenansicht auch noch nicht begonnen.
## Journal

#### 09.11.2020
Am ersten Tag der Arbeit habe wir uns überlegt was wir machen wollen. Wir haben uns zuerst die Beispiele welche gegeben 
worden sind angeschaut und, nachdem uns nichts bessers selber eingefallen ist, haben wir uns für ein Textkorrekturportal 
entschieden.

#### 16.11.2020
Am zweiten Arbeitstag haben wir das Konzept etwas feiner ausgearbeitet und die Aufgaben zwischen uns aufgeteilt. Dazu 
haben wir noch den Inital Commit mit dem Angular Setup gemacht.

#### 23.11.2020
Am dritten Tag haben wir recherchiert wie ein Filetransfer via HTTPS aussehen könnte. Nach einigen Tutorials kamen wir 
zum Schluss das es besser ist sich zuerst mit dem Login zu befassen, da der Filetransfer ziemlich komplex werden könnte 
und wir mindestens eine funktionale Ansicht wollten.

#### 30.11.2020
Wir haben uns entschieden das Layout zu überarbeiten und dafür Mockups erstellt. Dazu haben wir auch noch die Dokumentation 
auf den neusten Stand gebracht.

#### 07.12.2020
Am letzten Tag haben wir noch ein paar Fehler im Code gefixt und die Dokumentation überarbeit und fertiggestellt damit 
wir Abgabebereit sind. Dazu mussten wir die Doku noch von Google Docs in ein .md übertragen und dort richtig formatieren.