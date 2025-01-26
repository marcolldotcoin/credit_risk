---
{"dg-publish":true,"permalink":"/credit-risk-site/interpretazione-di-el-ul-var-e-tce/"}
---

Quando calcoliamo questi valori in un portafolgio di crediti abbiamo la seguente interpretazione.
![Pasted image 20230507173737.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230507173737.png)

[File Excel Variabile casuale perdita](https://github.com/marcolldotcoin/credit_risk/raw/4250601854db5c68c632cdff6667500957f3ca97/src/site/uploads/Variabile%20casuale%20Perdita.xlsx)

Vediamo un esercizio per calcolare questi valori su un portafoglio di 6 esposizioni

<iframe src="https://drive.google.com/file/d/1q1q9OwkxSkujashKLA54ou1Zlexs58Qx/preview" width="640" height="480" allow="autoplay"></iframe>

Ed anche un esercizio su un portafoglio di 100 esposizioni, in questo caso generiamo la simulazione montecarlo utilizzando la funzione $inv.normale.N(casuale,media,varianza)$ per la normale e $inv.beta.N(casuale(),\alpha,\beta)$.
Per generare la variabile indicatore usiamo la funzione $se(casuale()<=p;1;0)$
Per calcolare il VaR usiamo la funzione $esc.percentile(matrice;confidenza)$.
Per calcolare la TCE usiamo la funzione $somma.se(matrice;">="&VaR)$ / $conta.se(matrice;">="&VaR)$
![[Simulazione montecarlo con formula inv.mp4]]


