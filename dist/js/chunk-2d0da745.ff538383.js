(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da745"],{"6c57":function(t,e,o){"use strict";o.r(e);o("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Basic Action Bar",folder:"Forms"}}),e("b-row",[e("b-col",{staticClass:"mb-3",attrs:{lg:"6"}},[e("b-card",{attrs:{title:"Default Action Bar"}},[e("div",[t.show?e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{staticClass:"mb-30",attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("div",{staticClass:"custom-separator"})],1),e("div",{staticClass:"card-title"},[t._v("Communication")]),e("b-form-group",{staticClass:"mt-4",attrs:{id:"input-group-4"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[e("b-form-checkbox-group",{attrs:{id:"checkboxes-4"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Email")])],1),e("b-form-checkbox-group",{attrs:{id:"checkboxes-4"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("SMS")])],1),e("b-form-checkbox-group",{attrs:{id:"checkboxes-4"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Phone")])],1)],1),e("div",{staticClass:"mt-4"},[e("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1):t._e()],1)])],1)],1)],1)},r=[],s={metaInfo:{title:"Basic Action Bar"},data:function(){return{form:{email:"",name:"",food:null,checked:[]},show:!0}},methods:{onSubmit:function(t){t.preventDefault();this.$swal({position:"top-end",type:"success",title:"Your File Has Been Submitted",showConfirmButton:!1,timer:1500})},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},i=s,n=o("2877"),c=Object(n["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports}}]);