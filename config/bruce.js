const{browserslist:e}=require("../package"),{AbsPath:s,DataType:t,IsEmptyArray:l,IsEmptyObject:r,IsExist:i}=require("../util/setting"),u=i("brucerc.js")?require(s("brucerc.js")):{};if(t(u,"object")&&Object.keys(u).length)for(let e in u){const s=u[e];(!s||l(s)||r(s))&&delete u[e]}module.exports=Object.assign({alias:{},browserList:e,errorCb:null,eslintIgnores:[],eslintRules:{},frame:"default",openPath:"",proxy:{},publicPathProd:"",publicPathTest:"",style:"scss",stylelintIgnores:[],stylelintRules:{},successCb:null,uploadOpts:null,useTs:!1},u);