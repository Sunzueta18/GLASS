if (self.CavalryLogger) { CavalryLogger.start_js(["MWhl0"]); }

__d("LWICometCTACreationRootContentQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"shouldFetchPMPGuidances"}],b=[{kind:"Variable",name:"input",variableName:"input"}],c={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"context_spec",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"product_card_title",storageKey:null}],type:"BoostedComponentContext",abstractKey:null}],storageKey:null},d={alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_integrity_certification",storageKey:null}],storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"call_to_action_type",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"objective",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},l=[k],m={alias:null,args:null,kind:"ScalarField",name:"audience_key",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"audience_option",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"auto_targeting_sources",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"client_editable",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"target_spec_string_without_placements",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"offset_amount",storageKey:null},s=[r],t={alias:null,args:null,kind:"ScalarField",name:"offsite_custom_event",storageKey:null},u=[h],v={alias:null,args:null,kind:"ScalarField",name:"image_hash",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"image_url",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"instagram_actor_id",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"event_id",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},A={alias:null,args:null,kind:"ScalarField",name:"whatsapp_number",storageKey:null},B={alias:null,args:null,concreteType:"AdCallToActionSpecification",kind:"LinkedField",name:"call_to_action",plural:!1,selections:[f,{alias:null,args:null,concreteType:"AdCallToActionValueSpecification",kind:"LinkedField",name:"call_to_action_value",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"app_destination",storageKey:null},y,{alias:null,args:null,kind:"ScalarField",name:"lead_gen_form_id",storageKey:null},z,{alias:null,args:null,kind:"ScalarField",name:"page_id",storageKey:null},A],storageKey:null}],storageKey:null},C={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"picture",storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"video_id",storageKey:null},F=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],G={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},H={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},I={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null};r=[I,r];var J={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},K=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}],L={kind:"InlineFragment",selections:u,type:"Node",abstractKey:"__isNode"},M={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:l,storageKey:null},N={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometCTACreationRootContentQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"LWICometCreationRootBase_boostedComponent"},{args:null,kind:"FragmentSpread",name:"LWICometCTACreationView_boostedComponent"},{kind:"InlineFragment",selections:[c],type:"BoostedComponentWrapper",abstractKey:null}],storageKey:null}],storageKey:null},d],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometCTACreationRootContentQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[e,{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentCommonWrapper"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"context_spec",plural:!1,selections:[e,{alias:null,args:null,concreteType:"AdsLWIPost",kind:"LinkedField",name:"post",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"post_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_used_for_running_ads",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[g,{alias:null,args:null,concreteType:"WhatsAppAdsCatalogProduct",kind:"LinkedField",name:"whatsapp_catalog_products",plural:!0,selections:[h,{alias:null,args:null,concreteType:"ProductImage",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[i],storageKey:null},h],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"connected_whatsapp_number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"connected_whatsapp_number_type",storageKey:null},h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SAFRDynamicUIPolicy",kind:"LinkedField",name:"safr_data",plural:!1,selections:[{alias:null,args:null,concreteType:"SAFRDynamicUIRestrictions",kind:"LinkedField",name:"restrictions",plural:!1,selections:[{alias:null,args:null,concreteType:"SAFRObjectiveConfig",kind:"LinkedField",name:"objective",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"objective_blacklist",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SAFRPlacementsConfig",kind:"LinkedField",name:"placements",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"platform_blacklist",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SAFRAgeConfig",kind:"LinkedField",name:"age",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"default_max_age",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"default_min_age",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_max_age_fixed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_min_age_fixed",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SAFRGenderConfig",kind:"LinkedField",name:"gender",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_enabled",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SAFRLocationRadiusConfig",kind:"LinkedField",name:"location_radius",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"default_radius_unit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"default_radius_value",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max_radius",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_radius",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"options",plural:!1,selections:[e,{alias:null,args:null,concreteType:"AdsLWIObjectiveSpec",kind:"LinkedField",name:"eligible_objectives",plural:!0,selections:[j],storageKey:null},{alias:null,args:null,concreteType:"AdsLWIPublisherPlatform",kind:"LinkedField",name:"eligible_publisher_platforms",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},k],storageKey:null},{alias:null,args:null,concreteType:"AdsLWICallToAction",kind:"LinkedField",name:"eligible_ctas",plural:!0,selections:l,storageKey:null},{alias:null,args:null,concreteType:"AdsLWIAudience",kind:"LinkedField",name:"audiences",plural:!0,selections:[m,h,n,o,p,g,q],storageKey:null},{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"budget_options",plural:!0,selections:s,storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentOptions"},{alias:null,args:null,concreteType:"AdsLWITemplateTargetSpec",kind:"LinkedField",name:"template_target_spec",plural:!1,selections:[q],storageKey:null},{alias:null,args:null,concreteType:"AdsLWIAudience",kind:"LinkedField",name:"regulated_category_audience",plural:!1,selections:[m,n,g,h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"spec",plural:!1,selections:[e,{alias:null,args:[{kind:"Literal",name:"is_forced",value:!0}],concreteType:"AdAccount",kind:"LinkedField",name:"ad_account",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"account_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"currency_code_enum",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"legacy_account_id",storageKey:null},g,{alias:null,args:[{kind:"Literal",name:"show_all_valid_coupons",value:!0}],kind:"ScalarField",name:"payment_info_label",storageKey:"payment_info_label(show_all_valid_coupons:true)"},{alias:null,args:null,concreteType:"AdAccountBusinessInfo",kind:"LinkedField",name:"account_business_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"business_country_code",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tax_rate_in_sv_for_local_entity",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_funding_source",storageKey:null}],storageKey:"ad_account(is_forced:true)"},{alias:null,args:null,concreteType:"AdsLWIAudience",kind:"LinkedField",name:"audience",plural:!1,selections:[m,n,o,p,g,q,h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"boosting_status",storageKey:null},{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"budget",plural:!1,selections:s,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"budget_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"business_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"duration_in_days",storageKey:null},{alias:null,args:null,concreteType:"AdsLWIObjectiveSpec",kind:"LinkedField",name:"objective_spec",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"goal",storageKey:null},j,t,{alias:null,args:null,kind:"ScalarField",name:"management_objective_description",storageKey:null},{alias:null,args:null,concreteType:"AdsLWIObjectiveMetadata",kind:"LinkedField",name:"metadata_list",plural:!0,selections:[j,t],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdsPlacementSpec",kind:"LinkedField",name:"placement_spec",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"device_platforms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"facebook_positions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"instagram_positions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"messenger_positions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"publisher_platforms",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdsPixel",kind:"LinkedField",name:"pixel",plural:!1,selections:u,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"regulated_categories",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"regulated_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"special_ad_category_countries",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentSpec"},{alias:null,args:null,concreteType:"AdsLWIAdGroupSpec",kind:"LinkedField",name:"adgroup_spec",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"adgroup_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"adgroup_status",storageKey:null},{alias:null,args:null,concreteType:"AdsCreativeSpecification",kind:"LinkedField",name:"creative",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asset_feed_spec_string",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"authorization_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},v,w,x,{alias:null,args:null,kind:"ScalarField",name:"instagram_story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_story_id",storageKey:null},{alias:null,args:null,concreteType:"AdObjectStorySpecification",kind:"LinkedField",name:"object_story_spec",plural:!1,selections:[x,{alias:null,args:null,concreteType:"AdObjectStoryLinkDataSpecification",kind:"LinkedField",name:"link_data",plural:!1,selections:[B,{alias:null,args:null,concreteType:"AdObjectStoryChildLinkDataSpecification",kind:"LinkedField",name:"child_attachments",plural:!0,selections:[C,v,z,g,D,E],storageKey:null},C,y,{alias:null,args:null,concreteType:"AdImageCropsSpecification",kind:"LinkedField",name:"image_crops",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop_dimension",storageKey:null},{alias:null,args:null,concreteType:"PointPositionSpecification",kind:"LinkedField",name:"lower_right",plural:!1,selections:F,storageKey:null},{alias:null,args:null,concreteType:"PointPositionSpecification",kind:"LinkedField",name:"upper_left",plural:!1,selections:F,storageKey:null}],storageKey:null},v,z,G,g,D,{alias:null,args:null,kind:"ScalarField",name:"retailer_item_ids",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_flexible_image_aspect_ratio",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"NodeWrapper",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryPhotoDataSpecification",kind:"LinkedField",name:"photo_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"caption",storageKey:null},v,H],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryVideoDataSpecification",kind:"LinkedField",name:"video_data",plural:!1,selections:[B,v,w,{alias:null,args:null,kind:"ScalarField",name:"link_description",storageKey:null},G,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},E],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryTemplateDataSpecification",kind:"LinkedField",name:"template_data",plural:!1,selections:[B,z,g,C,{alias:null,args:null,kind:"ScalarField",name:"format_option",storageKey:null},G,{alias:null,args:null,kind:"ScalarField",name:"multi_share_end_card",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"product_set_id",storageKey:null},{alias:null,args:null,concreteType:"AdShopSpecification",kind:"LinkedField",name:"shop_spec",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"landing_view",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shop_id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_page_actor_override",storageKey:null}],storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:"AdsLWICallToAction",kind:"LinkedField",name:"cta",plural:!1,selections:[k,z,A],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boosting_info",plural:!1,selections:[e,{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"spent",plural:!1,selections:r,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdCampaignGroup",kind:"LinkedField",name:"campaign_group",plural:!1,selections:[{alias:null,args:null,concreteType:"EventTimeRange",kind:"LinkedField",name:"time_range",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null}],storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:"AdsLWIContraints",kind:"LinkedField",name:"constraints",plural:!1,selections:[{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"min_daily_budget",plural:!1,selections:r,storageKey:null},{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"max_daily_budget",plural:!1,selections:r,storageKey:null},{alias:null,args:null,concreteType:"CurrencyQuantity",kind:"LinkedField",name:"min_total_budget",plural:!1,selections:r,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"duration_upper_limit_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"blacklisted_countries",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_targeting_age",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"whitelisted_countries",storageKey:null}],storageKey:null},h,{condition:"shouldFetchPMPGuidances",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"BoostedComponentMessage",kind:"LinkedField",name:"guidances",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"text",plural:!1,selections:[{alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[J,I,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[e,{alias:null,args:K,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:K,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:u,storageKey:'delight_asset(delight_surface:"COMMENT")'},h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[J,I,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[e,{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},L],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[J,I,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[J,I,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[e,{kind:"InlineFragment",selections:[h,g],type:"User",abstractKey:null},L],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[e,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[h,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[e,H,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[M,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[M,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},L],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},J,I],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[J,I,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},N],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[N],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"spec_element",storageKey:null}],storageKey:null}]},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_similar_running_promotions",storageKey:null},c],type:"BoostedComponentWrapper",abstractKey:null}],storageKey:null}],storageKey:null},d]},params:{id:"3067493596685490",metadata:{},name:"LWICometCTACreationRootContentQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("LWICometCTACreationView_boostedComponent.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LWICometCTACreationView_boostedComponent",selections:[{alias:null,args:null,concreteType:"AdsLWIContraints",kind:"LinkedField",name:"constraints",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useLWICometOpenTargetingModalQuery_constraints"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"options",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"LWICometAudienceSection_options"},{args:null,kind:"FragmentSpread",name:"LWICometPlacementsSection_options"},{kind:"InlineDataFragmentSpread",name:"LWICometRegulatedCategoryUtils_options",selections:[{alias:null,args:null,concreteType:"AdsLWIAudience",kind:"LinkedField",name:"regulated_category_audience",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"audience_key",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"audience_option",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"context_spec",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"connected_whatsapp_number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"connected_whatsapp_number_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"LWICometWhatsAppCreativeSection_catalog"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"LWICometDurationBudgetSection_boostedComponent"},{args:null,kind:"FragmentSpread",name:"LWICometGenericCreationNotices_boostedComponent"}],type:"BoostedComponentCommonWrapper",abstractKey:"__isBoostedComponentCommonWrapper"};e.exports=a}),null);
__d("LWICometPromoteWhatsAppCTASectionQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"pageID"}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={alias:null,args:null,kind:"ScalarField",name:"connected_whatsapp_number",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometPromoteWhatsAppCTASectionQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometPromoteWhatsAppCTASectionQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"3411981608922743",metadata:{},name:"LWICometPromoteWhatsAppCTASectionQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("LWICometCTACreationRootContent.react",["fbt","CometRelay","CometRouteParams","LWICometCreationRootBase.react","LWICometLoggerUtils","LWICometValidationUtils","React","deferredLoadComponent","requireDeferredForDisplay","unrecoverableViolation","LWICometCTACreationRootContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=b("deferredLoadComponent")(b("requireDeferredForDisplay")("LWICometCTACreationView.react")),k=g._("Promocionar"),l=h!==void 0?h:h=b("LWICometCTACreationRootContentQuery.graphql");function a(a){var c=a.creationRootQueryReference;a=a.input;c=b("CometRelay").usePreloadedQuery(l,c);var d=c.lwi;c=c.viewer;d=d==null?void 0:d.boosted_component;var e=String(b("CometRouteParams").useRouteParams().entry_point);if(d==null){b("LWICometLoggerUtils").logEnterFlowError(e,"create",a.page_id,a.target_id,"boosted_cta");throw b("unrecoverableViolation")("boostedComponent cannot be null in Boosted CTA creation","pages_lwi")}return i.jsx(b("LWICometCreationRootBase.react"),{boostedComponentFragmentKey:d,certification:c==null?void 0:c.ad_integrity_certification,clientSideValidation:b("LWICometValidationUtils").clientSideValidationWithCTA,input:a,children:i.jsx(j,{boostedComponent:d,boostedComponentInput:a,title:(c=d==null?void 0:(e=d.context_spec)==null?void 0:e.product_card_title)!=null?c:k})})}}),null);
__d("LWICometCTACreationRoot.react",["fbt","CometPlaceholder.react","CometRouteParams","LWICometCreationUIComponentContextProvider.react","LWICometCTACreationRootContent.react","LWICometEntryPointUtils","LWICometRootErrorBoundary.react","LWICometViewPlaceholder.react","React","useLWILogEnterRoute"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React"),i=g._("Promocionar");function a(a){a=a.queries;var c=a.creationRootQueryReference.variables.input,d=b("CometRouteParams").useRouteParams();d=b("LWICometEntryPointUtils").convertEntryPointParamToJSEnumWithFallback(String(d.entry_point),"unknown");b("useLWILogEnterRoute")(d,c);return h.jsx(b("LWICometRootErrorBoundary.react"),{entryPoint:d,flow:"create",pageID:c.page_id,product:"boosted_cta",targetID:c.target_id,children:h.jsx(b("LWICometCreationUIComponentContextProvider.react"),{children:h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("LWICometViewPlaceholder.react"),{hasCreative:!0,title:i}),children:h.jsx(b("LWICometCTACreationRootContent.react"),{creationRootQueryReference:a.creationRootQueryReference,input:c})})})})}}),null);
__d("LWICometPromoteWhatsAppCTASection.react",["fbt","CometRelay","CometRowItem.react","LWICometCTAWhatsAppVerifiedNumber.react","LWICometRow.react","LWICometSection.react","LWICometWhatsAppAdvertisingPolicyNotice.react","React","emptyFunction","useLWILoggerContext","LWICometPromoteWhatsAppCTASectionQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=h!==void 0?h:h=b("LWICometPromoteWhatsAppCTASectionQuery.graphql");function a(){var a=b("useLWILoggerContext")();a=a.pageID;a=b("CometRelay").useLazyLoadQuery(j,{pageID:a});a=a.page;a=a==null?void 0:a.connected_whatsapp_number;return i.jsx(b("LWICometSection.react"),{fallback:null,header:{subtitle:g._("N\u00famero en el que recibir\u00e1s los mensajes."),title:g._("Cuenta de WhatsApp")},children:i.jsx(b("LWICometRow.react"),{children:i.jsx(b("CometRowItem.react"),{children:a!=null&&a!==""?i.jsxs(i.Fragment,{children:[i.jsx(b("LWICometCTAWhatsAppVerifiedNumber.react"),{disabledEdit:!0,hideHeader:!0,onEdit:b("emptyFunction"),verifiedNumber:a}),i.jsx(b("LWICometWhatsAppAdvertisingPolicyNotice.react"),{})]}):null})})})}}),null);
__d("WhatsAppNumberType",[],(function(a,b,c,d,e,f){a=Object.freeze({UNKNOWN:0,BIZ:1,PERSONAL:2,ENTERPRISE:3});e.exports=a}),null);
__d("LWICometCTACreationView.react",["CometRelay","LWICometAdAccountPicker.react","LWICometAdgroupUtils","LWICometAdPreviewRightColumnSection.react","LWICometAudienceSection.react","LWICometCreativeSection.react","LWICometCTAUtils","LWICometDurationBudgetSection.react","LWICometEstimationSection.react","LWICometExpandableSectionWrapper.react","LWICometGenericCreationNotices.react","LWICometHeaderAuxiliaryWithHelpWrapper.react","LWICometMarketingExpertUpsellSectionWrapper.react","LWICometNoticeCardWrapper.react","LWICometPaymentMethodSection.react","LWICometPaymentSummarySection.react","LWICometPixelSection.react","LWICometPlacementsSection.react","LWICometProductTwoColumnLayoutContainer.react","LWICometPromoteWhatsAppCTASection.react","LWICometRegulatedCategoriesQuerySection.react","LWICometSubmissionSection.react","React","WhatsAppNumberType","castToEnum","gkx","qex","requireCond","unrecoverableViolation","useLWICometPostsAsCreativesEntrypointDialog","withLWICometSpecPart","cr:1872680","cr:1392678","cr:1861715","LWICometCTACreationView_boostedComponent.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=new Set(["CONTACT_US","SIGN_UP","SHOP_NOW"]);function a(a){var c,d,e=a.boostedComponent,f=a.boostedComponentInput,i=a.cta;a=a.title;e=b("CometRelay").useFragment(g!==void 0?g:g=b("LWICometCTACreationView_boostedComponent.graphql"),e);var l=b("useLWICometPostsAsCreativesEntrypointDialog")(f.page_id);l=l[0];var m=e==null?void 0:e.options;if(!m)throw b("unrecoverableViolation")("options should not be empty or else none of the LWI sections can be rendered","pages_lwi");c=(c=b("qex")._("1524966"))!=null?c:!1;d=e==null?void 0:(d=e.context_spec)==null?void 0:d.page;var n=(d==null?void 0:d.connected_whatsapp_number_type)!==null?b("castToEnum")(Number(d==null?void 0:d.connected_whatsapp_number_type),b("WhatsAppNumberType"),0):0;n=n===1||n===3;var o=d==null?void 0:d.connected_whatsapp_number;n=(i==null?void 0:i.type)==="WHATSAPP_MESSAGE"&&!n&&b("cr:1872680")!==null&&o!=null&&b("qex")._("1872681")===!0?h.jsx(b("cr:1872680"),{objective:"LINK_CLICKS",whatsAppNumber:o}):null;return h.jsx(b("LWICometProductTwoColumnLayoutContainer.react"),{enableDrafts:b("gkx")("1358324"),footer:h.jsx(b("LWICometSubmissionSection.react"),{}),headerAuxiliary:h.jsx(b("LWICometHeaderAuxiliaryWithHelpWrapper.react"),{additionalAuxiliary:h.jsx(b("LWICometAdAccountPicker.react"),{useTwoColumnLayout:!0})}),leftContent:[h.jsx(h.Fragment,{children:k(i)?h.jsxs(h.Fragment,{children:[n,h.jsx(b("LWICometPromoteWhatsAppCTASection.react"),{})]}):null}),h.jsx(h.Fragment,{children:k(i)&&d!=null&&b("cr:1861715")!=null?h.jsx(b("cr:1861715"),{aux:l,whatsAppCatalogFragmentKey:d}):h.jsx(b("LWICometCreativeSection.react"),{aux:l})}),h.jsx(b("LWICometRegulatedCategoriesQuerySection.react"),{options:m}),h.jsx(b("LWICometAudienceSection.react"),{boostedComponentInput:f,constraints:e==null?void 0:e.constraints,options:m}),h.jsx(h.Fragment,{children:c?h.jsx(b("LWICometPlacementsSection.react"),{expandable:!1,options:m}):null}),h.jsx(b("LWICometDurationBudgetSection.react"),{boostedComponent:e,boostedComponentInput:f,fetchRecommendation:!0}),h.jsxs(b("LWICometExpandableSectionWrapper.react"),{children:[c?null:h.jsx(b("LWICometPlacementsSection.react"),{options:m}),j(i)&&b("qex")._("1270281")?h.jsx(b("LWICometPixelSection.react"),{}):null,h.jsx(b("LWICometPaymentMethodSection.react"),{})]})],rightContent:[h.jsx(b("LWICometAdPreviewRightColumnSection.react"),{getValidatedCreativeSpec:b("LWICometAdgroupUtils").getValidatedCTALinkInCreativeSpecForAdPreview}),h.jsx(b("LWICometEstimationSection.react"),{}),h.jsx(b("LWICometPaymentSummarySection.react"),{}),h.jsx(b("LWICometMarketingExpertUpsellSectionWrapper.react"),{pageID:f.page_id})],title:a,topContent:[h.jsx(b("LWICometNoticeCardWrapper.react"),{specElement:"GENERIC"}),b("cr:1392678")?[h.jsx(b("cr:1392678"),{leadSource:"BOOSTED_CTA"})]:[],h.jsx(b("LWICometGenericCreationNotices.react"),{boostedComponent:e,boostedComponentProduct:f.product,pageID:f.page_id})]})}function j(a){return a==null?!1:i.has(a.type)}function k(a){return a==null?!1:a.type==="WHATSAPP_MESSAGE"}c=b("withLWICometSpecPart")(a,function(a){return{cta:b("LWICometCTAUtils").getLWICometCTA(a.adgroupSpecs[a.selectedAdgroupID].creative)}});e.exports=c}),null);