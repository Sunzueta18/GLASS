if (self.CavalryLogger) { CavalryLogger.start_js(["JBPRY"]); }

__d("CometPageReviewsContentContainerFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3719655308056987",metadata:{},name:"CometPageReviewsContentContainerFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageReviewsRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2915778931878766",metadata:{},name:"CometSinglePageReviewsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PageCometConsumerGroupsTabRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3864972733520924",metadata:{},name:"PageCometConsumerGroupsTabRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageReviewsRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","CometPageReviewsContentContainerFeedQuery$Parameters","CometSinglePageReviewsRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("CometSinglePageReviewsRoot.react").__setRef("CometSinglePageReviewsRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{extraProps:{pageID:a},queries:{singlePageReviewsContentContainerFeedQueryReference:{parameters:b("CometPageReviewsContentContainerFeedQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:0,order:"MOST_HELPFUL",pageID:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1}},singlePageReviewsRootQueryReference:{parameters:b("CometSinglePageReviewsRootQuery$Parameters"),variables:{pageID:a,scale:b("WebPixelRatio").get()}}}}});e.exports=a}),null);
__d("PagesCometAdminReviewsRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","CometPageReviewsContentContainerFeedQuery$Parameters","CometSinglePageReviewsRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("CometSinglePageReviewsRoot.react").__setRef("PagesCometAdminReviewsRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{extraProps:{pageID:a},queries:{singlePageReviewsContentContainerFeedQueryReference:{parameters:b("CometPageReviewsContentContainerFeedQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"REVIEWS_FEED",feedbackSource:0,pageID:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1}},singlePageReviewsRootQueryReference:{parameters:b("CometSinglePageReviewsRootQuery$Parameters"),variables:{pageID:a,scale:b("WebPixelRatio").get()*4}}}}});e.exports=a}),null);
__d("PagesCometAdminReviewsContainerRoot.entrypoint",["JSResourceForInteraction","buildCometPageAdminRoute.entrypoint","PagesCometAdminReviewsRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometPageAdminRoute.entrypoint")(b("JSResourceForInteraction")("PagesCometAdminSelfViewRoot.react").__setRef("PagesCometAdminReviewsContainerRoot.entrypoint"),function(a){return{entryPoints:{pageSelfViewEntryPoint:{entryPoint:b("PagesCometAdminReviewsRoot.entrypoint"),entryPointParams:a}},extraProps:a}});e.exports=a}),null);
__d("PageCometConsumerGroupsTabRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","PageCometConsumerGroupsTabRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("PageCometConsumerGroupsTabRoot.react").__setRef("PageCometConsumerGroupsTabRoot.entrypoint"),function(a){return{queries:{pageConsumerGroupsTabQueryReference:{parameters:b("PageCometConsumerGroupsTabRootQuery$Parameters"),variables:{pageID:a.routeProps.pageID,scale:b("WebPixelRatio").get()}}}}});e.exports=a}),null);