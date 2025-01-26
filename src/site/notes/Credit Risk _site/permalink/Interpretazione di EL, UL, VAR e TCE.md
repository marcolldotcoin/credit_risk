---
{"dg-publish": true, "permalink": "/credit-risk-site/Interpretazione-di-EL,-UL,-VAR-e-TCE/"}
---





Quando calcoliamo questi valori in un portafolgio di crediti abbiamo la seguente interpretazione.
![Pasted image 20230507173737.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230507173737.png)

FOGLIO EXCEL: ![[Variabile casuale Perdita.xlsx]]

Vediamo un eservizio per calcolare questi valori su un portafoglio di 6 esposizioni
![[Esercizio perdita attesa, inattesa, VAR e Tail condictional.mp4]]

Ed anche un esercizio su un portafoglio di 100 esposizioni, in questo caso generiamo la simulazione montecarlo utilizzando la funzione $inv.normale.N(casuale,media,varianza)$ per la normale e $inv.beta.N(casuale(),\alpha,\beta)$.
Per generare la variabile indicatore usiamo la funzione $se(casuale()<=p;1;0)$
Per calcolare il VaR usiamo la funzione $esc.percentile(matrice;confidenza)$.
Per calcolare la TCE usiamo la funzione $somma.se(matrice;">="&VaR)$ / $conta.se(matrice;">="&VaR)$
![[Simulazione montecarlo con formula inv.mp4]]


