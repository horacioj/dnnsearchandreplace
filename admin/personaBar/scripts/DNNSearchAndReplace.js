'use strict';

define(['jquery'],  
    function ($) {

        var performInit = function (wrapper, util, params, callback) {
            $.ajax({
                dataType: "script",
                cache: true,
                url: "modules/Evotiva.DNNSearchAndReplace/scripts/DNNSearchAndReplace-bundle.min.js"
            }).done(function () {
                console.info('DNNSearchAndReplace-bundle.min.js loaded');
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.error(`Loading DNNSearchAndReplace-bundle.min.js failed: ${textStatus} ${errorThrown}`);
            }).always(function () {
                if (typeof callback === 'function') {
                    console.info('Loading callback from DNNSearchAndReplace.js');
                    callback();
                }
            }); 
        };


        return {
            init: function (wrapper, util, params, callback) {
                performInit(wrapper, util, params, callback);                            
            },

            initMobile: function (wrapper, util, params, callback) {
                performInit(wrapper, util, params, callback);
            },

            load: function (params, callback) {
                if (typeof callback === 'function') {
                    callback();
                }
            },

            loadMobile: function (params, callback) {
				if (typeof callback === 'function') {
                    callback();
                }
            }
        };
    });