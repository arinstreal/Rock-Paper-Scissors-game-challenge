(this["webpackJsonprock-paper-scrissors-game-challenge"]=this["webpackJsonprock-paper-scrissors-game-challenge"]||[]).push([[0],[,,,function(e,c,s){e.exports={rulesModal:"RulesModal_rulesModal__1CSfC",open:"RulesModal_open__30JEm",content:"RulesModal_content__2JzoZ",header:"RulesModal_header__4l5RZ",closeIcon:"RulesModal_closeIcon__1oJjR",mobile:"RulesModal_mobile__3zKTN"}},function(e,c,s){e.exports={resultsMode:"ResultsMode_resultsMode__24EMD",choiceWrapper:"ResultsMode_choiceWrapper__3kHLk",resultWrapper:"ResultsMode_resultWrapper__1wo_t",mobile:"ResultsMode_mobile__159wi"}},function(e,c,s){e.exports={gestureWrapper:"GestureWrapper_gestureWrapper__2gPBt",generateChoice:"GestureWrapper_generateChoice__2ee6K",scissors:"GestureWrapper_scissors__L4pod",paper:"GestureWrapper_paper__3NwOK",rock:"GestureWrapper_rock__AU10Q",lizard:"GestureWrapper_lizard__1aDFc",spock:"GestureWrapper_spock__3Jm0K"}},function(e,c,s){e.exports={selectionPanel:"SelectionPanel_selectionPanel__BiYo-",none:"SelectionPanel_none__3rTUW",triangle:"SelectionPanel_triangle__1mfON"}},,function(e,c,s){e.exports={scorePanel:"ScorePanel_scorePanel__1_9B9",score:"ScorePanel_score__10lzz"}},,,,,,,function(e,c,s){},function(e,c,s){},,function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),n=s(10),r=s.n(n),o=(s(15),s(2)),i=(s(16),s(8)),l=s.n(i),u=s.p+"static/media/logo.a4a2b39f.svg",j=s(0),d=function(e){var c=e.score;return Object(j.jsxs)("div",{className:l.a.scorePanel,children:[Object(j.jsx)("img",{src:u,alt:"logo"}),Object(j.jsxs)("div",{className:l.a.score,children:[Object(j.jsx)("div",{children:"Score"}),Object(j.jsx)("div",{children:c})]})]})},p=s(6),b=s.n(p),_=s.p+"static/media/bg-triangle.c0c30b56.svg",m=s(9),O=s(5),h=s.n(O),g=s.p+"static/media/icon-paper.8b57a6b1.svg",x=s.p+"static/media/icon-rock.476e90a9.svg",f=s.p+"static/media/icon-scissors.3b1a5d7e.svg",v="paper",N="scissors",k="rock",C="you win",M="you lose",P="draw",W=[v,N,k],y=function(e){var c=e.type,s=e.position,a=e.onClick,n=Object(t.useMemo)((function(){switch(c){case v:return{image:g,className:h.a.paper};case k:return{image:x,className:h.a.rock};case N:return{image:f,className:h.a.scissors};default:return{image:"",className:""}}}),[c]),r=function(){a&&c&&a&&a(c)};return Object(j.jsx)("div",Object(m.a)(Object(m.a)({className:"".concat(h.a.gestureWrapper," ").concat(c?"":h.a.generateChoice," ").concat(n.className),style:s},r&&{onClick:r}),{},{children:c&&Object(j.jsx)("img",{src:n.image,alt:c})}))},R=function(e){var c=e.setUserChoice,s=function(e){c(e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:b.a.triangle,src:_,alt:"bgTriangle"}),Object(j.jsx)(y,{onClick:s,type:"paper",position:{left:0,top:0}}),Object(j.jsx)(y,{onClick:s,type:"scissors",position:{top:0,right:0}}),Object(j.jsx)(y,{onClick:s,type:"rock",position:{bottom:0,left:"30%"}})]})},S=s(4),w=s.n(S),G=function(e){var c=e.userChoice,s=e.resetUserChoice,a=e.addUserPoint,n=Object(t.useState)(null),r=Object(o.a)(n,2),i=r[0],l=r[1],u=Object(t.useState)(null),d=Object(o.a)(u,2),p=d[0],b=d[1];Object(t.useEffect)((function(){c&&setTimeout((function(){var e=W[Math.floor(Math.random()*W.length)];l(e)}),500)}),[c]);Object(t.useEffect)((function(){i&&setTimeout((function(){c===i?b(P):c===v&&i===k||c===k&&i===N||c===N&&i===k?(b(C),a()):b(M)}),100)}),[i]);var _=function(){s(),l(null)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:w.a.resultsMode,children:[Object(j.jsxs)("div",{className:w.a.choiceWrapper,children:[Object(j.jsx)("span",{children:"You picked"}),Object(j.jsx)(y,{type:c})]}),Object(j.jsxs)("div",{className:w.a.resultWrapper,children:[Object(j.jsx)("div",{children:p}),Object(j.jsx)("button",{className:"secondary",onClick:_,children:"Play again"})]}),Object(j.jsxs)("div",{className:w.a.choiceWrapper,children:[Object(j.jsx)("span",{children:"The house picked"}),Object(j.jsx)(y,{type:i})]})]}),Object(j.jsxs)("div",{className:"".concat(w.a.resultWrapper," ").concat(w.a.mobile),children:[Object(j.jsx)("div",{children:p}),Object(j.jsx)("button",{className:"secondary",onClick:_,children:"Play again"})]})]})},T=function(e){var c=e.addPoint,s=(e.resetGame,Object(t.useState)(null)),a=Object(o.a)(s,2),n=a[0],r=a[1];return Object(j.jsxs)("div",{children:[n&&Object(j.jsx)(G,{userChoice:n,resetUserChoice:function(){r(null)},addUserPoint:c}),Object(j.jsx)("div",{className:"".concat(b.a.selectionPanel," ").concat(n?b.a.none:""),children:Object(j.jsx)(R,{setUserChoice:r})})]})},U=s(3),z=s.n(U),I=s.p+"static/media/icon-close.bde602ec.svg",J=s.p+"static/media/image-rules.258b753f.svg",B=function(e){var c=e.isOpen,s=e.toggleClose;return Object(j.jsx)("div",{className:"".concat(z.a.rulesModal," ").concat(c?z.a.open:""),children:Object(j.jsxs)("div",{className:z.a.content,children:[Object(j.jsxs)("div",{className:z.a.header,children:[Object(j.jsx)("span",{children:"Rules"}),Object(j.jsx)("img",{className:z.a.closeIcon,onClick:s,alt:"close",src:I})]}),Object(j.jsx)("img",{alt:"rules",src:J}),Object(j.jsx)("img",{className:"".concat(z.a.closeIcon," ").concat(z.a.mobile),onClick:s,alt:"close",src:I})]})})};var E=function(){var e=Object(t.useState)(!1),c=Object(o.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(0),r=Object(o.a)(n,2),i=r[0],l=r[1],u=function(){a((function(e){return!e}))};return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{score:i}),Object(j.jsx)(T,{addPoint:function(){return l((function(e){return e+1}))},resetGame:function(){return l(0)}}),Object(j.jsx)("div",{className:"rules-wrapper",children:Object(j.jsx)("button",{className:"gradient",onClick:u,children:"Rules"})}),s,Object(j.jsx)(B,{toggleClose:u,isOpen:s})]})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),F()}],[[18,1,2]]]);
//# sourceMappingURL=main.c1978484.chunk.js.map