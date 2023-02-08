import{_ as a,S as u,o as b,c,w as n,a as y,b as e,n as o,r as g}from"./calculator.js";const m={name:"RoofStories",data:function(){return{clientError:null}},props:{loading:{type:Boolean,default:!1},serverError:{type:String,default:null},leadData:{type:Object}},mixins:[],components:{SlideTemplate:u},created(){},mounted(){},methods:{getPreviousSlide(){this.$emit("get-previous-slide")},getNextSlide(){this.$emit("get-next-slide")},updateBuildingStory(l){this.$emit("update-lead-data","buildingStory",l),this.getNextSlide()}},computed:{error:function(){return this.serverError?this.serverError:this.clientError?this.clientError:null}},watch:{}},f={class:"px-5 md:px-6 flex justify-center"},S={class:"w-full"},v=e("p",{class:"pb-0"},"Single story",-1),p=e("p",{class:"pb-0"},"2 story",-1),x=e("p",{class:"pb-0"},"3 story",-1),h=e("p",{class:"pb-0"},"4+ story",-1);function _(l,r,t,w,k,d){const s=g("slide-template");return b(),c(s,{onGoNextSlide:d.getNextSlide,onGoPreviousSlide:d.getPreviousSlide,"disable-previous-slide":!1},{title:n(()=>[y(" How many stories is your building? ")]),slot:n(()=>[e("div",f,[e("div",S,[e("div",{onClick:r[0]||(r[0]=i=>d.updateBuildingStory(1)),class:o([t.leadData.buildingStory===1?"border-cyan-600 border-2":"border border-grey-100 hover:border-cyan-600","mb-3 transition duration-200 flex items-center cursor-pointer p-2.5 rounded-md w-full"])},[e("div",{class:o([t.leadData.buildingStory===1?"bg-cyan-600 border border-cyan-600":"border border-grey-100","rounded-full w-4 h-4 flex-shrink-0 mr-2"])},null,2),v],2),e("div",{onClick:r[1]||(r[1]=i=>d.updateBuildingStory(2)),class:o([t.leadData.buildingStory===2?"border-cyan-600 border-2":"border border-grey-100 hover:border-cyan-600","mb-3 transition duration-200 flex items-center cursor-pointer p-2.5 rounded-md w-full"])},[e("div",{class:o([t.leadData.buildingStory===2?"bg-cyan-600 border border-cyan-600":"border border-grey-100","rounded-full w-4 h-4 flex-shrink-0 mr-2"])},null,2),p],2),e("div",{onClick:r[2]||(r[2]=i=>d.updateBuildingStory(3)),class:o([t.leadData.buildingStory===3?"border-cyan-600 border-2":"border border-grey-100 hover:border-cyan-600","mb-3 transition duration-200 flex items-center cursor-pointer p-2.5 rounded-md w-full"])},[e("div",{class:o([t.leadData.buildingStory===3?"bg-cyan-600 border border-cyan-600":"border border-grey-100","rounded-full w-4 h-4 flex-shrink-0 mr-2"])},null,2),x],2),e("div",{onClick:r[3]||(r[3]=i=>d.updateBuildingStory(4)),class:o([t.leadData.buildingStory===4?"border-cyan-600 border-2":"border border-grey-100 hover:border-cyan-600","mb-3 transition duration-200 flex items-center cursor-pointer p-2.5 rounded-md w-full"])},[e("div",{class:o([t.leadData.buildingStory===4?"bg-cyan-600 border border-cyan-600":"border border-grey-100","rounded-full w-4 h-4 flex-shrink-0 mr-2"])},null,2),h],2)])])]),_:1},8,["onGoNextSlide","onGoPreviousSlide"])}const D=a(m,[["render",_]]);export{D as default};
