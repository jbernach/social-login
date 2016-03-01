 'use strict';

angular.module('socialLoginApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-socialLoginApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-socialLoginApp-params')});
                }
                return response;
            }
        };
    });
