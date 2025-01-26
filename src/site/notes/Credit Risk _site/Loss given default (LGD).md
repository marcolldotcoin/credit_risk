---
{"dg-publish":true,"permalink":"/credit-risk-site/loss-given-default-lgd/"}
---






## *Definizione*
E' la quota che non recuperiamo del prestito concesso, quindi è $1-R$ ovvero quella parte non compresa nel **tasso di recupero** $R$.
E' una variabile casuale perché è impossibile sapere con certezza la quantità di denaro che la banca riuscirà ad incassare dal processo di recupero.

Quando un cliente va vicino al default si può:
- **Negoziare**: Banca e debitore si accordano per rinegoziare le condizioni del debito per permettere al debitore di riuscire a pagare. Tra le soluzioni c'è quella di allungare la scadenza, aumentare il numero di pagamenti per renderli più piccoli, ridurre gli interessi, ridurre parte del debito.
- **Procedura concorsuale**, si svolgono in tribunale davanti al giudice. con avvocati ecc:
	- *Fallimento*: il debitore non riesce proprio a pagare il debito e viene dichiarato fallito, si procede quindi alla liquidazione del patrimonio del debitore. Vengono quindi espropriati i beni del fallito, venduti ed il ricavato va ai creditori.
	- *Concordato preventivo*: Il debitore e i creditori stabiliscono nuovi termini contrattuali con un curatore a fare da tramite. A differenza della negoziazione questo è un vero e proprio procedimento giuridico e quindi ha tempistiche più lunghe e costi più elevati.
	- *Amministrazione straordinaria*: Si avvia quando chi fallisce è una grande azienda che si pensa possa riprendersi se amministrata in modo corretto. E' una modalità per non distruggere il valore creato nel tempo dalla grande azienda. Per non "buttare all'aria quanto di buono fatto fino ad ora". I nuovi amministratori sono imposti dal giudice e hanno come obiettivo primario quello di soddisfare i creditori.
	- *Liquidazione coatta amministrativa*: Procedure attivata quando l'impresa che fallisce è di pubblica utilità oppure ha una rilevanza strategica nel mercato

Qualsiasi procedura si adotti c'è sempre un elemento di casualità sui tempi del processo, sul tasso di recupero, sulla reale posizione del debitore ecc.
Ogni banca deve quindi riuscire a tener conto della casualità, cercando di capire come stimare la distribuzione di probabilità di questa variabile.


## *Metodi di stima*
Il mercato delle obligazioni societarie può darci un'idea sulla LGD di un debitore.
In base a quanto vale l'obbligazione al momento del fallimento è possibile calcolare il tasso di recupero atteso $r$.
![Pasted image 20250126151144.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126151144.png)

Possiamo anche usare una formula un poco più complessa mettendo in mezzo la probabilità di insolvenza
![Pasted image 20250126151213.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126151213.png)

E' possibile anche usare *dati storici interni alla banca o forniti dagli organi di vigilanza*, in questo caso riusciamo a stimare non solo il tasso di recupero ma anche la sua distribuzione di probabilità.
Si osservano i dati di azienda fallite vedendo quanto si è recuperato dopo il processo di recupero, cercando quindi di capire probabilisticamente cosa può succedere.

Siccome il processo di recupero è lungo la banca affronta un costo-opportunità se riceve il suo denaro anni ed anni dopo il previsto, si deve quindi tener conto di questa situazione.
- $re$ = Importo ricevuto effettivamente dalla banca alla fine del procedimento
- $ca$ = Costi amministrativi che la banca ha sostenuto in tribunale per recuperare il credito
- $t$ = tempo impiegato nel recupero
- $ead$ = quanto il debitore doveva ancora alla banca quando si è verificata l'insolvenza

Il tasso di recupero quindi può essere trovato in due modi
![Pasted image 20250126151231.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126151231.png)

Dove $c$ sta per i vari valori capitalizzati $(1+i)^t$.
A volte vengono riconosciuti alla banca anche degli interessi aggiuntivi $int$ per il tempo aggiuntivo che ha dovuto attendere prima del recupero effettivo.
In alcuni casi quindi il tasso di recupero risulta essere maggiore del 100%.
Per evitare ciò Calabrese e Zenga propongono una nuova formula
![Pasted image 20230520181713.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520181713.png)

Si è soliti supporre che questa variabile sia una [[Credit Risk _site/Variabile casuale Beta\|Variabile casuale Beta]].
La stima dei suoi parametri $\alpha$ e $\beta$ può essere fatta con il metodo dei momenti.
![Pasted image 20230520182118.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520182118.png)
Se vediamo che $s^2_r < r(1-r)$ allora la beta può essere usata, al contrario non possiamo usarla perché il risultato della stima sarebbe incoerente con il nostro supporto $[0 ; 1]$.

La distribuzione di R può essere ben rappresentata da una beta con parametri α < 1, β < 1 e con α < β.
Siccome si è osservato nella realtà che i valori che escono maggiormente sono esattamente $0$ ed $1$ allora è più verosimile rappresentare la probabilità di $r$ come una vc mista tra beta e la vc indicatore
![Pasted image 20250126151309.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126151309.png)

Di conseguenza
![Pasted image 20230520184740.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520184740.png)
![Pasted image 20230520190823.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520190823.png)
![Pasted image 20230520190835.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520190835.png)
$\pi$ lo stiamiamo come il numero di dati che presentano come risultato o 0 o 1 diviso il numero di dati che presentano come risultato i valori compresi tra $0$ e $1$.
![Pasted image 20230520191318.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520191318.png)

Quindi il grafico della probabilità cumulata è![Pasted image 20230520191923.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230520191923.png)
