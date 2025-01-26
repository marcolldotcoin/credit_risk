---
{"dg-publish":true,"permalink":"/credit-risk-site/credit-tail-conditional-expectation/"}
---






Una critica spesso fatta al VAR è che in caso di distribuzioni con code che hanno determinati comportamenti (esempio coda verde) esso non riesce a discriminare la maggior rischiosità.
Per questo introduciamo un'altra misura di rischio
![Pasted image 20230501171313.png|300](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230501171313.png)

Il **Credit Tail Conditional Expectation** (chiamato anche *expected shortfall* o *conditional VAR*)  calcola la media condizionata delle perdite superiori al quantile di interesse.
Parte dal calcolo del VAR e delle perdite superiori al VAR ne calcola una media.
![Pasted image 20250126145653.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126145653.png)
![Pasted image 20250126145740.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126145740.png)

Anche se la formula sembra una schifezza nella pratica basta prendere le probabilità oltre il VAR e sommarle.
Si moltiplica poi il valore monetario per la probabilità che si verifichi e anche in questo caso si sommano quelli oltre il VAR.
Infine si divide il secondo risultato per il primo
![Pasted image 20250126145807.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126145807.png)

Ciò significa che: Mediamente la perdita realizzata condizionatamente al fatto che la stessa risulti ≥ al VAR all' 1% è pari a 3521 euro. 

