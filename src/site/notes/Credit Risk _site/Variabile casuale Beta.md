---
{"dg-publish":true,"permalink":"/credit-risk-site/variabile-casuale-beta/"}
---

Una variabile casuale si definisce **Beta** se ha la seguente funzione di probabilità:
![Pasted image 20250126203815.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126203815.png)

Vediamo quindi che la variabile Beta dipende dalla funzione beta $B$.

> *CARTA D'IDENTITA'*
> Nome: Beta
> 
> Simbolo: $X$ ~ Beta($\alpha,\beta$)
> 
> Tipologia: Continua
> 
> [[Credit Risk _site/Supporto\|Supporto]]: Tra 0 e 1
> 
> Parametri: 2, $\alpha$ successi in $n$ prove, $\beta$ insuccessi in $n$ prove
> 
> Valore atteso: ![Pasted image 20230302132539.png|200](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302132539.png)
> 
> Varianza: ![Pasted image 20230302132609.png|300](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302132609.png)
> 
> Funzione generatrice dei momenti: ???

La variabile Beta risulta molto **utilizzata** per rappresentare la distribuzione di ==probabilità del [[Credit Risk _site/tasso di recupero\|tasso di recupero]]==.

La utilizziamo perché è una distribuzione con *notevole flessibilità*, differenti valori dei parametri $\alpha$ e $\beta$ producono funzioni di probabilità con caratteristiche e forme molto diverse:

- **Bell-Shaped**: Con entrambi i parametri entrambi *>1* ho una distribuzione a campana, più il parametro cresce e più la campana si appuntisce.
![Pasted image 20230311173846.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311173846.png)

Con *parametri sbilanciati* la campana smetterà di essere asimmetrica
![Pasted image 20230311174303.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174303.png)

Con parametri uguali ad 1 abbiamo il caso particolare della variabile *casuale uniforme*.
![Pasted image 20230311173944.png|300](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311173944.png)

**J-Shaped**: Quando un parametro è <1 e l'altro >1
![Pasted image 20230311174429.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174429.png)

**U-Shaped**: Quando entrambi i parametri sono <1. Se sono uguali abbiamo una U simmetrica, mentre se i parametri sono diversi la U si asimmetrizza.
E' la forma che avrà la nostra Beta quando tratteremo il tasso di recupero.
Considereremo una scala che va a 0 (=non si recupera nulla) a 1(=si recupera tutto) e vedremo le probabilità associate ad ogni situazione.
![Pasted image 20230311174645.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174645.png)
