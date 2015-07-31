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
	
	var pos1
	var pos2
	var pos3
    $('#ubi').hide()
	var cordenadas = position.coords.latitude+", "+position.coords.longitude				
		
	navigator.geolocation.clearWatch(watchID);
		
	var Result0 = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text=%22"+cordenadas+"%22%20and%20gflags=%22R%22&format=json", "",
    function (data0)
    {
		pos1 = data0.query.results.Result.city
		pos2 = data0.query.results.Result.countrycode
		
		localStorage.setItem("ciudad", data0.query.results.Result.city);
		localStorage.setItem("codigo", data0.query.results.Result.countrycode);
		
		var Result1 = $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+pos1+", "+pos2+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", "",
		function (data1)
		{
			$('#tt1').html(data1.query.results.channel.location.city)
			$('#tt2').html("<span style='text-transform: uppercase'>"+data1.query.results.channel.item.forecast[0].day+" "+data1.query.results.channel.item.forecast[0].date+"</span>, "+data1.query.results.channel.item.forecast[0].text)
			$('#grados').html(data1.query.results.channel.item.condition.temp+'°')
			grados = data1.query.results.channel.item.condition.temp
			
			$('#dia1').html(data1.query.results.channel.item.forecast[0].day)
			$('#ic1').attr('src', 'iconos/'+data1.query.results.channel.item.forecast[0].code+'.svg');
			
			$('#dia2').html(data1.query.results.channel.item.forecast[1].day)
			$('#ic2').attr('src', 'iconos/'+data1.query.results.channel.item.forecast[1].code+'.svg');
			
			$('#dia3').html(data1.query.results.channel.item.forecast[2].day)
			$('#ic3').attr('src', 'iconos/'+data1.query.results.channel.item.forecast[2].code+'.svg');
			
			$('#dia4').html(data1.query.results.channel.item.forecast[3].day)
			$('#ic4').attr('src', 'iconos/'+data1.query.results.channel.item.forecast[3].code+'.svg');
			
			$('#dia5').html(data1.query.results.channel.item.forecast[4].day)
			$('#ic5').attr('src', 'iconos/'+data1.query.results.channel.item.forecast[4].code+'.svg');
			//$("body").append("SuntSet: " + data.query.results.channel.astronomy.sunset + "<br />");
			var ico = data1.query.results.channel.item.condition.code
			 $('#icono').attr('src', 'iconos/'+data1.query.results.channel.item.condition.code+'.svg');
			 
			 if(ico==3 || ico==27 || ico==29 || ico==31 || ico==33 || ico==38 || ico==39){
				$('#pollo').attr('src', 'animaciones/an'+data1.query.results.channel.item.condition.code+'/an1.html');
			 }else{
				$('#pollo').attr('src', 'animaciones/an1/an1.html');
			 }
		});
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



