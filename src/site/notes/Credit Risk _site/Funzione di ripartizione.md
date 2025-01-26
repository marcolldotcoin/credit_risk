---
{"dg-publish": true, "permalink": "/credit-risk-site/Funzione-di-ripartizione/"}
---





## *Definizione*
La **funzione di ripartizione F<sub>X</sub>(.)** (o cumulata di probabilità) di una variabile casuale X(ei) è quella funzione che ha dominio R e codominio l’intervallo chiuso [0,1] tale che assume questa forma:

> ![Pasted image 20221010184115.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010184115.png)
>  F è il nome della funzione, X è la variabile casuale, x è il punto fino a cui sto calcolando la cumulata.

In altre parole, ricordando che R per X non è altro che la probabilità che avvenga X capiamo che la *funzione di ripartizione genera* anche essa *una probabilità*.
Questo ci fa capire che il codominio deve per forza essere compreso tra 0 ed 1.
Ciò che la funzione fa è sputare fuori la *probabilità cumulata sinistra*,  ovvero le probabilità sommate di tutte le x fino alla mia x di interesse e non quella di un semplice valore che la variabile casuale assume.
In sostanza si sommano tutte le probabilità fino al valore x.

## *Proprietà*
- F<sub>X</sub>(x) è una *funzione monotona non decrescente*, di conseguenza aumentando il valore di x il valore di F può solo crescere o al massimo restare uguale
- I limiti ci dicono che F è *compresa tra 0 e 1* e che va piano piano a crescere, ciò è banale pensando che abbiamo a che fare con probabilità.
![Pasted image 20221010185250.png|200](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010185250.png)
- F è *continua* da destra.

## *Differenza tra variabili discrete e continue*
La funzione di ripartizione può assumere **forme diverse** rispetto al fatto se la variabile casuale è discreta o continua.

- Se *X è discreta* la F si può esprimere come la ==sommatoria ordinata di tutte le probabilità== di x. 
![Pasted image 20221010191934.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010191934.png)
Va da sé che se voglio calcolare la probabilità che X assuma un solo valore basta fare la differenza tra la cumulata fino a quel punto meno la cumulata del valore precedete.
![Pasted image 20221010191951.png|250](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010191951.png)

- Se *X è continua* la funzione deve essere ==derivabile== rispetto ad X, derivandola genera una nuova funzione f<sub>X</sub>.
![Pasted image 20221010192158.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010192158.png)
La sua forma è
![Pasted image 20221010193734.png|300](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221010193734.png)


