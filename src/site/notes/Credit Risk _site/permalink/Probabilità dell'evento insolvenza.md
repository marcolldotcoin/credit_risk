---
{"dg-publish": true, "permalink": "/credit-risk-site/Probabilità-dell'evento-insolvenza/"}
---





## *L'insolveza*
Vediamo il significato preciso della parola **insolvenza**.

- *Definizione giuridica*: ==IMPOTENZA== del debitore di ==far fronte REGOLARMENTE alle proprie obbligazioni== non avendo nel proprio patrimonio i mezzi per pagare né adesso ==NE' IN FUTURO.==
E' difficile applicare la definizione nel campo bancario perché non esistono elementi quantitativi tali da stabilire se un debitore in difficoltà è veramente insolvente valutandone impotenza, regolarità e se la situazione è transitoria o no.
Inoltre è possibile che ci siano casi in cui il debitore riesce ad essere solvente ma non del tutto, creando perdite per la banca.

Default è la situazione che implica perdite per la banca ma non così grave come potrebbe essere l'insolvenza vera e propria.

L'articolo 178 del regolamento UE definisce la condizione di default.
Una banca definisce il debitore in condizione di default se si verifica anche uno solo dei seguenti eventi:
1. Viene giudicato ==improbabile== che il debitore riesca a pagare ==integralmente== i suoi debiti senza andare ad intaccare le garanzie.
2. Il debitore è in arretrato da più di 90 giorni su un obbligazione ==rilevante==. Per rilevante si intende un ammontare di più di 500 euro (rilevanza assoluta) che rappresenti più dell'1% del totale del debito verso la banca (rilevanza relativa).

La condizione di **default** può essere momentanea e il debitore può uscirne se sistema la sua posizione. Se il debitore soddisfa il creditore e questa situazione dura per almeno 3 mesi allora esce dalla situazione di default.

I crediti definiti *non performing* o deteriorati possono essere suddivisi in 3 categorie:
- Esposizioni scadute: debiti non pagati da più di 90 giorni o anche fidi non saldati.
- Inadempienze probabili:  situazione in cui la banca ritiene difficile recuperare i propri crediti.
- Sofferenze: crediti verso soggetti in stato di insolvenza o situazioni simili

## *La probabilità di default*
La probabilità di default di un cliente può essere sintetizzata tramite il **rating** ovvero un giudizio sintetico formulato da un'agenzia o internamente dalla banca stessa.
Vengono considerati più aspetti:
- Bilancio
- Situazione debitoria attuale
- Dati qualitativi (management, settore dove opera l'azienda, progetto aziendale ecc)

L'affidabilità di un debitore viene rivista periodicamente e possono avvenire upgrade o downgrade.
![Pasted image 20230525124319.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525124319.png)
Il rating è una sigla ma essa rappresenza una probabilità di default.
Ogni azienda dopo un certo periodo può passare da un rating all'altro, abbiamo quindi la matrice di transizione che ci dice la probabilità di passare da una classe all'altra.
![Pasted image 20230525125323.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525125323.png)

FILE EXCEL: ![[matrice transizione.xlsx]]
![[Esercizio matrice di transizione.mp4]]