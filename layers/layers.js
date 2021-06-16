var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionAbasolo_3 = new ol.format.GeoJSON();
var features_CoordinacionAbasolo_3 = format_CoordinacionAbasolo_3.readFeatures(json_CoordinacionAbasolo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAbasolo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAbasolo_3.addFeatures(features_CoordinacionAbasolo_3);
var lyr_CoordinacionAbasolo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAbasolo_3, 
                style: style_CoordinacionAbasolo_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAbasolo_3.png" /> Coordinacion Abasolo'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionPN1_5 = new ol.format.GeoJSON();
var features_MicroregionPN1_5 = format_MicroregionPN1_5.readFeatures(json_MicroregionPN1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionPN1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionPN1_5.addFeatures(features_MicroregionPN1_5);
var lyr_MicroregionPN1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionPN1_5, 
                style: style_MicroregionPN1_5,
                interactive: false,
    title: 'Microregion PN1<br />\
    <img src="styles/legend/MicroregionPN1_5_0.png" /> 0 - 40 Personas<br />\
    <img src="styles/legend/MicroregionPN1_5_1.png" /> 40 - 123 Personas<br />\
    <img src="styles/legend/MicroregionPN1_5_2.png" /> 123 - 254 Personas<br />\
    <img src="styles/legend/MicroregionPN1_5_3.png" /> 254 - 498 Personas<br />\
    <img src="styles/legend/MicroregionPN1_5_4.png" /> 498 - 678 Personas<br />'
        });
var format_MicroregionH1_6 = new ol.format.GeoJSON();
var features_MicroregionH1_6 = format_MicroregionH1_6.readFeatures(json_MicroregionH1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionH1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionH1_6.addFeatures(features_MicroregionH1_6);
var lyr_MicroregionH1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionH1_6, 
                style: style_MicroregionH1_6,
                interactive: false,
    title: 'Microregion H1<br />\
    <img src="styles/legend/MicroregionH1_6_0.png" /> 0 - 51 Personas <br />\
    <img src="styles/legend/MicroregionH1_6_1.png" /> 51 - 148 Personas <br />\
    <img src="styles/legend/MicroregionH1_6_2.png" /> 148 - 254 Personas <br />\
    <img src="styles/legend/MicroregionH1_6_3.png" /> 254 - 492 Personas <br />\
    <img src="styles/legend/MicroregionH1_6_4.png" /> 492 - 626 Personas <br />'
        });
var format_MicroregionCUE1_7 = new ol.format.GeoJSON();
var features_MicroregionCUE1_7 = format_MicroregionCUE1_7.readFeatures(json_MicroregionCUE1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCUE1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCUE1_7.addFeatures(features_MicroregionCUE1_7);
var lyr_MicroregionCUE1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCUE1_7, 
                style: style_MicroregionCUE1_7,
                interactive: false,
    title: 'Microregion CUE1<br />\
    <img src="styles/legend/MicroregionCUE1_7_0.png" /> 0 - 19 Personas<br />\
    <img src="styles/legend/MicroregionCUE1_7_1.png" /> 19 - 66 Personas<br />\
    <img src="styles/legend/MicroregionCUE1_7_2.png" /> 66 - 142 Personas<br />\
    <img src="styles/legend/MicroregionCUE1_7_3.png" /> 142 - 372 Personas<br />\
    <img src="styles/legend/MicroregionCUE1_7_4.png" /> 372 - 540 Personas<br />'
        });
var format_MicroregionAB3_8 = new ol.format.GeoJSON();
var features_MicroregionAB3_8 = format_MicroregionAB3_8.readFeatures(json_MicroregionAB3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionAB3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionAB3_8.addFeatures(features_MicroregionAB3_8);
var lyr_MicroregionAB3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionAB3_8, 
                style: style_MicroregionAB3_8,
                interactive: false,
    title: 'Microregion AB3<br />\
    <img src="styles/legend/MicroregionAB3_8_0.png" /> 0 - 17 Personas<br />\
    <img src="styles/legend/MicroregionAB3_8_1.png" /> 17 - 44 Personas<br />\
    <img src="styles/legend/MicroregionAB3_8_2.png" /> 44 - 92 Personas<br />\
    <img src="styles/legend/MicroregionAB3_8_3.png" /> 92 - 246 Personas<br />\
    <img src="styles/legend/MicroregionAB3_8_4.png" /> 246 - 457 Personas<br />'
        });
var format_MicroregionAB2_9 = new ol.format.GeoJSON();
var features_MicroregionAB2_9 = format_MicroregionAB2_9.readFeatures(json_MicroregionAB2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionAB2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionAB2_9.addFeatures(features_MicroregionAB2_9);
var lyr_MicroregionAB2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionAB2_9, 
                style: style_MicroregionAB2_9,
                interactive: false,
    title: 'Microregion AB2<br />\
    <img src="styles/legend/MicroregionAB2_9_0.png" /> 0 - 33 Personas<br />\
    <img src="styles/legend/MicroregionAB2_9_1.png" /> 33 - 96 Personas<br />\
    <img src="styles/legend/MicroregionAB2_9_2.png" /> 96 - 185 Personas<br />\
    <img src="styles/legend/MicroregionAB2_9_3.png" /> 185 - 332 Personas<br />\
    <img src="styles/legend/MicroregionAB2_9_4.png" /> 332 - 611 Personas<br />'
        });
var format_MicroregionAB1_10 = new ol.format.GeoJSON();
var features_MicroregionAB1_10 = format_MicroregionAB1_10.readFeatures(json_MicroregionAB1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionAB1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionAB1_10.addFeatures(features_MicroregionAB1_10);
var lyr_MicroregionAB1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionAB1_10, 
                style: style_MicroregionAB1_10,
                interactive: false,
    title: 'Microregion AB1<br />\
    <img src="styles/legend/MicroregionAB1_10_0.png" /> 0 - 22 Personas<br />\
    <img src="styles/legend/MicroregionAB1_10_1.png" /> 22 - 76 Personas<br />\
    <img src="styles/legend/MicroregionAB1_10_2.png" /> 76 - 167 Personas<br />\
    <img src="styles/legend/MicroregionAB1_10_3.png" /> 167 - 431 Personas<br />\
    <img src="styles/legend/MicroregionAB1_10_4.png" /> 431 - 676 Personas<br />'
        });
var format_CoordinacinAbasolo_11 = new ol.format.GeoJSON();
var features_CoordinacinAbasolo_11 = format_CoordinacinAbasolo_11.readFeatures(json_CoordinacinAbasolo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacinAbasolo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacinAbasolo_11.addFeatures(features_CoordinacinAbasolo_11);
var lyr_CoordinacinAbasolo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacinAbasolo_11, 
                style: style_CoordinacinAbasolo_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacinAbasolo_11.png" /> Coordinación Abasolo'
            });
var group_CoordinacionAbasoloRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionPN1_5,lyr_MicroregionH1_6,lyr_MicroregionCUE1_7,lyr_MicroregionAB3_8,lyr_MicroregionAB2_9,lyr_MicroregionAB1_10,],
                                title: "Coordinacion Abasolo Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionAbasolo_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionAbasolo_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionPN1_5.setVisible(true);lyr_MicroregionH1_6.setVisible(true);lyr_MicroregionCUE1_7.setVisible(true);lyr_MicroregionAB3_8.setVisible(true);lyr_MicroregionAB2_9.setVisible(true);lyr_MicroregionAB1_10.setVisible(true);lyr_CoordinacinAbasolo_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionAbasoloRezago,lyr_CoordinacinAbasolo_11];
lyr_CoordinacionAbasolo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionPN1_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionH1_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCUE1_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionAB3_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionAB2_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionAB1_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacinAbasolo_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionAbasolo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionPN1_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionH1_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCUE1_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionAB3_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionAB2_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionAB1_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacinAbasolo_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionAbasolo_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionPN1_5.set('fieldLabels', {});
lyr_MicroregionH1_6.set('fieldLabels', {});
lyr_MicroregionCUE1_7.set('fieldLabels', {});
lyr_MicroregionAB3_8.set('fieldLabels', {});
lyr_MicroregionAB2_9.set('fieldLabels', {});
lyr_MicroregionAB1_10.set('fieldLabels', {});
lyr_CoordinacinAbasolo_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacinAbasolo_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});