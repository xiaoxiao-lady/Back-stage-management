webpackJsonp([11],{MlsY:function(e,t){},QJ9j:function(e,t){},SUZa:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"addGroupon",components:{GrouponDetail:r("l+cf").a}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("groupon-detail",{attrs:{isEdit:!1}})},staticRenderFns:[]};var n=r("VU/8")(o,i,!1,function(e){r("MlsY")},"data-v-416bff0f",null);t.default=n.exports},"l+cf":function(e,t,r){"use strict";var o=r("woOf"),i=r.n(o),n=r("dLnf"),a=r("UgCr"),l={numberLimitation:0,provideNumber:0,originalPrice:null,currentPrice:null,sortIndex:0,startTime:null,endTime:null,description:null,productId:null},s={name:"GrouponDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{groupon:i()({},l),rules:{numberLimitation:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}],provideNumber:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}],originalPrice:[{type:"number",required:!0,message:"只能是数值，0.01-10000，限2位小数",trigger:"blur"}],productId:[{required:!0,message:"请选择商品",trigger:"blur"}],currentPrice:[{type:"number",required:!0,message:"只能是数值，0.01-10000，限2位小数",trigger:"blur"}]},selectDialogVisible:!1,selectProductOptions:[],dialogData:{list:null,total:null,multipleSelection:[],listQuery:{keyword:null,pageNum:1,pageSize:5}},data:{}}},created:function(){var e=this;this.isEdit&&Object(n.d)(this.$route.query.id).then(function(t){e.groupon=t.data,console.log(e.groupon)})},methods:{handleSelectProduct:function(){this.selectDialogVisible=!0,this.getDialogList()},handleDialogSelectionChange:function(e){console.log(e[0].productId),this.groupon.productId=e[0].productId,console.log(e)},handleSelectDialogConfirm:function(){this.selectDialogVisible=!1},handleDialogSizeChange:function(e){this.dialogData.listQuery.pageNum=1,this.dialogData.listQuery.pageSize=e,this.getDialogList()},handleDialogCurrentChange:function(e){this.dialogData.listQuery.pageNum=e,this.getDialogList()},getDialogList:function(){var e=this;Object(a.f)(this.dialogData.listQuery).then(function(t){e.dialogData.list=t.data,e.dialogData.total=t.total})},dateUtil:function(e){return(e=new Date(e)).getFullYear()+"-"+this.p(e.getMonth()+1)+"-"+this.p(e.getDate())+" "+(this.p(e.getHours())+":"+this.p(e.getMinutes())+":"+this.p(e.getSeconds()))},onSubmit:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){if(t.isEdit)Object(n.e)(t.$route.query.id,t.groupon).then(function(r){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()});else{console.log(t.groupon);var r=new FormData;r.append("productId",t.groupon.productId),r.append("numberLimitation",t.groupon.numberLimitation),r.append("provideNumber",t.groupon.provideNumber),r.append("originalPrice",t.groupon.originalPrice),r.append("currentPrice",t.groupon.currentPrice),r.append("description",t.groupon.description),r.append("sortIndex",t.groupon.sortIndex),r.append("startTime",t.groupon.startTime),r.append("endTime",t.groupon.endTime),Object(n.a)(r).then(function(r){t.$refs[e].resetFields(),t.$message({message:"提交成功",type:"success",duration:1e3}),t.$router.back()})}})})},resetForm:function(e){this.$refs[e].resetFields(),this.groupon=i()({},l)},searchProductMethod:function(e){var t=this;""!==e?(this.loading=!0,Object(a.f)({productName:e,pageNum:1,pageSize:999}).then(function(e){t.loading=!1;var r=e.data;t.selectProductOptions=[];for(var o=0;o<r.length;o++){var i=r[o];t.selectProductOptions.push({productId:i.productId,productName:i.productName,productSn:i.productId})}})):this.selectProductOptions=[]}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[r("el-form",{ref:"couponFrom",attrs:{model:e.groupon,rules:e.rules,"label-width":"180px",size:"small"}},[r("el-form-item",{attrs:{label:"人数要求：",prop:"numberLimitation"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:e.groupon.numberLimitation,callback:function(t){e.$set(e.groupon,"numberLimitation",e._n(t))},expression:"groupon.numberLimitation"}},[r("template",{slot:"append"},[e._v("人")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"商品数量：",prop:"provideNumber"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:e.groupon.provideNumber,callback:function(t){e.$set(e.groupon,"provideNumber",e._n(t))},expression:"groupon.provideNumber"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"原价：",prop:"originalPrice"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"面值只能是数值，限2位小数"},model:{value:e.groupon.originalPrice,callback:function(t){e.$set(e.groupon,"originalPrice",e._n(t))},expression:"groupon.originalPrice"}},[r("template",{slot:"append"},[e._v("元")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"拼团价：",prop:"currentPrice"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"面值只能是数值，限2位小数"},model:{value:e.groupon.currentPrice,callback:function(t){e.$set(e.groupon,"currentPrice",e._n(t))},expression:"groupon.currentPrice"}},[r("template",{slot:"append"},[e._v("元")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"排序："}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"值越大越靠前"},model:{value:e.groupon.sortIndex,callback:function(t){e.$set(e.groupon,"sortIndex",e._n(t))},expression:"groupon.sortIndex"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"开始时间段："}},[r("el-date-picker",{staticClass:"input-width",attrs:{type:"datetime",placeholder:"选择日期及时间","value-format":"timestamp"},model:{value:e.groupon.startTime,callback:function(t){e.$set(e.groupon,"startTime",t)},expression:"groupon.startTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"结束时间段："}},[r("el-date-picker",{staticClass:"input-width",attrs:{type:"datetime",placeholder:"选择日期及时间","value-format":"timestamp"},model:{value:e.groupon.endTime,callback:function(t){e.$set(e.groupon,"endTime",t)},expression:"groupon.endTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"选择商品：",prop:"productId"}},[r("el-button",{attrs:{type:"text"},on:{click:e.handleSelectProduct}},[e._v("打开 Dialog")]),e._v(" "),r("el-dialog",{attrs:{title:"选择商品：",visible:e.selectDialogVisible,width:"70%",height:"70%"},on:{"update:visible":function(t){e.selectDialogVisible=t}}},[r("el-table",{attrs:{data:e.dialogData.list,border:""},on:{"selection-change":e.handleDialogSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.productName))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"货号",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("NO."+e._s(t.row.productId))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"价格",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.salePrice))]}}])})],1),e._v(" "),r("div",{staticClass:"pagination-container"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":e.dialogData.listQuery.pageNum,"page-size":e.dialogData.listQuery.pageSize,"page-sizes":[5,10,15],total:e.dialogData.total},on:{"size-change":e.handleDialogSizeChange,"current-change":e.handleDialogCurrentChange,"update:currentPage":function(t){return e.$set(e.dialogData.listQuery,"pageNum",t)},"update:current-page":function(t){return e.$set(e.dialogData.listQuery,"pageNum",t)}}})],1),e._v(" "),r("div",{staticStyle:{clear:"both"}}),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.selectDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.handleSelectDialogConfirm()}}},[e._v("确 定")])],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"备注："}},[r("el-input",{staticClass:"input-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.groupon.description,callback:function(t){e.$set(e.groupon,"description",t)},expression:"groupon.description"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("couponFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():r("el-button",{on:{click:function(t){return e.resetForm("couponFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(s,u,!1,function(e){r("QJ9j")},"data-v-4b126b37",null);t.a=c.exports}});
//# sourceMappingURL=11.ecc01d0358c99bd2c56d.js.map