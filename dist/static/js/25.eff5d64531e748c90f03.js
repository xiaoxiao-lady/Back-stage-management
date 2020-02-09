webpackJsonp([25],{N3DD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=i("mvHQ"),a=i.n(r),l=i("woOf"),s=i.n(l),c=i("bOdI"),n=i.n(c),p=i("G0J2"),u=i("+yKa"),d=(i("3f40"),i("4qOc"),i("+cgv"),i("UgCr")),f=i("KA92"),h=i("iB2v"),m=i("zL8q"),v=i("s/Rn"),b=i("WU8w"),g=(o={name:"ProductCreate",components:{Editor:h.a},data:function(){var t;return t={params:new FormData,dialogImageUrl:"",dialogVisible:!1,picList:[],fileList:[],uploadPath:f.c,newKeywordVisible:!1,newKeyword:"",selectProductCateValue:null,brandOptions:[],productTypeOptions:[],product:{productIcon:"",productType:""},specVisiable:!1,specForm:{specification:"",value:""},multipleSpec:!1,specification:[{specification:"规格",value:"标准"}]},n()(t,"specification",[{specification:"规格",value:"标准"}]),n()(t,"productVisiable",!1),n()(t,"productForm",{id:0,specification:[],salePrice:0,stock:99,url:""}),n()(t,"stocks",[{specification:["标准"],salePrice:0,stock:99,url:""}]),n()(t,"attributeVisiable",!1),n()(t,"attributeForm",{attribute:"",value:""}),n()(t,"attributes",[]),n()(t,"quillOption",u.a),n()(t,"rules",{merchantId:[{required:!0,message:"供货商家编号不能为空",trigger:"blur"}],productName:[{required:!0,message:"商品名称不能为空",trigger:"blur"}]}),n()(t,"editorInit",{language:"zh_CN",convert_urls:!1,plugins:["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],toolbar:["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],images_upload_handler:function(t,e,i){var o=new FormData;o.append("file",t.blob()),Object(f.b)(o).then(function(t){e(t.data)}).catch(function(){i("上传失败，请重新上传")})}}),t},created:function(){this.getProductCateList(),this.getBrandList()},watch:{selectProductTypeValue:function(t){null!=t&&2==t.length?this.product.productType=t[1]:this.product.productType=null}}},n()(o,"components",{quillEditor:p.quillEditor}),n()(o,"methods",{getProductCateList:function(){var t=this;Object(b.d)().then(function(e){var i=e.data;t.productTypeOptions=[];for(var o=0;o<i.length;o++){var r=[];if(null!=i[o].children&&i[o].children.length>0)for(var a=0;a<i[o].children.length;a++)r.push({label:i[o].children[a].typeName,value:i[o].children[a].typeId});t.productTypeOptions.push({label:i[o].typeName,value:i[o].typeId,children:r})}})},handleResetSearch:function(){this.selectProductCateValue=[],this.listQuery=s()({},defaultListQuery)},handleCancel:function(){this.$router.push({path:"/pms/product"})},handlePublish:function(){var t=this,e={product:this.product,specification:this.specification,stocks:this.stocks,attributes:this.attributes};console.log(a()(e.product)),this.product.productType=this.selectProductCateValue[1],this.params.append("stocks",a()(this.stocks)),this.params.append("product",a()(this.product)),this.params.append("specification",a()(this.specification)),this.params.append("attributes",a()(this.attributes)),this.params.append("finalGoods",a()(e.product)),Object(d.e)(this.params).then(function(e){t.$notify.success({title:"成功",message:"创建成功"}),t.$router.push({path:"/pms/product"})}).catch(function(t){m.MessageBox.alert("业务错误："+t.data.errmsg,"警告",{confirmButtonText:"确定",type:"error"})})},getBrandList:function(){var t=this;Object(v.c)({pageNum:1,pageSize:100}).then(function(e){t.brandOptions=[];for(var i=e.data,o=0;o<i.length;o++)t.brandOptions.push({label:i[o].brandName,value:i[o].brandId})})},handleClose:function(t){this.keywords.splice(this.keywords.indexOf(t),1),this.product.keywords=this.keywords.toString()},showInput:function(){var t=this;this.newKeywordVisible=!0,this.$nextTick(function(e){t.$refs.newKeywordInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.newKeyword;t&&(this.keywords.push(t),this.product.keywords=this.keywords.toString()),this.newKeywordVisible=!1,this.newKeyword=""},uploadPicUrl:function(t){this.product.productIcon=t.data},uploadOverrun:function(){this.$message({type:"error",message:"上传文件个数超出限制!最多上传5张图片!"})},specChanged:function(t){!1===t?(this.specification=[{specification:"规格",value:"标准"}],this.stocks=[{specification:["标准"],salePrice:0,stock:0,url:""}]):(this.specification=[],this.stocks=[])},handlespecificationhow:function(){this.specForm={specification:"",value:""},this.specVisiable=!0},handleSpecificationAdd:function(){for(var t=this.specification.length-1,e=0;e<this.specification.length;e++){var i=this.specification[e];if(i.specification===this.specForm.specification){if(i.value===this.specForm.value)return this.$message({type:"warning",message:"已经存在规格值:"+i.value}),this.specForm={},void(this.specVisiable=!1);t=e}}this.specification.splice(t+1,0,this.specForm),this.specVisiable=!1,this.specToProduct()},handleSpecificationDelete:function(t){var e=this.specification.indexOf(t);this.specification.splice(e,1),this.specToProduct()},specToProduct:function(){if(0!==this.specification.length){var t=[],e=this.specification[0].specification,i=[];i.push(0);for(var o=1;o<this.specification.length;o++){var r=this.specification[o].specification;r===e?i.push(o):(t.push(i),e=r,(i=[]).push(o))}t.push(i);for(var a=0,l=[],s=[],c=t.length,n=0;n<c;n++)s[n]=0;var p=0,u=!1;do{for(var d=[],f=0;f<c;f++){var h=t[f][s[f]];d.push(this.specification[h].value)}l[a]={id:a,specification:d,salePrice:0,stock:0,url:""},a++,p++,s[c-1]=p;for(var m=c-1;m>=0;m--)s[m]>=t[m].length&&(s[m]=0,p=0,m-1>=0&&(s[m-1]=s[m-1]+1));u=!1;for(var v=0;v<c;v++)0!==s[v]&&(u=!0)}while(u);this.stocks=l}},handleProductShow:function(t){this.productForm=s()({},t),this.productVisiable=!0},uploadProductUrl:function(t){this.productForm.url=t.data},handleProductEdit:function(){for(var t=0;t<this.stocks.length;t++){if(this.stocks[t].id===this.productForm.id){this.stocks.splice(t,1,this.productForm);break}}this.productVisiable=!1},handleAttributeShow:function(){this.attributeForm={},this.attributeVisiable=!0},handleAttributeAdd:function(){this.attributes.unshift(this.attributeForm),this.attributeVisiable=!1},handleAttributeDelete:function(t){var e=this.attributes.indexOf(t);this.attributes.splice(e,1)},uploadAvatar:function(t){(new FormData).append("file",t.file);t.file.uid},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,i="image/png"===t.type,o=t.size/1024/1024<2;return e||i||this.$message.error("上传图片只能是 JPG或png 格式!"),o||this.$message.error("上传图片大小不能超过 2MB!"),(e||i)&&o},uploadFile:function(t){this.params.append("file",t.file)},uploadIconFile:function(t){this.params.append("iconFile",t.file)},handleRemove:function(t,e){for(var i in this.picList)this.picList[i].key===t.uid&&this.picList.splice(i,1)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},emptyUpload:function(){var t=this.$refs.upload;t&&(t.length?t.forEach(function(t){t.clearFiles()}):this.$refs.upload.clearFiles())}}),o),_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("h3",[t._v("商品介绍")]),t._v(" "),i("el-form",{ref:"product",attrs:{rules:t.rules,model:t.product,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"商品名称",prop:"productName"}},[i("el-input",{model:{value:t.product.productName,callback:function(e){t.$set(t.product,"productName",e)},expression:"product.productName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"进购价格",prop:"purchasePrice"}},[i("el-input",{attrs:{placeholder:"0.00"},model:{value:t.product.purchasePrice,callback:function(e){t.$set(t.product,"purchasePrice",e)},expression:"product.purchasePrice"}},[i("template",{slot:"append"},[t._v("元")])],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"售价",prop:"salePrice"}},[i("el-input",{attrs:{placeholder:"0.00"},model:{value:t.product.salePrice,callback:function(e){t.$set(t.product,"salePrice",e)},expression:"product.salePrice"}},[i("template",{slot:"append"},[t._v("元")])],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"是否积分商品",prop:"isScoreProduct"}},[i("el-radio-group",{model:{value:t.product.isScoreProduct,callback:function(e){t.$set(t.product,"isScoreProduct",e)},expression:"product.isScoreProduct"}},[i("el-radio",{attrs:{label:!0}},[t._v("积分商品")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("非积分商品")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"商品积分",prop:"salePrice"}},[i("el-input",{attrs:{placeholder:"0"},model:{value:t.product.scoreProportion,callback:function(e){t.$set(t.product,"scoreProportion",e)},expression:"product.scoreProportion"}},[i("template",{slot:"append"},[t._v("分")])],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"商品图片"}},[i("el-upload",{attrs:{action:"#","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"before-upload":t.beforeAvatarUpload,"file-list":t.fileList,multiple:"","http-request":t.uploadFile}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),i("el-form-item",{attrs:{label:"商品单位"}},[i("el-input",{attrs:{placeholder:"件 / 个 / 盒"},model:{value:t.product.unit,callback:function(e){t.$set(t.product,"unit",e)},expression:"product.unit"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"产地"}},[i("el-input",{model:{value:t.product.productionPlace,callback:function(e){t.$set(t.product,"productionPlace",e)},expression:"product.productionPlace"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"原料"}},[i("el-input",{model:{value:t.product.material,callback:function(e){t.$set(t.product,"material",e)},expression:"product.material"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"所属分类"}},[i("el-cascader",{attrs:{clearable:"",options:t.productTypeOptions},model:{value:t.selectProductCateValue,callback:function(e){t.selectProductCateValue=e},expression:"selectProductCateValue"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"所属品牌商"}},[i("el-select",{model:{value:t.product.brandId,callback:function(e){t.$set(t.product,"brandId",e)},expression:"product.brandId"}},t._l(t.brandOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"商品简介"}},[i("el-input",{model:{value:t.product.productProfile,callback:function(e){t.$set(t.product,"productProfile",e)},expression:"product.productProfile"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"商品详细介绍："}},[i("div",[i("quillEditor",{ref:"myTextEditor",attrs:{options:t.quillOption},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1)]),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("newsFrom")}}},[t._v("提交")])],1)],1)],1),t._v(" "),i("el-card",{staticClass:"box-card"},[i("h3",[t._v("商品规格")]),t._v(" "),i("el-row",{staticStyle:{padding:"20px 0"},attrs:{gutter:20,type:"flex",align:"middle"}},[i("el-col",{attrs:{span:10}},[i("el-radio-group",{on:{change:t.specChanged},model:{value:t.multipleSpec,callback:function(e){t.multipleSpec=e},expression:"multipleSpec"}},[i("el-radio-button",{attrs:{label:!1}},[t._v("默认标准规格")]),t._v(" "),i("el-radio-button",{attrs:{label:!0}},[t._v("多规格支持")])],1)],1),t._v(" "),t.multipleSpec?i("el-col",{attrs:{span:10}},[i("el-button",{attrs:{plain:!0,type:"primary"},on:{click:t.handlespecificationhow}},[t._v("添加")])],1):t._e()],1),t._v(" "),i("el-table",{attrs:{data:t.specification}},[i("el-table-column",{attrs:{property:"specification",label:"规格名"}}),t._v(" "),i("el-table-column",{attrs:{property:"value",label:"规格值"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:"primary"}},[t._v("\n              "+t._s(e.row.value)+"\n            ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{property:"productIcon",label:"规格图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.picUrl?i("img",{attrs:{src:e.row.picUrl,width:"40"}}):t._e()]}}])}),t._v(" "),t.multipleSpec?i("el-table-column",{attrs:{align:"center",label:"操作",width:"250","class-productName":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.handleSpecificationDelete(e.row)}}},[t._v("删除")])]}}],null,!1,2506674061)}):t._e()],1),t._v(" "),i("el-dialog",{attrs:{visible:t.specVisiable,title:"设置规格"},on:{"update:visible":function(e){t.specVisiable=e}}},[i("el-form",{ref:"specForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.specForm,"status-icon":"","label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"规格名",prop:"specification"}},[i("el-input",{model:{value:t.specForm.specification,callback:function(e){t.$set(t.specForm,"specification",e)},expression:"specForm.specification"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格值",prop:"value"}},[i("el-input",{model:{value:t.specForm.value,callback:function(e){t.$set(t.specForm,"value",e)},expression:"specForm.value"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.specVisiable=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSpecificationAdd}},[t._v("确定")])],1)],1)],1),t._v(" "),i("el-card",{staticClass:"box-card"},[i("h3",[t._v("商品库存")]),t._v(" "),i("el-table",{attrs:{data:t.stocks}},[i("el-table-column",{attrs:{property:"value",label:"货品规格"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.specification,function(e){return i("el-tag",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{property:"salePrice",width:"100",label:"货品售价"}}),t._v(" "),i("el-table-column",{attrs:{property:"stock",width:"100",label:"货品数量"}}),t._v(" "),i("el-table-column",{attrs:{property:"url",width:"100",label:"货品图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.url?i("img",{attrs:{src:e.row.url,width:"40"}}):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100","class-productName":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handleProductShow(e.row)}}},[t._v("设置")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{visible:t.productVisiable,title:"设置货品"},on:{"update:visible":function(e){t.productVisiable=e}}},[i("el-form",{ref:"productForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.productForm,"status-icon":"","label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"货品规格列",prop:"specification"}},t._l(t.productForm.specification,function(e){return i("el-tag",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])}),1),t._v(" "),i("el-form-item",{attrs:{label:"货品进价",prop:"purchasePrice"}},[i("el-input",{model:{value:t.productForm.purchasePrice,callback:function(e){t.$set(t.productForm,"purchasePrice",e)},expression:"productForm.purchasePrice"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"货品售价",prop:"salePrice"}},[i("el-input",{model:{value:t.productForm.salePrice,callback:function(e){t.$set(t.productForm,"salePrice",e)},expression:"productForm.salePrice"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"货品库存",prop:"stock"}},[i("el-input",{model:{value:t.productForm.stock,callback:function(e){t.$set(t.productForm,"stock",e)},expression:"productForm.stock"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"货品图片",prop:"url"}},[i("el-upload",{attrs:{action:"#","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"before-upload":t.beforeAvatarUpload,"file-list":t.fileList,multiple:"","http-request":t.uploadIconFile}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.productVisiable=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleProductEdit}},[t._v("确定")])],1)],1)],1),t._v(" "),i("div",{staticClass:"op-container"},[i("el-button",{on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePublish}},[t._v("上架")])],1)],1)},staticRenderFns:[]};var k={name:"addProduct",components:{ProductDetail:i("VU/8")(g,_,!1,function(t){i("V0lw")},null,null).exports}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("product-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]};var w=i("VU/8")(k,y,!1,function(t){i("UnvB")},null,null);e.default=w.exports},UnvB:function(t,e){},V0lw:function(t,e){}});
//# sourceMappingURL=25.eff5d64531e748c90f03.js.map