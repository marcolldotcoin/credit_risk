---
{"dg-publish":true,"permalink":"/credit-risk-site/dimostrazione-fgp-e-le-sue-proprieta-corollario/"}
---

La **funzione generatrice delle probabilità** (PGF) è una funzione matematica utilizzata in teoria delle probabilità per derivare la distribuzione di probabilità di una variabile aleatoria *discreta*.
Esiste sempre ma solo per variabili che hanno un supporto fatto da *numeri interi positivi*.
> La PGF è il valore atteso della trasformazione $t^x$. 
> ![Pasted image 20250126150423.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150423.png)

Se prendo la funzione generatrice delle probabilità, la derivo $r$ volte e la valuto in $t=0$ dividendo per $r!$ ottengo la probabilità che $G=r$ 
![Pasted image 20230311180124.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311180124.png)

## *Proprietà*
> ![Pasted image 20230610130146.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230610130146.png)
> In altre parole se $Y$ è una variabile casuale ottenuta dalla moltiplicazione $aX$ allora la PGF sarà 
>![Pasted image 20230311182228.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311182228.png) 

**DIMOSTRAZIONE**
![Pasted image 20250126150446.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150446.png)
Il risultato è quindi che se ho una v.c discreta intera che si moltiplica per un numero naturale questo non influenza le probabilità ma varia solo il supporto. 

---
>![Pasted image 20230610130525.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230610130525.png)
> In altre parole se sommiamo due variabili casuali indipendenti $X$ e $Y$ la PGF della variabile simma $Z$ è il prodotto delle PGF delle variabili $X$ e $Y$.
> ![Pasted image 20230311183258.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311183258.png)

**DIMOSTRAZIONE**
![Pasted image 20250126150506.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126150506.png)

---
Questi due teoremi messi assieme generano il corollario che dice che
![Pasted image 20230610131147.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230610131147.png)
> Se ho tante variabili casuali $X_1...X_n$ e dei numeri naturali $a_1...a_n$ allora posso costruire una variabile $Z$ tale che
> ![Pasted image 20230311184949.png|100](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311184949.png)
> La sua PGF sarà
> ![Pasted image 20230311185011.png|150](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311185011.png)

