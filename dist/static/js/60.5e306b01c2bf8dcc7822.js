webpackJsonp([60],{"87Lh":function(e,t){},ODbz:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("woOf"),i=l.n(a),n=l("ZbmZ"),s=l("xT6B"),o=l("UgCr"),r={pageNum:1,pageSize:5,name:null,type:null,endTime:null},c=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],u={id:null,title:null,startDate:null,endDate:null,status:0},d={name:"homeAdvertiseList",data:function(){return{listQuery:i()({},r),typeOptions:i()({},c),list:null,total:null,selectDialogVisible:!1,dialogVisible:!1,flashPromotion:i()({},u),listLoading:!1,multipleSelection:[],operates:[{label:"删除",value:0}],operateType:null,dialogData:{list:null,total:null,multipleSelection:[],listQuery:{keywords:null,pageNum:1,pageSize:5}},selectedDialogGoods:[]}},created:function(){this.getList()},filters:{formatSiteType:function(e){return 1===e?"酒吧":"KTV"},formatTime:function(e){if(null==e||""===e)return"N/A";var t=new Date(e);return Object(s.a)(t,"yyyy-MM-dd hh:mm:ss")}},methods:{handleAdd:function(){this.selectDialogVisible=!0,this.getDialogList()},getDialogList:function(){var e=this;Object(o.f)(this.dialogData.listQuery).then(function(t){console.log(t.data),e.dialogData.list=t.data,e.dialogData.total=t.total})},handleSelectSearch:function(){console.log("handleSelectSearch"+val),this.dialogData.listQuery.pageNum=1,this.getDialogList()},handleDialogSizeChange:function(e){console.log("handleDialogSizeChange"+e),this.dialogData.listQuery.pageNum=1,this.dialogData.listQuery.pageSize=e,this.getDialogList()},handleDialogCurrentChange:function(e){console.log("handleDialogCurrentChange"+e),this.dialogData.listQuery.pageNum=e,this.getDialogList()},handleDialogSelectionChange:function(e){var t=this;console.log(e),e.forEach(function(e){t.selectedDialogGoods.push(e.productId)}),this.dialogData.multipleSelection=e},handleSelectDialogConfirm:function(){console.log("queren"),Object(n.b)({productIds:this.selectedDialogGoods}).then(function(e){console.log(e.data)})},handleResetSearch:function(){this.listQuery=i()({},r)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleUpdateStatus:function(e,t){var l=this;this.$confirm("是否要修改上线/下线状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.h)(t.bannerId,{status:t.status}).then(function(e){l.getList(),l.$message({type:"success",message:"修改成功!"})})}).catch(function(){l.$message({type:"success",message:"已取消操作!"}),l.getList()})},handleDelete:function(e,t){this.deleteExclusive(t.exlusiveId)},handleBatchOperate:function(){if(this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{for(var e=[],t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].id);0===this.operateType?this.deleteExclusive(e):this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3})}},handleUpdate:function(e,t){console.log(e,t),this.$router.push({path:"/ums/updateExclusive",query:{exclusiveId:t.exclusiveId}})},getList:function(){var e=this;this.listLoading=!0,this.listQuery.queryType=0,Object(n.d)(this.listQuery).then(function(t){e.listLoading=!1,e.list=t.data,e.total=t.total})},handleImport:function(){this.dialogVisible=!0,this.isEdit=!1,this.flashPromotion=i()({},u)},handleDialogConfirm:function(){var e=this;this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?(console.log(e.isEdit),updateFlash(e.flashPromotion.typeId,e.flashPromotion).then(function(t){e.$message({message:"修改成功！",type:"success"}),e.dialogVisible=!1,e.getList()})):(new FormData).append("file",e.flashPromotion.file)})},tirggerFile:function(e){this.flashPromotion.file=e.target.files[0],console.log("file"+this.flashPromotion.file)},deleteExclusive:function(e){var t=this;this.$confirm("是否要删除该广告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.c)(e).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})})},batchDeleteExclusive:function(e){var t=this;this.$confirm("是否要删除该广告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var l=new URLSearchParams;l.append("ids",e),Object(n.c)(l).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})})}}},g={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[l("div",[l("i",{staticClass:"el-icon-search"}),e._v(" "),l("span",[e._v("筛选搜索")]),e._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSearchList()}}},[e._v("\n        查询搜索\n      ")]),e._v(" "),l("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(t){return e.handleResetSearch()}}},[e._v("\n        重置\n      ")])],1),e._v(" "),l("div",{staticStyle:{"margin-top":"15px"}},[l("el-form",{attrs:{inline:!0,model:e.listQuery,size:"small","label-width":"140px"}},[l("el-form-item",{attrs:{label:"商品名称："}},[l("el-input",{staticClass:"input-width",attrs:{placeholder:"广告名称"},model:{value:e.listQuery.siteName,callback:function(t){e.$set(e.listQuery,"siteName",t)},expression:"listQuery.siteName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"场景类型："}},[l("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.typeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"开始时间："}},[l("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.startTime,callback:function(t){e.$set(e.listQuery,"startTime",t)},expression:"listQuery.startTime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"到期时间："}},[l("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.endTime,callback:function(t){e.$set(e.listQuery,"endTime",t)},expression:"listQuery.endTime"}})],1)],1)],1)]),e._v(" "),l("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[l("i",{staticClass:"el-icon-tickets"}),e._v(" "),l("span",[e._v("数据列表")]),e._v(" "),l("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加会员专属")])],1),e._v(" "),l("div",{staticClass:"table-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"homeAdvertiseTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"编号",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.exclusiveId))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.productName))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"初始价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.originalPrice))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"专属价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.exclusivePrice))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"最小会员等级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.minimumLevel))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"购买数量限制",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.quantityRestrictions))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"总数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.provideNumber))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"专属状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.status))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"购买总数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.count))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"时间阶段",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("从"+e._s(t.row.startTime)+"到"+e._s(t.row.endTime))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return e.handleUpdate(t.$index,t.row)}}},[e._v("编辑\n          ")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除\n          ")])]}}])})],1)],1),e._v(" "),l("div",{staticClass:"addExclusiveAdd"},[l("el-dialog",{attrs:{title:"选择商品",visible:e.selectDialogVisible,width:"50%"},on:{"update:visible":function(t){e.selectDialogVisible=t}}},[l("el-input",{staticStyle:{width:"250px","margin-bottom":"20px"},attrs:{size:"small",placeholder:"商品名称搜索"},model:{value:e.dialogData.listQuery.keywords,callback:function(t){e.$set(e.dialogData.listQuery,"keywords",t)},expression:"dialogData.listQuery.keywords"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.handleSelectSearch()}},slot:"append"})],1),e._v(" "),l("el-table",{attrs:{data:e.dialogData.list,border:""},on:{"selection-change":e.handleDialogSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"商品ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.productId))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"商品名称",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.productName))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"价格",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.salePrice))]}}])})],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":e.dialogData.listQuery.pageNum,"page-size":e.dialogData.listQuery.pageSize,"page-sizes":[5,10,15],total:e.dialogData.total},on:{"size-change":e.handleDialogSizeChange,"current-change":e.handleDialogCurrentChange,"update:currentPage":function(t){return e.$set(e.dialogData.listQuery,"pageNum",t)},"update:current-page":function(t){return e.$set(e.dialogData.listQuery,"pageNum",t)}}})],1),e._v(" "),l("div",{staticStyle:{clear:"both"}}),e._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(t){e.selectDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.handleSelectDialogConfirm()}}},[e._v("确 定")])],1)],1)],1),e._v(" "),l("div",{staticClass:"batch-operate-container"},[l("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:e.operateType,callback:function(t){e.operateType=t},expression:"operateType"}},e._l(e.operates,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),l("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleBatchOperate()}}},[e._v("\n      确定\n    ")])],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":e.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":e.listQuery.pageNum,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.listQuery,"pageNum",t)},"update:current-page":function(t){return e.$set(e.listQuery,"pageNum",t)}}})],1),e._v(" "),l("el-dialog",{attrs:{title:"导入场景",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{ref:"flashPromotionForm",attrs:{model:e.flashPromotion,"label-width":"150px",size:"small"}},[l("el-form-item",{attrs:{label:"场景文件："}},[l("input",{staticClass:"bannerFile",attrs:{type:"file",multiple:"","ng-submit":"",accept:"aplication/zip,aplication/rar"},on:{change:function(t){return e.tirggerFile(t)}}})])],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleDialogConfirm()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=l("VU/8")(d,g,!1,function(e){l("87Lh")},"data-v-0e2fa931",null);t.default=p.exports}});
//# sourceMappingURL=60.5e306b01c2bf8dcc7822.js.map