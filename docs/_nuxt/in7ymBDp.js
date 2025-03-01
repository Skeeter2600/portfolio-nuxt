import{p as v,_ as u,c as r,o as c,m as w,n as l,a as o,t as g,b as i,r as x,q as D,s as $,u as L,v as B,x as U,y as q,z as M,A as b,B as N,C as W,D as O,P as G,E as S,F as y,G as H,H as F,S as V,L as z,I as J,w as k}from"./BuWt_rWd.js";const Q=v("/images/profile_pic.jpg"),X={},Y={id:"about"};function Z(e,t){return c(),r("section",Y,t[0]||(t[0]=[w('<div class="about_container" data-v-b6b8a3be><img class="profile_pic" src="'+Q+'" alt="Beck Anderson Headshot" data-v-b6b8a3be><div class="section__text" data-v-b6b8a3be><p class="section__text__p1" data-v-b6b8a3be>Hello World! I&#39;m</p><h1 class="title" data-v-b6b8a3be>Beck Anderson</h1><p data-v-b6b8a3be> I am currently an Associate Software Engineer at Evo Security, helping create a more secure digital world. In May of 2024, I graduated from the Rochester Institute of Technology with a major in Software Engineering with a minor in Computer Engineering. Throughout my time in school and in industry, I have had countless opportunities to demonstrate the skills that I have learned, ranging from coding languages (Python, Java, SQL, and more), various technologies (Vue, Nuxt, React, API Development, SQL), and learning the methodologies and practices used in the real world. Feel free to connect if you want to learn more about me, or just to build both of our networks! </p><div class="resume-button" data-v-b6b8a3be><a class="nav-style-link" href="/files/Beck_Anderson_Resume.pdf" download data-v-b6b8a3be>Download Resume</a></div></div></div>',1)]))}const j=u(X,[["render",Z],["__scopeId","data-v-b6b8a3be"]]),K={class:"experience-card-body"},ee={class:"content-img"},te=["href"],ne=["src","alt"],oe=["src","alt"],ae={class:"experience-card-text"},ie={class:"experience-card-position-container"},se={class:"experience-position-info"},re={class:"experience-position-info"},ce={class:"experience-card-description"},de=l({__name:"ExperienceCard",props:{company:{type:String,required:!0},position:{type:String,required:!0},period:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0},websiteUrl:{type:String,default:""}},setup(e){return(t,n)=>(c(),r("div",K,[o("div",ee,[e.websiteUrl?(c(),r("a",{key:0,href:e.websiteUrl,target:"_blank",rel:"noreferrer"},[o("img",{src:`/images/${e.imageSrc}`,alt:e.company+" Logo",class:"experience-card-image"},null,8,ne)],8,te)):(c(),r("img",{key:1,src:`/images/${e.imageSrc}`,alt:e.company+" Logo",class:"experience-card-image"},null,8,oe))]),o("div",ae,[o("div",ie,[o("h2",se,g(e.position),1),o("h2",re,g(e.period),1)]),o("p",ce,g(e.description),1)])]))}}),f=u(de,[["__scopeId","data-v-67a8ba27"]]),le={id:"experience"},ue=`● Redesigned and modernized the company's user portal using Vue/Nuxt, enhancing user experience and interface responsiveness.
● Created and privately published GitHub packages to handle processing files for metadata and generating AI powered file analysis and virus safety reports.
● Collaborated with an international team via daily meetings and using Jira to properly assign and manage project tasks and goals.`,pe=`● Facilitated learning for 25+ software development and engineering students by leading technical discussions, hosting mentoring sessions, and providing constructive feedback on coursework.
● Boosted student engagement and learning outcomes through responsive technical support, including answering questions during class and grading assignments with detailed feedback, resulting in 75% of students getting a B or better.`,ge=`● Collaborated with a 25-person international team to enhance functionality and resolve system bugs for the Prep N Print application, improving user satisfaction by 20%
● Demonstrated expertise in UI redesign using C# and Xamarin, ensuring compliance with requirements and elevating the user experience.
● Pioneered the design of the user interface for a new company application using Figma, actively engaging stakeholders to gather inputs and incorporate 90% of their feedback through biweekly meetings.`,me=`● Spearheaded the programming, maintenance, and support of existing applications using Delphi and SQL, ensuring seamless operations
● Mentored a team of 4 interns, resulting in a 25% increase in their productivity and the successful completion of 15 additional projects weekly.
● Collaborated closely with clients, expertly translating project requirements into comprehensive design specifications that aligned with client expectations, ensuring successful project delivery.`,_e=l({__name:"ExperiencesSection",setup(e){return(t,n)=>(c(),r("section",le,[n[0]||(n[0]=o("h1",{class:"title"}," Experience ",-1)),i(f,{company:"Evo Security",position:"Associate Software Engineer",period:"July 2024 - Present",description:ue,imageSrc:"evo_security_logo.jpeg",websiteUrl:"https://www.evosecurity.com/"}),i(f,{company:"RIT",position:"Course Assistant",period:"August 2023 - May 2024",description:pe,imageSrc:"RIT.png",websiteUrl:"https://www.rit.edu/computing/"}),i(f,{company:"Ecolab",position:"Software Engineer Intern",period:"January 2023 - May 2023",description:ge,imageSrc:"Ecolab.jpg",websiteUrl:"https://www.ecolab.com/"}),i(f,{company:"Alpine Software",position:"Software Developer Co-op",period:"May 2022 - December 2022",description:me,imageSrc:"alpinesoftware.jpg",websiteUrl:"https://alpinesoftware.com/"})]))}}),P=u(_e,[["__scopeId","data-v-aaabba59"]]),he={class:"education-card-body"},fe={class:"content-img"},be=["src","alt"],ye={class:"education-card-text"},ve={class:"education-position-info"},Se={class:"education-position-info"},ke=l({__name:"EducationCard",props:{school:{type:String,required:!0},degree:{type:String,required:!0},period:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(t,n)=>(c(),r("div",he,[o("div",fe,[o("img",{src:`/images/${e.imageSrc}`,alt:e.school+" Logo",class:"education-card-image"},null,8,be)]),o("div",ye,[o("h2",ve,g(e.degree),1),o("h2",Se,g(e.period),1)])]))}}),we=u(ke,[["__scopeId","data-v-66185926"]]),xe={id:"education"},$e=l({__name:"EducationSection",setup(e){return(t,n)=>(c(),r("section",xe,[n[0]||(n[0]=o("h1",{class:"title"}," Experience ",-1)),i(we,{school:"RIT",degree:"B.S. Software Engineering",period:"August 2019 - May 2024",imageSrc:"RIT.png"})]))}}),C=u($e,[["__scopeId","data-v-0d193976"]]),je={class:"project-card-body"},Pe={class:"content-img"},Ce=["href"],Ie=["src","alt"],Ee=["src","alt"],Ae={class:"project-card-text"},Te={class:"project-card-tag"},Re={class:"project-card-title"},De={class:"project-card-description"},Le=l({__name:"ProjectCard",props:{title:String,tag:String,description:String,imageSrc:String,linkUrl:String,linkText:{type:String,default:""}},setup(e){return(t,n)=>(c(),r("div",je,[o("div",Pe,[e.linkUrl?(c(),r("a",{key:0,href:e.linkUrl,target:"_blank",rel:"noreferrer"},[o("img",{src:`/images/${e.imageSrc}`,alt:e.title+" Image",class:"project-card-image"},null,8,Ie)],8,Ce)):(c(),r("img",{key:1,src:`/images/${e.imageSrc}`,alt:e.title+" Image",class:"project-card-image"},null,8,Ee))]),o("div",Ae,[o("p",Te,g(e.tag),1),o("h2",Re,g(e.title),1),o("p",De,g(e.description),1)])]))}}),Be=u(Le,[["__scopeId","data-v-104bbbc7"]]),Ue={id:"projects"},qe={class:"project-container"},Me="My senior project for my time at Rochester Institute of Technology. This has involved working on a team to redesign an existing product used by college students and professionals to simulate and analyze protein structure and function.",Ne="This application is intended to be used as a source to organize, sort and distribute information related to any setting, whether it be a D&D campaign or any other work.",We="Individual assignment done during my time at Ecolab. Developed a prototype system for a potential future product. Worked with company stakeholders to ensure it was up to their standards and incorporated feedback from meetings.",Oe="Built from the ground up an application to process the user sentiment of posts on Reddit. Worked together in a team of 5 individuals using Git and AWS Technologies, including DynamoDB, AWS Comprehend, API Gateway, and Terraform.",Ge=l({__name:"ProjectsSection",setup(e){return(t,n)=>{const a=Be;return c(),r("section",Ue,[n[0]||(n[0]=o("h1",{class:"title"}," Projects ",-1)),o("div",qe,[i(a,{title:"Simulation of Protein Synthesis",tag:"Senior Project",description:Me,imageSrc:"electrophoresis.jpg",linkUrl:"https://amrmualla.github.io/SEProjectWebsite/",linkText:"Project Website"}),i(a,{title:"World Construct",tag:"Personal Project",description:Ne,imageSrc:"world_construct.jpg",linkUrl:"https://github.com/Skeeter2600/World-Construct",linkText:"Repository"}),i(a,{title:"Recipe Cards",tag:"Professional",description:We,imageSrc:"RecipeCards.png",linkUrl:"https://www.figma.com/file/kpA8eZT3m52YhCRhdB1pXj/Recipe-Cards?type=design&node-id=0%3A1&mode=design&t=ZwAvFUGCapBK9Ynr-1",linkText:"Figma Board"}),i(a,{title:"Reddit Sentiment Analysis",tag:"Education",description:Oe,imageSrc:"reddit.png"})])])}}}),I=u(Ge,[["__scopeId","data-v-e5c00b97"]]),He=v("/images/email.svg"),Fe=v("/images/github.svg"),Ve=v("/images/linkedin.svg"),ze={},Je={id:"contact"};function Qe(e,t){return c(),r("section",Je,t[0]||(t[0]=[w('<h1 class="title" data-v-b6d17585> Contact Me </h1><div class="contact-info-upper-container" data-v-b6d17585><div class="contact-info-container" data-v-b6d17585><img src="'+He+'" alt="Email icon" class="icon contact-icon email-icon" data-v-b6d17585><p data-v-b6d17585><a href="mailto:andersbe2600@gmail.com" data-v-b6d17585>andersbe2600@gmail.com</a></p></div><div class="contact-info-container" data-v-b6d17585><img src="'+Fe+'" alt="Github Icon" class="icon contact-icon" data-v-b6d17585><a href="https://github.com/Skeeter2600" target="_blank" rel="noreferrer" data-v-b6d17585>Github</a></div><div class="contact-info-container" data-v-b6d17585><img src="'+Ve+'" alt="LinkedIn Icon" class="icon contact-icon" data-v-b6d17585><p data-v-b6d17585><a href="https://www.linkedin.com/in/beck-anderson-se/" target="_blank" rel="noreferrer" data-v-b6d17585>Linkedin</a></p></div></div>',2)]))}const E=u(ze,[["render",Qe],["__scopeId","data-v-b6d17585"]]),Xe=Symbol.for("nuxt:client-only"),Ye=l({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const a=x(!1);return D(()=>{a.value=!0}),$(Xe,!0),d=>{var s;if(a.value)return(s=t.default)==null?void 0:s.call(t);const p=t.fallback||t.placeholder;if(p)return p();const m=d.fallback||d.placeholder||"",_=d.fallbackTag||d.placeholderTag||"span";return r(_,n,m)}}}),Ze=l({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(e,t){return()=>y(b[e.name],e.layoutProps,t.slots)}}),Ke=l({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,t){const n=L(),a=N(G),d=a===B()?U():a,p=q(()=>{let s=S(e.name)??d.meta.layout??"default";return s&&!(s in b)&&e.fallback&&(s=S(e.fallback)),s}),m=x();t.expose({layoutRef:m});const _=n.deferHydration();if(n.isHydrating){const s=n.hooks.hookOnce("app:error",_);M().beforeEach(s)}return()=>{const s=p.value&&p.value in b,h=d.meta.layoutTransition??W;return O(s&&h,{default:()=>y(V,{suspensible:!0,onResolve:()=>{F(_)}},{default:()=>y(et,{layoutProps:H(t.attrs,{ref:m}),key:p.value||void 0,name:p.value,shouldProvide:!e.name,hasTransition:!!h},t.slots)})}).default()}}}),et=l({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,t){const n=e.name;return e.shouldProvide&&$(z,{isCurrent:a=>n===(a.meta.layout??"default")}),()=>{var a,d;return!n||typeof n=="string"&&!(n in b)?(d=(a=t.slots).default)==null?void 0:d.call(a):y(Ze,{key:n,layoutProps:e.layoutProps,name:n},t.slots)}}}),tt=l({components:{ExperiencesSection:P,ContactSection:E,ProjectsSection:I,EducationSection:C,AboutSection:j}});function nt(e,t,n,a,d,p){const m=j,_=P,s=C,h=I,A=E,T=Ye,R=Ke;return c(),J(R,{name:"page"},{default:k(()=>[i(T,null,{default:k(()=>[o("div",null,[i(m),i(_),i(s),i(h),i(A)])]),_:1})]),_:1})}const at=u(tt,[["render",nt]]);export{at as default};
