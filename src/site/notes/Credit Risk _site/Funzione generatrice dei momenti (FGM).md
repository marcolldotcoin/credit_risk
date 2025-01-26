---
{"dg-publish": true, "permalink": "/credit-risk-site/Funzione-generatrice-dei-momenti-(FGM)/"}
---





La **funzione generatrice dei momenti (FGM)** di una variabile casuale è un *valore medio di una particolare g(X)*, quindi un concetto del tutto analogo a quello che sta alla base dei [[Momenti di una variabile casuale\|Momenti di una variabile casuale]].
La g(X) in questo caso assume la forma
![Pasted image 20221104174416.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104174416.png)

Tutti gli altri momenti visti fino ad ora, una volta calcolati, danno un numero.
La *funzione generatrice* invece ha la particolarità di essere, e quindi dipendere, ==funzione di t==.
Per questo motivo non si può inserire nello stesso "scatolone" dei momenti già visti.
![Pasted image 20221104175007.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104175007.png)

La FGM di una variabile casuale esiste solo se è *finita in un intervallo di t ben preciso, intorno dello 0*.
![Pasted image 20221104175400.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104175400.png)
Questa funzione ha un intervallo simmetrico ed è quindi centrata nello 0.
Questa funzione deve essere finita in 0.

La **FGM è unica** e questo mi porta ad una considerazione importantissima.
Se avessi una variabile casuale X senza conoscere la sua forma ma vedessi la sua FGM ed essa risultasse uguale a quella di una variabile X che già conosco allora saprei già che la variabile X è fatta come la variabile che conosco già.

## *Perché questo nome altisonante?*
> La FGM può essere scritta come una somma di infiniti termini dove ogni addendo di questa somma è un numero moltiplicato per i momenti dall’origine di X.
>![Pasted image 20221104180344.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104180344.png)
Questo vuol dire che <mark style="background: #FF0000A6;">se esiste la FGM</mark> di una variabile casuale so che può essere riscritta nel modo di sopra e <mark style="background: #FF0000A6;">di conseguenza esistono TUTTI i momenti dall'origine</mark>.

Se si deriva in t la FGM e poi si fa tendere t a 0 si ottiene il momento primo dall'origine. 
![Pasted image 20221104180710.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104180710.png)
Più la si deriva più si va avanti con i momenti, ecco perché la FGM è chiamata funzione generatrice dei momenti:
<mark style="background: #EEFF0057;">La derivata prima rispetto a t restituisce il momento primo, la derivata seconda il momento secono e così via</mark>.
![Pasted image 20221104180759.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020221104180759.png)


