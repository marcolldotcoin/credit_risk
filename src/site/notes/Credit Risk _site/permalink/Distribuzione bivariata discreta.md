---
{"dg-publish": true, "permalink": "/credit-risk-site/Distribuzione-bivariata-discreta/"}
---





Si parla di **variabile casuale bivariata** quando c'è una coppia di variabili casuali da esaminare contemporaneamente, usiamo lo strumento della [[Credit Risk _site/permalink/Tabella bivariata\|Tabella bivariata]] per rappresentarle.

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
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Distribuzione_bivariata_discreta_2023-03-12_1902.44.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://excalidraw.com","elements":[{"type":"image","version":31,"versionNonce":618127537,"isDeleted":false,"id":"bpG3qbvmoYXCInU5ja-Vu","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-247.5964285551612,"y":-177.86852264404297,"strokeColor":"transparent","backgroundColor":"transparent","width":627.2614758847365,"height":328.8460006594471,"seed":634118833,"groupIds":[],"roundness":null,"boundElements":[],"updated":1678644168069,"link":null,"locked":false,"status":"pending","fileId":"d3bb5fe68964c38d7e506955137cc9ee964f4ae7","scale":[1,1]},{"type":"rectangle","version":57,"versionNonce":2016303295,"isDeleted":false,"id":"TCRv8g6bp9KJGd5hgf0bg","fillStyle":"hachure","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-129.00008392333984,"y":-129.65001678466797,"strokeColor":"#364fc7","backgroundColor":"transparent","width":120.49896240234375,"height":73.75997924804688,"seed":1189111153,"groupIds":[],"roundness":{"type":3},"boundElements":[],"updated":1678644195187,"link":null,"locked":false},{"type":"rectangle","version":99,"versionNonce":1938919519,"isDeleted":false,"id":"ENOjnZie3cwJOj2d_aisC","fillStyle":"hachure","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-138.49398040771484,"y":-135.84090423583984,"strokeColor":"#2b8a3e","backgroundColor":"transparent","width":282.6248779296875,"height":169.4288330078125,"seed":91524945,"groupIds":[],"roundness":{"type":3},"boundElements":[],"updated":1678644189510,"link":null,"locked":false},{"type":"freedraw","version":3,"versionNonce":168850687,"isDeleted":false,"id":"uWtEs39Kapjc7tcaTw-WF","fillStyle":"hachure","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":111.2675552368164,"y":21.172889709472656,"strokeColor":"#2b8a3e","backgroundColor":"transparent","width":0.0001,"height":0.0001,"seed":797108447,"groupIds":[],"roundness":null,"boundElements":[],"updated":1678644203428,"link":null,"locked":false,"points":[[0,0],[0.0001,0.0001]],"lastCommittedPoint":null,"simulatePressure":true,"pressures":[]},{"type":"freedraw","version":3,"versionNonce":834775121,"isDeleted":false,"id":"8vWXGl8HN3hnH3slmhQaz","fillStyle":"hachure","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-41.364463806152344,"y":-68.6535873413086,"strokeColor":"#364fc7","backgroundColor":"transparent","width":0.0001,"height":0.0001,"seed":891068017,"groupIds":[],"roundness":null,"boundElements":[],"updated":1678644207843,"link":null,"locked":false,"points":[[0,0],[0.0001,0.0001]],"lastCommittedPoint":null,"simulatePressure":true,"pressures":[]},{"id":"XFpORYoOFKozUZFbzwd1c","type":"rectangle","x":-127.75425720214847,"y":-133.54193666843182,"width":128.2076687282986,"height":241.80937025282114,"angle":0,"strokeColor":"#ffff00","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"groupIds":[],"roundness":{"type":3},"seed":46694719,"version":117,"versionNonce":246926495,"isDeleted":false,"boundElements":null,"updated":1678644302580,"link":null,"locked":false},{"id":"UUqC-8xd7pgUWrvroGdCx","type":"freedraw","x":-39.7129092746311,"y":78.77590390774006,"width":2.028639051649293,"height":null,"angle":0,"strokeColor":"#ffff00","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"groupIds":[],"roundness":null,"seed":854593745,"version":36,"versionNonce":1882824447,"isDeleted":false,"boundElements":null,"updated":1678644336020,"link":null,"locked":false,"points":[[0,0],[2.028639051649293,0],[0,0]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[0.8114284939235858,0]}],"appState":{"theme":"light","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#ffff00","currentItemBackgroundColor":"transparent","currentItemFillStyle":"hachure","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":0,"currentItemOpacity":100,"currentItemFontFamily":1,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":304.5722783406576,"scrollY":187.1287227266458,"zoom":{"value":1.8},"currentItemRoundness":"round","gridSize":null,"colorPalette":{}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Distribuzione_bivariata_discreta_2023-03-12_1902.44.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

Posso anche fare il passaggio inverso, passare dalla cumulata alla non cumulata.
Si utilizza la formula. 
![Pasted image 20230312191223.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312191223.png)
![Pasted image 20230312191152.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230312191152.png)