angular.module('ngOrganizationalUnits').run(['$templateCache', function($templateCache) {$templateCache.put('/editOrganizationalUnits.html','<form class="form-horizontal" role="form" name="editOUForm" novalidate>\r\n    <div class="form-group" >\r\n        <div class="col-sm-3">\r\n        \r\n        </div>\r\n        <div class="col-sm-6">\r\n            <input type="text" id="ouId" name="ouId" placeholder="id" class="form-control" ng-model="ouId" required />\r\n            <span class="help-block" ng-show="editOUForm.ouId.$touched && editOUForm.ouId.$invalid">Please enter organizational unit\'s id.</span>\r\n        </div>\r\n        <div class="col-sm-3">\r\n        </div>\r\n\r\n    </div>\r\n    <div class="form-group" >\r\n        <div class="col-sm-3">\r\n        </div>\r\n        <div class="col-sm-6">\r\n            <input type="text" id="ouName" name="ouName" placeholder="name" class="form-control" ng-model="ouName" required />\r\n            <span ng-show="editOUForm.ouName.$touched && editOUForm.ouName.$error.required">Please enter organizational unit\'s name.</span>\r\n        </div>\r\n        <div class="col-sm-3">\r\n        </div>\r\n    </div>\r\n    \r\n    <input type="submit" value="Change Name" class="btn btn-primary col-sm-offset-3" ng-click="changeName(ouId,ouName)" />\r\n</form>');}]);