---
{"dg-publish": true, "permalink": "/credit-risk-site/Variabile-casuale-perdita/"}
---





La **Variabile casuale perdita** è la sintesi di tre elementi:
- [[Credit Risk _site/Exposure at default (EAD)\|Exposure at default (EAD)]]: L'esposizione al momento dell'insolvenza, ovvero la somma di denaro che il debitore non ha ancora restituito alla banca nel momento in cui si verifica l'insolvenza.
- [[Credit Risk _site/Loss given default (LGD)\|Loss given default (LGD)]]: E' la quota che non recuperiamo del prestito concesso, quindi è $1-R$ ovvero quella parte non compresa nel tasso di recupero.
- *Variabile casuale indicatore (D)* che rappresenta la [[Credit Risk _site/Probabilità dell'evento insolvenza\|Probabilità dell'evento insolvenza]].

> La **variabile casuale perdita** e data da:
> ![Pasted image 20230429215613.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429215613.png)

La perdita associata a tutto il portafoglio di crediti della banca non sarà altro che la somma delle perdite.
![Pasted image 20230429220148.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230429220148.png)

All'interno di una singola esposizione tutte le variabili $AED$, $LGD$ e $D$ sono tra loro in qualche modo collegate, se aumenta la probabilità di default aumenta anche quella di recuperare meno soldi e quindi cresce la $LGD$.
Ma è anche vero che tutte le singole esposizioni $i$ dei vari clienti sono collegate tra loro.
Dobbiamo tener conto di questo facendo la nostra analisi statistica.
