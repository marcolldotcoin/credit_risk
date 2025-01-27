---
{"dg-publish":true,"permalink":"/credit-risk-site/dimostrazione-fgp-per-una-variabile-z-combinazione-lineare-di-poisson/"}
---

Noi saremo particolarmente interessati ad una variabile $Z$ ottenuta da una **combinazione lineare di variabili Poisson** indipendenti $X_i$ .
![Pasted image 20250126150731.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150731.png)

Se dovessimo lavorare solo con una Poisson non avremmo bisogno della funzione generatrice delle probabilità, perché abbiamo già la funzione di densità che ci fornisce le probabilità.
Nel caso che affrnotiamo noi, però, *non è possibile trovare la funzione di densità di questa combinazione lineare*, tuttavia grazie alla funzione generatrice delle probabilità posso trovare le probabilità associate ad un particolare valore della somma.

**DIMOSTRAZIONE PGF DI UNA COMBINAZIONE LINEARE DI POISSON**
![Pasted image 20230610133548.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230610133548.png)
Vediamo come dimostrarlo
So che la PGF è uguale al valore atteso di $t^x$. Ciò è uguale alla funzione di densità per $t^i$.
Sviluppando i calcoli si ottiene la PGF di una poisson.
![Pasted image 20250126150753.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150753.png)
Successivamente, si usa il [[Credit Risk _site/Funzione generatrice delle probabilità#^413125\|corollario]] visto prima per ottenere la PGF della combinazione lineare di variabili Poisson.
![Pasted image 20250126150810.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150810.png)