---
{"dg-publish":true,"permalink":"/credit-risk-site/perdita-inattesa/"}
---

Possiamo vedere la **perdita inattesa (Unespected Loss)** come la *deviazione standard* della variabile casuale Perdita.
![Pasted image 20250126204029.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126204029.png)

Notiamo dunque che, come avviene sempre per i portafogli, non possiamo calcolare la varianza totale sommando le singole varianze ma dobbiamo tenere conto anche della *struttura d'associazione* tra le singole variabili, ovvero quanto covariano assieme.
Se assumo l'indipendenza tra le esposizioni l'elemento delle covarianze sparisce.

Un'altra definizione per la perdita inattesa è quella di utilizzare lo scostamento medio dalla perdita attesa
![Pasted image 20250126204043.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126204043.png)
Si può parlare di perdita inattesa quando essa è maggiore di quella attesa, se essa è minore non è un problema, tanto meglio.
Quindi è possibile creare altri due indicatori della perdita attesa che sono identici a prima ma semplicemente condizionati al fatto che la perdita inattesa sia più grande di quella attesa.
Non consideriamo quindi la coda delle perdite verso sinistra, ovvero quelle minori della perdita attesa.

![Pasted image 20230501163703.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230501163703.png)