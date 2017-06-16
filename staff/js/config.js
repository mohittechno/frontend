angular
.module( 'dd.staff')
.value('userType', null)

.factory('User', function ($rootScope)
{
	var User = {};
	User.type = '';
	
	User.isAdmin = function (){
		return User.type.toLowerCase() === 'admin';
	};
	
	User.isSalesRep = function (){
		return User.type.toLowerCase() === 'salesrep';
	};
	
	User.isRole = function (role){
		
		if ( typeof (role) === 'string' )
		{
			return role.toLowerCase() === User.type.toLowerCase();
		}
		
		if ( typeof role !== 'object' || !role.length )
		{
			return null;
		}
		
		var res = false;
		
		role.forEach (function (r)
		{			
			if ( r.toLowerCase() === User.type.toLowerCase() )
			{
				res = true;
			}
		});
		
		return res;
	};
	
	return User;
});
