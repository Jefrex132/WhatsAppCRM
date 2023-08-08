(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0943060b","chunk-2d22d1b9"],{1148:function(t,e,i){"use strict";var n=i("5926"),o=i("577e"),a=i("1d80"),s=RangeError;t.exports=function(t){var e=o(a(this)),i="",r=n(t);if(r<0||r==1/0)throw s("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(i+=e);return i}},"13d5":function(t,e,i){"use strict";var n=i("23e7"),o=i("d58f").left,a=i("a640"),s=i("2d00"),r=i("605d"),c=!r&&s>79&&s<83,l=c||!a("reduce");n({target:"Array",proto:!0,forced:l},{reduce:function(t){var e=arguments.length;return o(this,t,e,e>1?arguments[1]:void 0)}})},"9fe7":function(t,e,i){"use strict";i.r(e);i("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-card",[e("b-form",[e("div",{staticClass:"d-flex mb-5"},[e("span",{staticClass:"m-auto"}),e("b-button",{attrs:{variant:"outline-secondary mr-3"},on:{click:t.backInvoice}},[t._v(" Cancel ")]),e("b-button",{attrs:{variant:"primary"},on:{click:t.saveInvoice}},[t._v(" Save ")])],1),e("b-row",{staticClass:"justify-content-between"},[e("b-col",{attrs:{lg:"8",md:"6"}},[e("h4",{staticClass:"font-weight-bold"},[t._v("Order Info")]),e("b-form-group",{staticClass:"col-sm-4 mb-3 pl-0",attrs:{label:"Order Number"}},[e("b-form-input",{attrs:{placeholder:"Enter Order Number"},model:{value:t.newInvoice.invoiceId,callback:function(e){t.$set(t.newInvoice,"invoiceId",e)},expression:"newInvoice.invoiceId"}})],1),e("h2",[t._v(t._s(t.items.name))])],1),e("b-col",{staticClass:"text-right",attrs:{lg:"4",md:"6"}},[e("label",{staticClass:"d-block text-12 text-muted"},[t._v("Order Status")]),e("div",{staticClass:"col-md-6 offset-md-6 pr-0 mb-30"},[e("label",{staticClass:"radio radio-reverse radio-danger"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newInvoice.status,expression:"newInvoice.status"}],attrs:{type:"radio",name:"orderStatus",value:"Pending"},domProps:{checked:t._q(t.newInvoice.status,"Pending")},on:{change:function(e){return t.$set(t.newInvoice,"status","Pending")}}}),e("span",[t._v("Pending")]),e("span",{staticClass:"checkmark"})]),e("label",{staticClass:"radio radio-reverse radio-warning"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newInvoice.status,expression:"newInvoice.status"}],attrs:{type:"radio",name:"orderStatus",value:"Processing"},domProps:{checked:t._q(t.newInvoice.status,"Processing")},on:{change:function(e){return t.$set(t.newInvoice,"status","Processing")}}}),e("span",[t._v("Processing")]),e("span",{staticClass:"checkmark"})]),e("label",{staticClass:"radio radio-reverse radio-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newInvoice.status,expression:"newInvoice.status"}],attrs:{type:"radio",name:"orderStatus",value:"Delivered"},domProps:{checked:t._q(t.newInvoice.status,"Delivered")},on:{change:function(e){return t.$set(t.newInvoice,"status","Delivered")}}}),e("span",[t._v("Delivered")]),e("span",{staticClass:"checkmark"})])]),e("b-form-group",{staticClass:"mb-3",attrs:{label:"Order Date"}},[e("b-form-input",{staticClass:"input",attrs:{type:"date"},model:{value:t.newInvoice.date,callback:function(e){t.$set(t.newInvoice,"date",e)},expression:"newInvoice.date"}})],1)],1)],1),e("div",{staticClass:"mt-3 mb-30 border-top"}),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{md:"6"}},[e("h5",{staticClass:"font-weight-bold"},[t._v("Bill From")]),e("b-form-group",{staticClass:"col-md-10 mb-3 pl-0"},[e("b-form-input",{attrs:{placeholder:"Bill From",type:"text",required:""},model:{value:t.newInvoice.billFrom,callback:function(e){t.$set(t.newInvoice,"billFrom",e)},expression:"newInvoice.billFrom"}})],1),e("b-form-group",{staticClass:"col-md-10 mb-3 pl-0"},[e("b-form-textarea",{attrs:{placeholder:"Bill Form Address"},model:{value:t.newInvoice.billFromAdress,callback:function(e){t.$set(t.newInvoice,"billFromAdress",e)},expression:"newInvoice.billFromAdress"}})],1)],1),e("b-col",{staticClass:"text-right",attrs:{md:"6"}},[e("h5",{staticClass:"font-weight-bold"},[t._v("Bill To")]),e("b-form-group",{staticClass:"col-md-10 offset-md-2 mb-3 pr-0"},[e("b-form-input",{attrs:{placeholder:"Bill to"},model:{value:t.newInvoice.billTo,callback:function(e){t.$set(t.newInvoice,"billTo",e)},expression:"newInvoice.billTo"}})],1),e("b-form-group",{staticClass:"col-md-10 offset-md-2 mb-3 pr-0"},[e("b-form-textarea",{attrs:{placeholder:"Bill To Address"},model:{value:t.newInvoice.billToAdress,callback:function(e){t.$set(t.newInvoice,"billToAdress",e)},expression:"newInvoice.billToAdress"}})],1)],1)],1),e("b-row",[e("b-col",{staticClass:"table-responsive",attrs:{md:"12"}},[e("b-table",{attrs:{hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"index",fn:function(i){return[e("p",{staticClass:"font-weight-bold"},[t._v(t._s(i.index+1))])]}},{key:"unitPrice",fn:function(i){return[e("input",{directives:[{name:"model",rawName:"v-model",value:i.item.unitPrice,expression:"data.item.unitPrice"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Unit Price"},domProps:{value:i.item.unitPrice},on:{change:function(e){return t.calculateLineTotal(i.item)},input:function(e){e.target.composing||t.$set(i.item,"unitPrice",e.target.value)}}})]}},{key:"unit",fn:function(i){return[e("input",{directives:[{name:"model",rawName:"v-model",value:i.item.unit,expression:"data.item.unit"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Unit"},domProps:{value:i.item.unit},on:{change:function(e){return t.calculateLineTotal(i.item)},input:function(e){e.target.composing||t.$set(i.item,"unit",e.target.value)}}})]}},{key:"cost",fn:function(i){return[e("input",{directives:[{name:"model",rawName:"v-model",value:i.item.cost,expression:"data.item.cost"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:i.item.cost},on:{input:function(e){e.target.composing||t.$set(i.item,"cost",e.target.value)}}})]}},{key:"action",fn:function(i){return[e("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.deleteRow(i.index,i.item)}}},[t._v("Delete")])]}}])},[e("template",{slot:"itemName"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Item Name"}})])],2),e("b-button",{staticClass:"float-right mb-30",attrs:{variant:"primary"},on:{click:t.addNewRow}},[t._v(" Add Item ")])],1),e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"invoice-summary invoice-summary-input float-right"},[e("p",[t._v(" Sub total: "),e("span",[t._v(t._s(t.subTotal))])]),e("p",{staticClass:"d-flex align-items-center"},[t._v(" Vat(%): "),e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.invoice_tax,expression:"invoice_tax"}],staticClass:"form-control small-input",attrs:{type:"text"},domProps:{value:t.invoice_tax},on:{change:function(e){return t.invoiceTotal(t.invoice_tax)},input:function(e){e.target.composing||(t.invoice_tax=e.target.value)}}})])]),e("h5",{staticClass:"font-weight-bold d-flex align-items-center"},[t._v(" Grand Total: "),e("span",[t._v(" "+t._s(t.invoice_total)+" ")])])])])],1)],1)],1)],1)],1)],1)},o=[],a=i("5530"),s=i("ade3"),r=(i("14d9"),i("13d5"),i("d3b7"),i("b680"),i("a434"),i("2f62")),c=i("f5a5"),l={components:{invoice:c["default"]},data:function(){var t;return{orderNumber:0,subTotal:0,invoice_subtotal:0,invoice_total:0,invoice_tax:0,newInvoice:(t={billFrom:"",billTo:"",status:"",billFromAddress:"",billToAdress:""},Object(s["a"])(t,"status",""),Object(s["a"])(t,"invoiceId",""),Object(s["a"])(t,"date",null),t),name:"",fields:["index","itemName","unitPrice","unit","cost","action"],items:[{itemName:"",unitPrice:"",unit:"",cost:0}]}},methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["addInvoice","editInvoice"])),{},{saveInvoice:function(){this.addInvoice(this.newInvoice),this.$router.push("/app/apps/printInvoice")},backInvoice:function(){this.$router.push("/app/apps/invoice")},addNewRow:function(){this.items.push({itemName:"",unitPrice:"",unit:"",cost:0})},invoiceTotal:function(){var t,e;t=this.items.reduce((function(t,e){var i=parseFloat(e.cost);if(!isNaN(i))return t+i}),0),this.subTotal=t.toFixed(2),e=t*(this.invoice_tax/100)+t,e=parseFloat(e),console.log(e),isNaN(e)?this.invoice_total="0.00":this.invoice_total=e.toFixed(2)},deleteRow:function(t,e){console.log("Removing",e,t),this.items.splice(t,1)},calculateLineTotal:function(t){var e=parseInt(t.unitPrice)*parseInt(t.unit);isNaN(e)||(t.cost=e.toFixed(2)),this.invoiceTotal()},removeRow:function(t){this.rows.splice(this.rows.indexOf(t),1)}})},u=l,d=i("2877"),v=Object(d["a"])(u,n,o,!1,null,null,null);e["default"]=v.exports},b680:function(t,e,i){"use strict";var n=i("23e7"),o=i("e330"),a=i("5926"),s=i("408a"),r=i("1148"),c=i("d039"),l=RangeError,u=String,d=Math.floor,v=o(r),m=o("".slice),b=o(1..toFixed),p=function(t,e,i){return 0===e?i:e%2===1?p(t,e-1,i*t):p(t*t,e/2,i)},f=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=function(t,e,i){var n=-1,o=i;while(++n<6)o+=e*t[n],t[n]=o%1e7,o=d(o/1e7)},w=function(t,e){var i=6,n=0;while(--i>=0)n+=t[i],t[i]=d(n/e),n=n%e*1e7},g=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var n=u(t[e]);i=""===i?n:i+v("0",7-n.length)+n}return i},I=c((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!c((function(){b({})}));n({target:"Number",proto:!0,forced:I},{toFixed:function(t){var e,i,n,o,r=s(this),c=a(t),d=[0,0,0,0,0,0],b="",I="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return u(r);if(r<0&&(b="-",r=-r),r>1e-21)if(e=f(r*p(2,69,1))-69,i=e<0?r*p(2,-e,1):r/p(2,e,1),i*=4503599627370496,e=52-e,e>0){h(d,0,i),n=c;while(n>=7)h(d,1e7,0),n-=7;h(d,p(10,n,1),0),n=e-1;while(n>=23)w(d,1<<23),n-=23;w(d,1<<n),h(d,1,1),w(d,2),I=g(d)}else h(d,0,i),h(d,1<<-e,0),I=g(d)+v("0",c);return c>0?(o=I.length,I=b+(o<=c?"0."+v("0",c-o)+I:m(I,0,o-c)+"."+m(I,o-c))):I=b+I,I}})},d58f:function(t,e,i){"use strict";var n=i("59ed"),o=i("7b0b"),a=i("44ad"),s=i("07fa"),r=TypeError,c=function(t){return function(e,i,c,l){n(i);var u=o(e),d=a(u),v=s(u),m=t?v-1:0,b=t?-1:1;if(c<2)while(1){if(m in d){l=d[m],m+=b;break}if(m+=b,t?m<0:v<=m)throw r("Reduce of empty array with no initial value")}for(;t?m>=0:v>m;m+=b)m in d&&(l=i(l,d[m],m,u));return l}};t.exports={left:c(!1),right:c(!0)}},f5a5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Invoice",folder:"Apps"}}),e("div",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table",selectionInfoClass:" flex-column flex-sm-row"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:t.invoiceList},scopedSlots:t._u([{key:"table-row",fn:function(i){return["button"==i.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"Edit"},on:{click:function(e){return t.editInvoiceData(i.row)}}},[e("i",{staticClass:"i-Eraser-2 text-25 text-info mr-2"}),t._v(" "+t._s(i.row.button))]),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"View"},on:{click:function(e){return t.viewInvoicePage(i.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success mr-2"}),t._v(" "+t._s(i.row.button))]),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"Delete"},on:{click:function(e){return t.removeInvoice(i.row.invoiceId)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"}),t._v(" "+t._s(i.row.button))])]):t._e()]}}])},[e("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded d-sm-block d-none",attrs:{variant:"primary"},on:{click:t.createInvoice}},[t._v(" Create New Invoice ")])],1)])],1)],1)])},o=[],a=i("5530"),s=i("ade3"),r=(i("14d9"),i("2f62")),c={data:function(){return Object(s["a"])({input:[{name:""}],columns:[{label:"Bill From",field:"billFrom"},{label:"Bill To",field:"billTo"},{label:"Status",field:"status",html:!0},{label:"Button",field:"button",html:!0,tdClass:"text-right",thClass:"text-right"}],newTodo:""},"input",[{name:""}])},computed:Object(r["c"])(["invoiceList"]),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["editInvoice","removeInvoice","viewInvoice"])),{},{editInvoiceData:function(t){this.editInvoice(t),this.$router.push("/app/apps/edit-invoice")},viewInvoicePage:function(t){this.viewInvoice(t),this.$router.push("/app/apps/printInvoice")},createInvoice:function(){this.$router.push("/app/apps/createInvoice")}})},l=c,u=i("2877"),d=Object(u["a"])(l,n,o,!1,null,null,null);e["default"]=d.exports}}]);