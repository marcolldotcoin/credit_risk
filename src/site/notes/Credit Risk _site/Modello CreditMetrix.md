---
{"dg-publish":true,"permalink":"/credit-risk-site/modello-credit-metrix/"}
---

## *Definizione*
Modello proposto dalla JP Morgan nel 1997.
L'obiettivo è determinare la *distribuzione del valore futuro* di un portafoglio di crediti.
Questo modello tiene conto anche del ==rischio di migrazione== e del ==rischio di recupero==. Parzialmente anche del rischio di spread.
Il modello lavora in due step:
- *Determina* per ciascun debito il suo *valore futuro*, solitamente ad un anno. In questa fase ci concentriamo quindi sul trovare la distribuzione di probabilità della variabile "valore futuro ad un anno" per ogni esposizione.
- *Aggrega le singole esposizioni* tenendo conto della dipendenza tra le varie esposizioni.
## *Valore ad un anno*
Si segue la logica della valutazione di mercato, per la precisione:
- Si reperiscono sul mercato i tassi d'interesse che corrispondono alle classi di rischio cui potrà, tra un anno, appartenere il debitore. Più alto è il rating più basso è il tasso richiesto.
- Il valore dell'esposizione tra un anno corrisponde al valore futuro che questa esposizione avrà sul mercato. Per calcolare questo valore futuro si attualizza il valore dell'esposizione usando come tasso d'interesse quello corrispondente a ciascuna classe di rating. Quindi ad esempio se l'esposizione varrà un tot se l'emittente sarà in classe AA e varrà di meno se l'emittente sarà in classe A. Si procede quindi a vedere il valore in ogni possibile scenario.
- Le classi di rischio sono rappresentate da una scala di rating, per ciascuno dei rating ci saranno tassi d'interesse diversi. Questi tassi ci aiuteranno a capire il valore al quale si potrà vendere il debito a mercato.
- Sfruttando una matrice di transizione si calcolerà la probabilità che il debitore finisca in una classe o nell'altra, capendo così quanto è probabile che ogni valore stimato dell'esposizione si verifichi. Ad esempio l'emittente scende da AA ad un rating A, con il valore del suo debito che passa da 70.000 a 60.000. Dovremmo associare una probabilità al fatto che il valore effettivamente possa diventare 60.000 e ciò lo faremo vedendo la probabilità di migrazione da un rating all'altro.
- L'evento default viene gestito separatamente tenendo conto della casualità del tasso di recupero. Quindi il valore del debito in caso di default viene calcolato separatamente in base alla probabilità che si verifichi un certo tasso di recupero.

Il *primo ingrediente* che ci serve è la scala di rating e la ==matrice di transizione==.
![Pasted image 20230530151903.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530151903.png)

Il *secondo ingrediente* sono i ==tassi pagati== associati a ciascun rating.
Questi tassi ci dicono che prendendo un debitore di una certa classe di rating quel è il tasso d'interesse annuo che la banca richiede per un prestito che ha scadenza tra 1 anno, 2 anni ecc
![Pasted image 20230530152128.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530152128.png)

Il *terzo ingrediente* è la distribuzione di probabilità del ==[[Credit Risk _site/tasso di recupero\|tasso di recupero]]== $R$.
Il modello Credit Matrics sceglie la [[Credit Risk _site/Variabile casuale Beta\|Variabile casuale Beta]] i cui parametri possono essere stimati usando il metodo dei momenti partendo da informazioni come quelle in tabella.
![Pasted image 20230530154531.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530154531.png)
![Pasted image 20230530152842.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530152842.png)

## *Un esempio*
![Pasted image 20250126200745.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200745.png)

Questo lavoro si deve fare per tutte le fasce di rating possibili, calcolandone valore futuro per ogni classe in cui potrebbe finire l'azienda e mettendolo assieme alla probabilità che si verifichi.
Otteniamo così la distribuzione di probabilità della variabile "Valore ad un anno del prestito"
![Pasted image 20230530154329.png|350](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530154329.png)
Il valore di default è calcolato utilizzando la media del tasso di recupero calcolata su varie esposizioni finite in default.

![[Esercizio Credit Metrics .mp4]]

Possiamo anche considerare un tasso di recupero non fisso ma con la sua distribuzione di probabilità.
![[Esercizio Credit Metrics tasso di recupero .mp4]]
## *I rating congiunti*
Una volta fatto questo procedimento per una esposizione va ripetuto per tutte quante per poi metterle assieme e definire la variabile "valore di portafoglio".
La somma di tutte quante le esposizioni ha certe caratteristiche, che cambiano se le esposizioni sono indipendenti oppure dipendenti.

Credit metrics approccia questo problema osservando le *azioni dei debitori* quotati in borsa, utilizzando il valore dell'azione come proxy del valore dell'azienda.
Se i rendimenti azionari sono alti associamo una situazione florida dell'azienda e di conseguenza un merito creditizio alto.
Dal comportamento congiunto dei rendimenti desumo il comportamento congiunto delle migrazioni nelle varie fasce di rating.

Sapendo la distribuzione di probabilità dei rendimenti essa si suddivide in tanti intervalli determinati in modo che ogniuno rappresenti la probabilità di transizione nelle varie fasce, presa dalla matrice di transizione.
![Pasted image 20250126200908.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200908.png)

![Pasted image 20230531171144.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531171144.png)
L'azienda va in default se osservo rendimenti inferiori a $Z_d$, va in fascia C se osservo rendimenti tra $Z_D$ e $Z_c$ e così via.
In base alla probabilità data falla matrice di transizione noi calcoliamo i valori delle $Z$.
Ad esempio per sapere dove si colloca $Z_d$ non dobbiamo fare altro che trovare quel valore che fa sì che l'integrale da -infinito a $Z_d$ dia come probabilità quella che l'azienda finisca nel rating $D$. Così anche per tutti gli altri valori di $Z$.
![Pasted image 20230531173744.png|400](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531173744.png)

Questa operazione si può fare anche analizzando i rendimenti congiunti.
Posizionando in un diagramma i vari valori delle $Z$ possiamo costruire una sorta di griglia che suddivide le coppie di rendimenti in relazione ad una coppia di rating futuro.
Se ad esempio si osserva una coppia di rendimenti (pallino rosso in alto a destra) sapremo che il rating congiunto delle esposizioni sarà superiore a $(Z_b;Z_b)$ in quanto siamo in quella parte della griglia, valori superiori a $Z_b$ corrispondono a classe di rating $(A;A)$.
Per il pallino centrale invece il rating corrisponderà a $(B;B)$.
Per il pallino in alto a sinistra avremo $(D;A)$.
![Pasted image 20230531171848.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531171848.png)

Conoscere la distribuzione congiunta dei rendimenti implica che al rettangolo giallo è possibile attribuire una probabilità congiunta semplicemente calcolandone il volume (dobbiamo immaginarlo come una funzione tridimensionale), sappiamo quindi la probabilità di avere congiuntamente un rating $(B;B)$.
![Pasted image 20230531172013.png|400](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531172013.png)
Dobbiamo immaginare di avere il rettangolo sul piano base e di voler calcolare tutta l'area al di sopra di esso, abbiamo così la probabilità congiunta.
![Pasted image 20230531173247.png|200](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531173247.png)
Matematicamente quest'area si calcola come un doppio integrale calcolato sul rettangolo giallo.
![Pasted image 20230531174845.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531174845.png)
Possiamo quindi costruire una tabella che riporta le probabilità congiunte.
In questo caso sono quelle congiunte tra un'azienda $BBB$ e una $A$, quindi rappresenta la probabilità che esse contemporaneamente finiscano in altre classi dopo 1 anno.
![Pasted image 20250126200941.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126200941.png)
Quindi se noi:
- Calcoliamo il valore di ogni singola esposizione ad 1 anno per ogni scenario possibile
- Sommiamo i valori ottenuti per ogni esposizione
Troviamo il valore di portafoglio, ciascun valore con una probabilità che si verifichi pari a quella riportata in matrice.
![Pasted image 20230531180051.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531180051.png)
![[Esercizio Credit Metrics indipendenza e supporto.mp4]]
Questo ragionamento utilizzando il *metodo costruttivo* nel bivariato può essere esteso anche nel multivariato:
1. Si prendono in considerazione rendimenti attesi, varianze e correlazioni di più aziende.
2. Dall'andamento congiunto dei rendimenti azionari si desume l'andamento congiunto dei rating dei vari debitori.
3. Dalle transizioni congiunte si ottiene la distribuzione di probabilità congiunta della somma delle varie esposizioni.

Questo metodo è camputazionalmente molto pesante in quanto avremmo a che fare con un supporto potenzale dato da $n_r^m$, ovvero dal numero di classi di rating elevato al numero di debitori, che di solito sono migliaia.

Di conseguenza i passaggi 2 e 3 sono sostituiti da una *simulazione Montecarlo.*
Il problema è che quando applichiamo il metodo Montecarlo noi stiamo facendo simulazioni indipendenti tra loro, quando dovrebbero essere dipendenti.
Ci viene in aiuto un teorema che dice che partendo da due variabili Normali indipendenti $Z_1$ e $Z_2$ possiamo ottenere una Normale bivariata con una certa media e, soprattutto, una certa matrice di covarianze (quindi una certo grado di correlazione tra le estrazioni casuali precedenti anche se indipendenti).
La matrice che usiamo per questa trasformazione è chiamata [[Credit Risk _site/Matrice decomposizione di Cholesky\|Matrice decomposizione di Cholesky]]
Partiremo quindi da simulazioni indipendenti di $Z$ per poi usare le opportune trasformazioni ed ottenere la normale bivariata.
![Pasted image 20230531183819.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230531183819.png)

Applicheremo come di consueto il metodo Montecarlo ma ponendo attenzione alla fase iniziale di generazione dei numeri casuali perché se li vogliamo dipendenti bisogna effettuare la trasformazione vista prima.
![[Esercizio Credit Metrics creazione normale bivariata dipendente.mp4]]

Una volta trasformati i valori si può assegnare ad ogni simulazione un rating
![[Esercizio Credit Metrics assegnazione rating.mp4]]