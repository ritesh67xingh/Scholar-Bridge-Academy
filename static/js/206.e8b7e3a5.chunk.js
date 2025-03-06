"use strict";(self.webpackChunkscholar_bridge_academy=self.webpackChunkscholar_bridge_academy||[]).push([[206],{410:(e,s,a)=>{a.d(s,{A:()=>l});a(5043);var r=a(5475),t=a(579);const l=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"breadcrumbs d-flex align-items-center",style:{backgroundImage:"url(".concat(e.img,")")},children:(0,t.jsxs)("div",{className:"container position-relative d-flex flex-column align-items-center",children:[(0,t.jsx)("h2",{children:e.name}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(r.N_,{to:"/",children:[(0,t.jsx)("i",{class:"bi bi-house-door"})," Home"]})}),(0,t.jsx)("li",{children:e.name})]})]})})})},4937:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var r=a(5043),t=a(410),l=a(2958),n=a(5754);const i=a.p+"static/media/contact-header.7e0d72d99456cc756eda.jpg",d={_origin:"https://api.emailjs.com"},c=(e,s,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}const o=function(e,s){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,t)=>{const l=new XMLHttpRequest;l.addEventListener("load",(e=>{let{target:s}=e;const a=new m(s);200===a.status||"OK"===a.text?r(a):t(a)})),l.addEventListener("error",(e=>{let{target:s}=e;t(new m(s))})),l.open("POST",d._origin+e,!0),Object.keys(a).forEach((e=>{l.setRequestHeader(e,a[e])})),l.send(s)}))},h=(e,s,a,r)=>{const t=r||d._userID,l=(e=>{let s;if(s="string"===typeof e?document.querySelector(e):e,!s||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s})(a);c(t,e,s);const n=new FormData(l);return n.append("lib_version","3.2.0"),n.append("service_id",e),n.append("template_id",s),n.append("user_id",t),o("/api/v1.0/email/send-form",n)};var u=a(579);const x=()=>{const e=(0,r.useRef)(),[s,a]=(0,r.useState)({username:"",email:"",number:"",message:""}),[d,c]=(0,r.useState)({}),[m,o]=(0,r.useState)(!1),[x,g]=(0,r.useState)(""),{username:j,email:p,number:f,message:b}=s,v=e=>{a({...s,[e.target.name]:e.target.value})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.A,{}),(0,u.jsx)(t.A,{name:"Contact Us",img:i}),(0,u.jsx)("main",{id:"main",children:(0,u.jsx)("section",{id:"contact",className:"contact",children:(0,u.jsxs)("div",{className:"container position-relative","data-aos":"fade-up",children:[(0,u.jsx)("div",{className:"section-header",children:(0,u.jsx)("h2",{children:"Connect with Us to Start Your Learning Journey"})}),(0,u.jsxs)("div",{className:"row gy-4 d-flex justify-content-end",children:[(0,u.jsxs)("div",{className:"col-lg-5","data-aos":"fade-up","data-aos-delay":"100",children:[(0,u.jsxs)("div",{className:"info-item d-flex",children:[(0,u.jsx)("i",{className:"bi bi-geo-alt flex-shrink-0"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Location:"}),(0,u.jsx)("p",{children:"G-93 SNN Raj Grandeur Begur Main Road, HONGASANDRA LAYOUT, Bangalore, India - 560068"})]})]}),(0,u.jsxs)("div",{className:"info-item d-flex",children:[(0,u.jsx)("i",{className:"bi bi-envelope flex-shrink-0"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Email:"}),(0,u.jsx)("p",{children:(0,u.jsx)("a",{href:"mailto:info@scholarbridgeacademy.com",children:"info@scholarbridgeacademy.com"})})]})]}),(0,u.jsxs)("div",{className:"info-item d-flex",children:[(0,u.jsx)("i",{className:"bi bi-phone flex-shrink-0"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Call:"}),(0,u.jsx)("p",{children:"+91 99166 34178"})]})]})]}),(0,u.jsx)("div",{className:"col-lg-6","data-aos":"fade-up","data-aos-delay":"250",children:(0,u.jsxs)("form",{ref:e,className:"php-email-form",onSubmit:async r=>{r.preventDefault();const t=(e=>{let s={};return e.username.trim().length<3&&(s.username="Username should be at least 3 characters long."),/\S+@\S+\.\S+/.test(e.email)||(s.email="Enter a valid email address."),/^\d{10}$/.test(e.number)||(s.number="Enter a valid 10-digit mobile number."),e.message.trim().length<10&&(s.message="Message should be at least 10 characters long."),s})(s);if(c(t),0===Object.keys(t).length){o(!0);try{await h("service_pb9on3v","template_b6j13zn",e.current,"MiMCltfiNdOXdPSGR"),g("Message sent successfully!"),a({username:"",email:"",number:"",message:""})}catch(l){g("Failed to send the message. Please try again later."),console.error(l)}finally{o(!1)}}},children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-md-6 form-group",children:[(0,u.jsx)("input",{onChange:v,value:j,type:"text",name:"username",className:"form-control",placeholder:"Your Name",style:{border:d.username?"1px solid red":null}}),d.username&&(0,u.jsx)("small",{className:"error text-danger",children:d.username})]}),(0,u.jsxs)("div",{className:"col-md-6 form-group mt-3 mt-md-0",children:[(0,u.jsx)("input",{onChange:v,value:p,type:"email",className:"form-control",name:"email",placeholder:"E-mail",style:{border:d.email?"1px solid red":null}}),d.email&&(0,u.jsx)("small",{className:"error text-danger",children:d.email})]})]}),(0,u.jsxs)("div",{className:"form-group mt-3",children:[(0,u.jsx)("input",{onChange:v,value:f,type:"text",className:"form-control",name:"number",placeholder:"Number",style:{border:d.number?"1px solid red":null}}),d.number&&(0,u.jsx)("small",{className:"error text-danger",children:d.number})]}),(0,u.jsxs)("div",{className:"form-group mt-3",children:[(0,u.jsx)("textarea",{onChange:v,value:b,className:"form-control",name:"message",rows:"5",placeholder:"Message",style:{border:d.message?"1px solid red":null}}),d.message&&(0,u.jsx)("small",{className:"error text-danger",children:d.message})]}),(0,u.jsx)("div",{className:"text-center mt-4",children:(0,u.jsx)("button",{className:"btn btn-primary",type:"submit",disabled:m,children:m?"Sending...":"Send Message"})}),x&&(0,u.jsx)("div",{className:"alert mt-3 ".concat(m?"alert-warning":"alert-success"),children:x})]})})]})]})})}),(0,u.jsx)(n.A,{})]})}}}]);
//# sourceMappingURL=206.e8b7e3a5.chunk.js.map