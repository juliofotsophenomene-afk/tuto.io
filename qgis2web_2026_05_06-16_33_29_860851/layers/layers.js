var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.518000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CUEkmz_1 = new ol.format.GeoJSON();
var features_CUEkmz_1 = format_CUEkmz_1.readFeatures(json_CUEkmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUEkmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUEkmz_1.addFeatures(features_CUEkmz_1);
var lyr_CUEkmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUEkmz_1, 
                style: style_CUEkmz_1,
                popuplayertitle: 'CUE.kmz',
                interactive: true,
                title: '<img src="styles/legend/CUEkmz_1.png" /> CUE.kmz'
            });
var format_contours_2 = new ol.format.GeoJSON();
var features_contours_2 = format_contours_2.readFeatures(json_contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_2.addFeatures(features_contours_2);
var lyr_contours_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_2, 
                style: style_contours_2,
                popuplayertitle: 'contours',
                interactive: true,
                title: '<img src="styles/legend/contours_2.png" /> contours'
            });
var format_Flux_3 = new ol.format.GeoJSON();
var features_Flux_3 = format_Flux_3.readFeatures(json_Flux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flux_3.addFeatures(features_Flux_3);
var lyr_Flux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flux_3, 
                style: style_Flux_3,
                popuplayertitle: 'Flux',
                interactive: true,
                title: '<img src="styles/legend/Flux_3.png" /> Flux'
            });
var format_p10_4 = new ol.format.GeoJSON();
var features_p10_4 = format_p10_4.readFeatures(json_p10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p10_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p10_4.addFeatures(features_p10_4);
var lyr_p10_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p10_4, 
                style: style_p10_4,
                popuplayertitle: 'p10',
                interactive: true,
                title: '<img src="styles/legend/p10_4.png" /> p10'
            });
var format_D3_5 = new ol.format.GeoJSON();
var features_D3_5 = format_D3_5.readFeatures(json_D3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D3_5.addFeatures(features_D3_5);
var lyr_D3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D3_5, 
                style: style_D3_5,
                popuplayertitle: 'D3',
                interactive: true,
                title: '<img src="styles/legend/D3_5.png" /> D3'
            });
var format_voiebitumepraticable_6 = new ol.format.GeoJSON();
var features_voiebitumepraticable_6 = format_voiebitumepraticable_6.readFeatures(json_voiebitumepraticable_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voiebitumepraticable_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voiebitumepraticable_6.addFeatures(features_voiebitumepraticable_6);
var lyr_voiebitumepraticable_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voiebitumepraticable_6, 
                style: style_voiebitumepraticable_6,
                popuplayertitle: 'voie bitumée praticable',
                interactive: true,
                title: '<img src="styles/legend/voiebitumepraticable_6.png" /> voie bitumée praticable'
            });
var format_Equipementsdesant_7 = new ol.format.GeoJSON();
var features_Equipementsdesant_7 = format_Equipementsdesant_7.readFeatures(json_Equipementsdesant_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipementsdesant_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipementsdesant_7.addFeatures(features_Equipementsdesant_7);
var lyr_Equipementsdesant_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipementsdesant_7, 
                style: style_Equipementsdesant_7,
                popuplayertitle: 'Equipements de santé',
                interactive: true,
                title: '<img src="styles/legend/Equipementsdesant_7.png" /> Equipements de santé'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CUEkmz_1.setVisible(true);lyr_contours_2.setVisible(true);lyr_Flux_3.setVisible(true);lyr_p10_4.setVisible(true);lyr_D3_5.setVisible(true);lyr_voiebitumepraticable_6.setVisible(true);lyr_Equipementsdesant_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CUEkmz_1,lyr_contours_2,lyr_Flux_3,lyr_p10_4,lyr_D3_5,lyr_voiebitumepraticable_6,lyr_Equipementsdesant_7];
lyr_CUEkmz_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_contours_2.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_Flux_3.set('fieldAliases', {'id': 'id', });
lyr_p10_4.set('fieldAliases', {'id': 'id', });
lyr_D3_5.set('fieldAliases', {'id': 'id', });
lyr_voiebitumepraticable_6.set('fieldAliases', {'id': 'id', });
lyr_Equipementsdesant_7.set('fieldAliases', {'id': 'id', });
lyr_CUEkmz_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_contours_2.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_Flux_3.set('fieldImages', {'id': 'TextEdit', });
lyr_p10_4.set('fieldImages', {'id': 'TextEdit', });
lyr_D3_5.set('fieldImages', {'id': 'TextEdit', });
lyr_voiebitumepraticable_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Equipementsdesant_7.set('fieldImages', {'id': 'TextEdit', });
lyr_CUEkmz_1.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMode': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_contours_2.set('fieldLabels', {'NAME': 'header label - always visible', 'LAYER': 'header label - always visible', 'ELEVATION': 'header label - always visible', 'CLOSED_CON': 'header label - always visible', });
lyr_Flux_3.set('fieldLabels', {'id': 'header label - always visible', });
lyr_p10_4.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_D3_5.set('fieldLabels', {'id': 'header label - always visible', });
lyr_voiebitumepraticable_6.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Equipementsdesant_7.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Equipementsdesant_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});