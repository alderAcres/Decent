(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{87493:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return N}});var r=e(87757),a=e.n(r),s=e(92137),i=e(85893),c=e(6610),o=e(5991),u=e(65255),d=e(53724),l=e(77608),f=e(67294),h=e(9008),p=e(25675),A={src:"/_next/static/image/public/starr.e182fd7442630843d8ce881b2dc241a0.png",height:294,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgZ+Xw5lB9K/zIYq/LoTxgti/T3kwMqCD36ftj/y8Gp6MIvjzSrTwx3ct4r/PesT8OWH8/+fV0Kv/d3Fr/dsnL/XrYggnUJdz9u+zLv9/XfT+//uM/V8g/v/npOn/X+c97/+4miDLAAL/DsrX/zlpDhR0+f77tM3fn1eC3n2/m2YMt+bzi1rJn5cD/v85ZQlU5Pr/30G57SDxP6d0WSDuuBYZ/ueU1d+/h7XKftyIWv37jNPL/9uFuRCuP+Op++eYlSrc4Vej7H6f8eBnYGBgAAAtV3EqqsqM7QAAAABJRU5ErkJggg=="},v=(e(5152),e(65004)),g=e(3754),x=function(t){return(0,i.jsx)("div",{id:"modal",children:(0,i.jsxs)(v.Z.Dialog,{children:[(0,i.jsx)(v.Z.Header,{children:(0,i.jsx)(v.Z.Title,{children:"Your Wish, Immemorialized In The Stars"})}),(0,i.jsx)(v.Z.Body,{children:(0,i.jsxs)("p",{children:[t.starData._id," - Star Speak"]})}),(0,i.jsx)(v.Z.Footer,{children:(0,i.jsx)(g.Z,{onClick:function(){t.setShowData(!1)},variant:"secondary",children:"Close"})})]})})},y=function(t){var n=(0,f.useState)(""),e=n[0],r=n[1],a=(0,f.useState)(!1),s=a[0],c=a[1];for(var o=[],u=function(n){o.push((0,i.jsx)(p.default,{onClick:function(){return function(t){r(t),c(!0)}(t.dbData[n])},id:"star-child",width:50,height:50,src:A}))},d=0;d<t.dbData.length;d++)u(d);return(0,i.jsxs)("div",{className:"star-container",children:[o,s?(0,i.jsx)(x,{setShowData:c,starData:e}):""]})},m=e(3397),b=e(79005),j=e(3283),D=e.n(j),w=e(41825),C=e(11163),E={src:"/_next/static/image/public/rocket.e0a2b67cf15e9468ae2520b8cb6558a3.png",height:360,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mP4//8/w9OpBUwg+pmTwZwrIgyzQOz/07PAYgxfb+4EM/7/fyjzZMeM/7fXdv37/Gi+BEjs1o4ORoY//28xgzj/nh0ouHxy3f/Tu+b+f3O8NxMk9vHuEmYGEOMgA4P47Z7SX68e7Pz/5NKy/yfyvH70MzCIgq0AEfcYGDguB7ncfL6o6e/lCdn/dspwXz/IwMAGVnDFWZARxLjIwCD2fHrr3stN+XvygWyQ2A4GBkYGEOPFrV9gh/5+v/vsz7vrT4HYD148ZoZb8fd6Epjz67xv+o89vqkg9p/j8WAxAHp2oiLs2idNAAAAAElFTkSuQmCC"},T=function(t){var n=(0,f.useState)(""),e=n[0],r=n[1],c=(0,f.useState)(""),o=(c[0],c[1],function(){var t=(0,s.Z)(a().mark((function t(n){var s,i,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=new(D())(new(D().providers.WebsocketProvider)("ws://localhost:7545")),i=new s.eth.Contract(w.CONTRACT_ABI,w.CONTRACT_ADDRESS),c=s.utils.asciiToHex(e).padEnd(66,"0"),t.next=6,s.eth.getAccounts();case 6:return o=t.sent,t.next=9,i.methods.hashWish(c).send({from:o[0]});case 9:return t.next=11,i.getPastEvents("WishMade",{});case 11:t.sent,r(""),setTimeout((function(){C.default.push({pathname:"/"})}),1e3);case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:"input-form",children:(0,i.jsxs)(m.Z,{className:"mb-3",id:"form",onSubmit:o,children:[(0,i.jsx)(g.Z,{onClick:o,variant:"outline-secondary",id:"button-addon1",children:"Button"}),(0,i.jsx)(b.Z,{"aria-label":"form-button","aria-describedby":"basic-addon1",value:e,onChange:function(t){return r(t.target.value)}})]})}),(0,i.jsx)("div",{id:"rocket-container",children:(0,i.jsx)(p.default,{className:"rocket",src:E,width:160,height:200,alt:"rocket"})})]})},k=e(9669),S=e.n(k);function Z(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,l.Z)(t);if(n){var a=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,d.Z)(this,e)}}var N=function(t){(0,u.Z)(e,t);var n=Z(e);function e(){return(0,c.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(h.default,{children:[(0,i.jsx)("title",{children:"SpaceHash"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"})]}),(0,i.jsx)(y,{dbData:this.props.dbData}),(0,i.jsx)(T,{}),(0,i.jsx)("div",{className:"stars"}),(0,i.jsx)("div",{className:"twinkling"}),(0,i.jsx)("div",{className:"clouds"})]})}}],[{key:"getInitialProps",value:function(){var t=(0,s.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S().get("http://localhost:3001/getWishes");case 3:e=t.sent,n=e.data,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error fetching initial props",t.t0);case 11:return t.abrupt("return",{dbData:n});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()}]),e}(f.Component)},78581:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(87493)}])},41825:function(t){t.exports={CONTRACT_ABI:[{anonymous:!1,inputs:[],name:"DrainWishes",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes32",name:"wish",type:"bytes32"}],name:"WishMade",type:"event"},{constant:!1,inputs:[{internalType:"bytes32",name:"_wish",type:"bytes32"}],name:"hashWish",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"drainWishes",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],CONTRACT_ADDRESS:"0xf665F60Cc1353d2Abb4aD5Af60AB32ca8c031D58"}},88677:function(){},62808:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},6567:function(){},43503:function(){},55896:function(){},87500:function(){}},function(t){t.O(0,[774,31,888,179],(function(){return n=78581,t(t.s=n);var n}));var n=t.O();_N_E=n}]);