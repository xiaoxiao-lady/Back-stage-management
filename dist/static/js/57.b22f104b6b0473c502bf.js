webpackJsonp([57],{WkeR:function(t,e){},ybMv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),l=n.n(a),i=n("4cjj"),r=n("xT6B"),o={pageNum:1,pageSize:10,couponName:null,couponType:null,merchantId:null},s=[{label:"全场赠券",value:1},{label:"会员赠券",value:2},{label:"购物赠券",value:3},{label:"注册赠券",value:4}],u={name:"couponList",data:function(){return{listQuery:l()({},o),typeOptions:l()({},s),list:null,total:null,listLoading:!1,multipleSelection:[]}},created:function(){this.getList()},filters:{formatType:function(t){for(var e=0;e<s.length;e++)if(t===s[e].value)return s[e].label;return""},formatUseType:function(t){return 0===t?"全场通用":1===t?"指定分类":"指定商品"},formatPlatform:function(t){return 1===t?"移动平台":2===t?"PC平台":"全平台"},formatDate:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(r.a)(e,"yyyy-MM-dd")},formatStatus:function(t){var e=(new Date).getTime();return new Date(t).getTime()>e?"未过期":"已过期"}},methods:{handleResetSearch:function(){this.listQuery=l()({},o)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleAdd:function(){this.$router.push({path:"/wms/addCoupon",query:{merchantId:this.$route.query.merchantId}})},handleView:function(t,e){this.$router.push({path:"/ums/couponHistory",query:{id:e.couponId}})},handleUpdate:function(t,e){this.$router.push({path:"/wms/updateCoupon",query:{couponId:e.couponId,merchantId:this.$route.query.merchantId}})},handleDelete:function(t,e){var n=this;this.$confirm("是否进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)(e.couponId).then(function(t){n.$message({type:"success",message:"删除成功!"}),n.getList()})})},getList:function(){var t=this;this.listLoading=!0,this.listQuery.merchantId=this.$route.query.merchantId,Object(i.c)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data,t.total=e.total})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),t._v(" "),n("span",[t._v("筛选搜索")]),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"优惠券名称："}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"优惠券名称"},model:{value:t.listQuery.couponName,callback:function(e){t.$set(t.listQuery,"couponName",e)},expression:"listQuery.couponName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"优惠券类型："}},[n("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.couponType,callback:function(e){t.$set(t.listQuery,"couponType",e)},expression:"listQuery.couponType"}},t._l(t.typeOptions,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1)]),t._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",[t._v("数据列表")]),t._v(" "),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"couponTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.couponId))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"优惠劵名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.couponName))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"优惠券类型",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatType")(e.row.couponType)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"可使用商品",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatUseType")(e.row.useType)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"使用门槛",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("满"+t._s(e.row.minPoint)+"元可用")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"面值",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.amount)+"元")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"有效期",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.startTime))+"至"+t._s(t._f("formatDate")(e.row.endTime)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatStatus")(e.row.endTime)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleUpdate(e.$index,e.row)}}},[t._v("\n            编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(t){n("WkeR")},"data-v-2a7e1693",null);e.default=d.exports}});
//# sourceMappingURL=57.b22f104b6b0473c502bf.js.map