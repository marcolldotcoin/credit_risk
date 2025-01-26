---
{"dg-publish": true, "permalink": "/credit-risk-site/Teorema-del-limite-centrale/"}
---





## *Definizione*
Il **teorema del limite centrale** dice che se genero una *variabile* casuale che è *somma* di variabili casuali iid, *con n che tende all'infinito*, essa *si distribuisce come una normale*.
![Pasted image 20221112004255.png|500](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112004255.png)
So quindi come si distribuisce la variabile nonostante non sappia come si distribuiscono gli elementi del campione.
![Pasted image 20221112004325.png|300](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112004325.png)

>Il teorema torna utilissimo perché se ho una X **popolazione che non ho idea di come sia distribuita** basta creare un campione iid di **tanti elementi** per sapere che la loro **somma** (e quindi la variabile originaria X) **si distribuisce come una normale standard (0;1)**.

## *Dimostrazione*
Si parte dalla considerazione che è un caso particolare di [[Credit Risk _site/Convergenza in distribuzione\|Convergenza in distribuzione]].
Data una [[Credit Risk _site/Successione di variabili casuali\|Successione di variabili casuali]] tale che le componenti X<sub>i</sub>:
- Siano [[Credit Risk _site/Variabili casuali indipendenti identiamente distribuite (i.i.d.)\|i.i.d.]] 
- Abbiano valore atteso uguale a $\mu$ e varianza σ<sup>2</sup> 

Si genera la somma di tutte le variabili $$Sn = X1+X2+...+Xn$$
![Pasted image 20221112001717.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112001717.png)
Con Valore atteso uguale ad n$\mu$ e varianza nσ<sup>2</sup>
![Pasted image 20221112001620.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112001620.png)

A questo punto applico la [[Credit Risk _site/standardizzazione di una variabile casuale\|standardizzazione di una variabile casuale]] ad S<sub>n</sub> ottenendo la nuova variabile Z<sub>n</sub>
![Pasted image 20221112002146.png|400](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112002146.png)
Ora applico il concetto di [[Credit Risk _site/Convergenza in distribuzione\|Convergenza in distribuzione]] alla nuova variabile ottenuta dove come [[Credit Risk _site/Funzione di ripartizione\|Funzione di ripartizione]] metto la variabile standardizzata Z<sub>n</sub>, questo non vuol dire altro che star calcolando la probabilità cumulata sinistra di Z<sub>n</sub> rispetto ad una soglia x.
Il teorema del limite centrale dice che questo risultato diventa una particolare funzione di ripartizione chiamata $\Phi$(x).
![Pasted image 20221112010355.png|500](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112010355.png)

> $\Phi$(x) è l'area sottesa alla curva normale standard nell'intervallo (-∞ ; x).
> *La funzione di ripartizione di una variabile casuale Z si distribuisce come una normale standardizzata.*

Riassumendo, il TLM dice che se 
![Pasted image 20221112003638.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112003638.png)

Osservazioni:
- La variabile Z si distribuisce come una normale di media 0 e varienza 1 in maniera approssimata, più aumento n più questa approssimazione si riduce.
- Il grande campione non è così grande come immaginiamo, secondo la letteratuta è sufficiente un campione di 30 elementi, alcuni dicono 50.
- La variabile S<sub>n</sub> di partenza si distribuisce anche essa come una normale con la sua media e la sua varianza.

## *Applicazione*
Se prendiamo una variabile X binomiale e creiamo la variabile somma S<sub>n</sub> con un numero ridotto di n notiamo che essa si distribuisce come una binomiale.
Ma aumentando di molto le n essa diventa continua e simmetrica.
![Pasted image 20221112005957.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112005957.png)