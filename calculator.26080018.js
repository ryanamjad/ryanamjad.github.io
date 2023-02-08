import{_ as d,S as u,o as i,c as h,w as l,a as n,b as e,f as p,v as m,d as f,t as g,e as _,r as v}from"./calculator.js";const y={name:"Phone",data:function(){return{clientError:null,phone:this.leadData.phone,clientLoading:!1}},props:{loading:{type:Boolean,default:!1},serverError:{type:String,default:null},leadData:{type:Object}},mixins:[],components:{SlideTemplate:u},created(){},mounted(){},methods:{getPreviousSlide(){this.$emit("get-previous-slide")},getNextSlide(){const t={phone:this.phone};this.clientError=null,this.phone?(this.$emit("save",{payload:t,callback:this.handleSuccess.bind(this),reject:this.handleError.bind(this)}),this.clientLoading=!0):this.clientError="Please enter your phone number."},handleError(t){this.clientLoading=!1,this.clientError="Please enter a valid phone number"},handleSuccess(){this.clientLoading=!1,this.$emit("get-next-slide")}},computed:{error:function(){return this.serverError?this.serverError:this.clientError?this.clientError:null}},watch:{}},b={class:"px-5 md:px-6 flex justify-center"},x={class:"w-full"},w={class:"grid gap-4 grid-cols-1 w-full"},S={class:"flex justify-center"},E={class:"cta-input-container w-full md:w-1/2"},P=["disabled"],k=e("label",{class:"cta-input-placeholder",for:"tel"},"Phone",-1),N={key:0,class:"mt-2 text-red-500"},C=e("div",{class:"px-5 md:px-6 flex items-center justify-center mt-6"},[e("div",{class:"w-full md:w-2/3"},[e("small",{class:"mt-4 watchdog_tcpa_disclosure pageid-tcpa",style:{display:"inline !important",color:"rgb(151, 160, 176) !important","font-size":"10px !important"}},[e("input",{type:"hidden",id:"leadid_tcpa_disclosure"}),e("strong",null,"TCPA Disclosure:"),n(' By clicking the "Next" button you agree to our '),e("a",{class:"text-blue-300",href:"https://www.roofingcalculator.com/terms",target:"_blank"},"Terms and Privacy Policy"),n(" and authorize RoofingCalculator.com or our chosen "),e("a",{class:"text-blue-300",href:"https://www.roofingcalculator.com/tcpa/roofing-companies",target:"_blank"},"roofing contractor/s"),n(' to use the phone number/s entered. Some contractors may use auto-diallers or send automated text messages if they cannot contact you and these may result in charges to you. You consent to receiving these communications even if the phone number entered above is on the "Do not Call" register. ')])])],-1);function B(t,o,a,D,j,s){const c=v("slide-template");return i(),h(c,{onGoNextSlide:s.getNextSlide,onGoPreviousSlide:s.getPreviousSlide,"disable-previous-slide":!0,loading:t.clientLoading},{title:l(()=>[n(" What is your phone number? ")]),slot:l(()=>[e("div",b,[e("div",x,[e("div",w,[e("div",S,[e("div",E,[p(e("input",{onChange:o[0]||(o[0]=r=>t.clientError=null),disabled:a.loading,type:"tel",autocomplete:"tel",name:"tel",id:"tel","onUpdate:modelValue":o[1]||(o[1]=r=>t.phone=r),placeholder:" ",class:"cta-input form-control"},null,40,P),[[m,t.phone]]),k])])]),s.error?(i(),f("div",N,g(s.error),1)):_("",!0)])]),C]),_:1},8,["onGoNextSlide","onGoPreviousSlide","loading"])}const T=d(y,[["render",B]]);export{T as default};
