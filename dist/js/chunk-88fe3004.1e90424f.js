(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88fe3004"],{9587:function(t,e,a){"use strict";a("aa26")},aa26:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c=Object(n["H"])("data-v-15169942");Object(n["u"])("data-v-15169942");var r={class:"contact content"},o=Object(n["i"])("div",{class:"header"},[Object(n["i"])("img",{src:"/img/img_tel.svg",alt:""}),Object(n["i"])("h1",null,"CONTACT"),Object(n["i"])("p",{class:"message"},"お問い合わせはこちらから")],-1),i={class:"section"};Object(n["s"])();var s=c((function(t,e,a,c,s,b){var u=Object(n["y"])("ContactInputList"),m=Object(n["y"])("ContactConfirm");return Object(n["r"])(),Object(n["e"])("div",r,[o,Object(n["i"])("div",i,[Object(n["F"])(Object(n["i"])(u,{onUpdate:b.updateForm},null,8,["onUpdate"]),[[n["D"],1===s.stepNumber]]),2===s.stepNumber?(Object(n["r"])(),Object(n["e"])(m,{key:0,form:s.form},null,8,["form"])):Object(n["f"])("",!0),Object(n["F"])(Object(n["i"])("button",{onClick:e[1]||(e[1]=function(){return b.backStep&&b.backStep.apply(b,arguments)}),class:"back"}," Back ",512),[[n["D"],1!=s.stepNumber]])])])})),b=Object(n["H"])("data-v-0c3a0b9c");Object(n["u"])("data-v-0c3a0b9c");var u={class:"input-group name"},m=Object(n["i"])("label",{for:"namedata"},"Name",-1),p={class:"input-group"},l=Object(n["i"])("label",{for:"textboxdata"},"Message",-1),d=Object(n["i"])("div",{class:"button-group"},[Object(n["i"])("button",{type:"submit"},"確認")],-1);Object(n["s"])();var O=b((function(t,e,a,c,r,o){return Object(n["r"])(),Object(n["e"])("form",{onSubmit:e[3]||(e[3]=Object(n["G"])((function(){return o.checkFrom&&o.checkFrom.apply(o,arguments)}),["prevent"]))},[Object(n["i"])("div",u,[Object(n["F"])(Object(n["i"])("input",{type:"text",name:"namedata","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.input.namearea=t}),placeholder:"Name"},null,512),[[n["C"],r.input.namearea]]),m,Object(n["F"])(Object(n["i"])("p",{class:"error"},Object(n["A"])(r.errormessage.namearea),513),[[n["D"],!r.validation.namearea]])]),Object(n["i"])("div",p,[Object(n["F"])(Object(n["i"])("textarea",{name:"textboxdata","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.input.textboxarea=t}),placeholder:"Message"},null,512),[[n["C"],r.input.textboxarea]]),l,Object(n["F"])(Object(n["i"])("p",{class:"error"},Object(n["A"])(r.errormessage.textboxarea),513),[[n["D"],!r.validation.textboxarea]])]),d],32)})),j={name:"ContactInput",data:function(){return{input:{namearea:"",textboxarea:""},validation:{namearea:!1,textboxarea:!1},errormessage:{namearea:"",textboxarea:""}}},methods:{checkFrom:function(t){this.validation.namearea=!1,this.validation.textboxarea=!1,this.input.namearea?this.validation.namearea=!0:this.errormessage.namearea="名前を入力してください",this.input.textboxarea?this.validation.textboxarea=!0:this.errormessage.textboxarea="メッセージを入力してください",1==this.validation.namearea&&1==this.validation.textboxarea&&this.submit(),t.preventDefault()},submit:function(){this.$emit("update",{namearea:this.input.namearea,textboxarea:this.input.textboxarea})}}};j.render=O,j.__scopeId="data-v-0c3a0b9c";var f=j,x={class:"input-group name"},h=Object(n["i"])("dt",null,"Name",-1),v={class:"input-group"},g=Object(n["i"])("dt",null,"Message",-1),C={class:"messagearea"},F=Object(n["i"])("p",{class:"message"},"こちらの内容でお送りします",-1),k=Object(n["i"])("button",{type:"submit"},"送信",-1),y=Object(n["i"])("p",{class:"message"},"ありがとうございました！",-1);function N(t,e,a,c,r,o){return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["F"])(Object(n["i"])("form",{onSubmit:e[1]||(e[1]=Object(n["G"])((function(){return o.submitForm&&o.submitForm.apply(o,arguments)}),["prevent"]))},[Object(n["i"])("dl",x,[h,Object(n["i"])("dd",null,Object(n["A"])(a.form.namearea),1)]),Object(n["i"])("dl",v,[g,Object(n["i"])("dd",C,Object(n["A"])(a.form.textboxarea),1)]),F,k],544),[[n["D"],!r.comp]]),Object(n["F"])(Object(n["i"])("div",null,[y],512),[[n["D"],r.comp]])],64)}a("d3b7");var S={name:"ContactComfirm",data:function(){return{comp:!1}},props:{form:Object},methods:{submitForm:function(){var t=this;fetch("https://vuetest.microcms.io/api/v1/contact/",{method:"POST",headers:{"Content-Type":"application/json","X-WRITE-API-KEY":"9f3f667d-bb00-4674-89ab-6865a9ed0381"},body:JSON.stringify({name:this.form.namearea,text:this.form.textboxarea})}).then((function(t){return t.json()})).then((function(e){console.log(e),t.comp=!0})).catch((function(t){console.log(t)}))}}};S.render=N;var D=S,I={name:"Contact",components:{ContactInputList:f,ContactConfirm:D},data:function(){return{stepNumber:1,form:{namearea:null,textboxarea:null}}},methods:{updateForm:function(t){Object.assign(this.form,t),this.stepNumber=2},backStep:function(){this.stepNumber--},nextStep:function(){this.stepNumber++}}};a("9587");I.render=s,I.__scopeId="data-v-15169942";e["default"]=I}}]);
//# sourceMappingURL=chunk-88fe3004.1e90424f.js.map