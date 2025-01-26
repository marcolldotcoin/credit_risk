---
{"dg-publish":true,"permalink":"/credit-risk-site/miscuglio-di-poisson/"}
---

I **Miscugli di Poisson** sono Miscugli dove *tutte le componenti sono Poisson*.
Questo tipo di Miscuglio ha delle particolari proprietà.

## *Proprietà 1*
> Se la variabile casuale è un miscuglio di Poisson allora il suo **valore atteso è minore della sua varianza**
> ![Pasted image 20230320115722.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320115722.png)

Questa proprietà è interessante perché le singole Poisson hanno media e varianza uguali, nel miscuglio ciò non avviene.
Quando faccio un Miscuglio di Poisson ottengo una vc che rispetto alle singole componenti presenta una *sovra-dispersione*, proprio perché la media è più piccola della varianza.

**DIMOSTRAZIONE**
![Pasted image 20250126195907.png](/img/user/Pasted%20image%2020250126195907.png)

Come notiamo il valore atteso di una generica componente del miscuglio $X_j$ condizionata la fatto che il parametro sia $\theta$ è uguale al parametro stesso $\theta$.
Questo è logico perché $X_j$ è una Poisson, il suo valore atteso è quindi pari al suo parametro $\lambda$ che in questo caso abbiamo semplicemente chiamato $\theta$. 

## *Proprietà 2*
> I **momenti** di una variabile casuale miscuglio di Poisson sono **derivabili dai momenti della variabile casuale $\Theta$** (ovvero quella che rappresenta l'andamento casuale del parametro $\theta$ delle singole Poisson).

Conoscendo i momenti di $\Theta$ conosco i momenti del miscuglio di Poisson.
In altre parole il valore atteso del miscuglio è uguale al valore atteso della variabile $\Theta$.
La varianza del miscuglio è data dalla somma del valore atteso di $\Theta$ e la varianza di $\Theta$. 
![Pasted image 20230325172859.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325172859.png)

E' una sorta di ==effetto a catena==, ad esempio.
Se $\Theta$ si distribuisce come una normale di media $2$ il suo valore atteso sarà appunto $2$.
Questo valore atteso diventa quindi il parametro $\theta$ che inseriremo nella Poisson.
Ma siccome in una Poisson il suo valore atteso è uguale al parametro allora il valore atteso della Poisson sarà $2$, uguale al valore atteso di $\Theta$.

**DIMOSTRAZIONE**
![Pasted image 20230601170210.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230601170210.png)
