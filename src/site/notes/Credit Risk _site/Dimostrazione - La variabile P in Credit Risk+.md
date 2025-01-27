---
{"dg-publish":true,"permalink":"/credit-risk-site/dimostrazione-la-variabile-p-in-credit-risk/"}
---

La perdita totale $P$ non è altro che la somma di tutte le perdite $P_j$.
La somma delle perdite è approssimabile dalla formula $ead*lgd*D$, il tutto per ogni singola esposizione $j$.
Il prodotto $ead*lgd$ lo chiamiamo perdita rappresentativa $jL$, essa dice alla banca quanto costa ogni fallimento in quella fascia d'interesse $j$.
Considerando $N_j$ il numero di default in quella fascia deduciamo quindi che $jLN$ rappresenta la perdita complessiva nella $j$-esima fascia.
![Pasted image 20250127144823.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250127144823.png)

Secondo l'approccio di Credit risk+ la perdita è calcolabile come
![Pasted image 20250127144843.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250127144843.png)
La perdita standard è la variabile della quale noi vogliamo sapere la distribuzione di probabilità.

> $N_j$ conta il numero di default in una singola fascia, dobbiamo capire come si distribuisce questa variabile.