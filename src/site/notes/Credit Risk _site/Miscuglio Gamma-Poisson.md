---
{"dg-publish":true,"permalink":"/credit-risk-site/miscuglio-gamma-poisson/"}
---

I **Miscugli Gamma-Poisson** sono Miscugli nei quali abbiamo varie Poisson il qui parametro $\theta$ è dato da una variabile casuale $\Theta$ che si distribuisce come una Gamma ($\alpha \space,\space \beta$).
![Pasted image 20230325172332.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325172332.png)
> Il nome messo per secondo (Poisson) definisce come si distribuiscono le variabili che compongono il miscuglio.
> Il nome messo per primo (Gamma) rappresenta come si distribuisce il parametro che caratterizza le variabili del miscuglio.

La gamma ben si adatta a questo scopo perché ha un supporto positivo, come quello del $\lambda$ della Poisson.
Il [[Credit Risk _site/Supporto della variabile casuale Miscuglio\|supporto]] è dato sempre dall'unione dei supporti.

## *Funzione di probabilità*
![Pasted image 20250126200026.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200026.png)
## *Valore atteso e varianza*
Per quanto riguarda valore atteso e varianza sappiamo che per i miscugli di Poisson essi si ottengono dalla variabile $\Theta$.
![Pasted image 20230325173004.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325173004.png)
Ma siccome $\Theta$ si distribuisce come una [[Credit Risk _site/Variabile casuale Gamma#^afca4d\|gamma]] possiamo sostituire ad $E[\Theta]$ e $V[\Theta]$ i rispettivi valori di una Gamma, ottenendo
![Pasted image 20230325173244.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325173244.png)
Notiamo che il Miscuglio, rispetto alle singole componenti, presenta una varianza maggiore della media nonstante derivi da delle poisson (che hanno media e varianza identiche)
Il $\beta$ regola la sovra-dispersione che si ha facendo l'operazione di miscuglio, tanto più è grande $\beta$ tanto più la varianza del miscuglio aumenta.  
## *Funzione generatrice delle probabilità*
![Pasted image 20230325174750.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325174750.png)
**DIMOSTRAZIONE**
![Pasted image 20250126200109.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200109.png)

Quando abbiamo fatto il [[Credit Risk _site/Funzione generatrice delle probabilità di una combinazione linerare di poisson\|miscuglio di stesse variabili casuali Poisson]] abbiamo visto che era possibile trovare la probabilità di quella particolare funzione $Z$ generata da combinazione lineare di Poisson.
E' lo stesso anche per un miscuglio formato tutto da Gamma-Poisson?
Putroppo non è così, la variabile $Z$ non ha una distribuzione che può essere sintetizzata con una formula semplice come avveniva con il miscuglio di Poisson.
Tuttavia in futuro vedremo tecniche che ci permetteranno di trovare la probabilità di $Z$ a partire dalla funzione generatrice
![Pasted image 20230325175230.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325175230.png)