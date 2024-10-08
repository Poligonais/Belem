var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXVOuteiroA_1 = new ol.format.GeoJSON();
var features_AnexoXVOuteiroA_1 = format_AnexoXVOuteiroA_1.readFeatures(json_AnexoXVOuteiroA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVOuteiroA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVOuteiroA_1.addFeatures(features_AnexoXVOuteiroA_1);
var lyr_AnexoXVOuteiroA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVOuteiroA_1, 
                style: style_AnexoXVOuteiroA_1,
                popuplayertitle: "Anexo XV - Outeiro (A)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVOuteiroA_1.png" /> Anexo XV - Outeiro (A)'
            });
var format_AnexoXIVPolgonoPrincipalOuteiro_2 = new ol.format.GeoJSON();
var features_AnexoXIVPolgonoPrincipalOuteiro_2 = format_AnexoXIVPolgonoPrincipalOuteiro_2.readFeatures(json_AnexoXIVPolgonoPrincipalOuteiro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVPolgonoPrincipalOuteiro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVPolgonoPrincipalOuteiro_2.addFeatures(features_AnexoXIVPolgonoPrincipalOuteiro_2);
var lyr_AnexoXIVPolgonoPrincipalOuteiro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVPolgonoPrincipalOuteiro_2, 
                style: style_AnexoXIVPolgonoPrincipalOuteiro_2,
                popuplayertitle: "Anexo XIV - Polígono Principal Outeiro",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVPolgonoPrincipalOuteiro_2.png" /> Anexo XIV - Polígono Principal Outeiro'
            });
var format_AnexoXIIIMiramarA_3 = new ol.format.GeoJSON();
var features_AnexoXIIIMiramarA_3 = format_AnexoXIIIMiramarA_3.readFeatures(json_AnexoXIIIMiramarA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIMiramarA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIMiramarA_3.addFeatures(features_AnexoXIIIMiramarA_3);
var lyr_AnexoXIIIMiramarA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIMiramarA_3, 
                style: style_AnexoXIIIMiramarA_3,
                popuplayertitle: "Anexo XIII - Miramar (A)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIMiramarA_3.png" /> Anexo XIII - Miramar (A)'
            });
var format_AnexoXIIPolgonoPrincipalMiramar_4 = new ol.format.GeoJSON();
var features_AnexoXIIPolgonoPrincipalMiramar_4 = format_AnexoXIIPolgonoPrincipalMiramar_4.readFeatures(json_AnexoXIIPolgonoPrincipalMiramar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIPolgonoPrincipalMiramar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIPolgonoPrincipalMiramar_4.addFeatures(features_AnexoXIIPolgonoPrincipalMiramar_4);
var lyr_AnexoXIIPolgonoPrincipalMiramar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIPolgonoPrincipalMiramar_4, 
                style: style_AnexoXIIPolgonoPrincipalMiramar_4,
                popuplayertitle: "Anexo XII - Polígono Principal Miramar",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIPolgonoPrincipalMiramar_4.png" /> Anexo XII - Polígono Principal Miramar'
            });
var format_AnexoXIBelmJ_5 = new ol.format.GeoJSON();
var features_AnexoXIBelmJ_5 = format_AnexoXIBelmJ_5.readFeatures(json_AnexoXIBelmJ_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIBelmJ_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIBelmJ_5.addFeatures(features_AnexoXIBelmJ_5);
var lyr_AnexoXIBelmJ_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIBelmJ_5, 
                style: style_AnexoXIBelmJ_5,
                popuplayertitle: "Anexo XI - Belém (J)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIBelmJ_5.png" /> Anexo XI - Belém (J)'
            });
var format_AnexoXBelmI_6 = new ol.format.GeoJSON();
var features_AnexoXBelmI_6 = format_AnexoXBelmI_6.readFeatures(json_AnexoXBelmI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXBelmI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXBelmI_6.addFeatures(features_AnexoXBelmI_6);
var lyr_AnexoXBelmI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXBelmI_6, 
                style: style_AnexoXBelmI_6,
                popuplayertitle: "Anexo X - Belém (I)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXBelmI_6.png" /> Anexo X - Belém (I)'
            });
var format_AnexoIXBelmH_7 = new ol.format.GeoJSON();
var features_AnexoIXBelmH_7 = format_AnexoIXBelmH_7.readFeatures(json_AnexoIXBelmH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXBelmH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXBelmH_7.addFeatures(features_AnexoIXBelmH_7);
var lyr_AnexoIXBelmH_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXBelmH_7, 
                style: style_AnexoIXBelmH_7,
                popuplayertitle: "Anexo IX - Belém (H)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXBelmH_7.png" /> Anexo IX - Belém (H)'
            });
var format_AnexoVIIIBelmG_8 = new ol.format.GeoJSON();
var features_AnexoVIIIBelmG_8 = format_AnexoVIIIBelmG_8.readFeatures(json_AnexoVIIIBelmG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIBelmG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIBelmG_8.addFeatures(features_AnexoVIIIBelmG_8);
var lyr_AnexoVIIIBelmG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIBelmG_8, 
                style: style_AnexoVIIIBelmG_8,
                popuplayertitle: "Anexo VIII - Belém (G)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIBelmG_8.png" /> Anexo VIII - Belém (G)'
            });
var format_AnexoVIIBelmF_9 = new ol.format.GeoJSON();
var features_AnexoVIIBelmF_9 = format_AnexoVIIBelmF_9.readFeatures(json_AnexoVIIBelmF_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIBelmF_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIBelmF_9.addFeatures(features_AnexoVIIBelmF_9);
var lyr_AnexoVIIBelmF_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIBelmF_9, 
                style: style_AnexoVIIBelmF_9,
                popuplayertitle: "Anexo VII - Belém (F)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIBelmF_9.png" /> Anexo VII - Belém (F)'
            });
var format_AnexoVIBelmE_10 = new ol.format.GeoJSON();
var features_AnexoVIBelmE_10 = format_AnexoVIBelmE_10.readFeatures(json_AnexoVIBelmE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIBelmE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIBelmE_10.addFeatures(features_AnexoVIBelmE_10);
var lyr_AnexoVIBelmE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIBelmE_10, 
                style: style_AnexoVIBelmE_10,
                popuplayertitle: "Anexo VI - Belém (E)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIBelmE_10.png" /> Anexo VI - Belém (E)'
            });
var format_AnexoVBelmD_11 = new ol.format.GeoJSON();
var features_AnexoVBelmD_11 = format_AnexoVBelmD_11.readFeatures(json_AnexoVBelmD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVBelmD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVBelmD_11.addFeatures(features_AnexoVBelmD_11);
var lyr_AnexoVBelmD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVBelmD_11, 
                style: style_AnexoVBelmD_11,
                popuplayertitle: "Anexo V - Belém (D)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVBelmD_11.png" /> Anexo V - Belém (D)'
            });
var format_AnexoIVBelmC_12 = new ol.format.GeoJSON();
var features_AnexoIVBelmC_12 = format_AnexoIVBelmC_12.readFeatures(json_AnexoIVBelmC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVBelmC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVBelmC_12.addFeatures(features_AnexoIVBelmC_12);
var lyr_AnexoIVBelmC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVBelmC_12, 
                style: style_AnexoIVBelmC_12,
                popuplayertitle: "Anexo IV - Belém (C)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVBelmC_12.png" /> Anexo IV - Belém (C)'
            });
var format_AnexoIIIBelmB_13 = new ol.format.GeoJSON();
var features_AnexoIIIBelmB_13 = format_AnexoIIIBelmB_13.readFeatures(json_AnexoIIIBelmB_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIBelmB_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIBelmB_13.addFeatures(features_AnexoIIIBelmB_13);
var lyr_AnexoIIIBelmB_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIBelmB_13, 
                style: style_AnexoIIIBelmB_13,
                popuplayertitle: "Anexo III - Belém (B)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIBelmB_13.png" /> Anexo III - Belém (B)'
            });
var format_AnexoIIBelmA_14 = new ol.format.GeoJSON();
var features_AnexoIIBelmA_14 = format_AnexoIIBelmA_14.readFeatures(json_AnexoIIBelmA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIBelmA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIBelmA_14.addFeatures(features_AnexoIIBelmA_14);
var lyr_AnexoIIBelmA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIBelmA_14, 
                style: style_AnexoIIBelmA_14,
                popuplayertitle: "Anexo II - Belém (A)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIBelmA_14.png" /> Anexo II - Belém (A)'
            });
var format_AnexoIPolgonoPrincipal_15 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_15 = format_AnexoIPolgonoPrincipal_15.readFeatures(json_AnexoIPolgonoPrincipal_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipal_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_15.addFeatures(features_AnexoIPolgonoPrincipal_15);
var lyr_AnexoIPolgonoPrincipal_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_15, 
                style: style_AnexoIPolgonoPrincipal_15,
                popuplayertitle: "Anexo I - Polígono Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_15.png" /> Anexo I - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXVOuteiroA_1.setVisible(true);lyr_AnexoXIVPolgonoPrincipalOuteiro_2.setVisible(true);lyr_AnexoXIIIMiramarA_3.setVisible(true);lyr_AnexoXIIPolgonoPrincipalMiramar_4.setVisible(true);lyr_AnexoXIBelmJ_5.setVisible(true);lyr_AnexoXBelmI_6.setVisible(true);lyr_AnexoIXBelmH_7.setVisible(true);lyr_AnexoVIIIBelmG_8.setVisible(true);lyr_AnexoVIIBelmF_9.setVisible(true);lyr_AnexoVIBelmE_10.setVisible(true);lyr_AnexoVBelmD_11.setVisible(true);lyr_AnexoIVBelmC_12.setVisible(true);lyr_AnexoIIIBelmB_13.setVisible(true);lyr_AnexoIIBelmA_14.setVisible(true);lyr_AnexoIPolgonoPrincipal_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXVOuteiroA_1,lyr_AnexoXIVPolgonoPrincipalOuteiro_2,lyr_AnexoXIIIMiramarA_3,lyr_AnexoXIIPolgonoPrincipalMiramar_4,lyr_AnexoXIBelmJ_5,lyr_AnexoXBelmI_6,lyr_AnexoIXBelmH_7,lyr_AnexoVIIIBelmG_8,lyr_AnexoVIIBelmF_9,lyr_AnexoVIBelmE_10,lyr_AnexoVBelmD_11,lyr_AnexoIVBelmC_12,lyr_AnexoIIIBelmB_13,lyr_AnexoIIBelmA_14,lyr_AnexoIPolgonoPrincipal_15];
lyr_AnexoXVOuteiroA_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVPolgonoPrincipalOuteiro_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIMiramarA_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIPolgonoPrincipalMiramar_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIBelmJ_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXBelmI_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXBelmH_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIBelmG_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIBelmF_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIBelmE_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVBelmD_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVBelmC_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIBelmB_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIBelmA_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVOuteiroA_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVPolgonoPrincipalOuteiro_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIMiramarA_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIPolgonoPrincipalMiramar_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIBelmJ_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXBelmI_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXBelmH_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIBelmG_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIBelmF_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIBelmE_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVBelmD_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVBelmC_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIBelmB_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIBelmA_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVOuteiroA_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVPolgonoPrincipalOuteiro_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIMiramarA_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIPolgonoPrincipalMiramar_4.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIBelmJ_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXBelmI_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXBelmH_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIBelmG_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIBelmF_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIBelmE_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVBelmD_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVBelmC_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIBelmB_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIBelmA_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});