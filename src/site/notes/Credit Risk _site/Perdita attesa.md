---
{"dg-publish":true,"permalink":"/credit-risk-site/perdita-attesa/"}
---

Quando abbiamo a che fare con una variabile casuale cerchiamo sempre le sue caratteristiche come il valore atteso e la varianza.
Anche nel caso della vc Perdita è così, vediamo quindi la **perdita attesa (Expected Loss)**.
Essa non è altro che il *valore atteso della perdita*
![Pasted image 20250126203931.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126203931.png)

Se assumiamo che le variabili siano indipendenti possiamo spezzare i valori attesi
![Pasted image 20230429221334.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429221334.png)

E se assumiamo che la banca sia così brava da riuscire a calcolare $EAD$ e $LGD$ possiamo riscrivere il tutto come

> La nostra **formula di partenza** del modello credit risk 
> ![Pasted image 20230429221455.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429221455.png)

La banca fino a questo punto non corre rischi.
Semplicemente sa quanto potrebbe essere la sua perdita attesa e si immunizza chiedendo una serie di tassi adeguati che andranno a rappresentare il guadagno atteso, superiore alla perdita attesa.
*Il rischio si concretizza quando le perdite che si realizzano sono INASPETTATE e diverse da quella attesa*