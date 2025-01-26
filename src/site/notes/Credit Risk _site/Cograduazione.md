---
{"dg-publish":true,"permalink":"/credit-risk-site/cograduazione/"}
---


La **cograduazione**  è quella [[Credit Risk _site/Concordanza\|Concordanza]] tra due variabili casuali.
Dunque due variabili sono cograduate quando sono massimamente concordanti, ciò significa che a *valori piccoli di una variabile* sono associati con elevata probabilità *valori piccoli anche dell'altra*, allo stesso tempo a *valori grandi di una variabile* sono associati con massima probabilità *valori grandi dell'altra*.

Il concetto è molto più facilmente comprensibile svolgendo un esercizio pratico

>> [!info]- ESERCIZIO
> Scrivere le frequenze congiunte se ci trovassimo in una situazione di cograduazione.
> ![Pasted image 20230319145131.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230319145131.png)
> [File excel](https://github.com/marcolldotcoin/credit_risk/raw/b8c6e0b5bab246d3bba44d7a88c5238ab748698c/src/site/uploads/Combinazione%20lineare%20poisson%2BStrutture%20di%20dipendenza.xlsx)
>
> <video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/5adc56253006b7683e4abe0887dcdfce1faa1ac1/src/site/uploads/video/Esercizio%20cograduazione.mp4" type="video/mp4">
>   Your browser does not support the video tag.
> </video>
>
> Si può partire sia dall'angolo in alto a sinistra sia in basso a destra.
> Notiamo anche che le probabilità tendono a concentrarsi intorno alla diagonale principale della matrice.

Non bisogna confondere la massima concordanza con l'avere una [[Credit Risk _site/Correlazione\|Correlazione]] massima (ovvero 1).
E' infatti possibile avere una situazione di massima concordanza ma allo stesso tempo che la relazione tra le variabili non sia lineare e, di conseguenza, la correlazione non sia 1.
![Pasted image 20250126143720.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126143720.png)

Se fossimo un banca e avessiamo a che fare con due debitori nei nostri confronti *preferiremmo una situazione di indipendenza piuttosto che quella di cograduazione*.
Questo perché nella prima situazione quando fallisce un debitore l'altro è indipendente da ciò. 
Mentre nel caso di cograduazione fallirebbero entrambi.
Se la banca vuole limitare le probabilità di perdite alte "a catena" è più contenta se si trova in una situazione di indipendenza.


