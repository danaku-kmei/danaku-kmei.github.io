(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{636:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(169),n=t(2),r=t.n(n),m=t(635),c=r.a.memo((function(e){var a=e.name,t=e.text,n=Object(l.a)(e,["name","text"]),c=a?"https://coreui.io/react/docs/components/".concat(a):e.href;return r.a.createElement("div",{className:"card-header-actions"},r.a.createElement(m.ab,Object.assign({},n,{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),r.a.createElement("small",{className:"text-muted"},t||"docs")))}))},640:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t(641);function n(e,a){if(e){if("string"===typeof e)return Object(l.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(l.a)(e,a):void 0}}},641:function(e,a,t){"use strict";function l(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}t.d(a,"a",(function(){return l}))},642:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(643);var n=t(640),r=t(644);function m(e,a){return Object(l.a)(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],l=!0,n=!1,r=void 0;try{for(var m,c=e[Symbol.iterator]();!(l=(m=c.next()).done)&&(t.push(m.value),!a||t.length!==a);l=!0);}catch(o){n=!0,r=o}finally{try{l||null==c.return||c.return()}finally{if(n)throw r}}return t}}(e,a)||Object(n.a)(e,a)||Object(r.a)()}},643:function(e,a,t){"use strict";function l(e){if(Array.isArray(e))return e}t.d(a,"a",(function(){return l}))},644:function(e,a,t){"use strict";function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(a,"a",(function(){return l}))},870:function(e,a,t){"use strict";t.r(a);var l=t(642),n=t(2),r=t.n(n),m=t(635),c=t(648),o=t(636);a.default=function(){var e=r.a.useState(!0),a=Object(l.a)(e,2),t=a[0],n=a[1],E=r.a.useState(!0),i=Object(l.a)(E,2),u=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",sm:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Credit Card",r.a.createElement("small",null," Form"),r.a.createElement(o.a,{name:"-Input"})),r.a.createElement(m.k,null,r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"name"},"Name"),r.a.createElement(m.P,{id:"name",placeholder:"Enter your name",required:!0})))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"ccnumber"},"Credit Card Number"),r.a.createElement(m.P,{id:"ccnumber",placeholder:"0000 0000 0000 0000",required:!0})))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"ccmonth"},"Month"),r.a.createElement(m.ub,{custom:!0,name:"ccmonth",id:"ccmonth"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12")))),r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"ccyear"},"Year"),r.a.createElement(m.ub,{custom:!0,name:"ccyear",id:"ccyear"},r.a.createElement("option",null,"2017"),r.a.createElement("option",null,"2018"),r.a.createElement("option",null,"2019"),r.a.createElement("option",null,"2020"),r.a.createElement("option",null,"2021"),r.a.createElement("option",null,"2022"),r.a.createElement("option",null,"2023"),r.a.createElement("option",null,"2024"),r.a.createElement("option",null,"2025"),r.a.createElement("option",null,"2026")))),r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"cvv"},"CVV/CVC"),r.a.createElement(m.P,{id:"cvv",placeholder:"123",required:!0}))))))),r.a.createElement(m.u,{xs:"12",sm:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Company",r.a.createElement("small",null," Form")),r.a.createElement(m.k,null,r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"company"},"Company"),r.a.createElement(m.P,{id:"company",placeholder:"Enter your company name"})),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"vat"},"VAT"),r.a.createElement(m.P,{id:"vat",placeholder:"DE1234567890"})),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"street"},"Street"),r.a.createElement(m.P,{id:"street",placeholder:"Enter street name"})),r.a.createElement(m.K,{row:!0,className:"my-0"},r.a.createElement(m.u,{xs:"8"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"city"},"City"),r.a.createElement(m.P,{id:"city",placeholder:"Enter your city"}))),r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"postal-code"},"Postal Code"),r.a.createElement(m.P,{id:"postal-code",placeholder:"Postal Code"})))),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"country"},"Country"),r.a.createElement(m.P,{id:"country",placeholder:"Country name"})))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",md:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Basic Form",r.a.createElement("small",null," Elements")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Static")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement("p",{className:"form-control-static"},"Username"))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"text-input"},"Text Input")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{id:"text-input",name:"text-input",placeholder:"Text"}),r.a.createElement(m.L,null,"This is a help text"))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"email-input"},"Email Input")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{type:"email",id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),r.a.createElement(m.L,{className:"help-block"},"Please enter your email"))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"password-input"},"Password")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{type:"password",id:"password-input",name:"password-input",placeholder:"Password",autoComplete:"new-password"}),r.a.createElement(m.L,{className:"help-block"},"Please enter a complex password"))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"date-input"},"Date Input")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"disabled-input"},"Disabled Input")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{id:"disabled-input",name:"disabled-input",placeholder:"Disabled",disabled:!0}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"textarea-input"},"Textarea")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.Ib,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"select"},"Select")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.ub,{custom:!0,name:"select",id:"select"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"selectLg"},"Select Large")),r.a.createElement(m.u,{xs:"12",md:"9",size:"lg"},r.a.createElement(m.ub,{custom:!0,size:"lg",name:"selectLg",id:"selectLg"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"selectSm"},"Select Small")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.ub,{custom:!0,size:"sm",name:"selectSm",id:"SelectLm"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3"),r.a.createElement("option",{value:"4"},"Option #4"),r.a.createElement("option",{value:"5"},"Option #5")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"disabledSelect"},"Disabled Select")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.ub,{custom:!0,name:"disabledSelect",id:"disabledSelect",disabled:!0,autoComplete:"name"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{tag:"label",sm:"3",className:"col-form-label"},"Switch checkboxes"),r.a.createElement(m.u,{sm:"9"},r.a.createElement(m.Eb,{className:"mr-1",color:"primary",defaultChecked:!0}),r.a.createElement(m.Eb,{className:"mr-1",color:"success",defaultChecked:!0,variant:"outline"}),r.a.createElement(m.Eb,{className:"mr-1",color:"warning",defaultChecked:!0,variant:"opposite"}),r.a.createElement(m.Eb,{className:"mr-1",color:"danger",defaultChecked:!0,shape:"pill"}),r.a.createElement(m.Eb,{className:"mr-1",color:"info",defaultChecked:!0,shape:"pill",variant:"outline"}),r.a.createElement(m.Eb,{className:"mr-1",color:"dark",defaultChecked:!0,shape:"pill",variant:"opposite"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Radios")),r.a.createElement(m.u,{md:"9"},r.a.createElement(m.K,{variant:"checkbox"},r.a.createElement(m.W,{className:"form-check-input",id:"radio1",name:"radios",value:"option1"}),r.a.createElement(m.Z,{variant:"checkbox",htmlFor:"radio1"},"Option 1")),r.a.createElement(m.K,{variant:"checkbox"},r.a.createElement(m.W,{className:"form-check-input",id:"radio2",name:"radios",value:"option2"}),r.a.createElement(m.Z,{variant:"checkbox",htmlFor:"radio2"},"Option 2")),r.a.createElement(m.K,{variant:"checkbox"},r.a.createElement(m.W,{className:"form-check-input",id:"radio3",name:"radios",value:"option3"}),r.a.createElement(m.Z,{variant:"checkbox",htmlFor:"radio3"},"Option 3")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Inline Radios")),r.a.createElement(m.u,{md:"9"},r.a.createElement(m.K,{variant:"custom-radio",inline:!0},r.a.createElement(m.W,{custom:!0,id:"inline-radio1",name:"inline-radios",value:"option1"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-radio1"},"One")),r.a.createElement(m.K,{variant:"custom-radio",inline:!0},r.a.createElement(m.W,{custom:!0,id:"inline-radio2",name:"inline-radios",value:"option2"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-radio2"},"Two")),r.a.createElement(m.K,{variant:"custom-radio",inline:!0},r.a.createElement(m.W,{custom:!0,id:"inline-radio3",name:"inline-radios",value:"option3"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-radio3"},"Three")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Checkboxes")),r.a.createElement(m.u,{md:"9"},r.a.createElement(m.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(m.Q,{id:"checkbox1",name:"checkbox1",value:"option1"}),r.a.createElement(m.Z,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox1"},"Option 1")),r.a.createElement(m.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(m.Q,{id:"checkbox2",name:"checkbox2",value:"option2"}),r.a.createElement(m.Z,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox2"},"Option 2")),r.a.createElement(m.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(m.Q,{id:"checkbox3",name:"checkbox3",value:"option3"}),r.a.createElement(m.Z,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox3"},"Option 3")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Inline Checkboxes")),r.a.createElement(m.u,{md:"9"},r.a.createElement(m.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(m.Q,{custom:!0,id:"inline-checkbox1",name:"inline-checkbox1",value:"option1"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-checkbox1"},"One")),r.a.createElement(m.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(m.Q,{custom:!0,id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-checkbox2"},"Two")),r.a.createElement(m.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(m.Q,{custom:!0,id:"inline-checkbox3",name:"inline-checkbox3",value:"option3"}),r.a.createElement(m.Z,{variant:"custom-checkbox",htmlFor:"inline-checkbox3"},"Three")))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.Z,{col:!0,md:"3",htmlFor:"file-input"},"File input"),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.R,{id:"file-input",name:"file-input"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,null,"Multiple File input")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.R,{id:"file-multiple-input",name:"file-multiple-input",multiple:!0,custom:!0}),r.a.createElement(m.Z,{htmlFor:"file-multiple-input",variant:"custom-file"},"Choose Files..."))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.Z,{col:!0,md:3},"Custom file input"),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.R,{custom:!0,id:"custom-file-input"}),r.a.createElement(m.Z,{htmlFor:"custom-file-input",variant:"custom-file"},"Choose file..."))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))),r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Inline",r.a.createElement("small",null," Form")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",inline:!0},r.a.createElement(m.K,{className:"pr-1"},r.a.createElement(m.Z,{htmlFor:"exampleInputName2",className:"pr-1"},"Name"),r.a.createElement(m.P,{id:"exampleInputName2",placeholder:"Jane Doe",required:!0})),r.a.createElement(m.K,{className:"pr-1"},r.a.createElement(m.Z,{htmlFor:"exampleInputEmail2",className:"pr-1"},"Email"),r.a.createElement(m.P,{type:"email",id:"exampleInputEmail2",placeholder:"jane.doe@example.com",required:!0})))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset")))),r.a.createElement(m.u,{xs:"12",md:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Horizontal",r.a.createElement("small",null," Form")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"hf-email"},"Email")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{type:"email",id:"hf-email",name:"hf-email",placeholder:"Enter Email...",autoComplete:"email"}),r.a.createElement(m.L,{className:"help-block"},"Please enter your email"))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"3"},r.a.createElement(m.Z,{htmlFor:"hf-password"},"Password")),r.a.createElement(m.u,{xs:"12",md:"9"},r.a.createElement(m.P,{type:"password",id:"hf-password",name:"hf-password",placeholder:"Enter Password...",autoComplete:"current-password"}),r.a.createElement(m.L,{className:"help-block"},"Please enter your password"))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit")," ",r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))),r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Normal",r.a.createElement("small",null," Form")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"nf-email"},"Email"),r.a.createElement(m.P,{type:"email",id:"nf-email",name:"nf-email",placeholder:"Enter Email..",autoComplete:"email"}),r.a.createElement(m.L,{className:"help-block"},"Please enter your email")),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"nf-password"},"Password"),r.a.createElement(m.P,{type:"password",id:"nf-password",name:"nf-password",placeholder:"Enter Password..",autoComplete:"current-password"}),r.a.createElement(m.L,{className:"help-block"},"Please enter your password")))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit")," ",r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))),r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Input",r.a.createElement("small",null," Grid")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"3"},r.a.createElement(m.P,{placeholder:".col-sm-3"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"4"},r.a.createElement(m.P,{placeholder:".col-sm-4"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"5"},r.a.createElement(m.P,{placeholder:".col-sm-5"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"6"},r.a.createElement(m.P,{placeholder:".col-sm-6"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"7"},r.a.createElement(m.P,{placeholder:".col-sm-7"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"8"},r.a.createElement(m.P,{placeholder:".col-sm-8"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"9"},r.a.createElement(m.P,{placeholder:".col-sm-9"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"10"},r.a.createElement(m.P,{placeholder:".col-sm-10"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"11"},r.a.createElement(m.P,{placeholder:".col-sm-11"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{sm:"12"},r.a.createElement(m.P,{placeholder:".col-sm-12"}))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-user"})," Login")," ",r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))),r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Input",r.a.createElement("small",null," Sizes")),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.Z,{sm:"5",col:"sm",htmlFor:"input-small"},"Small Input"),r.a.createElement(m.u,{sm:"6"},r.a.createElement(m.P,{size:"sm",type:"text",id:"input-small",name:"input-small",className:"input-sm",placeholder:".form-control-sm"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.Z,{sm:"5",col:!0,htmlFor:"input-normal"},"Normal Input"),r.a.createElement(m.u,{sm:"6"},r.a.createElement(m.P,{id:"input-normal",name:"input-normal",placeholder:"Normal"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.Z,{sm:"5",col:"lg",htmlFor:"input-large"},"Large Input"),r.a.createElement(m.u,{sm:"6"},r.a.createElement(m.P,{size:"lg",type:"text",id:"input-large",name:"input-large",className:"input-lg",placeholder:".form-control-lg"}))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",sm:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Form",r.a.createElement("small",null," validation feedback")),r.a.createElement(m.k,null,r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"inputIsValid"},"Input is valid"),r.a.createElement(m.P,{valid:!0,id:"inputIsValid"}),r.a.createElement(m.Pb,null,"Cool! Input is valid")),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"inputIsInvalid"},"Input is invalid"),r.a.createElement(m.P,{invalid:!0,id:"inputIsInvalid"}),r.a.createElement(m.X,null,"Houston, we have a problem..."))))),r.a.createElement(m.u,{xs:"12",sm:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Validation feedback Form"),r.a.createElement(m.k,null,r.a.createElement(m.J,{className:"was-validated"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"inputSuccess2i"},"Non-required input"),r.a.createElement(m.P,{className:"form-control-success",id:"inputSuccess2i"}),r.a.createElement(m.Pb,null,"Non-required")),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"inputWarning2i"},"Required input"),r.a.createElement(m.P,{className:"form-control-warning",id:"inputWarning2i",required:!0}),r.a.createElement(m.X,{className:"help-block"},"Please provide a valid information"),r.a.createElement(m.Pb,{className:"help-block"},"Input provided"))))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",md:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Icon/Text Groups"),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-user"}))),r.a.createElement(m.P,{id:"input1-group1",name:"input1-group1",placeholder:"Username"})))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.P,{type:"email",id:"input2-group1",name:"input2-group1",placeholder:"Email"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-envelope-closed"})))))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-euro"}))),r.a.createElement(m.P,{id:"input3-group1",name:"input3-group1",placeholder:".."}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,".00"))))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset")))),r.a.createElement(m.u,{xs:"12",md:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Button Groups"),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.f,{type:"button",color:"primary"},r.a.createElement(c.a,{name:"cil-magnifying-glass"})," Search")),r.a.createElement(m.P,{id:"input1-group2",name:"input1-group2",placeholder:"Username"})))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.P,{type:"email",id:"input2-group2",name:"input2-group2",placeholder:"Email"}),r.a.createElement(m.T,null,r.a.createElement(m.f,{type:"button",color:"primary"},"Submit"))))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.f,{type:"button",color:"primary"},r.a.createElement(c.a,{name:"cib-facebook"}))),r.a.createElement(m.P,{id:"input3-group2",name:"input3-group2",placeholder:"Search"}),r.a.createElement(m.T,null,r.a.createElement(m.f,{type:"button",color:"primary"},r.a.createElement(c.a,{name:"cib-twitter"})))))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset")))),r.a.createElement(m.u,{xs:"12",md:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Dropdowns Groups"),r.a.createElement(m.k,null,r.a.createElement(m.J,{className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.z,{className:"input-group-prepend"},r.a.createElement(m.E,{caret:!0,color:"primary"},"Dropdown"),r.a.createElement(m.D,null,r.a.createElement(m.C,null,"Action"),r.a.createElement(m.C,null,"Another Action"),r.a.createElement(m.C,null,"Something else here"),r.a.createElement(m.C,{divider:!0}),r.a.createElement(m.C,null,"Separated link"))),r.a.createElement(m.P,{id:"input1-group3",name:"input1-group3",placeholder:"Username"})))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.P,{type:"email",id:"input2-group3",name:"input2-group3",placeholder:"Email"}),r.a.createElement(m.z,{className:"input-group-append"},r.a.createElement(m.E,{color:"primary"},"Dropdown"),r.a.createElement(m.D,null,r.a.createElement(m.C,null,"Action"),r.a.createElement(m.C,null,"Another Action"),r.a.createElement(m.C,null,"Something else here"),r.a.createElement(m.C,{divider:!0}),r.a.createElement(m.C,null,"Separated link")))))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"12"},r.a.createElement(m.S,null,r.a.createElement(m.z,{className:"input-group-prepend"},r.a.createElement(m.E,{color:"primary"},"Action"),r.a.createElement(m.D,null,r.a.createElement(m.C,null,"Action"),r.a.createElement(m.C,null,"Another Action"),r.a.createElement(m.C,null,"Something else here"),r.a.createElement(m.C,{divider:!0}),r.a.createElement(m.C,null,"Separated link"))),r.a.createElement(m.P,{id:"input3-group3",name:"input3-group3",placeholder:".."}),r.a.createElement(m.z,{className:"input-group-append"},r.a.createElement(m.E,{caret:!0,color:"primary"},"Dropdown"),r.a.createElement(m.D,null,r.a.createElement(m.C,null,"Action"),r.a.createElement(m.C,null,"Another Action"),r.a.createElement(m.C,null,"Something else here"),r.a.createElement(m.C,{divider:!0}),r.a.createElement(m.C,null,"Separated link")))))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(c.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(m.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(c.a,{name:"cil-ban"})," Reset"))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",md:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Use the grid for big devices!",r.a.createElement("small",null," ",r.a.createElement("code",null,".col-lg-*")," ",r.a.createElement("code",null,".col-md-*")," ",r.a.createElement("code",null,".col-sm-*"))),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"8"},r.a.createElement(m.P,{placeholder:".col-md-8"})),r.a.createElement(m.u,{md:"4"},r.a.createElement(m.P,{placeholder:".col-md-4"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"7"},r.a.createElement(m.P,{placeholder:".col-md-7"})),r.a.createElement(m.u,{md:"5"},r.a.createElement(m.P,{placeholder:".col-md-5"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"6"},r.a.createElement(m.P,{placeholder:".col-md-6"})),r.a.createElement(m.u,{md:"6"},r.a.createElement(m.P,{placeholder:".col-md-6"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"5"},r.a.createElement(m.P,{placeholder:".col-md-5"})),r.a.createElement(m.u,{md:"7"},r.a.createElement(m.P,{placeholder:".col-md-7"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{md:"4"},r.a.createElement(m.P,{placeholder:".col-md-4"})),r.a.createElement(m.u,{md:"8"},r.a.createElement(m.P,{placeholder:".col-md-8"}))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},"Action"),r.a.createElement(m.f,{size:"sm",color:"danger"},"Action"),r.a.createElement(m.f,{size:"sm",color:"warning"},"Action"),r.a.createElement(m.f,{size:"sm",color:"info"},"Action"),r.a.createElement(m.f,{size:"sm",color:"success"},"Action")))),r.a.createElement(m.u,{xs:"12",md:"6"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Input Grid for small devices!",r.a.createElement("small",null," ",r.a.createElement("code",null,".col-*"))),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.P,{placeholder:".col-4"})),r.a.createElement(m.u,{xs:"8"},r.a.createElement(m.P,{placeholder:".col-8"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{xs:"5"},r.a.createElement(m.P,{placeholder:".col-5"})),r.a.createElement(m.u,{xs:"7"},r.a.createElement(m.P,{placeholder:".col-7"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{xs:"6"},r.a.createElement(m.P,{placeholder:".col-6"})),r.a.createElement(m.u,{xs:"6"},r.a.createElement(m.P,{placeholder:".col-6"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{xs:"7"},r.a.createElement(m.P,{placeholder:".col-5"})),r.a.createElement(m.u,{xs:"5"},r.a.createElement(m.P,{placeholder:".col-5"}))),r.a.createElement(m.K,{row:!0},r.a.createElement(m.u,{xs:"8"},r.a.createElement(m.P,{placeholder:".col-8"})),r.a.createElement(m.u,{xs:"4"},r.a.createElement(m.P,{placeholder:".col-4"}))))),r.a.createElement(m.l,null,r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},"Action"),r.a.createElement(m.f,{size:"sm",color:"danger"},"Action"),r.a.createElement(m.f,{size:"sm",color:"warning"},"Action"),r.a.createElement(m.f,{size:"sm",color:"info"},"Action"),r.a.createElement(m.f,{size:"sm",color:"success"},"Action"))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12",sm:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Example Form"),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post"},r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,"Username")),r.a.createElement(m.P,{type:"email",id:"username3",name:"username3",autoComplete:"name"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-user"}))))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,"Email")),r.a.createElement(m.P,{type:"email",id:"email3",name:"email3",autoComplete:"username"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-envelope-closed"}))))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,"Password")),r.a.createElement(m.P,{type:"password",id:"password3",name:"password3",autoComplete:"current-password"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-asterisk"}))))),r.a.createElement(m.K,{className:"form-actions"},r.a.createElement(m.f,{type:"submit",size:"sm",color:"primary"},"Submit")))))),r.a.createElement(m.u,{xs:"12",sm:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Example Form"),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post"},r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.P,{id:"username2",name:"username2",placeholder:"Username",autoComplete:"name"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-user"}))))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.P,{type:"email",id:"email2",name:"email2",placeholder:"Email",autoComplete:"username"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-envelope-closed"}))))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.P,{type:"password",id:"password2",name:"password2",placeholder:"Password",autoComplete:"current-password"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-asterisk"}))))),r.a.createElement(m.K,{className:"form-actions"},r.a.createElement(m.f,{type:"submit",size:"sm",color:"secondary"},"Submit")))))),r.a.createElement(m.u,{xs:"12",sm:"4"},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Example Form"),r.a.createElement(m.k,null,r.a.createElement(m.J,{action:"",method:"post"},r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-user"}))),r.a.createElement(m.P,{id:"username1",name:"username1",placeholder:"Username",autoComplete:"name"}))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-envelope-closed"}))),r.a.createElement(m.P,{type:"email",id:"email1",name:"email1",placeholder:"Email",autoComplete:"username"}))),r.a.createElement(m.K,null,r.a.createElement(m.S,null,r.a.createElement(m.U,null,r.a.createElement(m.V,null,r.a.createElement(c.a,{name:"cil-asterisk"}))),r.a.createElement(m.P,{type:"password",id:"password1",name:"password1",placeholder:"Password",autoComplete:"current-password"}))),r.a.createElement(m.K,{className:"form-actions"},r.a.createElement(m.f,{type:"submit",size:"sm",color:"success"},"Submit"))))))),r.a.createElement(m.tb,null,r.a.createElement(m.u,{xs:"12"},r.a.createElement(m.H,{timeout:300,in:u,unmountOnExit:!0},r.a.createElement(m.j,null,r.a.createElement(m.n,null,"Form Elements",r.a.createElement("div",{className:"card-header-actions"},r.a.createElement(m.f,{color:"link",className:"card-header-action btn-setting"},r.a.createElement(c.a,{name:"cil-settings"})),r.a.createElement(m.f,{color:"link",className:"card-header-action btn-minimize",onClick:function(){return n(!t)}},r.a.createElement(c.a,{name:t?"cil-arrow-top":"cil-arrow-bottom"})),r.a.createElement(m.f,{color:"link",className:"card-header-action btn-close",onClick:function(){return s(!1)}},r.a.createElement(c.a,{name:"cil-x"})))),r.a.createElement(m.v,{show:t,timeout:1e3},r.a.createElement(m.k,null,r.a.createElement(m.J,{className:"form-horizontal"},r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"prependedInput"},"Prepended text"),r.a.createElement("div",{className:"controls"},r.a.createElement(m.S,{className:"input-prepend"},r.a.createElement(m.U,null,r.a.createElement(m.V,null,"@")),r.a.createElement(m.P,{id:"prependedInput",size:"16",type:"text"})),r.a.createElement("p",{className:"help-block"},"Here's some help text"))),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"appendedInput"},"Appended text"),r.a.createElement("div",{className:"controls"},r.a.createElement(m.S,null,r.a.createElement(m.P,{id:"appendedInput",size:"16",type:"text"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,".00"))),r.a.createElement("span",{className:"help-block"},"Here's more help text"))),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"appendedPrependedInput"},"Append and prepend"),r.a.createElement("div",{className:"controls"},r.a.createElement(m.S,{className:"input-prepend"},r.a.createElement(m.U,null,r.a.createElement(m.V,null,"$")),r.a.createElement(m.P,{id:"appendedPrependedInput",size:"16",type:"text"}),r.a.createElement(m.T,null,r.a.createElement(m.V,null,".00"))))),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"appendedInputButton"},"Append with button"),r.a.createElement("div",{className:"controls"},r.a.createElement(m.S,null,r.a.createElement(m.P,{id:"appendedInputButton",size:"16",type:"text"}),r.a.createElement(m.T,null,r.a.createElement(m.f,{color:"secondary"},"Go!"))))),r.a.createElement(m.K,null,r.a.createElement(m.Z,{htmlFor:"appendedInputButtons"},"Two-button append"),r.a.createElement("div",{className:"controls"},r.a.createElement(m.S,null,r.a.createElement(m.P,{id:"appendedInputButtons",size:"16",type:"text"}),r.a.createElement(m.T,null,r.a.createElement(m.f,{color:"secondary"},"Search"),r.a.createElement(m.f,{color:"secondary"},"Options"))))),r.a.createElement("div",{className:"form-actions"},r.a.createElement(m.f,{type:"submit",color:"primary"},"Save changes"),r.a.createElement(m.f,{color:"secondary"},"Cancel"))))))))))}}}]);
//# sourceMappingURL=14.570b1520.chunk.js.map