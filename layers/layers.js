ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([0.983943, 6.106719, 1.454832, 6.373587]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIMITE_COMMUNE_DAGL_1 = new ol.format.GeoJSON();
var features_LIMITE_COMMUNE_DAGL_1 = format_LIMITE_COMMUNE_DAGL_1.readFeatures(json_LIMITE_COMMUNE_DAGL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LIMITE_COMMUNE_DAGL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_COMMUNE_DAGL_1.addFeatures(features_LIMITE_COMMUNE_DAGL_1);
var lyr_LIMITE_COMMUNE_DAGL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE_COMMUNE_DAGL_1, 
                style: style_LIMITE_COMMUNE_DAGL_1,
                popuplayertitle: 'LIMITE_COMMUNE_DAGL',
                interactive: true,
    title: 'LIMITE_COMMUNE_DAGL<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_0.png" /> AGOE-NYIVE 1<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_1.png" /> AGOE-NYIVE 2<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_2.png" /> AGOE-NYIVE 3<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_3.png" /> AGOE-NYIVE 4<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_4.png" /> AGOE-NYIVE 5<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_5.png" /> AGOE-NYIVE 6<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_6.png" /> GOLFE 1<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_7.png" /> GOLFE 2<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_8.png" /> GOLFE 3<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_9.png" /> GOLFE 4<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_10.png" /> GOLFE 5<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_11.png" /> GOLFE 6<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_12.png" /> GOLFE 7<br />\
    <img src="styles/legend/LIMITE_COMMUNE_DAGL_1_13.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_LIMITE_COMMUNE_DAGL_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LIMITE_COMMUNE_DAGL_1];
lyr_LIMITE_COMMUNE_DAGL_1.set('fieldAliases', {'REGION': 'REGION', 'PREFECTU_1': 'PREFECTU_1', 'COMMUNE': 'COMMUNE', 'CHEFE_LIEU': 'CHEFE_LIEU', });
lyr_LIMITE_COMMUNE_DAGL_1.set('fieldImages', {'REGION': 'TextEdit', 'PREFECTU_1': 'TextEdit', 'COMMUNE': 'TextEdit', 'CHEFE_LIEU': 'TextEdit', });
lyr_LIMITE_COMMUNE_DAGL_1.set('fieldLabels', {'REGION': 'header label - always visible', 'PREFECTU_1': 'header label - always visible', 'COMMUNE': 'header label - always visible', 'CHEFE_LIEU': 'header label - always visible', });
lyr_LIMITE_COMMUNE_DAGL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});