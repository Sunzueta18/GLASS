if (self.CavalryLogger) { CavalryLogger.start_js(["0Qbc6"]); }

__d("CometPageCommunityContentContainerFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4136964162999613",metadata:{},name:"CometPageCommunityContentContainerFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageCommunityRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3207727915999197",metadata:{},name:"CometSinglePageCommunityRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageCommunityRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","CometPageCommunityContentContainerFeedQuery$Parameters","CometSinglePageCommunityRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("CometSinglePageCommunityRoot.react").__setRef("CometSinglePageCommunityRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{extraProps:{pageID:a},queries:{singlePageCommunityContentContainerFeedQueryReference:{parameters:b("CometPageCommunityContentContainerFeedQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE",feedbackSource:0,pageID:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1}},singlePageCommunityRootQueryReference:{parameters:b("CometSinglePageCommunityRootQuery$Parameters"),variables:{pageID:a,scale:b("WebPixelRatio").get()*4}}}}});e.exports=a}),null);