---
{"dg-publish":true,"permalink":"/credit-risk-site/miscuglio-multivariato/"}
---

I **Miscugli multivariati** sono Miscugli generati da *variabili multivariate*, e non più univariate come nel caso della Poisson.

---

## *Notazione*
Siccome la nostra variabile $X$ è identificata non più da una sola variabile ma da più abbiamo a che fare con un *vettore*
![Pasted image 20230325175542.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325175542.png)

> [!info]- ESEMPIO
>- $X$ univariata
$X$ è la variabile casuale "altezza delle popolazione", essa quindi avrà al suo interno $X=altezza$
>- $X$ multivariata
$X$ è la variabile casuale "caratteristiche fisiche della popolazione", avrà quindi al suo interno varia componenti $X=altezza, peso, colore \space occhi, colore \space capelli$
In questo caso X è un vettore

Quando viene estratto il campione abbiamo la *realizzazione campionaria* delle variabili casuali.
![Pasted image 20230325180014.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325180014.png)

La $p(x)$ sarà la *probabilità* che la $X$ assuma un determinato valore pari a $x$.
Quindi la probabilità che la variabile multivariata assuma contemporaneamente tutti i valori contenuti nel vettore $x$.
![Pasted image 20230325180422.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325180422.png)

Lo stesso vale per la *funzione di probabilità cumulata* 
![Pasted image 20230325180507.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325180507.png)

## *Il miscuglio*
Abbiamo alcune variabili casuali multivariate $X_1$, $X_2$, $X_k$ ognuna con la sua funzione di probabilità $p_j(x)$ e probabilità cumulata $F_j(x)$.
Ogni variabile pesata per $\pi_1$, $\pi_2$, $\pi_k$ e sommata per farne il miscuglio $X$.
$X$ ha le funzioni di probabilità e probabilità cumulata ottenute come una media pesata delle funzioni di probabilità delle singole variabili.
![Pasted image 20230325181129.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325181129.png)

Quando partiamo da due situazioni di [[Credit Risk _site/Indipendenza tra due variabili casuali\|indipendenza]] e facciamo il miscuglio è importante notare che la nuova variabile $X$ generata non ha le componenti tra loro indipendenti.

Inoltre ricordiamoci sempre che ==una variabile miscuglio $X$ avrà come frequenze marginali il miscuglio delle marginali $X_1$, $X_2$, $X_k$==

[File excel Miscugli Bivariati](https://github.com/marcolldotcoin/credit_risk/blob/2fc8a2e113ab52e46b63c1488174760cbc6f73e1/src/site/uploads/Miscugli%20bivariati.xlsx)

**Esempio excel miscuglio con stesso supporto** 
<video width="640" height="360" controls><source src="https://github.com/marcolldotcoin/credit_risk/raw/fe02ed044e70c5aaa618102f691049c72b91711c/src/site/uploads/video/Esempio%20miscugio%20multivariato%201.mp4" type="video/mp4"></video>

Abbiamo visto che possiamo ottenere le marginali del miscuglio sia sommando le varie frequenze congiunte sia effettuando l'operazione di miscuglio sulle marginali iniziali stesse.
Il che è perfettamente coerente in quanto le marginali iniziali non sono altro che distribuzioni univariate, quindi è come se stessimo facendo un classico miscuglio univariato.

**Esempio excel miscuglio con supporti diversi**
Qui vediamo che il metodo è applicabile anche su supporti diversi

<video width="640" height="360" controls><source src="https://github.com/marcolldotcoin/credit_risk/raw/36da40065682cf01a732e11c45dc1fd1b96e5722/src/site/uploads/video/Esempio%20miscugio%20multivariato%202.mp4" type="video/mp4"></video>

**Esempio excel sull'indipendenza nel miscuglio**
Questo meccanismo di creare miscugli partendo da situazioni di indipendenza per introdurre dipendenza è la tecnica sulla quale si basa il modello Credit Risk+.
<iframe src="https://drive.google.com/file/d/13w0o-XPEqcVZgsFCCHJF1cpeIPRQcFIY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>

## *Miscuglio bivariato da stessa famiglia di distribuzioni*
Come per il [[Credit Risk _site/Variabile casuale miscuglio#*Miscuglio di stesse variabili casuali*\|miscuglio di Poisson]] anche in questo caso è possibile che le singole variabili $X_1$, $X_2$ ecc che compongono il miscuglio $X$ provengano da una stessa famiglia di distribuzioni.

> E' possibile immaginare il **parametro delle nostre variabili** come una *variabile casuale* avente la sua distribuzione.

![Pasted image 20230325185346.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230325185346.png)
Prendendo il caso di una variabile casuale $\Theta$ discreta:
Per calcolare la probabilità che il miscuglio assuma un certo valore basta moltiplicare la probabilità che $X_1$ con parametro $\theta_1$ assuma il valore $x$ per la probabilità che si verifichi $\Theta_1$.
Questo lavoro si fa per tutte quante le $X_1$, $X_2$, $X_k$  sommandone i risultati.
E' lo stesso principio visto prima in [[Credit Risk _site/Variabile casuale miscuglio#^6cc356\|questa immagine]]. 

**TEST MARKDOWN**

> [!info]- TEST MATHJAX
> $$E=mc^2$$
>
> Inline: $X^2 + Y^2 = Z^2$
>
> **Markdown in infobox:** *Italic*, **Bold**, `Code`
>
> - **Lista**
> - Con più elementi
