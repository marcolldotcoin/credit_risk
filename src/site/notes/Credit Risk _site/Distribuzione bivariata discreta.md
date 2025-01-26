---
{"dg-publish":true,"permalink":"/credit-risk-site/distribuzione-bivariata-discreta/"}
---






Si parla di **variabile casuale bivariata** quando c'è una coppia di variabili casuali da esaminare contemporaneamente, usiamo lo strumento della [[Credit Risk _site/Tabella bivariata\|Tabella bivariata]] per rappresentarle.

![Pasted image 20230312182208.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312182208.png)
I valori $p_i$$_j$ dentro la tabella di chiamano **frequenze congiunte**. 
Il valore $p_1$$_2$ corrisponde alla probabilità che contemporaneamente la variabile $X$ assuma il valore di $x_1$ e la variabile $Y$ assuma il valore di $y_2$.
Analogamente valore $p_2$$_2$ corrisponde alla probabilità che contemporaneamente la variabile $X$ assuma il valore di $x_2$ e la variabile $Y$ assuma il valore di $y_2$ ecc.

---

E' importante introdurre il concetto di **distribuzione marginale**.
$p_1.$ è la somma di tutte le probabilità sulla riga $x_1$, in altre parole non ci interessa che valore assuma la $Y$, va bene qualsiasi valore, a noi interessa solo la probabilità con cui si verifica $x_1$.
$p._1$ è la somma di tutte le probabilità sulla colonna $y_1$, in altre parole non ci interessa che valore assuma la $X$, va bene qualsiasi valore, a noi interessa solo la probabilità con cui si verifica $y_1$
>[!info]- ESERCIZIO
>Date queste frequenze marginali costruire le frequenze congiunte
>![Pasted image 20230319134922.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230319134922.png)
>Nel costruire le frequenze congiunte dobbiamo fare in modo che la somma di ogni riga e di ogni colonna mi dia la marginale corrispondente.
>Possiamo mettere numeri a caso, l'importante è rispettare il vincolo delle frequenze marginali
> ![[Esercizio frequenze congiunte.mp4]]


---

Se teniamo fisso una certà modalità, ad esempio $y_2$ e vedo come si distribuiscono le $x$ al suo interno ottengo la **distribuzione condizionata**.
In questo modo rispondo alla domanda "se $Y$ assume valore $y_2$ come si distribuiscono le probabilità che si verifichi $X$?"
> La tabella di frequenze condizionate **si costruiscono** facendo le congiunte diviso il totale del carattere fissato.
> ![Pasted image 20230312184652.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312184652.png)

![Pasted image 20230312184223.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312184223.png)
> [!info]- ESERCIZIO
> Data una tabella bivariata calcolare le frequenze di $X$ condizionato ad $Y$.
> ![Pasted image 20230319141336.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230319141336.png)
> Per farlo basta applicare la formula vista sopra, prendiamo i singoli elementi congiunti e li dividiamo per la marginale, in questo caso di $Y$ visto che è la variabile condizionante
> ![[Esercizio frequenze condizionate.mp4]]
> Notiamo che vengono tutte uguali perché come tabella iniziale abbiamo usato quella in cui le variabili sono indipendenti, dunque la $Y$ non condiziona la $X$.

---
La **probabilità cumulata** si calcolerà sommando tutte quante le probabilità che ci interessa cumulare fino al punto da noi desiderato.
Ad esempio, la probabilità cumulta fino a $p_2$$_2$ sarà data dalla somma delle probabilità nel rettangolo blu.
La probabilità cumulata fino a $p_i$$_j$ sarà la somma delle probabilità nel rettangolo verde.
Per $p_r$$_2$ il rettangolo giallo.
![Pasted image 20250126145940.png](/img/user/Credit%20Risk%20_site/allegati/allegati/Pasted%20image%2020250126145940.png)

Posso anche fare il passaggio inverso, passare dalla cumulata alla non cumulata.
Si utilizza la formula. 
![Pasted image 20230312191223.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312191223.png)
![Pasted image 20230312191152.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312191152.png)