webpackJsonp([43],{Ygz6:function(t,e){},jGWN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),l=a.n(i),n=a("vLgD");function s(t){return Object(n.a)({url:"/feedback/getFeedbackList",method:"get",params:t})}var o=a("xT6B"),r={pageNum:1,pageSize:5,subjectName:null,recommendStatus:null},c=[{label:"未推荐",value:0},{label:"推荐中",value:1}],u={name:"homeSubjectList",data:function(){return{listQuery:l()({},r),recommendOptions:l()({},c),list:null,total:null,listLoading:!1,multipleSelection:[],operates:[{label:"设为推荐",value:0},{label:"取消推荐",value:1},{label:"删除",value:2}],operateType:null,selectDialogVisible:!1,dialogData:{list:null,total:null,multipleSelection:[],listQuery:{keyword:null,pageNum:1,pageSize:5}},sortDialogVisible:!1,sortDialogData:{sort:0,id:null}}},created:function(){this.getList()},filters:{formatRecommendStatus:function(t){return 1===t?"推荐中":"未推荐"},formatTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(o.a)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch:function(){this.listQuery=l()({},r)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleRecommendStatusStatusChange:function(t,e){this.updateRecommendStatusStatus(e.id,e.recommendStatus)},handleDelete:function(t,e){this.deleteSubject(e.feedbackId)},handleBatchOperate:function(){if(this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{for(var t=[],e=0;e<this.multipleSelection.length;e++)t.push(this.multipleSelection[e].feedbackId);console.log("ids"+t),0===this.operateType?this.updateRecommendStatusStatus(t,1):1===this.operateType?this.updateRecommendStatusStatus(t,0):2===this.operateType?this.deleteSubject(t):this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3})}},handleSelectSubject:function(){this.selectDialogVisible=!0,this.dialogData.listQuery.keyword=null,this.getDialogList()},handleSelectSearch:function(){this.getDialogList()},handleDialogSizeChange:function(t){this.dialogData.listQuery.pageNum=1,this.dialogData.listQuery.pageSize=t,this.getDialogList()},handleDialogCurrentChange:function(t){this.dialogData.listQuery.pageNum=t,this.getDialogList()},handleDialogSelectionChange:function(t){this.dialogData.multipleSelection=t},handleSelectDialogConfirm:function(){var t=this;if(this.dialogData.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{for(var e=[],a=0;a<this.dialogData.multipleSelection.length;a++)e.push({subjectId:this.dialogData.multipleSelection[a].id,subjectName:this.dialogData.multipleSelection[a].title});this.$confirm("使用要进行添加操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a=e,Object(n.a)({url:"/home/recommendSubject/create",method:"post",data:a})).then(function(e){t.selectDialogVisible=!1,t.dialogData.multipleSelection=[],t.getList(),t.$message({type:"success",message:"添加成功!"})})})}},handleEditSort:function(t,e){this.sortDialogVisible=!0,this.sortDialogData.replyContent=e.replyContent,this.sortDialogData.feedbackId=e.feedbackId},handleUpdateSort:function(){var t=this;this.$confirm("是否要修改排序?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e;(e=t.sortDialogData,Object(n.a)({url:"/feedback/modifyFeedback/"+e.feedbackId,method:"put",params:e})).then(function(e){t.sortDialogVisible=!1,t.getList(),t.$message({type:"success",message:"回复反馈成功!"})})})},getList:function(){var t=this;this.listLoading=!0,s(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data,t.total=e.total})},updateRecommendStatusStatus:function(t,e){var a=this;this.$confirm("是否要修改推荐状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i,l=new URLSearchParams;l.append("ids",t),l.append("recommendStatus",e),(i=l,Object(n.a)({url:"/home/recommendSubject/update/recommendStatus",method:"post",data:i})).then(function(t){a.getList(),a.$message({type:"success",message:"修改成功!"})})}).catch(function(){a.$message({type:"success",message:"已取消操作!"}),a.getList()})},deleteSubject:function(t){var e=this;this.$confirm("是否要删除该推荐?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a,i=new URLSearchParams;i.append("ids",t),(a=i,Object(n.a)({url:"/feedback/batchDelete",method:"post",data:a})).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})})},getDialogList:function(){var t=this;s(this.dialogData.listQuery).then(function(e){t.dialogData.list=e.data.list,t.dialogData.total=e.data.total})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"用户昵称："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"用户昵称"},model:{value:t.listQuery.nickName,callback:function(e){t.$set(t.listQuery,"nickName",e)},expression:"listQuery.nickName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"反馈内容："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"反馈内容"},model:{value:t.listQuery.content,callback:function(e){t.$set(t.listQuery,"content",e)},expression:"listQuery.content"}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),t._v(" "),a("span",[t._v("数据列表")]),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleSelectSubject()}}},[t._v("选择专题")])],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"newSubjectTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"编号",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.feedbackId))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.nickName))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"反馈内容",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.content))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"反馈图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"80px"},attrs:{src:t.row.imageUrl}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"官方回复",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.replyContent))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.handleEditSort(e.$index,e.row)}}},[t._v("回复\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"batch-operate-container"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.operateType,callback:function(e){t.operateType=e},expression:"operateType"}},t._l(t.operates,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleBatchOperate()}}},[t._v("\n      确定\n    ")])],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:"选择专题",visible:t.selectDialogVisible,width:"50%"},on:{"update:visible":function(e){t.selectDialogVisible=e}}},[a("el-input",{staticStyle:{width:"250px","margin-bottom":"20px"},attrs:{size:"small",placeholder:"专题名称搜索"},model:{value:t.dialogData.listQuery.keyword,callback:function(e){t.$set(t.dialogData.listQuery,"keyword",e)},expression:"dialogData.listQuery.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.handleSelectSearch()}},slot:"append"})],1),t._v(" "),a("el-table",{attrs:{data:t.dialogData.list,border:""},on:{"selection-change":t.handleDialogSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"专题名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.title))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属分类",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.categoryName))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"添加时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTime")(e.row.createTime)))]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.dialogData.listQuery.pageNum,"page-size":t.dialogData.listQuery.pageSize,"page-sizes":[5,10,15],total:t.dialogData.total},on:{"size-change":t.handleDialogSizeChange,"current-change":t.handleDialogCurrentChange,"update:currentPage":function(e){return t.$set(t.dialogData.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.dialogData.listQuery,"pageNum",e)}}})],1),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.selectDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleSelectDialogConfirm()}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"回复反馈",visible:t.sortDialogVisible,width:"40%"},on:{"update:visible":function(e){t.sortDialogVisible=e}}},[a("el-form",{attrs:{model:t.sortDialogData,"label-width":"100px"}},[a("el-form-item",[a("el-input",{staticClass:"input-width",attrs:{type:"textarea",rows:5,placeholder:"请输入回复内容"},model:{value:t.sortDialogData.replyContent,callback:function(e){t.$set(t.sortDialogData,"replyContent",e)},expression:"sortDialogData.replyContent"}})],1)],1),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.sortDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleUpdateSort}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(u,d,!1,function(t){a("Ygz6")},null,null);e.default=g.exports}});
//# sourceMappingURL=43.445d3ed70a36028ff6f5.js.map