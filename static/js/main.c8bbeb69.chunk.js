(this["webpackJsonpplayer-material-without-next"]=this["webpackJsonpplayer-material-without-next"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(15),o=a.n(i),r=(a(91),a(5)),l=a(76),c=a(148),s=a(164),u=a(120),d=a(163),b=a(167),m=a(165),j=a(168),p=a(7),h=a(154),g=a(151),x=a(152),f=a(153),O=a(150),v=a(55),y=a(53),A=a(2),k=Object(l.a)();k=Object(j.a)(k);var C=Object(c.a)((function(e){var t,a,n;return{root:(a={margin:"auto",marginTop:"20px",maxWidth:600,boxShadow:"none",position:"relative",backgroundColor:"transparent",overflow:"initial",zIndex:"2"},Object(r.a)(a,e.breakpoints.up("md"),{marginTop:0}),Object(r.a)(a,"&::before",(t={content:'""',maxWidth:"530px",maxHeight:"530px",width:"100%",backgroundColor:"#fff",position:"absolute",top:"-4%",left:"-5%",zIndex:"0",height:"70vw"},Object(r.a)(t,e.breakpoints.up("sm"),{height:"55vw"}),Object(r.a)(t,e.breakpoints.up("md"),{height:"45vw"}),t)),a),content:{padding:"0",zIndex:"2",backgroundColor:"#F5F5F5"},media:(n={position:"relative",maxHeight:"540px",height:"70vw",zIndex:"2"},Object(r.a)(n,e.breakpoints.up("sm"),{height:"55vw"}),Object(r.a)(n,e.breakpoints.up("md"),{height:"45vw"}),n),followInfo:Object(r.a)({margin:"auto",marginBottom:"20px",textTransform:"uppercase",textAlign:"center"},e.breakpoints.up("md"),{margin:"0",marginRight:"auto",marginBottom:"0",textAlign:"left"}),button:Object(r.a)({margin:"5px auto",padding:"5px 40px",borderRadius:"22px",fontSize:"16px",height:" min-content"},e.breakpoints.up("md"),{margin:"0",marginLeft:"auto"}),roy:{margin:20}}})),w=Object(p.a)((function(e){return{root:{color:e.palette.getContrastText("#fff"),backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}}}}))(O.a),S=Object(p.a)((function(e){return{root:{color:e.palette.getContrastText("#000"),backgroundColor:y.a[800],"&:hover":{backgroundColor:y.a[700]}}}}))(O.a);function N(){var e=C();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(g.a,{className:e.root,children:Object(A.jsx)(x.a,{className:e.content,children:Object(A.jsx)(f.a,{className:e.media,image:"/react-player/images/richard-jaimes-jI5lCCGprgM-unsplash.jpg",title:"Album Image",variant:"square"})})}),Object(A.jsxs)(m.a,{sx:Object(r.a)({width:"100%"},k.breakpoints.up("md"),{width:"80%"}),children:[Object(A.jsx)(h.a,{theme:k,children:Object(A.jsx)(v.a,{variant:"h2",component:"div",align:"left",children:Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",borderBottom:4,lineHeight:"normal",letterSpacing:2,m:0,children:"Richard Green"})})}),Object(A.jsxs)(m.a,{sx:Object(r.a)({display:"flex",flexDirection:"column",alignItems:"end",marginTop:"15px"},k.breakpoints.up("md"),{flexDirection:"initial",justifyContent:"space-between"}),children:[Object(A.jsx)(h.a,{theme:k,children:Object(A.jsxs)(v.a,{gutterBottom:!0,component:"div",align:"left",className:e.followInfo,children:[Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",fontSize:"h5.fontSize",lineHeight:"normal",children:"followers"}),Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",fontSize:"h3.fontSize",lineHeight:"normal",children:"5,790"})]})}),Object(A.jsx)(w,{className:e.button,size:"medium",variant:"outlined",children:"Follow"}),Object(A.jsx)(S,{className:e.button,size:"medium",color:"primary",variant:"contained",children:"play"})]})]})]})}var T=a(13),I=a(12);function W(e){var t=[],a=e;return{get:function(){return a},set:function(e){a!==e&&(a=e,t.forEach((function(e){return e(a)})))},subscribe:function(e){return t.push(e),function(){return function(e){t=t.filter((function(t){return t!==e}))}(e)}}}}var z=a(54),B=a.n(z),F=[{AlbumName:"URL Melt",AlbumAuthor:"Unicorn Heads",AlbumCover:"/react-player/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg",AlbumAudio:"/react-player/audio/URL Melt - Unicorn Heads.mp3",AlbumTime:"9:55"},{AlbumName:"Night Run Away",AlbumAuthor:"An Jone",AlbumCover:"/react-player/images/david-clode-xNSCi_K179c-unsplash.jpg",AlbumAudio:"/react-player/audio/Night Run Away - An Jone.mp3",AlbumTime:"3:00"},{AlbumName:"Six Seasons",AlbumAuthor:"Unicorn Heads",AlbumCover:"/react-player/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",AlbumAudio:"/react-player/audio/Six Seasons - Unicorn Heads.mp3",AlbumTime:"7:50"},{AlbumName:"Meet & Fun!",AlbumAuthor:"Ofshane",AlbumCover:"/react-player/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",AlbumAudio:"/react-player/audio/Meet & Fun! - Ofshane.mp3",AlbumTime:"2:08"},{AlbumName:"Sunny Travel",AlbumAuthor:"Nico Staf",AlbumCover:"/react-player/images/piron-guillaume-NM77255WWVA-unsplash.jpg",AlbumAudio:"/react-player/audio/Sunny Travel - Nico Staf.mp3",AlbumTime:"2:28"}],R=W(F.map((function(e){return{url:e.AlbumAudio,playing:!1,followPlay:!1,currentTime:0}}))),E=W(0),H=W(),L=F.map((function(e){return{url:e.AlbumAudio,audio:new Audio(e.AlbumAudio)}}));function M(e){var t=Object(n.useState)(R.get()),a=Object(T.a)(t,2),i=a[0],o=a[1],r=Object(n.useState)(30),l=Object(T.a)(r,2),c=l[0],s=l[1],u=Object(n.useState)(E.get()),d=Object(T.a)(u,2),b=d[0],m=d[1],j=Object(n.useState)(H.get()),p=Object(T.a)(j,2),h=p[0],g=p[1];Object(n.useEffect)((function(){return R.subscribe(o),E.subscribe(m),H.subscribe(g)}),[]),Object(n.useMemo)((function(){null===L||void 0===L||L.forEach((function(e,t){i[t].playing?e.audio.play():(!i[t].followPlay&&(e.audio.currentTime=0),e.audio.pause())}))}),[i]),Object(n.useMemo)((function(){null===L||void 0===L||L.forEach((function(e){e.audio.volume=c/100}))}),[c]),Object(n.useEffect)((function(){return L.forEach((function(e,t){e.audio.addEventListener("ended",(function(){var e=B()(i,{i:{playing:{$splice:!1}}});R.set(Object(I.a)(e))}))})),function(){L.forEach((function(e,t){e.audio.removeEventListener("ended",(function(){var e=B()(i,{i:{playing:{$splice:!1}}});R.set(Object(I.a)(e))}))}))}}),[]);function x(e){return setInterval((function(){var t=e.audio.duration,a=e.audio.currentTime,n=Math.ceil(a/t*100);E.set(n)}),1e3)}return[i,function(e,t){var a=Object(I.a)(i),n=i.findIndex((function(e){return!0===e.playing}));h&&clearInterval(h),-1!==n&&n!==e?(a[n].playing=!1,a[n].followPlay=!1,a[e].playing=!0,a[e].followPlay=!1,H.set(x(L[e])),E.set(0)):-1!==n?(a[e].playing=!1,t&&(a[e].followPlay=!0,a[e].duration=L[e].audio.duration,a[e].currentTime=L[e].audio.currentTime)):(a[e].playing=!0,H.set(x(L[e])));var o=B()(i,{$set:a});R.set(Object(I.a)(o))},c,s,function(e){L.forEach((function(t,a){if(i[a].playing){var n=e/100*t.audio.duration;t.audio.currentTime=n}}))},b]}var P=a(155),U=a(156),D=a(159),V=a(157),Y=a(158),K=a(169),_=a(52),J=a.n(_),q=a(51),G=a.n(q),Q=a(160),$=Object(l.a)(),Z=Object(c.a)({root:{width:"100%"},inlineItem:{padding:"2px 0"},avatar:Object(r.a)({marginLeft:"12px",marginRight:"15px"},$.breakpoints.up("md"),{marginLeft:"25px",marginRight:"30px"}),text:{width:"250px",marginRight:"30px"},time:Object(r.a)({display:"none"},$.breakpoints.up("sm"),{display:"block"})});function X(){var e=Z(),t=M(),a=Object(T.a)(t,2),n=a[0],i=a[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)(v.a,{variant:"h5",component:"div",align:"left",children:Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",lineHeight:"normal",children:"Top Songs"})}),Object(A.jsx)(P.a,{className:e.root,children:(null===F||void 0===F?void 0:F.length)>0&&(null===F||void 0===F?void 0:F.map((function(t,a){return Object(A.jsxs)(m.a,{component:"span",children:[Object(A.jsxs)(U.a,{alignItems:"center",classes:{root:e.inlineItem},children:[Object(A.jsx)(m.a,{xs:{},children:Object(A.jsx)(V.a,{primary:a+1})}),Object(A.jsx)(Y.a,{children:Object(A.jsx)(K.a,{alt:t.AlbumName,src:t.AlbumCover,variant:"square",classes:{root:e.avatar}})}),Object(A.jsx)(V.a,{primary:t.AlbumName,classes:{root:e.text}}),Object(A.jsx)(V.a,{primary:t.AlbumTime,classes:{root:e.time}}),Object(A.jsx)(ee,{playing:n[a].playing,toggle:function(){return i(a,!0)}})]}),Object(A.jsx)(D.a,{variant:"middle",component:"li"})]},"top-song-".concat(a))})))})]})}function ee(e){var t=e.playing,a=e.toggle;return Object(A.jsx)(Q.a,{"aria-label":"play music",color:"inherit",onClick:a,children:t?Object(A.jsx)(G.a,{fontSize:"small"}):Object(A.jsx)(J.a,{fontSize:"small"})})}var te=Object(c.a)((function(){return{root:{display:"flex"},content:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},cover:{width:160,height:160}}}));function ae(){var e=te();return Object(A.jsxs)(m.a,{my:2,children:[Object(A.jsx)(v.a,{variant:"h5",component:"div",align:"left",children:Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",lineHeight:"normal",children:"New Release"})}),Object(A.jsxs)(g.a,{className:e.root,children:[Object(A.jsx)(f.a,{className:e.cover,image:"/react-player/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg",title:"Live from space album cover"}),Object(A.jsxs)(x.a,{className:e.content,children:[Object(A.jsx)(v.a,{component:"div",variant:"h5",align:"center",children:Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",lineHeight:"normal",children:"But I must explain to You (Deluxe)"})}),Object(A.jsx)(v.a,{variant:"subtitle1",align:"center",children:Object(A.jsx)(m.a,{children:"2019.7.15"})})]})]})]})}var ne=a(59),ie=a(67),oe=a.n(ie),re=a(161),le=a(162),ce=a(68),se=a.n(ce),ue=a(69),de=a.n(ue),be={speed:500,dots:!1,arrows:!1,cassEase:"linear",autoplya:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:996,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]},me=Object(c.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},imageSize:{width:"160px",listStyle:"none"},imageHeight:{height:"160px"},imageWidth:{width:"160px",transform:"translateY(0)"},albumInfo:{height:"initial",marginTop:"8px",position:"relative",background:"transparent",textAlign:"left"},titleStyle:{marginLeft:"0",marginRight:"0",marginBottom:"5px",color:"#000",fontWeight:"600",whiteSpace:"initial",lineHeight:"18px"},subTitleStyle:{fontWeight:"400"}}})),je=[{AlbumName:"explorer of the truth",AlbumCover:"/react-player/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",AlbumTime:"5:34",AlbumYear:"2018"},{AlbumName:"great pleasure",AlbumCover:"/react-player/images/henrik-donnestad-V6Qd6zA85ck-unsplash.jpg",AlbumTime:"5:34",AlbumYear:"2017"},{AlbumName:"mistaken idea",AlbumCover:"/react-player/images/david-clode-xNSCi_K179c-unsplash.jpg",AlbumTime:"5:34",AlbumYear:"2015"},{AlbumName:"master builder",AlbumCover:"/react-player/images/noah-silliman-gzhyKEo_cbU-unsplash.jpg",AlbumTime:"5:34",AlbumYear:"2013"},{AlbumName:"because it is pain",AlbumCover:"images/piron-guillaume-NM77255WWVA-unsplash.jpg",AlbumTime:"5:34",AlbumYear:"2011"}];function pe(){var e=me(),t=Object(n.useRef)(null);function a(t){var a=t.item;return Object(A.jsxs)(re.a,{classes:{root:e.imageSize,imgFullHeight:e.imageHeight,imgFullWidth:e.imageWidth},children:[Object(A.jsx)("img",{src:a.AlbumCover,alt:a.title}),Object(A.jsx)(le.a,{title:a.AlbumName,subtitle:a.AlbumYear,classes:{root:e.albumInfo,titleWrap:e.titleStyle,title:e.titleStyle,subtitle:e.subTitleStyle}})]},a.AlbumCover)}return Object(A.jsxs)("div",{children:[Object(A.jsxs)(m.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(A.jsx)(v.a,{variant:"h5",component:"div",align:"left",children:Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",lineHeight:"normal",display:"inline",children:"Recent Albums"})}),Object(A.jsxs)(m.a,{children:[Object(A.jsx)(Q.a,{"aria-label":"play music",color:"inherit",onClick:function(){t.current.slickPrev()},children:Object(A.jsx)(se.a,{fontSize:"small"})}),Object(A.jsx)(Q.a,{"aria-label":"play music",color:"inherit",onClick:function(){t.current.slickNext()},children:Object(A.jsx)(de.a,{fontSize:"small"})})]})]}),Object(A.jsx)("div",{children:Object(A.jsx)(oe.a,Object(ne.a)(Object(ne.a)({},be),{},{ref:t,children:je.map((function(e,t){return Object(A.jsx)(a,{item:e},"Recent Albums ".concat(t))}))}))})]})}var he=a(4),ge=a(70),xe=a.n(ge),fe=a(71),Oe=a.n(fe),ve=a(74),ye=a.n(ve),Ae=a(170),ke=a(72),Ce=a.n(ke),we=a(73),Se=a.n(we),Ne=a(166),Te=Object(l.a)(),Ie=Object(c.a)((function(e){return{root:{display:"flex"},details:Object(r.a)({padding:e.spacing(1),display:"flex",justifyContent:"space-between",flexDirection:"row",color:"#fff"},e.breakpoints.up("md"),{padding:e.spacing(1.2,2),justifyContent:"space-between"}),content:Object(r.a)({padding:"0",height:"fit-content",margin:"auto 0"},e.breakpoints.up("md"),{width:"35%",margin:"auto"}),cover:Object(r.a)({width:"65px",height:"65px"},e.breakpoints.up("md"),{width:"96px",height:"96px"}),toolArea:{height:"100%",width:"100%",backgroundColor:"rgba(0 ,0 ,0 , 0.8)"},controls:Object(r.a)({display:"flex"},e.breakpoints.up("md"),{alignItems:"center",flex:"auto"}),playIcon:Object(r.a)({height:20,width:20,padding:"2px",color:"#000",background:"#fff",borderRadius:"50%"},e.breakpoints.up("md"),{height:38,width:38,padding:"5px"}),audioBarColor:{color:"#fff"},audioBarIcon:Object(r.a)({padding:"12px 0"},e.breakpoints.up("md"),{padding:"12px"}),zoomOutIcon:Object(r.a)({display:"none",paddingRight:"0"},e.breakpoints.up("md"),{display:"initial",marginRight:0}),musicProgress:{height:"5px",cursor:"pointer"},progressStyle:{color:"#FF6C00",padding:0,height:0,display:"block","& .MuiSlider-track":{height:4},"& .MuiSlider-thumb":{display:"none"},"& .MuiSlider-rail":{height:4,backgroundColor:"rgba(0, 0, 0, 1)"}}}}));function We(){var e,t,a,i,o=Ie(),l=M(),c=Object(T.a)(l,6),s=c[0],u=c[1],b=c[2],j=c[3],p=c[4],h=c[5],f=Object(n.useState)(0),O=Object(T.a)(f,2),y=O[0],k=O[1],C=Object(n.useState)(h),w=Object(T.a)(C,2),S=w[0],N=w[1];Object(n.useMemo)((function(){return N(h)}),[h]),Object(n.useEffect)((function(){var e=null===s||void 0===s?void 0:s.findIndex((function(e){return null===e||void 0===e?void 0:e.playing}));e>-1&&k(e)}),[u,s]);var I=function(e){var t=y;"pre"===e&&(0!==y?t-=1:t=0),"next"===e&&(y!==F.length-1?t++:t=y),t!==y&&(u(t),k(t))};return Object(A.jsx)(m.a,{children:Object(A.jsxs)(g.a,{className:o.root,children:[Object(A.jsx)(K.a,(t={src:"/react-player/images/david-clode-xNSCi_K179c-unsplash.jpg"},Object(r.a)(t,"src",null===(e=F[y])||void 0===e?void 0:e.AlbumCover),Object(r.a)(t,"alt","Live from space album cover"),Object(r.a)(t,"variant","square"),Object(r.a)(t,"classes",{root:o.cover}),t)),Object(A.jsxs)("div",{className:o.toolArea,children:[Object(A.jsxs)("div",{className:o.details,children:[Object(A.jsx)(x.a,{className:o.content,children:Object(A.jsxs)(v.a,{component:"div",variant:"body1",noWrap:!0,children:[Object(A.jsx)(m.a,{fontWeight:"fontWeightBold",textAlign:"left",children:null===(a=F[y])||void 0===a?void 0:a.AlbumName}),Object(A.jsx)(m.a,{fontWeight:"fontWeightLight",textAlign:"left",children:null===(i=F[y])||void 0===i?void 0:i.AlbumAuthor})]})}),Object(A.jsxs)(m.a,{className:o.controls,children:[Object(A.jsx)(Q.a,{"aria-label":"previous",classes:{root:Object(he.a)(o.audioBarColor,o.audioBarIcon)},disableFocusRipple:0===y,onClick:function(){return I("pre")},children:Object(A.jsx)(xe.a,{})}),Object(A.jsx)(Q.a,{"aria-label":"play/pause",onClick:function(){return u(y,!0)},children:s[y].playing?Object(A.jsx)(G.a,{classes:{root:o.playIcon}}):Object(A.jsx)(J.a,{classes:{root:o.playIcon}})}),Object(A.jsx)(Q.a,{"aria-label":"next",classes:{root:Object(he.a)(o.audioBarColor,o.audioBarIcon)},onClick:function(){return I("next")},children:Object(A.jsx)(Oe.a,{})}),Object(A.jsx)(m.a,{width:"30%",maxWidth:"150px",ml:"auto",mr:"10px",sx:Object(r.a)({display:"none"},Te.breakpoints.up("md"),{display:"initial"}),children:Object(A.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(A.jsx)(d.a,{item:!0,children:0!==b?Object(A.jsx)(Ce.a,{}):Object(A.jsx)(Se.a,{})}),Object(A.jsx)(d.a,{item:!0,xs:!0,children:Object(A.jsx)(Ae.a,{"aria-label":"Volume",ValueLabelComponent:ze,"aria-labelledby":"input-slider",defaultValue:30,classes:{root:o.audioBarColor},onChange:function(e,t){return j(t)}})})]})}),Object(A.jsx)(Q.a,{p:"0","aria-label":"ZoomOutPlayer",classes:{root:Object(he.a)(o.audioBarColor,o.zoomOutIcon,o.audioBarIcon)},children:Object(A.jsx)(ye.a,{})})]})]}),Object(A.jsx)(Ae.a,{"aria-label":"time-indicator",size:"small",defaultValue:0,value:S,min:0,step:1,max:100,valueLabelDisplay:"on",onChange:function(e,t){N(t),p(t)},classes:{root:o.progressStyle}})]})]})})}function ze(e){var t=e.children,a=e.open,n=e.value;return Object(A.jsx)(Ne.a,{open:a,enterTouchDelay:0,placement:"top",title:n,children:t})}var Be=Object(l.a)(),Fe=Object(c.a)((function(e){return{root:Object(r.a)({height:"100%",position:"relative",flexGrow:1,margin:"auto",paddingBottom:"65px",backgroundColor:"#F5F5F5"},e.breakpoints.up("md"),{height:"100vh",paddingBottom:"0"}),container:Object(r.a)({},e.breakpoints.up("md"),{margin:"2% 0",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),paper:{width:"100%",textAlign:"center",backgroundColor:"transparent"}}}));function Re(){var e=Fe();return Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(s.a,{maxWidth:"lg",className:e.container,children:Object(A.jsxs)(d.a,{container:!0,spacing:3,children:[Object(A.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(u.a,{elevation:0,className:e.paper,children:Object(A.jsx)(N,{})})}),Object(A.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(A.jsxs)(u.a,{elevation:0,className:e.paper,children:[Object(A.jsx)(X,{}),Object(A.jsxs)(b.a,{smDown:!0,children:[Object(A.jsx)(ae,{}),Object(A.jsx)(pe,{})]})]})}),Object(A.jsx)(m.a,{sx:Object(r.a)({position:"fixed",width:"100%",right:"0",left:"0",bottom:"0"},Be.breakpoints.up("md"),{position:"absolute",zIndex:"tooltip"}),children:Object(A.jsx)(d.a,{container:!0,justifyContent:"flex-end",children:Object(A.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(A.jsx)(We,{})})})})]})})})}a(114),a(115),a(116);var Ee=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(Re,{})})},He=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,172)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))};o.a.render(Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(Ee,{})}),document.getElementById("root")),He()},91:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.c8bbeb69.chunk.js.map