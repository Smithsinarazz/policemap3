var wms_layers = [];

var format_LSOAswithurbanrural2_0 = new ol.format.GeoJSON();
var features_LSOAswithurbanrural2_0 = format_LSOAswithurbanrural2_0.readFeatures(json_LSOAswithurbanrural2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOAswithurbanrural2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOAswithurbanrural2_0.addFeatures(features_LSOAswithurbanrural2_0);
var lyr_LSOAswithurbanrural2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LSOAswithurbanrural2_0, 
                style: style_LSOAswithurbanrural2_0,
                interactive: true,
    title: 'LSOAs with urban rural2<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_0.png" /> Rural village and dispersed in a sparse setting<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_1.png" /> Rural village and dispersed<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_2.png" /> Rural town and fringe in a sparse setting<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_3.png" /> Rural town and fringe<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_4.png" /> Urban city and town in a sparse setting<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_5.png" /> Urban city and town<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_6.png" /> Urban minor conurbation<br />\
    <img src="styles/legend/LSOAswithurbanrural2_0_7.png" /> Urban major conurbation<br />'
        });
var format_Policestations2010_1 = new ol.format.GeoJSON();
var features_Policestations2010_1 = format_Policestations2010_1.readFeatures(json_Policestations2010_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policestations2010_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policestations2010_1.addFeatures(features_Policestations2010_1);
var lyr_Policestations2010_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Policestations2010_1, 
                style: style_Policestations2010_1,
                interactive: true,
                title: '<img src="styles/legend/Policestations2010_1.png" /> Police stations 2010'
            });
var format_Police2021_2 = new ol.format.GeoJSON();
var features_Police2021_2 = format_Police2021_2.readFeatures(json_Police2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police2021_2.addFeatures(features_Police2021_2);
var lyr_Police2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Police2021_2, 
                style: style_Police2021_2,
                interactive: true,
                title: '<img src="styles/legend/Police2021_2.png" /> Police2021'
            });
var format_Policeareas_3 = new ol.format.GeoJSON();
var features_Policeareas_3 = format_Policeareas_3.readFeatures(json_Policeareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policeareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policeareas_3.addFeatures(features_Policeareas_3);
var lyr_Policeareas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Policeareas_3, 
                style: style_Policeareas_3,
                interactive: true,
                title: '<img src="styles/legend/Policeareas_3.png" /> Police areas'
            });

lyr_LSOAswithurbanrural2_0.setVisible(true);lyr_Policestations2010_1.setVisible(true);lyr_Police2021_2.setVisible(true);lyr_Policeareas_3.setVisible(true);
var layersList = [lyr_LSOAswithurbanrural2_0,lyr_Policestations2010_1,lyr_Police2021_2,lyr_Policeareas_3];
lyr_LSOAswithurbanrural2_0.set('fieldAliases', {'fid': 'fid', 'LSOA11CD': 'LSOA11CD', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'Rural_UrbanRUC11': 'Rural_UrbanRUC11', });
lyr_Policestations2010_1.set('fieldAliases', {'fid': 'fid', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Postcode': 'Postcode', 'RV': 'RV', 'Easting': 'Easting', 'Northing': 'Northing', 'Rural_Ur_1': 'Rural_Ur_1', });
lyr_Police2021_2.set('fieldAliases', {'BARef': 'BARef', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'Postcode': 'Postcode', 'EffDat': 'EffDat', 'RV': 'RV', 'SCAT': 'SCAT', 'SCATnocode': 'SCATnocode', 'Sector': 'Sector', 'Sub-sector': 'Sub-sector', 'SCat_Desc': 'SCat_Desc', 'Easting': 'Easting', 'Northing': 'Northing', 'LAName': 'LAName', });
lyr_Policeareas_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_LSOAswithurbanrural2_0.set('fieldImages', {'fid': 'Hidden', 'LSOA11CD': 'Hidden', 'BNG_E': 'Hidden', 'BNG_N': 'Hidden', 'LONG': 'Hidden', 'LAT': 'Hidden', 'Rural_UrbanRUC11': 'TextEdit', });
lyr_Policestations2010_1.set('fieldImages', {'fid': 'Hidden', 'UARN': 'Hidden', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Postcode': 'TextEdit', 'RV': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Rural_Ur_1': 'Hidden', });
lyr_Police2021_2.set('fieldImages', {'BARef': 'Hidden', 'UARN': 'Hidden', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Field12': 'Hidden', 'Field13': 'Hidden', 'Field14': 'Hidden', 'Postcode': 'TextEdit', 'EffDat': 'Hidden', 'RV': 'Hidden', 'SCAT': 'Hidden', 'SCATnocode': 'Hidden', 'Sector': 'Hidden', 'Sub-sector': 'Hidden', 'SCat_Desc': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'LAName': 'Hidden', });
lyr_Policeareas_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LSOAswithurbanrural2_0.set('fieldLabels', {'fid': 'no label', 'LSOA11CD': 'no label', 'LSOA11NM': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Rural_UrbanRUC11CD': 'no label', 'Rural_UrbanRUC11': 'no label', });
lyr_Policestations2010_1.set('fieldLabels', {'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', });
lyr_Police2021_2.set('fieldLabels', {'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', });
lyr_Policeareas_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Policeareas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});