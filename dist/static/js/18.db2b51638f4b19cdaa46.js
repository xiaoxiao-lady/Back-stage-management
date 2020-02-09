webpackJsonp([18],{"/u7x":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),o=n.n(a),l=n("iO/K"),r=[{label:"灯光师",value:1},{label:"音响师",value:2},{label:"视频师",value:3},{label:"项目经理",value:4},{label:"搭建",value:5},{label:"舞美",value:6}],i=[{label:"男",value:1},{label:"女",value:2}],s={bannerName:null,jumpUrl:null,bannerType:1,description:null,sortIndex:0,imageUrl:null,startDate:null,endDate:null,status:0,nickName:""},c={name:"HomeAdvertiseDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{technologyType:null,rules:{typeName:[{required:!0,message:"类型名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],jumpUrl:[{required:!0,message:"请输入广告链接",trigger:"blur"}],startDate:[{required:!0,message:"请选择开始时间",trigger:"blur"}],endDate:[{required:!0,message:"请选择到期时间",trigger:"blur"}],imageUrl:[{required:!0,message:"请选择广告图片",trigger:"blur"}]},typeOptions:o()({},r),genderOptions:o()({},i)}},created:function(){var e=this;this.isEdit?(console.log("typeId is"+this.$route.query.typeId),Object(l.f)(this.$route.query.typeId).then(function(t){e.technologyType=t.data})):this.technologyType=o()({},s)},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(n){if(!n)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){if(t.isEdit){var n={typeId:t.technologyType.typeId,typeName:t.technologyType.typeName,minSalary:t.technologyType.minSalary,maxSalary:t.technologyType.maxSalary,activated:t.technologyType.activated};Object(l.h)(n).then(function(n){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()})}else Object(l.b)(t.technology).then(function(n){t.$refs[e].resetFields(),t.technology=o()({},s),t.$message({message:"提交成功",type:"success",duration:1e3})})})})},resetForm:function(e){this.$refs[e].resetFields(),this.technology=o()({},s)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[n("el-form",{ref:"technologyTypeFrom",attrs:{model:e.technologyType,rules:e.rules,"label-width":"150px",size:"small"}},[n("el-form-item",{attrs:{label:"技术人员姓名：",prop:"typeName"}},[n("el-input",{staticClass:"input-width",model:{value:e.technologyType.typeName,callback:function(t){e.$set(e.technologyType,"typeName",t)},expression:"technologyType.typeName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"技术人员姓名：",prop:"name"}},[n("el-input",{staticClass:"input-width",model:{value:e.technologyType.minSalary,callback:function(t){e.$set(e.technologyType,"minSalary",t)},expression:"technologyType.minSalary"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"技术人员工作经验："}},[n("el-input",{staticClass:"input-width",model:{value:e.technologyType.maxSalary,callback:function(t){e.$set(e.technologyType,"maxSalary",t)},expression:"technologyType.maxSalary"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"启用/禁用："}},[n("el-radio-group",{model:{value:e.technologyType.activated,callback:function(t){e.$set(e.technologyType,"activated",t)},expression:"technologyType.activated"}},[n("el-radio",{attrs:{label:0}},[e._v("启用")]),e._v(" "),n("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("technologyTypeFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():n("el-button",{on:{click:function(t){return e.resetForm("technologyTypeFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var y={name:"updateHomeAdvertise",components:{HomeAdvertiseDetail:n("VU/8")(c,u,!1,function(e){n("mazb")},"data-v-19453936",null).exports}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("home-advertise-detail",{attrs:{isEdit:!0}})},staticRenderFns:[]};var p=n("VU/8")(y,m,!1,function(e){n("4ScZ")},null,null);t.default=p.exports},"4ScZ":function(e,t){},"iO/K":function(e,t,n){"use strict";t.e=function(e){return Object(a.a)({url:"/technologyType/getTechnologyTypeList",method:"get",params:e})},t.g=function(e,t){return Object(a.a)({url:"/technology/modifyTechnologyRecommend/"+e,method:"post",params:t})},t.d=function(e){return Object(a.a)({url:"/technology/deleteTechnology",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/banner/deleteBanner",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/technology/batchDeleteTechnology",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/banner/addBanner",method:"post",params:e})},t.f=function(e){return Object(a.a)({url:"/technologyType/getTechnologyTypeById/"+e,method:"get",params:e})},t.h=function(e){return Object(a.a)({url:"/technologyType/modifyTechnologyType/",method:"post",data:e,contentType:"application/json; charset=UTF-8"})};var a=n("vLgD")},mazb:function(e,t){}});
//# sourceMappingURL=18.db2b51638f4b19cdaa46.js.map