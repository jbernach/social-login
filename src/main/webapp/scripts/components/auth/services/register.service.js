'use strict';

angular.module('socialLoginApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


