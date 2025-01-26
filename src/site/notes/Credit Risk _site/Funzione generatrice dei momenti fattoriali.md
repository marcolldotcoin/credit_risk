---
{"dg-publish":true,"permalink":"/credit-risk-site/funzione-generatrice-dei-momenti-fattoriali/"}
---






La **funzione generatrice dei momenti fattoriali (FGM)** è quella funzione dalla quale vengono generati i [[Credit Risk _site/Momenti fattoriali\|Momenti fattoriali]]. Tornerà utile nei *miscugli di poisson*.
![Pasted image 20250126194725.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126194725.png)

Per esistere c'è bisogno che questo valore atteso sia finito e sia nell'intorno dello zero.

Il momento fattoriale r-esimo si ottiene derivando $r$ volte la funzione generatrice e valutandola poi nel punto $t=0$. 
![Pasted image 20250126194747.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126194747.png)

I momenti fattoriali sono collegati ai momenti classici studiati in inference, dai primi possiamo agilmente calcolare i secondi.
![Pasted image 20230312181320.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312181320.png)

C'è una relazione molto utile tra la funzione generatrice dei momenti fattoriali e quella generatrice delle probabilità.
Se all'argomento di $G_x(t)$ sostituisco $(t+1)$ ottengo la funzione generatrice dei momenti fattoriali. E' dunque possibile conoscerla facilmente avendo già solo la PGF.
![Pasted image 20230312181615.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312181615.png)

