---
{"dg-publish": true, "permalink": "/credit-risk-site/Variabile-casuale-binomiale/"}
---





---
Una variabile casuale si definisce **binomiale** se ha la seguente funzione di probabilità:
![Pasted image 20230302113911.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020230302113911.png)


> *CARTA D'IDENTITA'*
> Nome: Binomiale
> 
> Simbolo: $X$ ~ $B$($n,p$)
> 
> Tipologia: Discreta
> 
> [[Credit Risk _site/supporto\|Supporto]]: Da 0 ad $n$ numero di prove che si effettuano
> 
> Parametri: 2, la probabilità $p$ e il numero di prove $n$
> 
> Valore atteso: ![Pasted image 20230302114011.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020230302114011.png)
> 
> Varianza: ![Pasted image 20230302114027.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020230302114027.png)
> 
> Funzione generatrice dei momenti: ![Pasted image 20230302114444.png|300](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020230302114444.png)

Questa variabile è **utilizzata** per contare il ==numero di volte in cui avviene un evento== ripetendo $n$ volte una stessa prova.
Le prove devono essere tra loro indipendenti, ripetendo l'esperimento sempre sotto le stesse condizioni.
Useremo questa variabile per capire quanti tra $N$ debitori con la stessa probabilità di insolvenza risulteranno insolventi.

---

> **TEOREMA**
> Se abbiamo una serie [[Credit Risk _site/Variabili casuali indipendenti identiamente distribuite (i.i.d.)\|i.i.d.]] la loro somma si distribuisce come una binomiale
> ![Pasted image 20230302114754.png|300](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020230302114754.png)

^d63a27

Questo teorema può tornare utile se pensiamo di avere a che fare con $n$ debitori ognuno con la sua probabilità $p$ di insolvenza.
Purtroppo però abbiamo dei *limiti applicativi nella realtà*, infatti l'ipotesi è che gli Indicatori siano i.i.d.
Ciò significa che devono essere:
{ #830a72}

- ==Indipendenti==: Nessun contagio tra i vari default.
- ==Identicamente distribuiti==: Tutti quanti devono avere la stessa probabilità di insolvenza.

---

![Pasted image 20221105195012.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221105195012.png)