---
{"dg-publish":true,"permalink":"/credit-risk-site/indipendenza-tra-due-variabili-casuali/"}
---

Due **variabili** casuali si definiscono **indipendienti** quando il cambiamento di una non va ad incidere sull'altra.
Detto in maniera più formale,  

Per verificare che due variabili siano indipendenti basta controllare le **frequenze condizionate**, siamo davanti ad un'indipendenza se:
- Tutte le distribuzioni condizionate di $X|Y$ sono tra di loro identiche
![Pasted image 20230312185059.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312185059.png)
- Tutte le distribuzioni condizionate di $Y|X$ sono tra di loro identiche
![Pasted image 20230312185329.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312185329.png)
- Possiamo ottenere le probabilità congiunte moltiplicando quelle condizionali corrispondente
![Pasted image 20230312185424.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312185424.png)
![Pasted image 20250126194916.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126194916.png)

> [!info]- ESERCIZIO
> Date queste frequenze marginali calcola l'unica tabella composta dalle frequenze congiunte che rende $X$ e $Y$ indipendenti.
> ![Pasted image 20230319135350.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230319135350.png)
> [File Excel](https://github.com/marcolldotcoin/credit_risk/raw/7ce104d39c5d7b3c11e68f6a4e9af3658233cf95/src/site/uploads/Combinazione%20lineare%20poisson%2BStrutture%20di%20dipendenza.xlsx)
> 
> <video width="640" height="360" controls>
>   <source src="https://github.com/marcolldotcoin/credit_risk/raw/7ce104d39c5d7b3c11e68f6a4e9af3658233cf95/src/site/uploads/video/Esercizio%20variabili%20indipendenti.mp4" type="video/mp4">
>   Your browser does not support the video tag.
> </video>