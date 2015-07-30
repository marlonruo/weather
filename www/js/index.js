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
    var element = document.getElementById('ubi');
    element.innerHTML = position.coords.latitude+", "+position.coords.longitude
	var cordenadas = position.coords.latitude+", "+position.coords.longitude				
		
		
	var Result0 = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text=%2219.5787916,-99.2462466%22%20and%20gflags=%22R%22&format=json", "",
    function (data0)
    {
		alert(data0.query.results.Result.line3)
		$('#tt1').html(data0.query.results.Result.line3)
    });		
	
		
												
			
						
}

// onError Callback receives a PositionError object
//
function onError(error) {
    
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true });

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



