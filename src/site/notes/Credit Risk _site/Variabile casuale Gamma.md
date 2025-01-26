---
{"dg-publish":true,"permalink":"/credit-risk-site/variabile-casuale-gamma/"}
---

Una variabile casuale si definisce **gamma** se ha la seguente funzione di probabilità:
![Pasted image 20250126203603.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126203603.png)

Vediamo quindi che la variabile gamma dipende dalla funzione gamma $\Gamma$.
La funzione gamma $\Gamma$ la calcoleremo tramite software e non facendo l'integrale.

> *CARTA D'IDENTITA'*
> Nome: Gamma
> 
> Simbolo: $X$ ~ Gamma($\alpha,\beta$)
> 
> Tipologia: Continua
> 
> [[Credit Risk _site/Supporto\|Supporto]]: Da 0 ad $∞$ 
> 
> Parametri: 2, $\alpha>0$ parametro di forma, $\beta>0$ parametro di scala. Vedremo meglio dopo cosa rappresentano
> 
> Valore atteso: ![Pasted image 20230302131625.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302131625.png)
> 
> Varianza: ![Pasted image 20230302131642.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302131642.png)
> 
> Funzione generatrice dei momenti: ![Pasted image 20230302131656.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302131656.png)

La distribuzione Gamma è spesso **utilizzata** per modellare il tempo di attesa o il tempo di sopravvivenza di un evento. Ci tornerà utile per calcolare la ==probabilità di default== di un prestito