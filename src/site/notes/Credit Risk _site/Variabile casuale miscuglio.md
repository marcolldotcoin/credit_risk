---
{"dg-publish":true,"permalink":"/credit-risk-site/variabile-casuale-miscuglio/"}
---

## *Definizione*
La **variabile casuale miscuglio** è ottenuta facendo la media di funzioni di ripartizione di diverse variabili casuali.
Non confondiamo il fare la media di variabili casuali con il fare la media delle funzioni di ripartizioni.
![Pasted image 20230319234936.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230319234936.png)
La cosa da tenere a mente è che fissato un valore per $x$ la probabilità $p(x)$ che esca quel valore è la media delle probabilità $p_j(x)$  che tutte le $k$ variabili casuali assumano quel valore, pesate ognuna per il suo $\pi$.
E' tutto molto più chiaro con un esempio

>[!info]- **ESEMPIO IMPORTANTE**
Immaginiamo di avere 3 variabili casuali, tutte e 3 Poisson con parametri
$\lambda_1 = 1$
$\lambda_2 = 4$
$\lambda_3 = 6$
>
Scegliamo ora i pesi da assegnare ad ogni variabile
$\pi_1 = 0.3$
$\pi_2 = 0.4$
$\pi_3 = 0.3$
>
Considerando che il supporto di una poisson va da 0 ad infinito ciò vuol dire che le $X$ possono assumere questi valori.
Il [[Credit Risk _site/Supporto della variabile casuale Miscuglio\|Supporto della variabile casuale Miscuglio]] è sempre l'==unione dei supporti==.
Bisogna quindi calcolare le probabilità che le varie poisson con i propri $\lambda$ assumano tutti i valori del supporto.
![Pasted image 20230320000351.png|400](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320000351.png)
>
Una volta fatto questo si sommano tutte quante le probabilità pesate ognuno con il proprio peso $$P(x_1)*\pi_1 + P(x_2)*\pi_2 + P(x_3)*\pi_3$$ ![Pasted image 20230320000421.png|400](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320000421.png)
E' possibile graficare il tutto
![Pasted image 20230320000709.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320000709.png)
>
Una caratteristica della variabile miscuglio è che essa può presentare vari picchi, a differenza delle singole poisson.
Cambiando i $\lambda$ e i pesi $\pi$ dell'esempio è possibile enfatizzare di più questa caratteristica
![Pasted image 20230320001007.png|250](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320001007.png)
Il Miscuglio tenderà ad assomigliare di più ad una delle 3 curve in base al peso $\pi$ che viene dato alla variabile.
Un grande peso alla prima poisson farà assomigliare il Miscuglio ad essa
![Pasted image 20230320001327.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320001327.png)

[File Excel Miscuglio di Poisson](https://github.com/marcolldotcoin/credit_risk/raw/d83a09e54c45dcc63df721a65973609428aa664d/src/site/uploads/Miscuglio%20di%20Poisson.xlsx)

<video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/6b500ac7d4dd31c793e05f7c712168bbab148ab8/src/site/uploads/video/Miscuglio%20di%20Poisson.mp4">
>   Your browser does not support the video tag.
> </video>

Useremo i Miscugli perché possono essere utilizzati per passare da una situazione di indipendenza tra due variabili $X$ e $Y$ ad una situazione con una certa forma di dipendenza.

## *Esempio su rischio di credito*
![Pasted image 20230320003944.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320003944.png)
Da questo esempio possiamo intuire che abbiamo 3 variabili casuali che rappresentano uno stato del mondo che si può verificare, tutte si distribuiscono come una poisson con il loro parametro $\lambda$.
Il peso $\pi$ corrisponde alla probabilità $p$ che si verifichi uno dei 3 stati del mondo diversi.
La variabile è quindi un Miscuglio, con probabilità
![Pasted image 20230320004233.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320004233.png)
Non bisogna farsi spaventare dalla formula. Il mostro dove compare $e$ non è altro che la funzione di probabilità della poisson, che su excel calcoliamo facilmente grazie alla funzione $distrib.poisson(x,\lambda)$
## *Miscuglio di stesse variabili casuali*
Notiamo che le 3 componenti del miscuglio appartengono alla stessa famiglia di variabili casuali, sono tutte e 3 delle poisson. 
Al variare dello scenario economico non cambia come si distribuisce la $X$ (che continua ad essere una poisson), cambia solo il parametro.
La congiuntura economica influisce solo e soltanto sul parametro.
Recessione: $X \sim Poisson(\lambda_r)$
Stagnazione: $X \sim Poisson(\lambda_s)$
Crescita: $X \sim Poisson(\lambda_c)$

Ciò significa che, essendo lo scenario economico casuale, anche il parametro che troveremo nella poisson sarà casuale.
E' possibile ==trasporre la casualità della congiuntura economica sul parametro== che diventa una variabile casuale lui stesso.
Quindi quando si fa un miscuglio tra variabili appartenenti alla stessa famiglia e le componenti del miscuglio cambiano solo per il valore di un parametro allora è possibile *guardare al parametro stesso come variabile casuale*.

> Molto comunemente i miscugli vengono costruiti in questo modo:
> Prendo una distribuzione di probabilità che dipende da un parametro (es. poisson, normale ecc) e immagino che il parametro sia una variabile casuale con la sua distribuzione, costruendo il miscuglio sulla base di questo.

Da ciò deriva una definizione alternativa di variabile casuale miscuglio
![Pasted image 20230320005700.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230320005700.png)
Immaginiamo di avere una poisson di parametro $\theta$.
Questo parametro è casuale, di conseguenza può assumere vari valori e ha una sua distribuzione di probabilità.
Questo parametro casuale nasce dalla variabile casuale $\Theta$, essa ha una sua funzione di probabilità $g(\theta)$ che mi dice con precisione quale sia la probabilità che esca il parametro $\theta$ che poi andrò ad inserire nella Poisson.
In base ai valori $\theta$ che può assumere la variabile casuale $\Theta$ il Miscuglio di poisson avrà come funzione di probabilità: 
==La probabilità che la Poisson di parametro $\theta$ assuma un certo valore moltiplicato per la probabilità che la variabile $\Theta$ assuma quel valore==.
In base alla tipologia della variabile $\Theta$ (discreta con supporto finito, discreta con supporto infinito o continua) possiamo trovare la probabilità del Miscuglio.
![Variabile casuale miscuglio 2023-03-20 01.47.28..png](/img/user/Credit%20Risk%20_site/allegati/Variabile%20casuale%20miscuglio%202023-03-20%2001.47.28..png)


> La **variabile casuale $\Theta$** rappresenta l'*andamento casuale del parametro* $\theta$.




