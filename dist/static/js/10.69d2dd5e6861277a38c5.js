webpackJsonp([10],{"030y":function(e,t,i){"use strict";var s=i("woOf"),r=i.n(s),l=i("TZVV"),o=i("ZbmZ"),n=i("UgCr"),a=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],d={exclusiveName:null,exclusiveType:1,imageUrl:null,startDate:null,endDate:null,status:0,jumpUrl:null,description:null,sortIndex:0},c={name:"HomeAdvertiseDetail",components:{SingleUpload:l.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{homeAdvertise:{provinceCode:"",cityCode:"",districtCode:"",age:"",exclusiveType:"",latitude:"",longitude:""},provinceList:null,cityList:null,districtList:null,dialogData:{list:null,total:null,multipleSelection:[],listQuery:{keywords:null,pageNum:1,pageSize:5}},rules:{exclusiveName:[{required:!0,message:"请输入场景名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],jumpUrl:[{required:!0,message:"请输入广告链接",trigger:"blur"}],startDate:[{required:!0,message:"请选择开始时间",trigger:"blur"}],endDate:[{required:!0,message:"请选择到期时间",trigger:"blur"}],imageUrl:[{required:!0,message:"请选择广告图片",trigger:"blur"}]},typeOptions:r()({},a)}},created:function(){var e=this;this.isEdit?(console.log("exclusiveId is"+this.$route.query.exclusiveId),Object(o.f)({exclusiveId:this.$route.query.exclusiveId}).then(function(t){console.log(t.data),e.homeAdvertise=t.data})):this.homeAdvertise=r()({},d)},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?(console.log(t.homeAdvertise),Object(o.g)(t.$route.query.exclusiveId,t.homeAdvertise).then(function(i){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()})):Object(o.a)(t.homeAdvertise).then(function(i){t.$refs[e].resetFields(),t.homeAdvertise=r()({},d),t.$message({message:"提交成功",type:"success",duration:1e3})})})})},tirggerIconFile:function(e){this.homeAdvertise.iconFile=e.target.files[0],console.log("iconFile"+this.homeAdvertise.iconFile)},tirggerBlFile:function(e){this.homeAdvertise.blFile=e.target.files[0],console.log("blFile"+this.homeAdvertise.blFile)},tirggerIfFile:function(e){this.homeAdvertise.ifFile=e.target.files[0],console.log("ifFile"+this.homeAdvertise.ifFile)},tirggerIbFile:function(e){this.homeAdvertise.ibFile=e.target.files[0],console.log("ibFile"+this.homeAdvertise.ibFile)},tirggerIhFile:function(e){this.homeAdvertise.ihFile=e.target.files[0],console.log("ihFile"+this.homeAdvertise.ihFile)},getCitys:function(){var e=this;console.log("getCitys");var t={level:3};t.parentCode=this.homeAdvertise.provinceCode,this.homeAdvertise.cityCode=null,this.homeAdvertise.districtCode=null,this.cityList=null,this.districtList=null,Object(o.e)(t).then(function(t){e.cityList=t.data,console.log(e.cityList)})},getDistricts:function(){var e=this;console.log("getDistricts");var t={level:4};t.parentCode=this.homeAdvertise.cityCode,this.homeAdvertise.districtCode=null,this.districtList=null,Object(o.e)(t).then(function(t){e.districtList=t.data,console.log(e.districtList)})},selectCity:function(){console.log("districtCode"+this.homeAdvertise.districtCode),this.homeAdvertise.cityId=this.homeAdvertise.districtCode},resetForm:function(e){this.$refs[e].resetFields(),this.homeAdvertise=r()({},d)},getDialogList:function(){var e=this;Object(n.f)(this.dialogData.listQuery).then(function(t){console.log(t.data),e.dialogData.list=t.data,e.dialogData.total=t.total})},handleSelectDialogConfirm:function(){console.log("确认提交")}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[i("el-form",{ref:"homeAdvertiseFrom",attrs:{model:e.homeAdvertise,rules:e.rules,"label-width":"150px",size:"small"}},[i("el-form-item",{attrs:{label:"初始价格：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.originalPrice,callback:function(t){e.$set(e.homeAdvertise,"originalPrice",t)},expression:"homeAdvertise.originalPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"专属价格：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.currentPrice,callback:function(t){e.$set(e.homeAdvertise,"currentPrice",t)},expression:"homeAdvertise.currentPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"最小等级："}},[i("el-select",{model:{value:e.homeAdvertise.minimumLevel,callback:function(t){e.$set(e.homeAdvertise,"minimumLevel",t)},expression:"homeAdvertise.minimumLevel"}},e._l(e.typeOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"购买数量限制：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.quantityRestrictions,callback:function(t){e.$set(e.homeAdvertise,"quantityRestrictions",t)},expression:"homeAdvertise.quantityRestrictions"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"总数量：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.provideNumber,callback:function(t){e.$set(e.homeAdvertise,"provideNumber",t)},expression:"homeAdvertise.provideNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"开始时间："}},[i("el-date-picker",{attrs:{type:"date","value-format":"timestamp",format:"yyyy 年 MM 月 dd 日",placeholder:"请选择时间"},model:{value:e.homeAdvertise.startTime,callback:function(t){e.$set(e.homeAdvertise,"startTime",t)},expression:"homeAdvertise.startTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"结束时间："}},[i("el-date-picker",{attrs:{type:"date","value-format":"timestamp",format:"yyyy 年 MM 月 dd 日",placeholder:"请选择时间"},model:{value:e.homeAdvertise.endTime,callback:function(t){e.$set(e.homeAdvertise,"endTime",t)},expression:"homeAdvertise.endTime"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("homeAdvertiseFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():i("el-button",{on:{click:function(t){return e.resetForm("homeAdvertiseFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(c,u,!1,function(e){i("oet6")},"data-v-487d25f0",null);t.a=m.exports},LeaR:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"updateHomeAdvertise",components:{HomeAdvertiseDetail:i("030y").a}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("home-advertise-detail",{attrs:{isEdit:!0}})},staticRenderFns:[]};var l=i("VU/8")(s,r,!1,function(e){i("Qf68")},null,null);t.default=l.exports},Qf68:function(e,t){},oet6:function(e,t){}});
//# sourceMappingURL=10.69d2dd5e6861277a38c5.js.map