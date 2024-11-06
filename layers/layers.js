var wms_layers = [];


        var lyr_GoogleBasemaps_0 = new ol.layer.Tile({
            'title': 'Google Basemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ballynakill_placenamescopy_1 = new ol.format.GeoJSON();
var features_ballynakill_placenamescopy_1 = format_ballynakill_placenamescopy_1.readFeatures(json_ballynakill_placenamescopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ballynakill_placenamescopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ballynakill_placenamescopy_1.addFeatures(features_ballynakill_placenamescopy_1);
var lyr_ballynakill_placenamescopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ballynakill_placenamescopy_1, 
                style: style_ballynakill_placenamescopy_1,
                popuplayertitle: "ballynakill_placenames copy",
                interactive: true,
    title: 'ballynakill_placenames copy<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_0.png" /> bog<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_1.png" /> field<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_2.png" /> hill or hills<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_3.png" /> road<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_4.png" /> well<br />\
    <img src="styles/legend/ballynakill_placenamescopy_1_5.png" /> <br />'
        });
var format_ballynakill_townlandscopycopy_2 = new ol.format.GeoJSON();
var features_ballynakill_townlandscopycopy_2 = format_ballynakill_townlandscopycopy_2.readFeatures(json_ballynakill_townlandscopycopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ballynakill_townlandscopycopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ballynakill_townlandscopycopy_2.addFeatures(features_ballynakill_townlandscopycopy_2);
var lyr_ballynakill_townlandscopycopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ballynakill_townlandscopycopy_2, 
                style: style_ballynakill_townlandscopycopy_2,
                popuplayertitle: "ballynakill_townlands copy copy",
                interactive: true,
                title: '<img src="styles/legend/ballynakill_townlandscopycopy_2.png" /> ballynakill_townlands copy copy'
            });
var group_Kilteskill = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Kilteskill"});
var group_Leitrim = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Leitrim"});
var group_Ballynakill = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ballynakill"});
var group_Killeenadeema = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Killeenadeema"});
var group_Duniry = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Duniry"});
var group_Feakle = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Feakle"});
var group_Moynoe = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Moynoe"});
var group_Tomgraney = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tomgraney"});
var group_Clonrush = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Clonrush"});
var group_Inishcaltra = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Inishcaltra"});
var group_Printing = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Printing"});
var group_Web = new ol.layer.Group({
                                layers: [lyr_ballynakill_placenamescopy_1,lyr_ballynakill_townlandscopycopy_2,],
                                fold: "open",
                                title: "Web"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleBasemaps_0,],
                                fold: "open",
                                title: "Basemaps"});

lyr_GoogleBasemaps_0.setVisible(true);lyr_ballynakill_placenamescopy_1.setVisible(true);lyr_ballynakill_townlandscopycopy_2.setVisible(true);
var layersList = [group_Basemaps,group_Web];
lyr_ballynakill_placenamescopy_1.set('fieldAliases', {'fid': 'fid', 'name_english': 'name_english', 'collector': 'collector', 'source': 'source', 'type': 'type', 'townland': 'townland', 'notes': 'notes', 'name_irish': 'name_irish', });
lyr_ballynakill_townlandscopycopy_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name_tag': 'name_tag', 'name_ga': 'name_ga', 'name_en': 'name_en', 'alt_name': 'alt_name', 'alt_name_g': 'alt_name_g', 'osm_user': 'osm_user', 'osm_timest': 'osm_timest', 'attributio': 'attributio', 'logainm_re': 'logainm_re', 'co_name': 'co_name', 'co_osm_id': 'co_osm_id', 'co_logainm': 'co_logainm', 'cp_name': 'cp_name', 'cp_osm_id': 'cp_osm_id', 'cp_logainm': 'cp_logainm', 'ed_name': 'ed_name', 'ed_osm_id': 'ed_osm_id', 'ed_logainm': 'ed_logainm', 'bar_name': 'bar_name', 'bar_osm_id': 'bar_osm_id', 'bar_logain': 'bar_logain', 't_ie_url': 't_ie_url', 'area': 'area', 'latitude': 'latitude', 'longitude': 'longitude', 'epoch_tstm': 'epoch_tstm', });
lyr_ballynakill_placenamescopy_1.set('fieldImages', {'fid': 'TextEdit', 'name_english': 'TextEdit', 'collector': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'townland': 'TextEdit', 'notes': 'TextEdit', 'name_irish': 'TextEdit', });
lyr_ballynakill_townlandscopycopy_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name_tag': 'TextEdit', 'name_ga': 'TextEdit', 'name_en': 'TextEdit', 'alt_name': 'TextEdit', 'alt_name_g': 'TextEdit', 'osm_user': 'TextEdit', 'osm_timest': 'DateTime', 'attributio': 'TextEdit', 'logainm_re': 'TextEdit', 'co_name': 'TextEdit', 'co_osm_id': 'TextEdit', 'co_logainm': 'TextEdit', 'cp_name': 'TextEdit', 'cp_osm_id': 'TextEdit', 'cp_logainm': 'TextEdit', 'ed_name': 'TextEdit', 'ed_osm_id': 'TextEdit', 'ed_logainm': 'TextEdit', 'bar_name': 'TextEdit', 'bar_osm_id': 'TextEdit', 'bar_logain': 'TextEdit', 't_ie_url': 'TextEdit', 'area': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'epoch_tstm': 'TextEdit', });
lyr_ballynakill_placenamescopy_1.set('fieldLabels', {'fid': 'hidden field', 'name_english': 'inline label - visible with data', 'collector': 'inline label - visible with data', 'source': 'inline label - visible with data', 'type': 'inline label - visible with data', 'townland': 'inline label - visible with data', 'notes': 'inline label - visible with data', 'name_irish': 'inline label - visible with data', });
lyr_ballynakill_townlandscopycopy_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'inline label - always visible', 'name_tag': 'inline label - always visible', 'name_ga': 'no label', 'name_en': 'no label', 'alt_name': 'no label', 'alt_name_g': 'no label', 'osm_user': 'no label', 'osm_timest': 'no label', 'attributio': 'no label', 'logainm_re': 'no label', 'co_name': 'no label', 'co_osm_id': 'no label', 'co_logainm': 'no label', 'cp_name': 'no label', 'cp_osm_id': 'no label', 'cp_logainm': 'no label', 'ed_name': 'no label', 'ed_osm_id': 'no label', 'ed_logainm': 'no label', 'bar_name': 'no label', 'bar_osm_id': 'no label', 'bar_logain': 'no label', 't_ie_url': 'no label', 'area': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'epoch_tstm': 'no label', });
lyr_ballynakill_townlandscopycopy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});