---
{"dg-publish":true,"permalink":"/credit-risk-site/teorema-del-limite-centrale/"}
---

## *Definizione*
Il **teorema del limite centrale** dice che se genero una *variabile* casuale che è *somma* di variabili casuali iid, *con n che tende all'infinito*, essa *si distribuisce come una normale*.
![Pasted image 20221112004255.png|500](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112004255.png)
So quindi come si distribuisce la variabile nonostante non sappia come si distribuiscono gli elementi del campione.
![Pasted image 20221112004325.png|300](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112004325.png)

>Il teorema torna utilissimo perché se ho una X **popolazione che non ho idea di come sia distribuita** basta creare un campione iid di **tanti elementi** per sapere che la loro **somma** (e quindi la variabile originaria X) **si distribuisce come una normale standard (0;1)**.

## *Un esempio*
Se prendiamo una variabile X binomiale e creiamo la variabile somma S<sub>n</sub> con un numero ridotto di n notiamo che essa si distribuisce come una binomiale.
Ma aumentando di molto le n essa diventa continua e simmetrica.
![Pasted image 20221112005957.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221112005957.png)