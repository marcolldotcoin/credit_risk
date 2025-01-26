---
{"dg-publish": true, "permalink": "/credit-risk-site/Modello-Credit-Risk+/"}
---





## *Definizione*
Modello proposto dalla Credit Suisse nel 1997.
L'obiettivo è determinare la *distribuzione di probabilità delle perdite* in un portafoglio contenente crediti.
Molto utilizzato quando il portafoglio è composto da un numero molto elevato di esposizioni con ammontari di perdita ridotti. Tipicamente applicato per prestiti al consumo o a piccole/medie imprese.

Si parte dalla [[Credit Risk _site/Variabile casuale perdita\|Variabile casuale perdita]] di ogni singola esposizione e aggrega tutte queste perdite sommandole.
Ricordiamo che tutte le 3 variabili che compongono la perdita possono essere dipendenti tra loro, così come anche le varie $m$ esposizioni, dandoci quindi $3$ x $m$ variabili casuali dipendenti.
![Pasted image 20230529160322.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529160322.png)
Si fanno quindi 2 semplificazioni:
- [[Credit Risk _site/Loss given default (LGD)\|Loss given default (LGD)]] LGD non sono variabili casuali ma costanti note alla banca.
- Per l'EAD si stima una griglia di valori e non tutti quanti quelli possibili. Ad esempio per un prestito di 100.000€ ci si muove a "scaglioni" di 500€. Si creano quindi classi di perdita, con il valore centrale di ogni classe che viene preso come riferimento di perdita per quel range. In questo modo trasformiamo l'EAD in una variabile discreta, questa procedura è chiamata **banding**.
![Pasted image 20230529161023.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529161023.png)
![Pasted image 20230529161342.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529161342.png)
Nella classe di perdita troviamo quanto potrebbe essere l'ammontare perso in caso di default, esso deriva da $EAD$ x $LGD$. Di conseguenza se facciamo questo prodotto diviso la perdita rappresentativa $L$ e arrotondiamo all'intero più vicino troviamo la fascia di appartenenza anche senza costruire la tabella.
Notiamo che nell'operazione di banding ==non è coinvolta la provabilità di default $D$==.

La perdita totale $P$ non è altro che la somma di tutte le perdite $P_j$.
La somma delle perdite è approssimabile dalla formula $ead*lgd*D$, il tutto per ogni singola esposizione $j$.
Il prodotto $ead*lgd$ lo chiamiamo **perdita rappresentativa** $jL$, essa dice alla banca quanto costa ogni fallimento in quella fascia d'interesse $j$.
Considerando $N_j$ il numero di default in quella fascia deduciamo quindi che $jLN$ rappresenta la perdita complessiva nella $j$-esima fascia.
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Modello_Credit_Risk+_2023-05-29_1631.28.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://excalidraw.com","elements":[{"id":"FuwPk0JnfFHPANBeul5cj","type":"image","x":-303.86832427978516,"y":-128.77472828227303,"width":749.8459625244141,"height":257.67265461283944,"angle":0,"strokeColor":"transparent","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":null,"seed":179223279,"version":71,"versionNonce":2028495617,"isDeleted":false,"boundElements":null,"updated":1685370693823,"link":null,"locked":false,"status":"pending","fileId":"cba7d7c91623fd23c44e34ae118a97dc06650239","scale":[1,1]}],"appState":{"theme":"light","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#000000","currentItemBackgroundColor":"transparent","currentItemFillStyle":"hachure","currentItemStrokeWidth":1,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":1,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":323.4872131347656,"scrollY":319.56756591796875,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":null,"colorPalette":{}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Modello_Credit_Risk+_2023-05-29_1631.28.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

Secondo l'approccio di Credit risk+ la perdita è calcolabile come
<div id="Modello_Credit_Risk+_2023-05-29_1635.14.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://excalidraw.com","elements":[{"id":"n-C2H047LWVvkn4Xd9WoT","type":"image","x":-225.96190643310547,"y":-140.13640594482422,"width":416,"height":225,"angle":0,"strokeColor":"transparent","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":null,"seed":847513999,"version":32,"versionNonce":2051697327,"isDeleted":false,"boundElements":null,"updated":1685370937186,"link":null,"locked":false,"status":"pending","fileId":"74dcfb57546329ec639f7218a746026faf39a389","scale":[1,1]},{"id":"85vRUm9ByKi7DgRCbF9s0","type":"arrow","x":-15.438926696777344,"y":-63.90666961669922,"width":40.896636962890625,"height":61.34490966796875,"angle":0,"strokeColor":"#000000","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":{"type":2},"seed":98312367,"version":119,"versionNonce":1978276801,"isDeleted":false,"boundElements":null,"updated":1685370937186,"link":null,"locked":false,"points":[[0,0],[28.481597900390625,29.94219970703125],[40.896636962890625,61.34490966796875]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":"arrow"},{"id":"sE3nxqDX","type":"text","x":41.524208068847656,"y":-56.109825134277344,"width":174,"height":25,"angle":0,"strokeColor":"#000000","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":null,"seed":267860079,"version":42,"versionNonce":2143903311,"isDeleted":false,"boundElements":null,"updated":1685370939761,"link":null,"locked":false,"text":"Perdita standard","rawText":"Perdita standard","fontSize":20,"fontFamily":1,"textAlign":"left","verticalAlign":"top","baseline":18,"containerId":null,"originalText":"Perdita standard"}],"appState":{"theme":"light","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#000000","currentItemBackgroundColor":"transparent","currentItemFillStyle":"hachure","currentItemStrokeWidth":1,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":1,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":323.4872131347656,"scrollY":319.56756591796875,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":null,"colorPalette":{}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Modello_Credit_Risk+_2023-05-29_1635.14.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
La perdita standard è la variabile della quale noi vogliamo sapere la distribuzione di probabilità.

> $N_j$ conta il numero di default in una singola fascia, dobbiamo capire come si distribuisce questa variabile.

Se consideriamo le varie **esposizioni indipendenti** tra loro assumiamo che $N_j$ si distribuisca come una poisson di parametro $\mu_j$.
![Pasted image 20230529165206.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529165206.png)
![Pasted image 20230529171441.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230529171441.png)

Vediamo un'esercizio su come dividere in classi e come utilizzare il metodo costruttivo per trovare la distribuzione di probabilità
![[Esercizio CR+ fasce e metodo costruttivo.mp4]]
E' possibile usare il metodo della FGL come visto in precedenza nel corso.
E' possibile usare anche il metodo Montecarlo
![[Esercizio CR+ Metodo montecarlo.mp4]]

La **condizione di dipendenza** può essere introdotta utilizzando la *tecnica dei miscugli*.
Assumiamo che il merito creditizio dei debitori dipenda dalla congiuntura economica, essa determina a sua volta la probabilità di default.
Se $\Theta$ è la congiuntura economica possiamo dire che la probabilità di default condizionata ad una precisa congiuntura $\theta$ si distribuisce come una Poisson di parametro $\lambda$ che a sua volta dipende da $\theta$.
Questo perché il parametro $p$ dell'indicatore è molto piccolo e possiamo ==approssimare l'indicatore ad una Poisson==.
![Pasted image 20230530131113.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530131113.png)
Assumiamo anche che le probabilità di ==default== siano ==indipendenti condizionatamente== alla congiuntura economica
![Pasted image 20230530133336.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530133336.png)

Otteniamo così per ogni esposizione vari parametri $\lambda_i$, uno per ogni scenario economico possibile.
Queste due assunzioni garantiscono che le variabili $N_j$ condizionate alla congiuntura economica, sono date dalla somma degli indicatori associati ad esposizioni che finiscono in una certa fascia. Condizionatamente alla congiuntura economica quegli indicatori sono indipendenti e dunque approssimabili, come visto prima, a delle Poisson indipendenti.
Si procede quindi a sommare i vari $\lambda$ per ogni fascia e per ogni congiuntura economica.
E quindi la variabile $N_j$ condizionata alla congiuntura economica è una somma di Poisson indipendenti, con $\mu_j$ ottenuto dalla somma dei $\lambda$ delle Poisson in quella specifica fascia.
![Pasted image 20230530134039.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530134039.png)
Essendo le $N_1$ somma di poisson indipendenti, così come anche $N_2$, $N_3$ ecc allora anche tutte queste $N_j$ saranno indipendenti condizionatamente alla congiuntura economica.
![Pasted image 20230530134026.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230530134026.png)

Con questa tecnica di condizionamento alla congiuntura economica siamo nella situazione di indipendenza. 
Se sappiamo la congiuntura possiamo calcolare la distribuzione di $N_j$ condizionato con uno dei metodi visti negli esempi di prima.
Ad esempio, se abbiamo 5 congiunture economiche possiamo tranquillamente calcolare la distribuzione di $Z$ in ognuno dei 5 casi.
Ottenute queste distribuzioni di Poisson le miscuglio usando come pesi le probabilità che si verifichino i vari scenari.
Questo miscuglio ci consente di togliere il condizionamento e rappresenterà la distribuzione non condizionata delle perdite di portafoglio.

> Con questo meccanismo del miscuglio *introduciamo dipendenza* tra le $N_j$ ma anche dipendenza all'interno di ogni fascia perché facendo il miscuglio delle singole Poisson togliendo il condizionamento alla congiuntura economica otterrò un miscuglio sovradisperso (ovvero una variabile con varianza più alta della media, al contrario della semplice Poisson dove varianza e media coincidono. La varianza aumenta quando faccio la somma perché introduciamo dipendenza tra gli elementi sommati, che fa sì che la varianza della somma aumenti.)

Una ==seconda tecnica== per introdurre dipendenza è quella di ==separare il problema==, introducendo dipendenza tra le Poisson all'interno di ogni singola fascia e poi introducendo la dipendenza tra le fasce.
All'interno della fascia la dipendenza si incorpora usando una differente variabile casuale, ovvero il [[Credit Risk _site/Miscuglio Gamma-Poisson\|Miscuglio Gamma-Poisson]], in questo modo la distribuzione delle $N_j$ avrà una sovradispersione che ci permette di cogliere l'elemento di dipendenza tra le esposizioni in ogni fascia.
Come secondo passo si prova a rappresentare la dipendenza tra le fasce.
La tecnica che meglio si adatta a questo problema è l'utilizzo delle copule, ovvero una funzione che prende dele distribuzioni marginali producendo un modello di distribuzione congiunto multivariato caratterizzato da una particolare struttura di dipendenza. Sulla base dei dati osservati la struttura di dipendenza può essere stimata producendo la distribuzione congiunta delle $N_j$.
Questa tecnica però non la vedremo nel corso.

![[Esercizio CR+ dipendenza.mp4]]