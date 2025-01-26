---
{"dg-publish":true,"permalink":"/credit-risk-site/approssimazione-della-binomiale-alla-poisson/"}
---






> **TEOREMA**
> Se ho una successione di [[Credit Risk _site/Variabile casuale binomiale\|binomiali]] all'aumentare verso l'infinito del parametro $n$ numero di prove la successione si ditribuirà come una poisson di parametro $\lambda$
>![Pasted image 20230302122423.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302122423.png)

Dimostriamo che facendo il limite per $n$ che tende ad infinito la funzione di probabilità della binomiale diventa quella della Poisson.
![Pasted image 20250126142124.png](/img/user/Pasted%20image%2020250126142124.png)

{ #0223a7}


Questo risultato tornerà molto utile in futuro nel *modello CreditRisk*$^+$.

## *Graficamente*
![Pasted image 20250126142323.png](/img/user/Pasted%20image%2020250126142323.png)
Notiamo che per un numero $n$ di prove non troppo grande la forma delle due variabili è uguale ma a livello di probabilità esse sono molto diverse.

Notiamo invece che se andiamo a diminuire la probabilità in modo che sia molto piccola l'approssimazione è molto più realistica.
A questo punto andando ad aumentare $n$ l'approssimazione tenderà ad essere quasi identica.
![Pasted image 20250126142347.png](/img/user/Pasted%20image%2020250126142347.png)