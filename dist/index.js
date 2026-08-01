"use strict";var R=function(t,n){return function(){try{return n||t((n={exports:{}}).exports,n),n.exports}catch(o){throw (n=0, o)}};};var E=R(function(S,d){
var _=require('@stdlib/strided-base-reinterpret-complex64/dist'),f=5;function D(t,n,o,w,q,x,c,y,b,C){var i,v,u,r,e,a,m,j,l,p,s;if(t<=0)return y;if(i=_(n,0),v=_(q,0),u=_(y,0),r=w*2,e=c*2,a=C*2,m=o*2,j=x*2,l=b*2,o===1&&x===1&&b===1){if(p=t%f,p>0)for(s=0;s<p;s++)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],r+=m,e+=j,a+=l;if(t<f)return y;for(s=p;s<t;s+=f)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],u[a+2]=i[r+2]-v[e+2],u[a+3]=i[r+3]-v[e+3],u[a+4]=i[r+4]-v[e+4],u[a+5]=i[r+5]-v[e+5],u[a+6]=i[r+6]-v[e+6],u[a+7]=i[r+7]-v[e+7],u[a+8]=i[r+8]-v[e+8],u[a+9]=i[r+9]-v[e+9],r+=f*2,e+=f*2,a+=f*2;return y}for(s=0;s<t;s++)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],r+=m,e+=j,a+=l;return y}d.exports=D
});var h=R(function(T,g){
var M=require('@stdlib/strided-base-stride2offset/dist'),F=E();function G(t,n,o,w,q,x,c){return F(t,n,o,M(t,o),w,q,M(t,q),x,c,M(t,c))}g.exports=G
});var A=R(function(U,z){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),I=E();H(k,"ndarray",I);z.exports=k
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=A(),O,B=K(J(__dirname,"./native.js"));L(B)?O=P:O=B;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
