const e=require("fs"),r=require("os"),t=require("path"),n=require("url"),o=require("util"),i=require("chalk"),c=require("webpack");module.exports={AbsPath:u,AsyncTo:l,AutoBin:f,BuildCb:p,DataType:d,DiffArray:y,GetUrl:h,IsEmptyArray:g,IsEmptyObject:m,IsExist:S,IsMpa:w,ReadEntry:$,ReadFolder:b,ShowMsg:q,ShowTitle:A,TitleCase:I};const{ACTION_TEXT:s}=require("../i18n"),{HOST:a}=require("./getting");function u(e,r){const n=r?__dirname:process.cwd();return t.join(n,e)}function l(e){return e.then(e=>[null,e]).catch(e=>[e])}function f(e,...r){require(`../lib/${e}`)(...r)}async function p(e){const r=o.promisify(c),t=await r(e);return l(new Promise((e,r)=>{process.stdout.write(t.toString({children:!1,chunkModules:!1,chunks:!1,colors:!0,modules:!1})+"\n\n"),t.hasErrors()?r(!1):e(!0)}))}function d(e,r){const t=Object.prototype.toString.call(e).replace(/\[object /g,"").replace(/\]/g,"").toLowerCase();return r?t===r:t}function y(e,r){return e.filter(e=>!r.includes(e))}function h(e,t,o){const i=n.format({hostname:o?(()=>{const e=r.networkInterfaces();for(const r in e)for(var t=0;t<e[r].length;t++){var n=e[r][t];if("IPv4"===n.family&&"127.0.0.1"!==n.address&&!n.internal)return n.address}})():a,pathname:t,port:e,protocol:"http"});return decodeURIComponent(i)}function g(e){return Array.isArray(e)&&!e.length}function m(e){return d(e,"object")&&!Object.keys(e).length}function S(r,t){return e.existsSync(u(r,t))}function w(){return S("src/pages")&&b("src/pages").length>0}function $(){let r=[];if(S("src"))if(w()){const n=u("src/pages");r=e.readdirSync(n).filter(r=>e.statSync(t.normalize(`${n}/${r}`)).isDirectory())}else{const n=u("src");r=e.readdirSync(n).filter(r=>e.statSync(t.normalize(`${n}/${r}`)).isFile()&&".html"===t.extname(t.normalize(`${n}/${r}`))).map(e=>e.split(".")[0])}return r}function b(r,n){const o=u(r,n);return S(r,n)?e.readdirSync(o).filter(r=>e.statSync(t.normalize(`${o}/${r}`)).isDirectory()):[]}function q(e,r){console.log(i[`${e}Bright`](r))}function A(e){console.log(i.white.bgMagenta(`### ${s[e]} ###`))}function I(e){return e.split("-").reduce((e,r)=>{return e+r.toLowerCase().replace(/( |^)[a-z]/g,e=>e.toUpperCase())},"")}