---
{"dg-publish":true,"permalink":"/credit-risk-site/variabile-casuale-somma/"}
---

La **variabile casuale somma**, come dice lo stesso nome, si ottiene sommando più variabili casuali.

La distribuzione della somma di v.c. può ottenersi in diversi modi:

- **Meodo analitico**: Ci si mette carta e penna e cerca di *dimostrare matematicamente* come si distribuisce la somma facendo dei passaggi algebrici. 
Abbiamo per esempio visto il caso in cui la somma di due Poisson è una Poisson, somma di due normali indipendenti è una normale. Nella maggior parte dei casi della vita reale non è possibile arrivare a conclusioni utili in questo modo. Inoltre questo metodo richiede l'indipendenza tra variabili

- **Metodo della funzione generatrice delle probabilità**: Come visto anche in precedenza quando abbiamo calcolato la distribuzione di una combinazione lineare di Poisson con questo approccio usiamo la FGP per generare la distribuzione di probabilità della somma. Tuttavia nella vita reale è di difficile utilizzo in quanto è utilizzabile solo su variabili con supporto composto da numeri naturali, o anche per difficoltà nel calcolo delle derivate della FGP.

- **Metodo approssimazioni asintotiche**: Abbiamo visto questo esempio studiando il [[Credit Risk _site/Teorema del limite centrale\|Teorema del limite centrale]], esso infatti coinvolge la somma di variabili casuali quando esse sono in numero molto elevato. Il limite di questo approccio è il fatto di dover avere molte variabili e alcuni criteri stringenti. Possiamo invece tralasciare l'indipendenza e l'essere identicamente distribuite.

- **Metodo costruttivo**: Applicabile nel caso di distribuzioni *discrete multivariate*. Il limite di tale approccio è il suo “costo computazionale”, abbiamo i supporti che diventano enormi se dobbiamo gestire un gran numero di variabili.

- **Metodo Montecarlo**:  Replichiamo l'evento di interesse attraverso una sua simulazione se ne conosciamo le caratteristiche.

## *Metodo costruttivo*
Vediamo il metodo passo passo
La somma di variabile casuale ha come **supporto potenziale** tutte le possibili *somme dei supporti* delle singole variabili casuali.
![Pasted image 20250126201755.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126201755.png)

Ovviamente se nella tabella iniziale due supporti hanno come probabilità 0 di avvenire contemporaneamente ciò fa sì che la loro somma non possa avvenire.
![Pasted image 20250126201820.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126201820.png)

Avendo i supporti potenziali possiamo organizzarli tutti in una **tabella univariata**, semplicemente al nuovi supporti *associamo la probabilità* che i due supporti si verifichino contemporaneamente.
![Pasted image 20250126201848.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126201848.png)

Se dovesse capitare, ad esempio, che venga fuori lo **stesso supporto** 5.8 per più volte (generato da varie somme di supporti diversi) in questo caso basterà scriverlo una sola volta e sommare le probabilità che esca quel valore.

[File Excel - Variabile casuale somma](https://github.com/marcolldotcoin/credit_risk/raw/fa973a4dc9bb96a138e7a62a9b82ede218cf94ac/src/site/uploads/Variabile%20casuale%20somma.xlsx)


<video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/2dec5d556320c7ffd9b1d7db1832d469de9d6c91/src/site/uploads/video/VC%20somma.mp4" type="video/mp4">
>   Your browser does not support the video tag.
> </video>

---
La somma di variabili casuali si può fare anche su un **miscuglio**.
Vogliamo sapere come è la variabile casuale somma sul miscuglio di due variabili, per ottenerla abbiamo due modi:
- Partire dalle singole variabili, fare il miscuglio e poi sommare le variabili
- Sommare le singole variabili e poi fare il miscuglio della somma

> *Le operazioni di miscuglio e somma sono interscambiabili tra loro*, il risultato è sempre lo stesso.
> ![Pasted image 20230611123024.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230611123024.png)

**Dimostrazione**
![Pasted image 20250126202224.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126202224.png)

Se avessimo a che fare con 3 variabili composte rispettivamente da supporti di dimensioni 4, 3 e 3 il numero totale delle componenti del supporto della varibile somma sarebbe $4$ x $3$ x $3$ = $36$. 

Vediamo un esempio più complesso con **3 variabili** e l'utilizzo delle tabelle pivot
![[Variabile Somma e tabella pivot.mp4]]

## Metodo montecarlo
E' un metodo che si basa sulla [[Credit Risk _site/Concezione frequentista della probabilità\|Concezione frequentista della probabilità]].
Da qui deriva l'approccio Montecarlo, solo che invece di replicare fisicamente l'evento che ci interessa lo facciamo attraverso una simulazione dell'evento di interesse se conosciamo le sue caratteristiche.

Excel ci torna utile per generare numeri casuali da una determinata distribuzione di probabilità.

<video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/1c66617694885ad587c3998ad657721ff0b9ed78/src/site/uploads/video/Generazione%20numeri%20casuali.mp4">
>   Your browser does not support the video tag.
> </video>

Vediamo un esempio con la **somma di gamma-poisson** fruttando una simulazione Montecarlo, noteremo che anche se questa variabile ha un supporto infinito in realtà le probabilità si concentrano all'inizio del supporto.

![[Somma di Gamma-poisson simulazione montecarlo.mp4]]
Da questo esempio notiamo anche che la probabilità della variabile somma cambia di molto se cambiamo la *struttura d'associazione* tra le variabili $X$ (ovvero se esse sono indipendenti, cograduate, contrograduate).

Il procedimento è quindi quello di:
1. Generare dei valori casuali
2. Farne la somma
3. Aggregarli con le tabelle pivot

![[Esempio montecarlo usando vc uniforme come generatrice.mp4]]
In questo esempio usiamo la VC uniforme per generare numeri casuali da una distribuzione qualsiasi, è il motore di tutto quando facciamo una simulazione Montecarlo.
Lo si fa con la funzione "=inv"

## *Somma di miscugli: Un esempio per il modello CreditRisk+*

Abbiamo 3 soggetti e la variabile casuale $X$ che rappresenta il caso di solvenza/insolvenza.
Di loro natura questa variabile è una [[Credit Risk _site/Variabile casuale indicatore (di Bernoulli)\|bernoulli]], che approssimiamo ad una Poisson come visto in precedenza nel corso.
Immaginiamo che il merito creditizio non sia costante ma può variare in base alla congiuntura economica, essa infatti influisce sulla probabilità di insolvenza dei soggetti.
Espansione: prob di default diminuisce
Recessione: prob di default aumenta
$\Theta$ è la variabile casuale che rappresenta la congiuntura economica.
Possiamo quindi immaginare che i parametri $\lambda$ siano legati tramite una funzione a $\Theta$.
La variabile $X$ possibilità di default è condizionata al fatto che lo scenario economico $\Theta$ risulti essere quel particolare scenario $\theta$.
Questa variabile $X$ si distribuisce come una Poisson di parametro  $\lambda$ che dipende da $\theta$.
![Pasted image 20230429122540.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429122540.png)
Assumiamo che le variabili $X$ siano indipendenti tra di loro condizionatamente alla congiuntura economica.
Ciò a volte è plausibile, se magari abbiamo debitori di diversa area geografica e diversa occupazione.

> La probabilità di vedere contemporaneamente i 3 default è dato dal prodotto delle 3 probabilità.
> ![Pasted image 20230429123007.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429123007.png)

Se invece vogliamo guardare la probabilità congiunta di default ma NON CONDIZIONATA alla congiuntura economica devo fare il miscuglio.
![Pasted image 20250126202503.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126202503.png)

Introducendo il miscuglio, ricordando le passate lezioni, l'indipendenza supposta si perde e abbiamo la dipendenza tra le variabili.

La banca più che alla distribuzione congiunta delle varie $X$ è interessata alla distribuzione della loro somma $S$, ovvero qil numero totale di default che si realizzano tra i 3 soggetti.