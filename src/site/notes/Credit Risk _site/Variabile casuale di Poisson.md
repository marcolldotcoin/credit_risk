---
{"dg-publish":true,"permalink":"/credit-risk-site/variabile-casuale-di-poisson/"}
---






Una variabile casuale si definisce **Poisson** ($puassòn$) se ha la seguente funzione di probabilità:
![Pasted image 20230302115546.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302115546.png)


> *CARTA D'IDENTITA'*
> Nome: Poisson
> 
> Simbolo: $X$ ~ Poiss($\lambda$)
> 
> Tipologia: Discreta
> 
> [[Credit Risk _site/supporto\|Supporto]]: Da 0 ad $n$ numero di volte che può verificarsi l'evento nel tempo $t$.
> 
> Parametri: 1, il numero di volte $\lambda$ con cui si verifica l'evento
> 
> Valore atteso: ![Pasted image 20230302120042.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302120042.png)
> 
> Varianza: ![Pasted image 20230302120056.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302120056.png)
> 
> Funzione generatrice dei momenti: ![Pasted image 20230302120112.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302120112.png)

La variabile casuale di Poisson è solitamente **utilizzata** al fine di contare il ==numero di “accadimenti” di un determinato fenomeno in un certo lasso di tempo==. 
Se il parametro λ è molto piccolo, il fenomeno del quale si vogliono contare gli accadimenti può considerarsi un *fenomeno raro*.

> **TEOREMA**
> Sommando variabili Poisson indipendenti tra di loro ciò che otteniamo è a sua volta una variabile che si distribuisce come una Poisson. La particolarità è che $\lambda$ sarà uguale alla somma di tutti i singoli $\lambda$.
> ![Pasted image 20230302120635.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302120635.png)

> **TEOREMA**
> Se abbiamo una [[Credit Risk _site/Variabile casuale indicatore (di Bernoulli)\|variabile indicatore]] con parametro $p$ molto piccolo è possibile approssimarla ad una poisson con parametro $-ln(1-p_i)$
> ![Pasted image 20230302121556.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302121556.png)
> Prendendo una serie di indicatori indipendenti tra loro possiamo approssimarli tutti alla poisson e sfruttare il teorema precedente per sommare questo poisson ed ottenere anche il $\lambda$ della somma.
> ![Pasted image 20230302121757.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302121757.png)

Questo secondo teorema permette di fare avere ad ogni debitore il suo parametro $\lambda$, superando quindi il [[Credit Risk _site/Variabile casuale binomiale#^830a72\|problema]] che si presentava utilizzando la binomiale per calcolare la probabilità di insolvenza per più debitori contemporaneamente.