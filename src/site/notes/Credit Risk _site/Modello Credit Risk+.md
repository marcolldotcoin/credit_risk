---
{"dg-publish":true,"permalink":"/credit-risk-site/modello-credit-risk/"}
---

## *Definizione*
Modello proposto dalla Credit Suisse nel 1997.
L'obiettivo è determinare la *distribuzione di probabilità delle perdite* in un portafoglio contenente crediti.
Molto utilizzato quando il portafoglio è composto da un numero molto elevato di esposizioni con ammontari di perdita ridotti. Tipicamente applicato per prestiti al consumo o a piccole/medie imprese.

Si parte dalla [[Credit Risk _site/Variabile casuale perdita\|Variabile casuale perdita]] di ogni singola esposizione e aggrega tutte queste perdite sommandole.
Ricordiamo che tutte le 3 variabili che compongono la perdita possono essere dipendenti tra loro, così come anche le varie $m$ esposizioni, dandoci quindi $3$ x $m$ variabili casuali dipendenti.
![Pasted image 20230529160322.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529160322.png)
Si fanno quindi 2 semplificazioni:
- [[Credit Risk _site/Loss given default (LGD)\|Loss given default (LGD)]] LGD non sono variabili casuali ma costanti note alla banca.
- Per l'EAD si stima una griglia di valori e non tutti quanti quelli possibili. Ad esempio per un prestito di 100.000€ ci si muove a "scaglioni" di 500€. Si creano quindi classi di perdita, con il valore centrale di ogni classe che viene preso come riferimento di perdita per quel range. In questo modo trasformiamo l'EAD in una variabile discreta, questa procedura è chiamata **banding**.
![Pasted image 20230529161023.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529161023.png)
![Pasted image 20230529161342.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529161342.png)
Nella classe di perdita troviamo quanto potrebbe essere l'ammontare perso in caso di default, esso deriva da $EAD$ x $LGD$. Di conseguenza se facciamo questo prodotto diviso la perdita rappresentativa $L$ e arrotondiamo all'intero più vicino troviamo la fascia di appartenenza anche senza costruire la tabella.
Notiamo che nell'operazione di banding ==non è coinvolta la provabilità di default $D$==.

La perdita totale $P$ non è altro che la somma di tutte le perdite $P_j$.
La somma delle perdite è approssimabile dalla formula $ead*lgd*D$, il tutto per ogni singola esposizione $j$.
Il prodotto $ead*lgd$ lo chiamiamo **perdita rappresentativa** $jL$, essa dice alla banca quanto costa ogni fallimento in quella fascia d'interesse $j$.
Considerando $N_j$ il numero di default in quella fascia deduciamo quindi che $jLN$ rappresenta la perdita complessiva nella $j$-esima fascia.
![Pasted image 20250126200221.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200221.png)

Secondo l'approccio di Credit risk+ la perdita è calcolabile come
![Pasted image 20250126200236.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200236.png)

La perdita standard è la variabile della quale noi vogliamo sapere la distribuzione di probabilità.

> $N_j$ conta il numero di default in una singola fascia, dobbiamo capire come si distribuisce questa variabile.

Se consideriamo le varie **esposizioni indipendenti** tra loro assumiamo che $N_j$ si distribuisca come una poisson di parametro $\mu_j$.
![Pasted image 20230529165206.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529165206.png)
![Pasted image 20230529171441.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529171441.png)

Vediamo un'esercizio su come dividere in classi e come utilizzare il metodo costruttivo per trovare la distribuzione di probabilità
![[Esercizio CR+ fasce e metodo costruttivo.mp4]]
E' possibile usare il metodo della FGL come visto in precedenza nel corso.
E' possibile usare anche il metodo Montecarlo

<video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/e5a0325782f4d2328389fb04cfa47a5289bc0e09/src/site/uploads/video/Esercizio%20CR%2B%20Metodo%20montecarlo.mp4">
>   Your browser does not support the video tag.
> </video>

La **condizione di dipendenza** può essere introdotta utilizzando la *tecnica dei miscugli*.
Assumiamo che il merito creditizio dei debitori dipenda dalla congiuntura economica, essa determina a sua volta la probabilità di default.
Se $\Theta$ è la congiuntura economica possiamo dire che la probabilità di default condizionata ad una precisa congiuntura $\theta$ si distribuisce come una Poisson di parametro $\lambda$ che a sua volta dipende da $\theta$.
Questo perché il parametro $p$ dell'indicatore è molto piccolo e possiamo ==approssimare l'indicatore ad una Poisson==.
![Pasted image 20230530131113.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530131113.png)
Assumiamo anche che le probabilità di ==default== siano ==indipendenti condizionatamente== alla congiuntura economica
![Pasted image 20230530133336.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530133336.png)

Otteniamo così per ogni esposizione vari parametri $\lambda_i$, uno per ogni scenario economico possibile.
Queste due assunzioni garantiscono che le variabili $N_j$ condizionate alla congiuntura economica, sono date dalla somma degli indicatori associati ad esposizioni che finiscono in una certa fascia. Condizionatamente alla congiuntura economica quegli indicatori sono indipendenti e dunque approssimabili, come visto prima, a delle Poisson indipendenti.
Si procede quindi a sommare i vari $\lambda$ per ogni fascia e per ogni congiuntura economica.
E quindi la variabile $N_j$ condizionata alla congiuntura economica è una somma di Poisson indipendenti, con $\mu_j$ ottenuto dalla somma dei $\lambda$ delle Poisson in quella specifica fascia.
![Pasted image 20230530134039.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530134039.png)
Essendo le $N_1$ somma di poisson indipendenti, così come anche $N_2$, $N_3$ ecc allora anche tutte queste $N_j$ saranno indipendenti condizionatamente alla congiuntura economica.
![Pasted image 20230530134026.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530134026.png)

Con questa tecnica di condizionamento alla congiuntura economica siamo nella situazione di indipendenza. 
Se sappiamo la congiuntura possiamo calcolare la distribuzione di $N_j$ condizionato con uno dei metodi visti negli esempi di prima.
Ad esempio, se abbiamo 5 congiunture economiche possiamo tranquillamente calcolare la distribuzione di $Z$ in ognuno dei 5 casi.
Ottenute queste distribuzioni di Poisson le miscuglio usando come pesi le probabilità che si verifichino i vari scenari.
Questo miscuglio ci consente di togliere il condizionamento e rappresenterà la distribuzione non condizionata delle perdite di portafoglio.

> Con questo meccanismo del miscuglio *introduciamo dipendenza* tra le $N_j$ ma anche dipendenza all'interno di ogni fascia perché facendo il miscuglio delle singole Poisson togliendo il condizionamento alla congiuntura economica otterrò un miscuglio sovradisperso (ovvero una variabile con varianza più alta della media, al contrario della semplice Poisson dove varianza e media coincidono. La varianza aumenta quando faccio la somma perché introduciamo dipendenza tra gli elementi sommati, che fa sì che la varianza della somma aumenti.)

Una ==seconda tecnica== per introdurre dipendenza è quella di ==separare il problema==, introducendo dipendenza tra le Poisson all'interno di ogni singola fascia e poi introducendo la dipendenza tra le fasce.
All'interno della fascia la dipendenza si incorpora usando una differente variabile casuale, ovvero il [[Credit Risk _site/Miscuglio Gamma-Poisson\|Miscuglio Gamma-Poisson]], in questo modo la distribuzione delle $N_j$ avrà una sovradispersione che ci permette di cogliere l'elemento di dipendenza tra le esposizioni in ogni fascia.
Come secondo passo si prova a rappresentare la dipendenza tra le fasce.
La tecnica che meglio si adatta a questo problema è l'utilizzo delle copule, ovvero una funzione che prende dele distribuzioni marginali producendo un modello di distribuzione congiunto multivariato caratterizzato da una particolare struttura di dipendenza. Sulla base dei dati osservati la struttura di dipendenza può essere stimata producendo la distribuzione congiunta delle $N_j$.
Questa tecnica però non la vedremo nel corso.

![[Esercizio CR+ dipendenza.mp4]]