if (self.CavalryLogger) { CavalryLogger.start_js(["RuZTc"]); }

__d("CometSinglePageChannelTabRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3626952860720526",metadata:{},name:"CometSinglePageChannelTabRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4094270617264199",metadata:{},name:"CometVideoHomeFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomePlaylistRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3613168695443911",metadata:{},name:"CometVideoHomePlaylistRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeRootProviderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2939812456104778",metadata:{},name:"CometVideoHomeRootProviderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3707683145972691",metadata:{},name:"CometVideoHomeStickyHeaderWatchlistMenuRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLeftRailWatchlistQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3173205286103754",metadata:{},name:"CometVideoHomeLeftRailWatchlistQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageChannelTabRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","CometSinglePageChannelTabRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("CometSinglePageChannelTabRoot.react").__setRef("CometSinglePageChannelTabRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{queries:{singlePageChannelTabRootQueryReference:{parameters:b("CometSinglePageChannelTabRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageChannelTabRoot",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:72,focusCommentID:null,pageID:a,scale:b("WebPixelRatio").get()*4,useDefaultActor:!1}}}}});e.exports=a}),null);
__d("CometVideoHomeCommonEntryPointVariables",["WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={UFI2CommentsProvider_commentsKey:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"VIDEO_HOME_FEED",feedbackSource:60,focusCommentID:null,isComet:b("gkx")("708253"),isCommunityViewEntryPointEnabled:!!b("qex")._("1571809"),privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_home",scale:b("WebPixelRatio").get(),shareSheetRedesign:b("gkx")("1365892"),useCommentsEntryPoint:b("gkx")("1679116"),useDashPrefetch:!1,useDefaultActor:!1};e.exports=a}),null);
__d("CometVideoHomeFeedEntryPointVariables",["CometVideoHomeCommonEntryPointVariables"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("CometVideoHomeCommonEntryPointVariables"),{UFI2CommentsProvider_commentsKey:"CometVideoHomeFeedRootQuery",triggerData:{injected_video_id:null}});e.exports=a}),null);
__d("buildCometVideoHomeRouteForResource.entrypoint",["WebPixelRatio","createContentAreaCompoundEntryPointBuilder","gkx","requireCond","cr:1714517","CometVideoHomeRootProviderQuery$Parameters","CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters","CometVideoHomeLeftRailWatchlistQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";b("cr:1714517");function a(a){return b("createContentAreaCompoundEntryPointBuilder")(a,function(a){return{rootProviderQueryReference:{parameters:b("CometVideoHomeRootProviderQuery$Parameters"),variables:{}},stickyHeaderWatchlistQueryReference:{parameters:b("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}},watchlistSettingsQueryReference:{parameters:b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),variables:{enableLiveBadgeAndBoost:!!b("gkx")("1637651"),scale:b("WebPixelRatio").get()}}}})}c=a;e.exports=c}),null);
__d("buildCometVideoHomeRoute.entrypoint",["JSResourceForInteraction","buildCometVideoHomeRouteForResource.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometVideoHomeRouteForResource.entrypoint")(b("JSResourceForInteraction")("CometVideoHomeRoot.react").__setRef("buildCometVideoHomeRoute.entrypoint"));e.exports=a}),null);
__d("CometVideoHomeFeedRoot.entrypoint",["CometVideoHomeFeedEntryPointVariables","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","requireCond","cr:1714516","CometVideoHomeFeedRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";b("cr:1714516");a=b("buildCometVideoHomeRoute.entrypoint")(b("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRoot.entrypoint"),function(a){return{queries:{feedRootQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("CometVideoHomeFeedRootQuery$Parameters"),variables:b("CometVideoHomeFeedEntryPointVariables")}}}});e.exports=a}),null);
__d("CometVideoHomePlaylistRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint","CometVideoHomePlaylistRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometVideoHomeRoute.entrypoint")(b("JSResourceForInteraction")("CometVideoHomePlaylistRoot.react").__setRef("CometVideoHomePlaylistRoot.entrypoint"),function(a){a={id:a.routeProps.id};return{queries:{playlistRootQueryReference:{parameters:b("CometVideoHomePlaylistRootQuery$Parameters"),variables:{scale:b("WebPixelRatio").get(),trigger_data:a}}}}});e.exports=a}),null);
__d("CometVideoHomeLanceletHomeRoot.entrypoint",["JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","CometSinglePageHomeRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometVideoHomeRoute.entrypoint")(b("JSResourceForInteraction")("CometVideoHomeLanceletRoot.react").__setRef("CometVideoHomeLanceletHomeRoot.entrypoint"),function(a){return{entryPoints:{pageEntryPoint:{entryPoint:b("CometSinglePageHomeRoot.entrypoint"),entryPointParams:a}},extraProps:a}});e.exports=a}),null);
__d("CometVideoHomeLanceletRoot.entrypoint",["JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","CometSinglePageChannelTabRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometVideoHomeRoute.entrypoint")(b("JSResourceForInteraction")("CometVideoHomeLanceletRoot.react").__setRef("CometVideoHomeLanceletRoot.entrypoint"),function(a){return{entryPoints:{pageEntryPoint:{entryPoint:b("CometSinglePageChannelTabRoot.entrypoint"),entryPointParams:a}},extraProps:a}});e.exports=a}),null);