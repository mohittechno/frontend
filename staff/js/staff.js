/**
 * Staff Appplication Core
 */
angular

	.module('dd.staff', [
		'ngRoute','dd.common', 'ddPricing', 'select2', 'angularFileUpload' ,'datePicker', 'ui.bootstrap', 'ui.app', 'ddCityPicker', 'ddVehiclePicker', 'ddVehicleTypePicker', 'angularInlineEdit', 'angular-momentjs'
	])

	.config(function ($momentProvider) {
		$momentProvider
			.asyncLoading(false)
			.scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
	})
	.config(function ($locationProvider, $routeProvider, $httpProvider) {
		// authentication token in header
		$httpProvider.interceptors.push('authInterceptor');

		// Set URL mode
		$locationProvider.html5Mode(true);

		// Start URL Routing
		$routeProvider

			/**
			 * Main Website
			 */

			// Login
			.when('/signin', {
				templateUrl: 'html/site/login.html',
				controller: 'signin'
			})

			// Logout
			.when('/signout',
			{
				template: '',
				controller: function ($rootScope, $location, session) {
					session.del();
					delete $rootScope.loginUser;
					$rootScope.EventSource.close();
					$location.path('signin');
				}
			})

			// Recover/Reset password
			.when('/reset-pass', {
				templateUrl: 'html/site/reset-password.html',
				controller: 'reset-pass'
			})

			/**
			 * My Account
			 */

			// Dashboard
			.when('/dashboard', {
				templateUrl: 'html/account/dashboard.html',
				controller: 'dashboard'
			})

			// Dashboard
			.when('/notifications', {
				templateUrl: 'html/account/notifications.html',
				controller: 'notifications'
			})
			// Change password
			// .when('/newpass/:id/:token', {
				.when('/newpass', {
				templateUrl: 'html/account/change-password.html',
				controller: 'new-pass'
			})

			.when('/ChangePassword', {
				templateUrl: 'html/account/change-password.html',
				controller: 'Change-Password'
			})
			/**
			 * Leads Section
			 */

			// Listing/index page
			.when('/leads', {
				templateUrl: 'html/lead/listing.html',
				controller: 'leads'
			})

			.when('/leads/:pageNo', {
				templateUrl: 'html/lead/listing.html',
				controller: 'leads'
			})

			// Add a lead
			.when('/leads/create', {
				templateUrl: 'html/lead/form.html',
				controller: 'edit-lead'
			})

			// Update a lead
			.when('/leads/edit/:id', {
				templateUrl: 'html/lead/form.html',
				controller: 'edit-lead'
			}).
			// View lead
			when('/leads/view/:id/:pageNo', {
				templateUrl: 'html/lead/details.html',
				controller: 'view-lead'
			})

			/**
			 * Order Section
			 */
			// Listing/index page
			.when('/orders',
			{
				templateUrl: 'html/order/listing.html',
				controller: 'orders'
			})

			.when('/orders/:pageNo',
			{
				templateUrl: 'html/order/listing.html',
				controller: 'orders'
			})

			// Create Order
			.when('/orders/create',
			{
				templateUrl: 'html/order/form.html',
				controller: 'edit-order'
			})

			// Create Order using exsiting lead
			.when('/orders/create/:id',
			{
				templateUrl: 'html/order/form.html',
				controller: 'edit-order'
			})

			// Create Order using exsiting lead
			.when('/orders/create/:id/:p?/:package',
			{
				templateUrl: 'html/order/form.html',
				controller: 'edit-order'
			})

			// Edit order
			.when('/orders/edit/:id/:back?', {
				templateUrl: 'html/order/form.html',
				controller: 'edit-order'
			})

			// Order - View details
			.when('/orders/view/:id/:tab?/:c?', {
				templateUrl: 'html/order/details.html',
				controller: 'view-order'
			})

			/**
			 * Carrier Section
			 */

			// Main/Index page
			.when('/carriers', {
				templateUrl: 'html/carrier/listing.html',
				controller: 'carriers'
			})

			.when('/carriers/:pageNo', {
				templateUrl: 'html/carrier/listing.html',
				controller: 'carriers'
			})

			// Add a Carrier
			.when('/carriers/create', {
				templateUrl: 'html/carrier/create.html',
				controller: 'create-carrier'
			})

			// View details
			.when('/carriers/view/:id/:pageNo', {
				templateUrl: 'html/carrier/details.html',
				controller: 'view-carrier'
			})

			// View Details > User Tab
			.when('/carriers/view/:id/user', {
				templateUrl: 'html/carrier/user.html',
				controller: 'carrier-user'
			})

			// View Details > User Tab > Change Email
			.when('/carriers/view/:id/user/change-email', {
				templateUrl: 'html/carrier/change-email.html',
				controller: 'carrier-change-email'
			})

			// View Details > User Tab > Change Password
			.when('/carriers/view/:id/user/change-password', {
				templateUrl: 'html/carrier/change-password.html',
				controller: 'carrier-change-password'
			})

			// View Details > Company Tab
			.when('/carriers/view/:id/company', {
				templateUrl: 'html/carrier/company.html',
				controller: 'carrier-company'
			})

			// View Details > Docs tab
			.when('/carriers/view/:id/docs', {
				templateUrl: 'html/carrier/docs.html',
				controller: 'carrier-docs'
			})

			// View Details > Trucks tab
			.when('/carriers/view/:id/trucks', {
				templateUrl: 'html/carrier/trucks.html',
				controller: 'carrier-trucks'
			})

			// View Details > Billing tab
			.when('/carriers/view/:id/billing', {
				templateUrl: 'html/carrier/billing.html',
				controller: 'carrier-billing'
			})

			/**
			 * Dealers Section
			 */

			.when('/dealers', {
				templateUrl: 'html/dealer/listing.html',
				controller: 'dealers'
			})
			.when('/dealers/create', {
				templateUrl: 'html/dealer/create.html',
				controller: 'create-dealer'
			})
			// .when('/dealers/view/:id', {
			// 	templateUrl: 'html/dealer/details.html',
			// 	controller: 'view-dealer'
			// })

			/**
			 * Sales Representative Section
			 */

			// Main page
			.when('/salesreps', {
				templateUrl: 'html/sales/listing.html',
				controller: 'salesreps'
			})

			.when('/salesreps/:pageNo', {
				templateUrl: 'html/sales/listing.html',
				controller: 'salesreps'
			})

			// Add a Sales Rep
			.when('/salesreps/create', {
				templateUrl: 'html/sales/form.html',
				controller: 'edit-salesrep'
			})

			// Edit details
			.when('/salesreps/edit/:id', {
				templateUrl: 'html/sales/form.html',
				controller: 'edit-salesrep'
			})

			// Details details
			.when('/salesreps/view/:id/:pageNo', {
				templateUrl: 'html/sales/details.html',
				controller: 'view-salesrep'
			})

			// Salesrep Bonus Page
			.when('/salesreps/bonus/:id', {
				templateUrl: 'html/sales/bonus.html',
				controller: 'view-salesrep-bonus'
			})

			// Sales rep bonus only for salesrep
			.when('/bonus', {
				templateUrl: 'html/sales/bonus.html',
				controller: 'view-salesrep-bonus'
			})

			// Reports
			.when('/reports', {
				templateUrl: 'html/reports.html',
				controller: 'reports'
			})

			// Reports
			.when('/reportDetail/:url*', {
				templateUrl: 'html/report-detail.html',
				controller: 'reportDetail'
			})

			// Trends
			.when('/trends', {
				templateUrl: 'html/trends.html',
				controller: 'trends'
			})

			// to Dashboard page
			.otherwise({
				redirectTo: '/dashboard'
			});
	})

	// Set a variable
	.value('apiHost', '/api')

	.factory('authInterceptor', function ($injector, $q, $rootScope, $location, session, apiHost) {
		return {
			request: function (config) {
				config.headers = config.headers || {};
				var user = session.get();
				if (config.url.search(apiHost) != -1 && user) {
					config.headers.Authorization = 'Bearer ' + user.token;
				}
				return config;
			},
			responseError: function (response) {
				if (response.status === 401) {
					session.del();
					delete $rootScope.loginUser;
					$location.path('/signin');
				}
				return $q.reject(response);
			}
		};
	})

	// .factory("rootScopeServive",function(session,$rootScope){
	// 		var user = session.get();
	// 		$rootScope.loginUser = user.title;
	// 		$rootScope.User_id = user.Id;
	// 		$rootScope.userRole = user.role;
	// 		$rootScope.userToken= user.token;
	// 	return {
	// 		User:$rootScope.loginUser,
	// 		User_id:$rootScope.User_id ,
	// 		Token:$rootScope.userToken
	// 	}
	// })

	.factory('session', function ($window) {
		return {
			get: function () {
				if ($window.sessionStorage.ss) {
					return JSON.parse($window.sessionStorage.ss)
				} else {
					return undefined;
				}
			},
			set: function (val) {
				$window.sessionStorage.ss = JSON.stringify(val);
			},
			del: function () {
				delete $window.sessionStorage.ss;
			}
		};
	})

	.run(function ($rootScope, $location, session, User, Notification, ddPricing) {
		$rootScope.$on('$routeChangeStart', function (event, next, current) {
			var toPrivate = ['/signin', '/reset-pass', '/new-pass'].every(function (route) {
				return (next.originalPath && next.originalPath.indexOf(route)) == -1;
			});
			var user = session.get();
			if (toPrivate && !user) {
				event.preventDefault();
				delete $rootScope.loginUser;
				$location.path('/signin');
			}
			else if (!toPrivate && user) {
				event.preventDefault();
				$location.path('/dashboard');
			}
		});
		var user = session.get();
		$rootScope.user = User;
		$rootScope.ddPricing = ddPricing; // make Pricing Module available everywhere

		if (user) {
			$rootScope.loginUser = user.title;
			$rootScope.user.type = $rootScope.userRole = user.role;
			$rootScope.user.subtype = user.subtype;

			window.notification = new Notification(user.token);
			window.notification.create();
		}
		else {
			$rootScope.user.type = '';
		}
	})
		
	.controller('signin', function ($rootScope, $scope, $location, session, restApi, User, Notification) {
		$scope.auth = function () {
			$scope.error = false;
			restApi.post('/staff/auth', { email: $scope.email, pass: $scope.pass })
				.success(function (user) {
					session.set(user);
					$rootScope.user = User;
					$rootScope.user.type = $rootScope.userRole = user.role;
					$rootScope.user.subtype = user.subtype;

					$rootScope.loginUser = user.title;
					$rootScope.User_id = user.Id;
					$rootScope.userRole = user.role;
					$rootScope.userToken= user.token;

					window.notification = new Notification(user.token);
					window.notification.create();

					$location.path('/dashboard');

				}).error(function (err) {
					$scope.error = err;
				});
		};
	})

	.controller('reset-pass', function ($scope, restApi) {
		$scope.forgot = function () {
			$scope.error = false;
			$scope.success = false;
			restApi.post('/staff/reset-pass', { email: $scope.email }).
				success(function (data) {
					$scope.success = true;
				}).error(function (err) {
					$scope.error = err;
				});
		};
	})

	.controller('Change-Password', function ($scope, restApi, $routeParams ,session) {
		var user = session.get();
		$scope.reset = function () {
			$scope.newPassForm.passDontMatch = false;
			$scope.newPassForm.passDoMatch = false;
			$scope.error = false;
			if ($scope.staff.password != $scope.staff.password2) {
				$scope.error = "Password doesn't match. Please confirm it."
				$scope.newPassForm.passDontMatch = true;
				return;
			}
			if ($scope.staff.password == $scope.staff.password3) {
				$scope.error = "New password should be different than current password."
				$scope.newPassForm.passDontMatch = true;
				return;
			}
			
			$scope.progress = true;
				restApi.post('/staff/ChangePassword', { password:$scope.staff.password,id:user.Id ,currentpassword:$scope.staff.password3}).success(function (msg){
					if(msg.nModified == 1){
						$scope.success = 'Password updated sucesfully.';
					}else{
						$scope.error   = 'Worng current password. Try again.';
						$scope.newPassForm.passDontMatch = true;
					}
				$scope.progress = false;
				
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('new-pass', function ($scope, restApi, $routeParams ,session) {
		var id = $routeParams.id;
		var token = $routeParams.token;
		if (!id || !token) {
			$scope.error = "Invalid password reset link";
			return;
		}
		$scope.progress = true;
		restApi.get('/staff/reset-pass-info/' + id + '/' + token).success(function (staff) {
			$scope.progress = false;
			$scope.staff = staff;
		}).error(function (err) {
			$scope.progress = false;
			$scope.error = err;
		});
		var user = session.get();
		$scope.reset = function () {
			$scope.newPassForm.passDontMatch = false;
			$scope.newPassForm.passDoMatch = false;
			$scope.error = false;
			$scope.progress = true;
			restApi.post('/staff/new-pass', { id: id, token: token, password: $scope.staff.password }).success(function (msg) {
					if(msg.nModified==1){
						$scope.success = 'password updated sucesfully';
					}
				$scope.progress = false;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('dashboard', function ($rootScope, $scope, restApi, $filter) {
		$rootScope.currentNavSec = 'dashboard';

		// leads
		restApi.get('/staff/dashboard/leads').success(function (leads) {
			$scope.leads = leads;
			var ctx = document.getElementById("leadsChart");
			var data = {
				labels: ["Pending", "Quoted"],
				datasets: [{
					data: [leads.pending, leads.quoted],
					backgroundColor: ["#FDB45C", "#7AC754"]
				}]
			};
			var picChart = new Chart(ctx, {
				type: 'pie',
				data: data,
				options: Chart.defaults.pie
			});
		});

		// orders
		restApi.get('/staff/dashboard/orders').success(function (orders) {
			$scope.orders = orders;
			var ctx = document.getElementById("ordersChart");
			var data = {
				labels: ["Pending", "Dispatched", "Pickedup", "Delivered", "Canceled"],
				datasets: [
					{
						data: [orders.pending, orders.dispatched, orders.pickedup, orders.delivered, orders.canceled],
						backgroundColor: ["#F7464A", "#FDB45C", "#46BFBD", "#7AC754", "#7B8B9B"]
					}]
			};
			var picChart = new Chart(ctx, {
				type: 'pie',
				data: data,
				options: Chart.defaults.pie
			});
		});
		// carriers	
		if ($rootScope.user.isAdmin()) {
			restApi.get('/staff/dashboard/carriers').success(function (carriers) {
				$scope.carriers = carriers;
				var ctx = document.getElementById("carriersChart");
				var data = {
					labels: ["Pending", "Activated"],
					datasets: [
						{
							data: [carriers.pending, carriers.activated],
							backgroundColor: ["#FDB45C", "#7AC754"]
						}]
				};
				var picChart = new Chart(ctx, {
					type: 'pie',
					data: data,
					options: Chart.defaults.pie
				});
			});
		}

		// carriers	
		restApi.get('/staff/dashboard/dealers').success(function (dealers) {
			$scope.dealers = dealers;
			var ctx = document.getElementById("dealersChart");
			var data = {
				labels: ["Pending", "Activated"],
				datasets: [
					{
						data: [dealers.pending, dealers.activated],
						backgroundColor: ["#FDB45C", "#7AC754"]
					}]
			};
			var picChart = new Chart(ctx, {
				type: 'pie',
				data: data,
				options: Chart.defaults.pie
			});
		});
	})

	.controller('notifications', function ($rootScope, $scope, restApi, $filter, $http, PaginationEx) {
		$scope.notifications = [];
		$rootScope.progress = true;
		$scope.pagination = new PaginationEx(null);

		$scope.pagination.onChange(function (p) {
			p.sortOrder = null;
			restApi.get('/staff/notifications', { params: p.getParams() }).success(function (data) {

				p.setTotal(data.total);
				p.loading = false;

				$scope.notifications = data.items;

				$rootScope.progress = false;
			});
		});

		$scope.pagination.start();

		$scope.removeThis = function (id, $event) {
			var idx = _.findIndex($scope.notifications, {
				'id': id
			});
			var idxt = _.findIndex($rootScope.notificationsList, {
				'id': id
			});

			$rootScope.progress = true;

			restApi.delete('/staff/notifications/' + id).success(function () {
				$rootScope.progress = false;
				$scope.notifications.splice(idx, 1);
				$rootScope.notificationsList.splice(idxt, 1);
				$scope.pagination.total -= 1;
			});
		};

		$scope.markAsRead = function (id, $event) {
			var idx = _.findIndex($scope.notifications, {
				'id': id
			});

			var idxt = _.findIndex($rootScope.notificationsList, {
				'id': id
			});

			$rootScope.progress = true;

			$http.put('/api/staff/notifications/' + id + '/read').success(function () {
				$rootScope.progress = false;
				$scope.notifications[idx].read = true;
				$rootScope.notificationsList[idxt].read = true;
			});
		};
	})

	/**
	 * @namespace leads
	 * @controller listing
	 * @template lead/listing.html
	 */
	.controller('leads', function ($location, $rootScope, $scope, restApi, $routeParams ,PaginationEx, Confirm, Notify, $moment, iDate, cfg) {
		if($routeParams.pageNo == undefined){
			$scope.page_no = 1; 
		}else{
			$scope.page_no = $routeParams.pageNo;
		}

		$scope.cfg = cfg;
		$scope.iDate = iDate;
		$scope._parm={};
		$scope.GotoPage =function(){
			
			localStorage.setItem('currentLimt',$scope.pagination.limit)
			$location.url("/leads/"+$scope.pagination.currentPage);
		}
		
		
		$scope.save =function(){
		 var scrollPosition = {
			 position:$(window).scrollTop(),
			 limit:$scope._parm.limit
		 };
      	localStorage.setItem("scrollPosition",JSON.stringify( scrollPosition));
	 	}
		$rootScope.currentNavSec = 'leads';
		$scope.progress = true;
		restApi.get('/staff/salesreps').success(function (salesreps) {
			$scope.salesreps = salesreps;
			if (salesreps.length > 0) {
				$scope.salesrepId = salesreps[0]._id;
			}

			$scope.progress = false;
		});

		$scope.pagination = new PaginationEx(null, '_id', 'created', -1);
		$scope.pagination.currentPage=parseInt($routeParams.pageNo)||1;
		
		if(localStorage.getItem("scrollPosition"))
		{
			//debugger
			var abc = JSON.parse(localStorage.getItem("scrollPosition"));
			$scope.pagination.limit=abc.limit;
			$scope._parm.limit = abc.limit;
			setTimeout(function() {
				$('html,body').scrollTop(abc.position,0);
				localStorage.clear();
				// localStorage.setItem("scrollPosition",undefined);
			}, 2000);	
			//window.scrollTo(abc.position,0);
			
		}

		$scope.pagination.onChange(function (p) {
			//debugger;

			$scope._parm	=	p.getParams();
			var _pageNo		=	$scope.pagination.currentPage-1;
			
			$scope._parm.skip	=	$scope._parm.limit*(_pageNo<0?0:_pageNo);

		
			/*console.log("_pageNo :",_pageNo);
			console.log("$scope._parm.skip :",$scope._parm.skip);
			console.log("$scope._parm.skipasdfas :",$scope._parm.limit*_pageNo);*/
			restApi.get('/staff/leads', { params: $scope._parm }).success(function (data) {

				var items = data.items;

				p.setTotal(data.total);
				p.loading = false;

				items.forEach(function (item) {
					item.fromNow = $moment(item.created).fromNow();
				});

				$scope.leads = items;
			});
		});

		$scope.pagination.start();

		$scope.toggleAssign = function () {
			$scope.selected = $scope.leads.some(function (lead) {
				return lead.selected;
			});
		};

		$scope.assign = function () {
			if (!$scope.salesrepId)
				return;
			var salesrepName = _.find($scope.salesreps, function (salesrep) {
				return salesrep._id == $scope.salesrepId;
			}).name;

			var leads = $scope.leads.filter(function (lead) {
				return lead.selected;
			}).map(function (lead) {
				return lead._id;
			});

			restApi.post('/staff/leads/assign-to/' + $scope.salesrepId, leads).success(function (success) {
				$scope.leads.filter(function (lead) {

					return lead.selected;
				}).forEach(function (lead) {
					lead.selected = false;
					lead.salesrepName = salesrepName;
					lead.salesrepId = $scope.salesrepId;
				});
				$scope.selected = false;
			}).error(function (err) {

			});
		};

		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Lead #' + _id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.error = false;
					$scope.success = false;
					$scope.progress = true;

					restApi
						.delete('/staff/leads/' + _id)
						.success(function (msg) {
							$scope.progress = false;

							var idx = _.findIndex($scope.leads, {
								'_id': _id
							});

							$scope.leads.splice(idx, 1);

							Notify.notice('Lead #' + _id + ' deleted.');
						})
						.error(function (err) {
							$scope.progress = false;
							$scope.error = err;
						});
				}
			});
		};
		
	})

	/**
	 * @namespace leads
	 * @controller edit-lead
	 * @template lead/form.html
	 */
	.controller('edit-lead', function ($rootScope, $scope, $location, $routeParams, restApi, routeInfo, cfg) {

		$scope.cfg = cfg;

		if ($location.path().indexOf('leads/create') != -1) {
			$scope.title = 'Create New Lead';
			$scope.cancelUrl = 'leads';
			$scope.lead = {
				carrierType: "Open",
				vehicles: [{
					condition: 'Running'
				}]
			};
			$scope.saveLead = function () {
				// fix glitch because vehicle make/model picker bound to .model property
				var lead = jQuery.extend(true, {}, $scope.lead);
				lead.vehicles.forEach(function (vehicle) {
					vehicle.make = vehicle.model.make;
					vehicle.model = vehicle.model.model;
				});
				restApi.post('/staff/leads', lead).success(function (res) {
					$location.path('leads');
				}).error(function (err) {
					$scope.error = err;
				});
			};
		} else if ($location.path().indexOf('leads/edit/') != -1) {
			$scope.title = 'Edit Lead # ' + $routeParams.id
			$scope.cancelUrl = 'leads/view/' + $routeParams.id;
			restApi.get('/staff/leads/' + $routeParams.id).success(function (lead) {
				// fix for glitch in vehicle property
				lead.vehicles.forEach(function (vehicle) {
					vehicle.model = { make: vehicle.make, model: vehicle.model };
				});
				$scope.lead = lead;
			});

			$scope.saveLead = function () {
				// fix glitch because vehicle make/model picker bound to .model property
				var lead = jQuery.extend(true, {}, $scope.lead);
				lead.vehicles.forEach(function (vehicle) {
					vehicle.make = vehicle.model.make;
					vehicle.model = vehicle.model.model;
				});
				restApi.put('/staff/leads/' + $routeParams.id, lead).success(function (res) {
					$location.path('leads/view/' + $routeParams.id);
				}).error(function (err) {
					$scope.error = err;
				});
			};
		}

		$rootScope.currentNavSec = 'leads';

		$scope.addVehicle = function () {
			$scope.lead.vehicles.push({
				condition: 'Running'
			});
		};

		$scope.removeVehicle = function (index) {
			$scope.lead.vehicles.splice(index, 1);
		};

		$scope.updateVehicleFee = function (index) {
			$scope.lead.vehicles[index].fee = $scope.ddPricing.calculateFee($scope.lead.vehicles[index].price);
		};

		var validateLocation = function (location) {
			return location && location.city && location.state && location.zip;
		};

		$scope.getRouteInfo = function () {
			// concatenate location string
			var cloc = function (o) {
				return o.city + ', ' + o.state + ' ' + o.zip;
			};
			if (!validateLocation($scope.lead.origin) || !validateLocation($scope.lead.destination)) return;
			routeInfo(cloc($scope.lead.origin), cloc($scope.lead.destination), function (err, route) {
				$scope.lead.distance = route.distance;
				$scope.lead.polylineEncoded = route.polylineEncoded;
			});
		};

		$scope.calcVehiclePrice = function (index) {
			if (!$scope.lead.origin || !$scope.lead.destination
				|| !$scope.lead.carrierType || !$scope.lead.distance
				|| !$scope.lead.vehicles[index].type || !$scope.lead.vehicles[index].condition) {
				return;
			}

			var request = {
				origin: $scope.lead.origin,
				destination: $scope.lead.destination,
				carrierType: $scope.lead.carrierType,
				distance: $scope.lead.distance,
				vehicles: [
					{
						type: $scope.lead.vehicles[index].type,
						condition: $scope.lead.vehicles[index].condition
					}]
			};
			restApi
				.post('/staff/shipping-price', request)
				.success(function (res) {
					$scope.lead.vehicles[index].price = res.prices[0];
					$scope.updateVehicleFee(index);
				});
		};
	})

	/**
	 * @namespace leads
	 * @controller view-lead
	 * @template lead/details.html
	 */
	.controller('view-lead', function ($rootScope, $scope, $location, $routeParams, $filter, restApi, Confirm, Package, cfg) {
		$rootScope.currentNavSec = 'leads';
		console.log("asdfas :",$routeParams)
		$scope.page_no = $routeParams.pageNo;

		restApi.get('/staff/leads/' + $routeParams.id).success(function (lead) {
			$scope.ploc = lead.origin.city + ', ' + lead.origin.state + ' ' + lead.origin.zip;
			$scope.dloc = lead.destination.city + ', ' + lead.destination.state + ' ' + lead.destination.zip;
			lead.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=620x460&maptype=roadmap&markers=color:red%7Clabel:O%7C' + encodeURI($scope.ploc) + '&markers=color:red%7Clabel:D%7C' + encodeURI($scope.dloc) +
				'&path=color:red%7Cweight:3%7Cenc:' + encodeURI(lead.polylineEncoded) + '&key=AIzaSyCfN2a6GaYXyfRiHos7S_4Pv9KnJlYns-A';
			$scope.lead = lead;

		});

		$scope.emailQuote = function () {
			$scope.error = false;
			$scope.success = false;
			$scope.progress = true;
			restApi.get('/staff/leads/email-quote/' + $scope.lead._id).success(function (msg) {
				$scope.progress = false;
				$scope.success = msg;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};

		$scope.deleteLead = function () {
			Confirm('Do you want to delete this Lead #' + $scope.lead._id, 'Confirm Delete', {
				onOK: function () {
					$scope.error = false;
					$scope.success = false;
					$scope.progress = true;
					restApi.delete('/staff/leads/' + $scope.lead._id).success(function (msg) {
						$scope.progress = false;
						$location.path('leads');
					}).error(function (err) {
						$scope.progress = false;
						$scope.error = err;
					});
				}
			});
		};

		$scope.hold = function () {
			$scope.progress = true;
			restApi.put('/staff/leads/' + $scope.lead._id + '/hold').success(function (success) {
				$scope.progress = false;
				$scope.lead.salesrepHold = new Date();
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};

		$scope.release = function () {
			$scope.progress = true;
			restApi.put('/staff/leads/' + $scope.lead._id + '/release').success(function (success) {
				$scope.progress = false;
				delete $scope.lead.salesrepHold;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};

		function updateNotes() {
			$scope.error = false;
			$scope.success = false;
			$scope.progress = true;
			restApi.put('/staff/leads/' + $scope.lead._id, { notes: $scope.lead.notes })
				.success(function (msg) {
					$scope.progress = false;
				})
				.error(function (err) {
					$scope.progress = false;
					$scope.error = 'Could not update notes on server';
				});
		}

		$scope.package = cfg.package.default;
		$scope.convertToOrder = function () {
			var package = new Package($scope.package, {
				onOK: function (pkg) {
					$scope.package = pkg;
					$location.path('orders/create/' + $scope.lead._id + '/p/' + $scope.package);
				}
			});
		};

		$scope.addNote = function () {
			$scope.lead.notes = $scope.lead.notes || [];
			$scope.lead.notes.push({ contents: $scope.noteText, created: new Date().toISOString() });
			$scope.noteText = '';
			updateNotes();
		};

		$scope.deleteNote = function (note) {
			$scope.lead.notes.splice($scope.lead.notes.indexOf(note), 1);
			updateNotes();
		};

	})

	/**
	 * @namespace orders
	 * @controller listing
	 * @template order/listing.html
	 *///vst
	.controller('orders', function ($rootScope, $scope,$routeParams, $location, restApi, PaginationEx, Confirm, Notify, iDate, $moment, cfg) {
		if($routeParams.pageNo == undefined){
			$scope.pageNo = 1; 
		}else{
			$scope.pageNo = $routeParams.pageNo;
		}
		$scope.iDate = iDate;
		$scope._parm={};
		$scope.cfg = cfg;
		$rootScope.currentNavSec = 'orders';
		$scope.GotoPage =function(){
			$location.url("/orders/"+$scope.pagination.currentPage);
		}
		
	 	$scope.save =function(){
			 var scrollPosition = {
				 position:$(window).scrollTop(),
				 limit:$scope._parm.limit
			 };
	      	localStorage.setItem("scrollPosition",JSON.stringify( scrollPosition));
	 	}
		$scope.progress = true;
		const queryParams = Object.keys($location.search()).length === 0 ? { sortBy: "created", sortOrder: -1, limit: 10, searchBy: "_id" } : $location.search();
		$scope.pagination = new PaginationEx(queryParams.limit, queryParams.searchBy, queryParams.sortBy, queryParams.sortOrder);
		$scope.pagination.currentPage=parseInt($routeParams.pageNo)||1;
		if(localStorage.getItem("scrollPosition"))
		{
			debugger
			var abc =JSON.parse(localStorage.getItem("scrollPosition"));
			$scope.pagination.limit=abc.limit;
			$scope._parm.limit = abc.limit;
		setTimeout(function() {
			$('html,body').scrollTop(abc.position,0);
			localStorage.clear();
			// localStorage.setItem("scrollPosition",undefined);
		}, 2000);	
			//window.scrollTo(abc.position,0);
			
		}
		$scope.pagination.onChange(function (p) {
			restApi
				.get('/staff/salesreps')
				.success(function (salesreps) {
					$scope.salesreps = salesreps;

					if (salesreps.length > 0) {
						$scope.salesrepId = salesreps[0]._id;
					}
				});
				$scope._parm=p.getParams();
				var _pageNo=$scope.pagination.currentPage-1;
				$scope._parm.skip=$scope._parm.limit*(_pageNo<0?0:_pageNo);
			restApi.get('/staff/orders', { params: $scope._parm }).success(function (data) {

				var orders = data.items;

				p.setTotal(data.total);
				p.loading = false;

				orders.forEach(function (order) {
					order.fromNow = $moment(order.created).fromNow();
					order.vehiclesDesc = order.vehicles.reduce(function (pv, cv) {
						return pv + ', ' + cv.model;
					}, '').substr(1);

					if (typeof order.package === 'undefined') {
						order.package = cfg.package.default;
						order.packagePrice = $scope.ddPricing.packagePrices['Standard'];
					}
				});

				$scope.orders = orders;
				$scope.progress = false;
			});
		});

		$scope.pagination.start();

		$scope.toggleAssign = function () {
			$scope.selected = $scope.orders.some(function (order) {
				return order.selected;
			});
		};

		$scope.assign = function () {
			if (!$scope.salesrepId)
				return;

			var salesrepName = _.find($scope.salesreps, function (salesrep) {
				return salesrep._id == $scope.salesrepId;
			}).name;

			var orders = $scope.orders
				.filter(function (order) {
					return order.selected;
				})
				.map(function (order) {
					return order._id;
				});

			restApi
				.post('/staff/orders/assign-to/' + $scope.salesrepId, orders)
				.success(function (success) {
					$scope.orders.filter(function (order) {
						return order.selected;
					})
						.forEach(function (order) {
							order.selected = false;
							order.salesrepName = salesrepName;
							order.salesrepId = $scope.salesrepId;
						});
					$scope.selected = false;
				})
				.error(function (err) {

				});
		};

		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Order # ' + _id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.error = false;
					$scope.progress = true;
					restApi.delete('/staff/orders/' + _id).success(function (msg) {
						$scope.progress = false;

						var idx = _.findIndex($scope.orders, {
							'_id': _id
						});

						$scope.orders.splice(idx, 1);
						Notify.notice('Order #' + _id + ' deleted.');
					})
						.error(function (err) {
							$scope.progress = false;
							$scope.error = err;
							Notify.error('Unable to delete Order #' + _id);
						});
				}
			});
		};
	})

	/**
	 * @namespace orders
	 * @controller edit-order
	 * @template order/form.html
	 */
	.controller('edit-order', function ($rootScope, $scope, $location, $routeParams, restApi, routeInfo, Package, cfg) {

		$scope.cfg = cfg;

		$scope.ccShipperAuth = true;

		$scope.changePackage = function () {
			Package($scope.order.package, {
				onOK: function (pkg) {
					$scope.order.package = pkg;
					$scope.order.packagePrice = $scope.ddPricing.packagePrices[pkg];
				}
			});
		};

		$rootScope.currentNavSec = 'orders';

		$scope.datePicker = { format: 'yyyy-mm-dd', multidate: 5, multidateSeparator: ', ' };

		$scope.updateVehicleFee = function (index) {
			$scope.order.vehicles[index].fee = $scope.ddPricing.calculateFee($scope.order.vehicles[index].price);
		};

		var validateLocation = function (location) {
			return location && location.city && location.state && location.zip;
		};

		$scope.getRouteInfo = function () {
			// concatenate location string
			var cloc = function (o) {
				return o.city + ', ' + o.state + ' ' + o.zip;
			};
			if (!validateLocation($scope.order.pickup.location) || !validateLocation($scope.order.delivery.location)) return;
			routeInfo(cloc($scope.order.pickup.location), cloc($scope.order.delivery.location), function (err, route) {
				$scope.order.distance = route.distance;
				$scope.order.polylineEncoded = route.polylineEncoded;
			});
		};

		$scope.addVehicle = function () {
			$scope.order.vehicles.push({ condition: 'Running' });
		};

		$scope.removeVehicle = function (index) {
			$scope.order.vehicles.splice(index, 1);
		};

		$scope.calcVehiclePrice = function (index) {
			if (!validateLocation($scope.order.pickup.location) || !validateLocation($scope.order.delivery.location) || !$scope.order.shipment.carrierType || !$scope.order.distance || !$scope.order.vehicles[index].type || !$scope.order.vehicles[index].condition)
				return;
			var request = {
				origin: $scope.order.pickup.location,
				destination: $scope.order.delivery.location,
				carrierType: $scope.order.shipment.carrierType,
				distance: $scope.order.distance,
				vehicles: [{ type: $scope.order.vehicles[index].type, condition: $scope.order.vehicles[index].condition }]
			};
			restApi.post('/staff/shipping-price', request).success(function (res) {
				$scope.order.vehicles[index].price = res.prices[0];
				$scope.updateVehicleFee(index);
			});
		};

		if ($location.path().indexOf('orders/edit') != -1) {
			$scope.mode = 'edit';
			$scope.cancelState = 'orders/view/' + $routeParams.id;
			restApi.get('/staff/orders/' + $routeParams.id).success(function (order) {
				$scope.title = 'Edit Order # ' + order._id;
				if (typeof order.package === 'undefined') {
					order.package = cfg.package.default;
					order.packagePrice = $scope.ddPricing.packagePrices['Standard'];
				}
				// fix for glitch in vehicle property
				order.vehicles.forEach(function (vehicle) {
					vehicle.model = { make: vehicle.make, model: vehicle.model };
				});

				$scope.order = order;

			});
			$scope.saveOrder = function () {
				$scope.progress = true;
				$scope.error = false;
				// fix glitch because vehicle make/model picker bound to .model property
				var order = jQuery.extend(true, {}, $scope.order);
				order.vehicles.forEach(function (vehicle) {
					vehicle.make = vehicle.model.make;
					vehicle.model = vehicle.model.model;
				});
				restApi.put('/staff/orders/' + $routeParams.id, order).success(function (res) {
					$scope.progress = false;
					if ($routeParams.back === 'details') {
						$location.path('orders/view/' + $routeParams.id);
						return;
					}
					$location.path('orders');
				}).error(function (err) {
					$scope.progress = false;
					$scope.error = err;
				});
			};
		} else if ($location.path().indexOf('orders/create/') != -1) {
			$scope.cancelState = 'leads/view/' + $routeParams.id;
			$scope.mode = 'create';
			$scope.datePicker.startDate = new Date();
			restApi.get('/staff/leads/' + $routeParams.id).success(function (lead) {
				$scope.title = 'Convert Lead # ' + lead._id + ' to Order';
				$scope.order = {
					_id: lead._id,
					polylineEncoded: lead.polylineEncoded,
					distance: lead.distance,
					shipperFeePerc: lead.shipperFeePerc,
					shipper: { email: lead.email, name: lead.name, phone: lead.phone, type: 'Individual' },
					pickup: { addressType: 'Private', contactType: 'Me', location: lead.origin },
					delivery: { addressType: 'Private', contactType: 'Me', location: lead.destination },
					shipment: { carrierType: lead.carrierType, paymentMethod: 'Cash on Delivery' },
					vehicles: lead.vehicles,
					package: cfg.package.default,
					packagePrice: $scope.ddPricing.packagePrices['Standard']
				};
				if ($routeParams.package) {
					$scope.order.package = $routeParams.package;
					$scope.order.packagePrice = $scope.ddPricing.packagePrices[$routeParams.package];
				}
				// fix for glitch in vehicle property
				$scope.order.vehicles.forEach(function (vehicle) {
					vehicle.model = { make: vehicle.make, model: vehicle.model };
				});

			});
			$scope.saveOrder = function () {
				$scope.progress = true;
				$scope.error = false;
				// fix glitch because vehicle make/model picker bound to .model property
				var order = jQuery.extend(true, {}, $scope.order);
				order.vehicles.forEach(function (vehicle) {
					vehicle.make = vehicle.model.make;
					vehicle.model = vehicle.model.model;
				});
				if (!$scope.ccShipperAuth) delete order.creditCard;
				restApi.post('/staff/orders', order).success(function (res) {
					$scope.progress = false;
					if ($routeParams.back === 'details') {
						$location.path('orders/view/' + $routeParams.id);
						return;
					}

					$location.path('orders');
				}).error(function (err) {
					$scope.progress = false;
					$scope.error = err;
				});
			};
		} else if ($location.path().indexOf('orders/create') != -1) {
			$scope.title = 'Create New Order';
			$scope.mode = 'create';
			$scope.datePicker.startDate = new Date();
			$scope.cancelState = 'orders';
			$scope.order = {
				shipper: { type: 'Individual' },
				shipperFeePerc: 5,
				pickup: { addressType: 'Private', contactType: 'Me' },
				delivery: { addressType: 'Private', contactType: 'Me' },
				shipment: { carrierType: 'Open', paymentMethod: 'Cash on Delivery' },
				vehicles: [{ condition: 'Running' }],
				package: cfg.package.default,
				packagePrice: $scope.ddPricing.packagePrices['Standard']
			};

			$scope.saveOrder = function () {
				$scope.progress = true;
				$scope.error = false;
				// fix glitch because vehicle make/model picker bound to .model property
				var order = jQuery.extend(true, {}, $scope.order);
				order.vehicles.forEach(function (vehicle) {
					vehicle.make = vehicle.model.make;
					vehicle.model = vehicle.model.model;
				});
				if (!$scope.ccShipperAuth) delete order.creditCard;
				restApi.post('/staff/orders', order).success(function (res) {
					$scope.progress = false;
					$location.path('orders');
				}).error(function (err) {
					$scope.progress = false;
					$scope.error = err;
				});
			};
		}
	})

	/**
	 * @namespace orders
	 * @controller view-order
	 * @template order/details.html
	 */
	.controller('view-order', function ($rootScope, $scope, $location, $routeParams, $filter, restApi, Confirm, Notify, $timeout, cfg) {
		$rootScope.currentNavSec = 'orders';

		$scope.cfg = cfg;

		$scope.currentPage = 'details';
		$scope.pageNo = $routeParams.tab;
		

		var updateStatus = function () {
			switch ($scope.order.status) {
				case 'Pending':
					$scope.statusClass = "alert-warning";
					break;
				case 'Dispatched':
					$scope.statusClass = "alert-info";
					break;
				case 'Pickedup':
					$scope.statusClass = "alert-info";
					break;
				case 'Delivered':
					$scope.statusClass = "alert-success";
					break;
				case 'Canceled':
					$scope.statusClass = "alert-danger";
					break;
			}
		};

		restApi.get('/staff/orders/' + $routeParams.id).success(function (order) {
			$scope.hasAuction = order.pickup.fromAuction;

			if (typeof order.package === 'undefined') {
				order.package = 'Standard';
				order.packagePrice = $scope.ddPricing.packagePrices['Standard'];
			}

			$scope.ploc = order.pickup.location.city + ', ' + order.pickup.location.state + ' ' + order.pickup.location.zip;
			$scope.dloc = order.delivery.location.city + ', ' + order.delivery.location.state + ' ' + order.delivery.location.zip;

			order.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=650x250&maptype=roadmap&markers=color:red%7Clabel:O%7C' + encodeURI($scope.ploc) + '&markers=color:red%7Clabel:D%7C' + encodeURI($scope.dloc) +
				'&path=color:red%7Cweight:3%7Cenc:' + encodeURI(order.polylineEncoded) + '&key=AIzaSyCfN2a6GaYXyfRiHos7S_4Pv9KnJlYns-A';
			$scope.order = order;

			if (order.status == 'Dispatched') $scope.pickupDatePassed = new Date() >= new Date(order.carrier.pickupDate);

			updateStatus();
		});

		$scope.pickupOrder = function () {
			$scope.succes = $scope.error = false;
			$scope.progress = true;
			restApi.get('/staff/orders/' + $scope.order._id + '/pickup').success(function (msg) {
				$scope.success = msg;
				$scope.progress = false;
				$scope.order.status = 'Pickedup';
				updateStatus();
			}).error(function (err) {
				$scope.error = err;
				$scope.progress = false;
			});
		};

		$scope.deliverOrder = function () {
			$scope.succes = $scope.error = false;
			$scope.progress = true;
			restApi.get('/staff/orders/' + $scope.order._id + '/deliver').success(function (msg) {
				$scope.success = msg;
				$scope.progress = false;
				$scope.order.status = 'Delivered';
				updateStatus();
			}).error(function (err) {
				$scope.error = err;
				$scope.progress = false;
			});
		};

		$scope.unDispatch = function () {
			$scope.succes = $scope.error = false;
			$scope.progress = true;
			restApi.put('/staff/orders/' + $scope.order._id + '/undispatch').success(function (msg) {
				$scope.success = msg;
				$scope.progress = false;
				$scope.order.status = 'Pending';
				delete $scope.order.assignedTo;
				delete $scope.order.carrier;
				delete $scope.totalFeeAuthorized;
				updateStatus();
			}).error(function (err) {
				$scope.error = err;
				$scope.progress = false;
			});
		};

		$scope.emailSubmitted = function (event) {
			event.preventDefault();
			$scope.error = false;
			$scope.success = false;
			$scope.progress = true;
			restApi.get('/staff/orders/' + $scope.order._id + '/email/submitted').success(function (msg) {
				$scope.progress = false;
				$scope.success = msg;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};

		$scope.cancelOrder = function () {
			Confirm('Do you want to cancel the Order #' + $scope.order._id + ' by shipper side?', 'Cancel Order', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;
					restApi.put('/staff/orders/' + $scope.order._id + '/cancel').success(function (res) {
						$scope.progress = false;
						$scope.order.status = 'Canceled';
						Notify.notice('Order #' + $scope.order._id + ' cancelled.');
						updateStatus();
					}).error(function (err) {
						Notify.error('Unable to cancel Order #' + $scope.order._id);
						$scope.progress = false;
						$scope.error = err;
					});
				}
			});
		};

		$scope.deleteOrder = function () {
			Confirm('Do you want to delete the Order #' + $scope.order._id + ' ?', 'Confirm Delete', {
				onOK: function () {
					var _id = $scope.order._id;

					$scope.error = false;
					$scope.progress = true;
					restApi.delete('/staff/orders/' + _id).success(function (msg) {
						Notify.notice('Order #' + _id + ' deleted.');
						$scope.progress = false;
						$location.path('orders');

					}).error(function (err) {

						Notify.error('Unable to delete Order #' + _id);
						$scope.progress = false;
						$scope.error = err;
					});
				}
			});
		};

		$scope.notes = [];

		$scope.noteSaved = false;

		function updateNotes() {
			$scope.error = false;
			$scope.progress = true;
			restApi
				.put('/staff/orders/' + $scope.order._id, { notes: $scope.order.notes })
				.success(function (msg) {
					$scope.progress = false;
					$scope.noteSaved = true;

					$timeout(function () {
						$scope.saveNoteIndex = null;
					}, 1000);
				})
				.error(function (err) {
					$scope.progress = false;
					$scope.error = 'Could not update notes on server';
				});
		}

		$scope.noteIndex = null;
		$scope.delNoteIndex = null;

		$scope.addNote = function () {
			if (!$.trim($scope.noteText)) {
				angular.element('#noteText').focus();
				Notify.notice('Please enter Notes');
				return;
			}

			$scope.order.notes = $scope.order.notes || [];
			$scope.order.notes.push({ contents: $scope.noteText, created: new Date().toISOString() });
			$scope.noteText = '';
			$scope.noteIndex = 0;

			$timeout(function () {
				$scope.noteIndex = null;
			}, 1000);

			updateNotes();
		};

		$scope.deleteNote = function (note, index) {
			$scope.delNoteIndex = index;

			$timeout(function () {
				$scope.order.notes.splice($scope.order.notes.indexOf(note), 1);
				$scope.delNoteIndex = null;
				$scope.delete = false;
				updateNotes();
			}, 1000);
		};

		$scope.showDetails = function (event) {
			event.preventDefault();
			$scope.currentPage = 'details';
		};

		$scope.showNotes = function (event) {
			event.preventDefault();
			$scope.currentPage = 'notes';
		};

		$scope.showPayments = function (event) {
			event.preventDefault();
			$scope.currentPage = 'payments';
		};

		$scope.validateNote = function (newValue, ind) {
			$scope.saveNoteIndex = null;
			if (!$.trim(newValue)) {

				$timeout(function () {
					$scope.saveNoteIndex = null;
				}, 500);

				$scope.saveNoteIndex = ind;
				Notify.notice('Note cannot be empty');
				return false;
			}

			return true;
		};

		$scope.saveNoteIndex = null;
		$scope.saveUpdateNote = function (newValue, note, ind) {


			var index = $scope.order.notes.indexOf(note);

			$scope.order.notes[index].contents = newValue;
			$scope.saveNoteIndex = ind;
			updateNotes();
		};

	})

	/**
	 * @namespace carriers
	 * @controller listing
	 * @template carrier/listing.html
	 */
	.controller('carriers', function ($location, $rootScope, $scope, $routeParams ,restApi, PaginationEx, Confirm, Notify, $moment) {
		if($routeParams.pageNo == undefined){
			$scope.pageNo = 1; 
		}else{
			$scope.pageNo = $routeParams.pageNo;
		}
		$rootScope.currentNavSec = 'carriers';
		$scope._parm={};
		$scope.GotoPage =function(){
		$location.url("/carriers/"+$scope.pagination.currentPage);
		}
		$scope.save =function(){
		 var scrollPosition = {
			 position:$(window).scrollTop(),
			 limit:$scope._parm.limit
		 };
      	localStorage.setItem("scrollPosition",JSON.stringify( scrollPosition));
	 	}
		$rootScope.progress = true;
		$scope.pagination = new PaginationEx(null, '_id', 'created', -1);
		$scope.pagination.currentPage=parseInt($routeParams.pageNo)||1;
		if(localStorage.getItem("scrollPosition"))
		{
			debugger
			var abc = JSON.parse(localStorage.getItem("scrollPosition"));
			$scope.pagination.limit=abc.limit;
			$scope._parm.limit = abc.limit;
		setTimeout(function() {
			$('html,body').scrollTop(abc.position,0);
			localStorage.clear();
			// localStorage.setItem("scrollPosition",undefined);
		}, 2000);	
			//window.scrollTo(abc.position,0);
			
		}
		$scope.pagination.onChange(function (p) {
			$scope._parm=p.getParams();
				var _pageNo=$scope.pagination.currentPage-1;
				$scope._parm.skip=$scope._parm.limit*(_pageNo<0?0:_pageNo);
				console.log("fasdf",$scope._parm);
			restApi.get('/staff/carriers', { params: $scope._parm }).success(function (data) {
				var items = data.items;

				items.forEach(function (c) {
					c.fromNow = $moment(c.created).fromNow();
				});

				p.setTotal(data.total);
				p.loading = false;

				$scope.carriers = items;

				$rootScope.progress = false;
			});
		});

		$scope.pagination.start();

		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Carrier #' + _id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;

					restApi.delete('/staff/carriers/' + _id).success(function (msg) {

						var idx = _.findIndex($scope.carriers, {
							'_id': _id
						});

						$scope.carriers.splice(idx, 1);
						Notify.notice('Carrier #' + _id + ' deleted.');

						$scope.progress = false;
					})
						.error(function (err) {
							$scope.progress = false;
							$scope.error = err;
						});
				}
			});
		};
	})

	.controller('create-carrier', function ($rootScope, $scope, $location, restApi) {
		$rootScope.currentNavSec = 'carriers';
		$scope.register = function () {
			$scope.progress = true;
			$scope.error = false;
			restApi.post('/staff/carriers', $scope.carrier).success(function (msg) {
				$scope.progress = false;
				$location.path('carriers');
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('view-carrier', function ($rootScope, $routeParams, $scope, restApi, $location, Confirm, Notify) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;
		if($routeParams.pageNo == undefined){
			$scope.pageNo = 1; 
		}else{
			$scope.pageNo = $routeParams.pageNo;
		}
		console.log("pageNo :",)
		restApi.get('/staff/carriers/' + $routeParams.id).success(function (carrier) {
			$scope.carrier = carrier;
		});
		$scope.sendActivationLink = function () {
			$scope.progress = true;
			$scope.error = false;
			$scope.success = false;
			restApi.get('/staff/carriers/' + $routeParams.id + '/activate').success(function (msg) {
				$scope.progress = false;
				$scope.success = msg;
				$scope.carrier.activationLinkSent = new Date();
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};

		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Carrier #' + $routeParams.id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;

					restApi.delete('/staff/carriers/' + $routeParams.id).success(function (msg) {
						$scope.progress = false;

						$location.path('carriers');
					})
						.error(function (err) {
							$scope.progress = false;
							$scope.error = err;
						});
				}
			});
		};
	})

	.controller('carrier-user', function ($rootScope, $routeParams, $scope, restApi) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;

		restApi
			.get('/staff/carriers/' + $routeParams.id + '/user')
			.success(function (carrier) {
				$scope.carrier = carrier;
			});
	})

	.controller('carrier-change-email', function ($rootScope, $scope, $routeParams, restApi) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;
		$scope.change = function () {
			$scope.error = false;
			$scope.progress = true;
			restApi.post('/staff/carriers/' + $scope.id + '/change-email/', $scope.email).success(function (msg) {
				$scope.progress = false;
				$scope.success = msg;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('carrier-change-password', function ($rootScope, $scope, $routeParams, $location, restApi) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;
		$scope.change = function () {
			if ($scope.password.new !== $scope.password.new2) {
				return $scope.error = "New Password and Confirm Password doesn't match";
			}
			$scope.error = false;
			$scope.progress = true;
			restApi.post('/staff/carriers/' + $scope.id + '/change-password/', $scope.password).success(function (msg) {
				$scope.progress = false;
				$scope.success = msg;
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('carrier-company', function ($rootScope, $routeParams, $scope, restApi, Locale) {
		$rootScope.currentNavSec = 'carriers';
		$scope.location = new Locale('location');

		$scope.datePicker = { format: 'yyyy-mm-dd', autoclose: true };
		$scope.id = $routeParams.id;
		$scope.mode = 'view';
		restApi.get('/staff/carriers/' + $routeParams.id + '/company').success(function (carrier) {
			$scope.carrier = carrier;
			$scope.location.preLoad(carrier.location);
		});
		$scope.save = function () {
			$scope.progress = true;
			$scope.error = false;
			restApi.put('/staff/carriers/' + $routeParams.id + '/company', $scope.carrier).success(function (res) {
				$scope.progress = false;
				$scope.mode = 'view';
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('carrier-docs', function ($rootScope, $routeParams, $scope, session, restApi, apiHost) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;
		restApi.get('/staff/carriers/' + $routeParams.id + '/docs').success(function (docs) {
			$scope.docs = docs;
		});
		$scope.getDocLabel = function (docName) {
			switch (docName) {
				case 'mc':
					return 'MC';
				case 'dot':
					return 'DOT';
				case 'insurance':
					return 'Insurance';
			}
		};
		$scope.showUpload = function (docName) {
			$('#docForm')[0].reset();
			$scope.modal = { docName: docName, title: $scope.getDocLabel(docName) };
			$('#uploadDialog').modal();
			$scope.responseMsg = null;
		};
		$scope.uploadDocument = function () {
			$scope.modal.error = false;
			var file = $('#docFile')[0].files[0];
			if (file.type != 'application/pdf') {
				$scope.modal.error = "Only PDF documents are allowed to be uploaded";
				return;
			}
			if (file.size > 4 * 1024 * 1024) {
				$scope.modal.error = "File size should not exceed 4 MB";
				return;
			}
			var token = session.get().token;
			var form = new FormData();
			form.append('document', file);
			var url = apiHost + '/staff/carriers/' + $routeParams.id + '/docs/' + $scope.modal.docName;
			$.ajax({
				type: "POST",
				url: url,
				data: form,
				headers: { 'Authorization': 'Bearer ' + token },
				xhr: function () {
					var xhr = $.ajaxSettings.xhr();
					xhr.upload.onprogress = function (e) {
						$scope.modal.progress = e.loaded;
					};
					return xhr;
				},
				contentType: false,
				processData: false,
			}).done(function (res) {
				$scope.modal.progress = null;
				$('#docForm')[0].reset();
				$('#uploadDialog').modal('hide');
				$scope.responseMsg = res;
				$scope.$apply(function () {
					$scope.docs[$scope.modal.docName] = true;
				});
			}).fail(function (err) {
				$scope.modal.progress = null;
				$scope.modal.error = err;
			});
		};
		$scope.viewDoc = function (docName) {
			var token = session.get().token;
			$scope.modal = { title: $scope.getDocLabel(docName) };
			$('#viewDocDialog').modal();
			$.ajax({
				type: "GET",
				url: apiHost + '/staff/carriers/' + $routeParams.id + '/docs/' + docName,
				headers: { 'Authorization': 'Bearer ' + token }
			}).done(function (data) {
				$("#docViewer").attr('src', 'data:application/pdf;base64,' + escape(data));
			});
		};
		$scope.deleteDoc = function (docName) {
			var token = session.get().token;
			$.ajax({
				type: "DELETE",
				url: apiHost + '/staff/carriers/' + $routeParams.id + '/docs/' + docName,
				headers: { 'Authorization': 'Bearer ' + token }
			}).done(function (res) {
				$scope.responseMsg = res;
				$scope.$apply(function () {
					$scope.docs[docName] = false;
				});
			});
		};
	})

	.controller('carrier-trucks', function ($rootScope, $routeParams, $scope, restApi, Locale) {
		$rootScope.currentNavSec = 'carriers';

		$scope.oroutes = [];
		$scope.droutes = [];

		$scope.insRoute = function (i, o, d) {
			$scope.oroutes[i] = new Locale(i);
			$scope.droutes[i] = new Locale(i);

			if (o) {
				$scope.oroutes[i].preLoad(o);

			}

			if (d) {
				$scope.droutes[i].preLoad(d);

			}
		};

		$scope.id = $routeParams.id;
		$scope.mode = 'view';
		restApi.get('/staff/carriers/' + $routeParams.id + '/trucks').success(function (trucks) {
			$scope.trucks = trucks || [];
		});
		$scope.addRoute = function () {
			$scope.truck.routes.push({ reverse: false });
			var i = ($scope.truck.routes.length - 1);
			$scope.insRoute(i);
		};
		$scope.removeRoute = function (index) {
			$scope.truck.routes.splice(index, 1);
			$scope.oroutes.splice(index, 1);
			$scope.droutes.splice(index, 1);
		};
		$scope.deleteTruck = function (index) {
			restApi.delete('/staff/carriers/' + $routeParams.id + '/trucks/' + index).success(function (msg) {
				$scope.trucks.splice(index, 1);
			});
		};
		$scope.showAdd = function (truck) {
			$scope.truck = { routes: [{ reverse: false }] };
			var i = ($scope.truck.routes.length - 1);
			$scope.insRoute(i);
			$scope.mode = 'add';
		};
		$scope.showEdit = function (index, truck) {
			$scope.truck = truck;
			$scope.truckIndex = index;

			$scope.truck.routes.forEach(function (t, i) {
				$scope.insRoute(i, t.origin, t.destination);
			});

			$scope.mode = 'edit';
		};
		$scope.save = function () {
			$scope.progress = true;
			$scope.error = false;
			if ($scope.mode == 'add') {
				restApi.post('/staff/carriers/' + $routeParams.id + '/trucks', $scope.truck).success(function (res) {
					$scope.progress = false;
					$scope.trucks.push($scope.truck);
					$scope.mode = 'view';
				}).error(function (err) {
					$scope.progress = false;
					$scope.error = err;
				});
			} else if ($scope.mode == 'edit') {
				restApi.put('/staff/carriers/' + $routeParams.id + '/trucks/' + $scope.truckIndex, $scope.truck).success(function (res) {
					$scope.progress = false;
					$scope.mode = 'view';
				}).error(function (err) {
					$scope.progress = false;
					$scope.error = err;
				});
			}
		};
	})

	.controller('carrier-billing', function ($rootScope, $routeParams, $scope, restApi) {
		$rootScope.currentNavSec = 'carriers';
		$scope.id = $routeParams.id;
		restApi.get('/staff/carriers/' + $routeParams.id + '/billing').success(function (carrier) {
			$scope.carrier = carrier;
		});
	})

	// Dealers list

	.controller('dealers', function ($rootScope, $scope, restApi, PaginationEx, Confirm, Notify, $moment) {
		$rootScope.currentNavSec = 'dealers';
		$rootScope.progress = true;

		$scope.pagination = new PaginationEx(null, '_id', 'created', -1);

		$scope.pagination.onChange(function (p) {
			restApi.get('/staff/dealers', { params: p.getParams() }).success(function (data) {
				var items = data.items;

				items.forEach(function (c) {
					c.fromNow = $moment(c.created).fromNow();
				});

				p.setTotal(data.total);
				p.loading = false;

				$scope.dealers = items;

				$rootScope.progress = false;
			});
		});

		$scope.pagination.start();

		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Dealer #' + _id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;
					restApi.delete('/staff/dealers/' + _id).success(function (msg) {
						var idx = _.findIndex($scope.dealers, {
							'_id': _id
						});
						$scope.dealers.splice(idx, 1);
						Notify.notice('Dealer #' + _id + ' deleted.');
						$scope.progress = false;
					}).error(function (err) {
						$scope.progress = false;
						$scope.error = err;
					});
				}
			});
		};
	})

	.controller('create-dealer', function ($rootScope, $scope, $location, restApi) {
		$rootScope.currentNavSec = 'dealers';
		$scope.register = function () {
			$scope.progress = true;
			$scope.error = false;
			restApi.post('/staff/dealers', $scope.dealer).success(function (msg) {
				$scope.progress = false;
				$location.path('dealers');
			}).error(function (err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
	})

	.controller('salesreps', function ($rootScope, $routeParams, $scope, restApi, PaginationEx, Confirm, Notify) {
		if($routeParams.pageNo == undefined){
			$scope.pageNo = 1; 
		}else{
			$scope.pageNo = $routeParams.pageNo;
		}
		$rootScope.currentNavSec = 'salesreps';
		$scope._parm={};
		$scope.GotoPage =function(){
		$location.url("/carriers/"+$scope.pagination.currentPage);
		}
		$scope.save =function(){
		 var scrollPosition = {
			 position:$(window).scrollTop(),
			 limit:$scope._parm.limit
		 };
      	localStorage.setItem("scrollPosition",JSON.stringify( scrollPosition));
	 	}
		 if(localStorage.getItem("scrollPosition"))
		{
			var abc = JSON.parse(localStorage.getItem("scrollPosition"));
		setTimeout(function() {
			$('html,body').scrollTop(abc.position,0);
			localStorage.clear();
			// localStorage.setItem("scrollPosition",undefined);
		}, 2000);	
			//window.scrollTo(abc.position,0);
			
		}
		$scope.loadReps = function(type) {
			$scope.progress = true;
			$scope.type = type;
			$scope.salesreps = [];
			restApi.get('/staff/salesreps' + '?type=' + type).success(function (data) {
				$scope.salesreps = data;
				$scope.progress = false;
			}).error(function (error) {
				$scope.progress = false;
			});
		};
		$scope.loadReps('staff');
		$scope.onDelete = function (_id) {
			Confirm('Do you want to delete this Sales Rep # ' + _id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;
					restApi.delete('/staff/salesreps/' + _id).success(function (msg) {
						$scope.progress = false;
						var idx = _.findIndex($scope.salesreps, {
							'_id': _id
						});
						$scope.salesreps.splice(idx, 1);
						Notify.notice('Sales Rep #' + _id + ' deleted.');
					}).error(function (err) {
						$scope.progress = false;
						$scope.error = err;
					});
				}
			});
		};
	})

	.controller('edit-salesrep', function ($rootScope, $scope, $location, $routeParams, restApi) {
		$rootScope.currentNavSec = 'salesreps';
		if ($location.path().indexOf('salesreps/create') != -1) {
			$scope.title = 'Create New Sales Rep';
			$scope.salesrep = { enabled: true, subtype: 'staff' };
			$scope.cancelUrl = 'salesreps';
			$scope.mode = 'create';
			$scope.changePassword = true;
			$scope.save = function () {
				$scope.salesrep.password = $scope.password;
				restApi.post('/staff/salesreps', $scope.salesrep).success(function (res) {
					$location.path('salesreps');
				}).error(function (err) {
					$scope.error = err;
				});
			};
		} else if ($location.path().indexOf('salesreps/edit/') != -1) {
			$scope.title = 'Edit Sales Rep # ' + $routeParams.id;
			$scope.cancelUrl = 'salesreps/view/' + $routeParams.id;
			$scope.mode = 'edit';
			restApi.get('/staff/salesreps/' + $routeParams.id).success(function (salesrep) {
				$scope.salesrep = salesrep;
			});
			$scope.save = function () {
				if ($scope.changePassword) {
					$scope.salesrep.password = $scope.password;
				}
				restApi.put('/staff/salesreps/' + $routeParams.id, $scope.salesrep).success(function (res) {
					$location.path('salesreps');
				}).error(function (err) {
					$scope.error = err;
				});
			};
		}
	})

	.controller('view-salesrep', function ($rootScope, $scope, $routeParams, $location, restApi, Confirm, Notify) {
		$rootScope.currentNavSec = 'salesreps';
		$scope.pageNo = $routeParams.pageNo;
		restApi.get('/staff/salesreps/' + $routeParams.id).success(function (salesrep) {
			$scope.salesrep = salesrep;
		});

		$scope.delete = function () {
			Confirm('Do you want to delete this Sales Rep # ' + $routeParams.id + '?', 'Confirm Delete', {
				onOK: function () {
					$scope.progress = true;
					$scope.error = false;

					restApi.delete('/staff/salesreps/' + $routeParams.id).success(function (msg) {
						$scope.progress = false;
						$location.path('salesreps');
						Notify.notice('Sales Rep #' + $routeParams.id + ' deleted.');
					})
						.error(function (err) {
							$scope.progress = false;
							$scope.error = err;
						});
				}
			});
		};
	})

	.controller('view-salesrep-bonus', function ($rootScope, $scope, $routeParams, $location, restApi, Confirm, Notify) {
		$scope.months = [];
		var dateStart = moment('2016-09-01');
		var dateEnd = moment();
		while (dateEnd > dateStart) {
			$scope.months.push({ year: dateStart.format('YYYY'), month: dateStart.format('M'), label: dateStart.format('MMMM YYYY') });
			dateStart.add(1,'month');
		}
		$scope.date = $scope.months[$scope.months.length-1];
		if ($rootScope.user.isRole('salesrep')) {
			$scope._id = 'current';
			$rootScope.currentNavSec = 'bonus';
		} else {
			$scope._id = $routeParams.id;
			$rootScope.currentNavSec = 'salesreps';
		}
		$scope.getBonus = function () {
			$scope.error = false;
			$scope.progress = true;
			restApi.get('/staff/salesreps/' + $scope._id + '/bonus/' + $scope.date.year + '/' + $scope.date.month).success(function (bonus) {
				$scope.progress = false;
				$scope.bonus = bonus;
			}).error(function(err) {
				$scope.progress = false;
				$scope.error = err;
			});
		};
		$scope.getBonus();
	})

	.controller('reports', function ($rootScope, $scope, apiHost , $routeParams, $location, session , restApi,$http) {
		$scope.saveState = function(id){
		 var scrollPosition = {
			 position:$(window).scrollTop(),
			 id:id
		 };
      	localStorage.setItem("reportPosition",JSON.stringify( scrollPosition));
		}
		 if(localStorage.getItem("reportPosition"))
		{
			var abc = JSON.parse(localStorage.getItem("reportPosition"));
		setTimeout(function() {
			$('html,body').scrollTop(abc.position,0);
			$scope.AccordionToggle(abc.id);
			localStorage.clear();
		}, 2000);	
		}
		$scope.reportId;
		$scope.EditData={
			report_id:'',
			category_id:''
		}
		$scope.imageUpload=null;
		restApi.get('/staff/reports/Category').success(function (category) {
			console.log(category);
			$scope.category = category;
		});
		$scope.ReportId =function(id){
			$scope.reportId = id;
		}

		$scope.AccordionToggle =function(id){
			$scope.EditData.category_id= id;
			restApi.get('/staff/reports/report/'+id).success(function (reports) {
			$scope.reports = reports[0].reports;
		});
			$(".panel-collapse").removeClass("in");
			$(".panel-heading").removeClass("active-orange");
			$("#"+id).toggleClass("in");
			$("#"+id).prev().toggleClass("active-orange");
		}


		$scope.AddCategory = function(){
			var data ={
				name:$scope.CategoryName,
				color:$scope.CategoryCollor,
				icon:$scope.imageUpload
			}
			restApi.post('/staff/reports/AddCategory', data).success(function (res) {
				$('#CategoryModal').modal('toggle');
				 window.location.reload(); 
			}).error(function (err) {
				$('#CategoryModal').modal('toggle');
				console.log(err);
			})
		};

		$scope.AddReport = function(){
			console.log($scope.reportId);
			var data ={
				id:$scope.reportId,
				title:$scope.title,
				description:$scope.description,
				icon:$scope.imageUpload,
				URL:$scope.url
			}
			restApi.post('/staff/reports/AddReport', data).success(function (res) {
				$('#reportModal').modal('toggle');
			}).error(function (err) {
				$('#reportModal').modal('toggle');
				console.log(err);
			})
		};
		$scope.EditCategory=function(_data){
			var data={
			category:$scope.EditData.category_id,
			name : $scope.title,
			icon: $scope.imageUpload
		}
		console.log(data);
		restApi.post('/staff/reports/EditCategory', data).success(function (res) {
			$('#editcategory').modal('toggle');
				window.location.reload();
			}).error(function (err) {
				$('#editcategory').modal('toggle');
				console.log(err);
			})

		};
		$scope.passId= function(_data1,_data2,event){
			angular.element(".thumbnail").removeClass("active-edit");
			angular.element(event.currentTarget).find(".thumbnail").addClass("active-edit");
			$scope.EditData.report_id=_data1._id;
			
		};
		$scope.handleFileSelectreport = function(evt){
    			var files = evt.target.files; // FileList object
				for (var i = 0, f; f = files[i]; i++) {
				if (!f.type.match('image.*')) {
					continue;
				}
				var reader = new FileReader();
				reader.onload = (function(theFile) {
					return function(e) {
						$scope.imageUpload = e.target.result;
					};
				})(f);
				reader.readAsDataURL(f);
			}
		}
		document.getElementById('files').addEventListener('change', $scope.handleFileSelectreport, false);
		document.getElementById('filess').addEventListener('change', $scope.handleFileSelectreport, false);
		document.getElementById('filesss').addEventListener('change', $scope.handleFileSelectreport, false);
	})

	.controller('reportDetail', function ($rootScope, $scope, apiHost , $routeParams, $location, session , restApi,$http) {
		$('#abc_frame').attr('src',$routeParams.url);
	})

	.controller('trends', function ($rootScope, $scope, $routeParams, $location, restApi) {
		$rootScope.currentNavSec = 'trends';
		$scope.interval = 'day';
		$scope.loadTrends = function (type, interval) {
			if (['leads', 'orders', 'carriers', 'revenues'].indexOf(type) === -1) throw 'Invalid type param for loadStats function';
			$scope.interval = interval;
			var limit = interval === 'day' ? 14 : 12;
			restApi.get('/staff/trends/' + type + '/' + interval + '/' + limit).success(function (stats) {
				var ctx = document.getElementById(type + 'Chart');
				var values = stats.map(function (stat) { return stat.value; });
				$scope[type + 'Average'] = Math.round(_.sum(values) / values.length);
				var data = {
					labels: stats.map(function (stat) { return stat.label; }),
					datasets: [{
						label: type === 'revenues' ? 'Total Revenue' : "Number of " + type,
						fill: true,
						backgroundColor: "rgba(75,192,192,0.4)",
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 2,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: "rgba(120,120,120,1)",
						pointHoverBorderWidth: 2,
						pointRadius: 4,
						pointHitRadius: 10,
						data: stats.map(function (stat) { return stat.value })
					}]
				};
				if ($scope[type + 'Chart']) $scope[type + 'Chart'].destroy();
				$scope[type + 'Chart'] = new Chart(ctx, {
					type: 'line',
					data: data,
					options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
				});
			});
		};
		$scope.loadAllTrends = function (interval) {
			['leads', 'orders', 'carriers', 'revenues'].forEach(function (type) {
				$scope.loadTrends(type, interval);
			});
		}
		$scope.loadAllTrends($scope.interval);
	});
