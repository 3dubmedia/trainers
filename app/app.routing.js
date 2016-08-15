"use strict";
var router_1 = require('@angular/router');
var trainer_list_component_1 = require('./trainer-list/trainer-list.component');
var trainer_detail_component_1 = require('./trainer-detail/trainer-detail.component');
var register_component_1 = require('./register/register.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/trainers',
        pathMatch: 'full'
    },
    {
        path: 'trainers',
        component: trainer_list_component_1.TrainerListComponent
    },
    {
        path: 'trainer/:id',
        component: trainer_detail_component_1.TrainerDetailComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map