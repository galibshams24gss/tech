var app = angular.module("Authapp", ["ngRoute", "ngTouch","ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
		controller : "homeController" 
	})
	.when("/exone", {
        templateUrl : "exone.html",
		controller : "exoneController"
	})
	.when("/extwo", {
		templateUrl: "extwo.html",
		controller : "extwoController"
	})
})

.directive('ngCarousel', function($timeout) {
	return function(scope, element, attrs) {
	  var el = element[0];
	  var timer;
	  var containerEl = el.querySelector("ul");
	  var slidesEl = containerEl.querySelectorAll("li");
	  scope.numSlides = slidesEl.length;
	  scope.curSlide = 1;

	  scope.$watch('curSlide', function(num) {
		num = (num % scope.numSlides) + 1;
		containerEl.style.left = (-1*100*(num-1)) + '%';
	  });
	  
	  el.style.position = 'relative';
	  el.style.overflow = 'hidden';

	  containerEl.style.position = 'absolute';
	  containerEl.style.width = (scope.numSlides*100)+'%';
	  containerEl.style.listStyleType = 'none';
	  containerEl.style.margin =0;
	  containerEl.style.padding=0;
	  containerEl.style.transition = '1s';
	  
	  for(var i=0; i<slidesEl.length; i++) {
		var slideEl = slidesEl[i];
		slideEl.style.display = 'inline-block';
		slideEl.style.width = (100/scope.numSlides) + '%';
	  }
	};
  })

	.controller("homeController", function($scope){
		var vm = $scope;
		vm.home = {
			text1: "Galib Shams Sunny",
			text2: "Github",
			text3: "MyGithub.com.au"
		};
	})

	.controller("exoneController", function($scope){
		var vm = $scope;
		vm.exone = {
			heading1: "Hello Developer!",
			heading2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			subheading1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			subheading2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			subheading3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			buttonTitle: "READ MORE"
		};
	})

	.controller("extwoController", function($scope){
		$scope.items = [
			{name:"Section 1", details:"Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate."},
			{name:"Section 2", details:"Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna."},
			{name:"Section 3", details:"Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.", extras:["List item one","List item two","List item three"]},
			{name:"Section 4", details:"Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.", extra:"Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
			];
			
		  $scope.toggle = function($index) {
			$scope.index = $index;
			};
	})