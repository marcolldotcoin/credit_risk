---
{"dg-publish":true,"permalink":"/credit-risk-site/funzione-generatrice-delle-probabilita-di-una-combinazione-linerare-di-poisson/"}
---


Noi saremo particolarmente interessati ad una variabile $Z$ ottenuta da una **combinazione lineare di variabili Poisson** indipendenti $X_i$ .
![Pasted image 20250126150731.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150731.png)

Se dovessimo lavorare solo con una Poisson non avremmo bisogno della funzione generatrice delle probabilità, perché abbiamo già la funzione di densità che ci fornisce le probabilità.
Nel caso che affrotiamo noi, però, *non è possibile trovare la funzione di densità di questa combinazione lineare*, tuttavia grazie alla funzione generatrice delle probabilità posso trovare le probabilità associate ad un particolare valore della somma.

**DIMOSTRAZIONE PGF DI UNA COMBINAZIONE LINEARE DI POISSON**
So che la PGF è uguale al valore atteso di $t^x$. Ciò è uguale alla funzione di densità per $t^i$.
Sviluppando i calcoli si ottiene la PGF di una poisson.
![Pasted image 20250126150753.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150753.png)
Successivamente, si usa il [[Credit Risk _site/Funzione generatrice delle probabilità#^413125\|corollario]] visto prima per ottenere la PGF della combinazione lineare di variabili Poisson.
![Pasted image 20250126150810.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150810.png)

Una volta trovata la funzione generatrice delle probabilità dovremmo derivarla $r$ volte in base all' $r$ che scegliamo, cosa che potrebbe essere complicata.
Per fortuna esiste una formula che ci permette di calcolare la *derivata $r$-esima della funzione generatrice delle probabilità di una combinazione lineare di Poisson valutata in $T=0$*.
![Pasted image 20250126150844.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150844.png)

Guardando l'esempio notiamo che non dobbiamo andare a derivare ogni volta la PGF ma basta utilizzare appunto la formula per calcolare tutte le derivate.

Questa espressione divisa per $r!$ dà la probabilità che $Z=r$ , ovvero la ==probabilità che le perdite del nostro portafoglio di crediti siano pari ad un certo ammontare $r$==.
![Pasted image 20230312133556.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312133556.png)

> La **variabile casuale Z** (combinazione lineare di variabili Poisson) ci tornerà utie nel modello CreditRisk+ per ==applicare il metodo costruttivo e trovare la distribuzione di probabilità della perdita di un portafoglio crediti==.


## *Applicazione su excel*

[File excel](https://github.com/marcolldotcoin/credit_risk/raw/b8c6e0b5bab246d3bba44d7a88c5238ab748698c/src/site/uploads/Combinazione%20lineare%20poisson%2BStrutture%20di%20dipendenza.xlsx)

![[Fgp combinazione lineare di Poisson.mp4]]
![Pasted image 20230312152534.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312152534.png)
![Pasted image 20230312150941.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312150941.png)
Nel costruire la tabella su excel andiamo a spezzare la formula in 3, calcolando i singoli 
fattori per poi moltiplicarli tra loro.
![Pasted image 20230312151203.png|400](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312151203.png)
Dobbiamo ricordarci che il numero massimo di addendi della sommatoria è uguale al numero $k$ di poisson coinvolte nella combinazione lineare, partendo però da $i=0$.
Nell'esempio di sopra abbiamo 3 poisson, quindi il numero totale di addendi della sommaroria sarà $3$. Nella tabella vediamo i 3 addendi: 0 , 1 e 2.

Se avessimo avuto 5 poisson avremmo avuto $k=5$ e quindi la tabella da impostare sarebbe stata:
![Pasted image 20230312153001.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312153001.png)

Il grafico di questa combinazione lineare è il seguente
![Pasted image 20230312145818.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312145818.png)