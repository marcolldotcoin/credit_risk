---
{"dg-publish":true,"permalink":"/credit-risk-site/analisi-discriminante/"}
---






L'**analisi discriminante** parte dall'analisi dei *dati di bilancio* dell'azienda.
Tramite una certa analisi li trasforma in un punteggio che rispecchia il merito del creditore.
Punteggio alto corrisponde ad alta affidabilità.

Il punteggio $Y$ che si attribuisce al debitore lo si costruisce come una combinazione lineare tra i valori $x$ estratti dal bilancio, ciascuno con un peso adeguato $a$ attrivuito ad ogni dato. Il risultato viene chiamati **Score**.
![Pasted image 20230525144829.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525144829.png)

Con gli score risolviamo due problemi:
- *Classificazione*: Lo score dà un certo risultato, la banca utilizza lo score proprio per decidere se concedere il finanziamento oppure no, ponendo uno score minimo da raggiungere per ottenere il finanziamento.
- *Valutazione della probabilità di default*: si trasforma il valore numerico dello score in un valore di probabilità di default.

I dati di bilancio usati sono
![Pasted image 20230525145603.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525145603.png)
In base al risultato di quello che viene definito **Z-Score** possiamo capire la capacità dell'azienda di restituire il prestito.
![Pasted image 20230525150159.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525150159.png)

Il vettore $a$ si determina in modo da che tra il gruppo di aziende insolventi e quelle solventi ci sia un'alta variabilità tra gruppi e una bassa variabilità nei gruppi.
Il problema di ottimo vincolato porta alla seguente soluzione.

> Il vettore dei coefficienti $a$ si calcola con questa formula
![Pasted image 20250126142536.png](/img/user/Pasted%20image%2020250126142536.png)

Determiniamo lo **score** usando il vettore $a$ e la matrice $X$.
 >![Pasted image 20230529113702.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529113702.png)
 

Abbiamo quindi gli score dei solventi e degli insolventi, con una zona grigia nella quale vi è una sovrapposizione degli score.
![Pasted image 20230525160455.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525160455.png)
Quando arriverà un nuovo cliente in base a dove si trova lo si classifica.
Lo si fa calcolando la media degli score insolventi e dei solventi, si trovano così due valori discriminanti.
Se il nuovo cliente è più vicino alla media degli insolventi rispetto a quella dei solventi non gli si concederà il prestito.
![Pasted image 20230525160638.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525160638.png)
Per capirlo in modo oggettivo sommo le due medie e le divido per due, trovando così esattamente il punto medio tra esse, questo sarà il *cut off*.
Se sono oltre quello concedo il prestito, se no non lo concedo.
![Pasted image 20230525161949.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230525161949.png)

Per verificare la bontà del modello possiamo affidarci al **tasso di corretta riclassificazione**, ovvero la *quota di aziende che vengono correttamente classificate*.
Avendo a disposizione il cut off andiamo a vedere se lo score affidato alle aziende nel nostro campione rispecchia ciò che è successo.
Ci saranno alcune aziende risultate solventi con uno score superiore al cut off, quindi il modello ci ha visto giusto.
Ci saranno altre aziende risultate solventi ma con uno score inferiore al cut off, quindi teoricamente non gli si sarebbe dovuto concedere il prestito secondo il modello, ma alla fine era bene concederlo perché risultate solventi.
Lo stesso discorso può essere fatto per i default.
Si vede quindi quante volte in percentuale il modello ci ha visto giusto, più è alto il TCR più il modello è affidabile
![Pasted image 20250126142803.png](/img/user/Pasted%20image%2020250126142803.png)


Di solito si considera un modello  *affidabile se supera l'80%* come TCR.
![[Esercizio score e TCR.mp4]]

## Dallo score alla probabilità di default
Esistono alcune tecniche per trasformare il punteggio di score nella probabilità di default.
1. **Trasformazione rozza**
Metodo usato in passato che dava risultati inverosimili. ==Sconsigliato==.
Si utilizza quella che viene chiamata funzione di sopravvivenza logistica, ovvero una funzione che ci dice qual'è la probabilità che accada qualcosa all'aumentare del valore di $x$.
![Pasted image 20250126143045.png](/img/user/Pasted%20image%2020250126143045.png)

2. **Interpolazione basata su informazione ausiliaria**
Conoscendo la probabilità d'insolvenza di alcuni soggetti si parte da ciò, ad esempio alcuni debitori hanno obbligazioni quotate a mercato.
Si sfrutta quindi lo score e la probabilità di default per fare una regressione e fare emergere il legame tra di essi.
Invece di usare una retta, che poco si adatta perché fornirebbe informazioni errate per certi valori di score estremi, utilizziamo come funzione interpolante la funzione di sopravvivenza logistica con parametri $a$ e $b$.
![Pasted image 20250126143111.png](/img/user/Pasted%20image%2020250126143111.png)
![Pasted image 20230601132825.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230601132825.png)
La funzione di sopravvivenza scelta ha la caratteristica di essere linearizzabile, quindi perfetta per un'interpolazione lineare.
![Pasted image 20230601132250.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230601132250.png)
![Pasted image 20230529122625.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529122625.png)

Queste probabilità di default possono anche sostituire gli score, con la banca che non concede il prestito quando la probabilità di default è troppo alta.
![[Stima probabilità metodo regressione.mp4]]

3. **Valutazione ed interpolazione a posteriori**
In questo caso la banca valuta l'analisi discriminante costruita in precedenza e in base a ciò determina la probabilità d'insolvenza, in sostanza  osserva cosa succede dopo 1 anno e in base a ciò calcola la probabilità.
Suddivide i valori di score a partire dal cut-off, osserva quanti prestiti ha finanziato e quanti di essi sono in default entro un anno. Grazie a ciò calcola la frequenza relativa e quindi la prob di default.
![Pasted image 20230529125044.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529125044.png)
![[Stima probabilità metodo regressione a posteriori.mp4]]