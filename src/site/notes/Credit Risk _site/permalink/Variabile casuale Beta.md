---
{"dg-publish": true, "permalink": "/credit-risk-site/Variabile-casuale-Beta/"}
---





Una variabile casuale si definisce **Beta** se ha la seguente funzione di probabilità:<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Variabile_casuale_Beta_2023-03-02_1324.20.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://excalidraw.com","elements":[{"id":"dU-0lVuNnZB6trHtCd7gn","type":"image","x":-330.43868942260747,"y":-152.02819061279297,"width":873.0192109680177,"height":336.09979248046875,"angle":0,"strokeColor":"transparent","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":null,"seed":2081643729,"version":41,"versionNonce":1839361425,"isDeleted":false,"boundElements":null,"updated":1677759884246,"link":null,"locked":false,"status":"pending","fileId":"b24d392c12b63602c7b4fe8e37834bbf9eb0b973","scale":[1,1]},{"id":"PDegBcfIrPaNg621tFQBJ","type":"rectangle","x":-323.25899505615234,"y":-189.88286590576172,"width":801.1355590820312,"height":105.89303588867188,"angle":0,"strokeColor":"#d9480f","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":{"type":3},"seed":1217869873,"version":83,"versionNonce":1033875583,"isDeleted":false,"boundElements":null,"updated":1677759871963,"link":null,"locked":false},{"id":"onH_m-K3mDfqc78H4uLmv","type":"rectangle","x":-328.3711166381836,"y":-75.95653533935547,"width":826.6959228515625,"height":127.8018798828125,"angle":0,"strokeColor":"#2b8a3e","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":{"type":3},"seed":879970463,"version":116,"versionNonce":1425869745,"isDeleted":false,"boundElements":null,"updated":1677759883283,"link":null,"locked":false},{"id":"gcIt4xTmY5CqCQ4g1ddYP","type":"rectangle","x":-327.64083099365234,"y":56.346412658691406,"width":828.1565551757812,"height":118.30804443359376,"angle":0,"strokeColor":"#c92a2a","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":{"type":3},"seed":103919615,"version":108,"versionNonce":171231935,"isDeleted":false,"boundElements":null,"updated":1677759897220,"link":null,"locked":false}],"appState":{"theme":"light","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#c92a2a","currentItemBackgroundColor":"transparent","currentItemFillStyle":"hachure","currentItemStrokeWidth":1,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":1,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":667.0918579101562,"scrollY":312.6297607421875,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":null,"colorPalette":{}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Variabile_casuale_Beta_2023-03-02_1324.20.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
Vediamo quindi che la variabile Beta dipende dalla funzione beta $B$.

> *CARTA D'IDENTITA'*
> Nome: Beta
> 
> Simbolo: $X$ ~ Beta($\alpha,\beta$)
> 
> Tipologia: Continua
> 
> [[Credit Risk _site/permalink/supporto\|Supporto]]: Tra 0 e 1
> 
> Parametri: 2, $\alpha$ successi in $n$ prove, $\beta$ insuccessi in $n$ prove
> 
> Valore atteso: ![Pasted image 20230302132539.png|200](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302132539.png)
> 
> Varianza: ![Pasted image 20230302132609.png|300](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230302132609.png)
> 
> Funzione generatrice dei momenti: ???

La variabile Beta risulta molto **utilizzata** per rappresentare la distribuzione di ==probabilità del [[Credit Risk _site/permalink/tasso di recupero\|tasso di recupero]]==.

La utilizziamo perché è una distribuzione con *notevole flessibilità*, differenti valori dei parametri $\alpha$ e $\beta$ producono funzioni di probabilità con caratteristiche e forme molto diverse:

- **Bell-Shaped**: Con entrambi i parametri entrambi *>1* ho una distribuzione a campana, più il parametro cresce e più la campana si appuntisce.
![Pasted image 20230311173846.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311173846.png)

Con *parametri sbilanciati* la campana smetterà di essere asimmetrica
![Pasted image 20230311174303.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174303.png)

Con parametri uguali ad 1 abbiamo il caso particolare della variabile *casuale uniforme*.
![Pasted image 20230311173944.png|300](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311173944.png)

**J-Shaped**: Quando un parametro è <1 e l'altro >1
![Pasted image 20230311174429.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174429.png)

**U-Shaped**: Quando entrambi i parametri sono <1. Se sono uguali abbiamo una U simmetrica, mentre se i parametri sono diversi la U si asimmetrizza.
E' la forma che avrà la nostra Beta quando tratteremo il tasso di recupero.
Considereremo una scala che va a 0 (=non si recupera nulla) a 1(=si recupera tutto) e vedremo le probabilità associate ad ogni situazione.
![Pasted image 20230311174645.png](/img/user/Credit%20Risk%20_site/allegati/Pasted%20image%2020230311174645.png)
