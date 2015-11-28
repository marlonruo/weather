/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
		// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//

function onSuccess(position) {
	

    $('#ubi').hide()
	var cordenadas = position.coords.latitude+", "+position.coords.longitude				
		
	navigator.geolocation.clearWatch(watchID);
		
		localStorage.setItem("latitud", position.coords.latitude);
		localStorage.setItem("longitude", position.coords.longitude);
		
		lat = position.coords.latitude
		lon = position.coords.longitude
			
	var Result = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827", "",
    function (data)
    {
		grados = data.main.temp
		ttem = (grados -32)/1.8
		if(gg==1){
		 	var gras = (grados -32)/1.8
		}else{
			gras = grados
		}
		
		$('#tt1').html(data.name)
		$('#tt2').html(fecha+", "+data.weather[0].description)
		$('#grados').html(Math.round(gras)+'°')	
		
		sunset = formatTime(data.sys.sunset);
		sunset = sunset.split(':')
		
		sunrise = formatTime(data.sys.sunrise);
		sunrise = sunrise.split(':')
		
		horasM= (parseInt(sunrise[0])*60) + parseInt(sunrise[1]) 
		horasT= (parseInt(sunset[0])*60) + parseInt(sunset[1]) 
		horasA= (parseInt(hora)*60) + parseInt(minuto) 

ico = data.weather[0].id
cadena = data.weather[0].icon



if(horasA >= horasM && horasA <= horasT){
	$('#fondo0, #fondo1, #fondo2, #fondo3, #fondo4, #fondo5, #fondo6, #fondo7, #fondo8').fadeOut()
	
	if(ico=='211' || ico=='221' || ico=='521' || ico=='522' || ico=='602' || ico=='701' || ico=='711' || ico=='721'){
		$('#fondo4').fadeIn()
		$('#clima').css('background-color','#374d61')
	}else if(ico=='313' || ico=='321' || ico=='500' || ico=='501' || ico=='520'   || ico=='801' || ico=='802' || ico=='803' || ico=='804' || ico=='952' || ico=='953' || ico=='954' || ico=='955'){
		$('#fondo3').fadeIn()
		$('#clima').css('background-color','#198ac9')

	}else if(ico=='731' || ico=='751' || ico=='761' || ico=='762'){
		$('#fondo8').fadeIn()
		$('#clima').css('background-color','#5e2913')
	}else if(ico=='904' || ico=='951'){
		$('#fondo7').fadeIn()
		$('#clima').css('background-color','#be1414')
	}else if(ico=='950'){
		$('#fondo0').fadeIn()
		$('#clima').css('background-color','#080808')
	}else if(ico=='800'){
		if(ttem<='19.9999'){
			$('#fondo3').fadeIn()
			$('#clima').css('background-color','#198ac9')
		}else if(ttem>='20' && ttem<='24.9999'){
			$('#fondo5').fadeIn()
			$('#clima').css('background-color','#fea904')
		}else if(ttem>='25' && ttem<='29.9999'){
			$('#fondo6').fadeIn()
			$('#clima').css('background-color','#ff6600')
		}else if(ttem>='30'){
			$('#fondo7').fadeIn()
			$('#clima').css('background-color','#be1414')
		}
	}else if(ico=='801'){
		if(ttem<='19.9999'){
			$('#fondo3').fadeIn()
			$('#clima').css('background-color','#198ac9')
		}else if(ttem>='20' && ttem<='24.9999'){
			$('#fondo5').fadeIn()
			$('#clima').css('background-color','#fea904')
		}else if(ttem>='25' && ttem<='29.9999'){
			$('#fondo6').fadeIn()
			$('#clima').css('background-color','#ff6600')
		}
	}else if(ico=='901'){
			$('#fondo1').fadeIn()
			$('#clima').css('background-color','#02253c')
	}else{
		$('#fondo2').fadeIn()
		$('#clima').css('background-color','#064b86')
	}

	if(ico=='301' || ico=='502' || ico=='520' || ico=='800' || ico=='801' || ico=='802' || ico=='803' || ico=='804' || ico=='952' || ico=='953' || ico=='954' || ico=='955'){
	ico2a = ico+'d'
	}else{
	ico2a = ico
	}
	
	$('#pollo').attr('src', 'animaciones/'+ico2a+'/an.html');
	ico2a = ico+'d'
	
		 
}else{
	if(ico=='301' || ico=='502' || ico=='520' || ico=='800' || ico=='801' || ico=='802' || ico=='803' || ico=='804' || ico=='952' || ico=='956'){
	ico2a = ico+'n'
	}else{
	ico2a = ico
	}
	$('#fondo0, #fondo1, #fondo2, #fondo3, #fondo4, #fondo5, #fondo6, #fondo7, #fondo8').fadeOut()
	
	
	if(ico=='904'){
		$('#fondo7').fadeIn()
		$('#clima').css('background-color','#be1414')
	}else if(ico=='950'){
		$('#fondo0').fadeIn()
		$('#clima').css('background-color','#080808')
	}else{
		$('#fondo1').fadeIn()
		$('#clima').css('background-color','#02253c')
	}
	$('#pollo').attr('src', 'animaciones/'+ico2a+'/an.html');
	ico2a = ico+'n'	
}









		 $('#icono').attr('src', 'iconos/'+ico2a+'.svg#svgView(preserveAspectRatio(xMidYMin meet))');
		 $('#pollo').css('opacity','0.0')
		 $('#pollo').delay(1000).animate({opacity:'1'}, 800);
		 
		
		
    });
	
	
	
	
	
	var ResultHora = $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827", "",
    function (dataHora)
    {
		var hor1 = formatTime(dataHora.list[0].dt);
		$('#hora1').html(hor1)
		grados1 = dataHora.list[0].main.temp
		if(gg==1){
		 	var gras1 = (grados1 -32)/1.8
		}else{
			var gras1 = grados1
		}
		$('#gra1').html(Math.round(gras1)+'°')
		hor1 = hor1.split(':')
		var ho1= (parseInt(hor1[0])*60) + parseInt(hor1[1]) 
		var icon1=dataHora.list[0].weather[0].id
		if(ho1 >= horasM && ho1 <= horasT){
			icon1 = icon1+'d'
		}else{
			icon1 = icon1+'n'
		}
		$('#ico1').attr('src', 'iconos/'+icon1+'.svg');
		
		
		
		
		var hor2 = formatTime(dataHora.list[1].dt);
		$('#hora2').html(hor2)
		grados2 = dataHora.list[1].main.temp
		if(gg==1){
		 	var gras2 = (grados2 -32)/1.8
		}else{
			var gras2 = grados2
		}
		$('#gra2').html(Math.round(gras2)+'°')
		hor2 = hor2.split(':')
		var ho2= (parseInt(hor2[0])*60) + parseInt(hor2[1]) 
		var icon2=dataHora.list[1].weather[0].id
		if(ho2 >= horasM && ho2 <= horasT){
			icon2 = icon2+'d'
		}else{
			icon2 = icon2+'n'
		}
		$('#ico2').attr('src', 'iconos/'+icon2+'.svg');
		
		
		
		var hor3 = formatTime(dataHora.list[2].dt);
		$('#hora3').html(hor3)
		grados3 = dataHora.list[2].main.temp
		if(gg==1){
		 	var gras3 = (grados3 -32)/1.8
		}else{
			var gras3 = grados3
		}
		$('#gra3').html(Math.round(gras3)+'°')
		hor3 = hor3.split(':')
		var ho3= (parseInt(hor3[0])*60) + parseInt(hor3[1]) 
		var icon3=dataHora.list[2].weather[0].id
		if(ho3 >= horasM && ho3 <= horasT){
			icon3 = icon3+'d'
		}else{
			icon3 = icon3+'n'
		}
		$('#ico3').attr('src', 'iconos/'+icon3+'.svg');
		
		
		
		var hor4 = formatTime(dataHora.list[3].dt);
		$('#hora4').html(hor4)
		grados4 = dataHora.list[3].main.temp
		if(gg==1){
		 	var gras4 = (grados4 -32)/1.8
		}else{
			var gras4 = grados4
		}
		$('#gra4').html(Math.round(gras4)+'°')
		hor4 = hor4.split(':')
		var ho4= (parseInt(hor4[0])*60) + parseInt(hor4[1]) 
		var icon4=dataHora.list[3].weather[0].id
		if(ho4 >= horasM && ho4 <= horasT){
			icon4 = icon4+'d'
		}else{
			icon4 = icon4+'n'
		}
		$('#ico4').attr('src', 'iconos/'+icon4+'.svg');
		
		
		
		
		
		var hor5 = formatTime(dataHora.list[4].dt);
		$('#hora5').html(hor5)
		grados5 = dataHora.list[4].main.temp
		if(gg==1){
		 	var gras5 = (grados5 -32)/1.8
		}else{
			var gras5 = grados5
		}
		$('#gra5').html(Math.round(gras5)+'°')
		hor5 = hor5.split(':')
		var ho5= (parseInt(hor5[0])*60) + parseInt(hor5[1]) 
		var icon5=dataHora.list[4].weather[0].id
		if(ho5 >= horasM && ho5 <= horasT){
			icon5 = icon5+'d'
		}else{
			icon5 = icon5+'n'
		}
		$('#ico5').attr('src', 'iconos/'+icon5+'.svg');
		
		
		
		
		var hor6 = formatTime(dataHora.list[5].dt);
		$('#hora6').html(hor6)
		grados6 = dataHora.list[5].main.temp
		if(gg==1){
		 	var gras6 = (grados6 -32)/1.8
		}else{
			var gras6 = grados6
		}
		$('#gra6').html(Math.round(gras6)+'°')
		hor6 = hor6.split(':')
		var ho6= (parseInt(hor6[0])*60) + parseInt(hor6[1]) 
		var icon6=dataHora.list[5].weather[0].id
		if(ho6 >= horasM && ho6 <= horasT){
			icon6 = icon6+'d'
		}else{
			icon6 = icon6+'n'
		}
		$('#ico6').attr('src', 'iconos/'+icon6+'.svg');
		
    });
	
	
	
	
	var ResultDia = $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827&cnt=6", "",
    function (dataDia)
    {
		
	
var weekday = new Array(7);
weekday[0]=  "SUN";
weekday[1] = "MON";
weekday[2] = "TUE";
weekday[3] = "WED";
weekday[4] = "THU";
weekday[5] = "FRI";
weekday[6] = "SAT";
		
		var milliseconds1 = dataDia.list[0].dt * 1000;
        var date1 = new Date(milliseconds1);
		var n1 = weekday[date1.getDay()];
		$('#dia1').html(n1)
		$('#ic1').attr('src', 'iconos/'+dataDia.list[0].weather[0].id+'d.svg');
		
		var milliseconds2 = dataDia.list[1].dt * 1000;
        var date2 = new Date(milliseconds2);
		var n2 = weekday[date2.getDay()];
		$('#dia2').html(n2)
		$('#ic2').attr('src', 'iconos/'+dataDia.list[1].weather[0].id+'d.svg');
		
		var milliseconds3 = dataDia.list[2].dt * 1000;
        var date3 = new Date(milliseconds3);
		var n3 = weekday[date3.getDay()];
		$('#dia3').html(n3)
		$('#ic3').attr('src', 'iconos/'+dataDia.list[2].weather[0].id+'d.svg');
		
		var milliseconds4 = dataDia.list[3].dt * 1000;
        var date4 = new Date(milliseconds4);
		var n4 = weekday[date4.getDay()];
		$('#dia4').html(n4)
		$('#ic4').attr('src', 'iconos/'+dataDia.list[3].weather[0].id+'d.svg');
		
		var milliseconds5 = dataDia.list[4].dt * 1000;
        var date5 = new Date(milliseconds5);
		var n5 = weekday[date5.getDay()];
		$('#dia5').html(n5)
		$('#ic5').attr('src', 'iconos/'+dataDia.list[4].weather[0].id+'d.svg');
		
		var milliseconds6 = dataDia.list[5].dt * 1000;
        var date6 = new Date(milliseconds6);
		var n6 = weekday[date6.getDay()];
		$('#dia6').html(n6)
		$('#ic6').attr('src', 'iconos/'+dataDia.list[5].weather[0].id+'d.svg');
    });
						
}

// onError Callback receives a PositionError object
//
function onError(error) {
    
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
 
};



