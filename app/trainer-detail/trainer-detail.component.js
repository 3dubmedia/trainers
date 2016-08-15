"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var trainer_service_1 = require('../trainer.service');
var TrainerDetailComponent = (function () {
    function TrainerDetailComponent(route, trainerService) {
        this.route = route;
        this.trainerService = trainerService;
        this.errorMessage = '';
    }
    TrainerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // #docregion get-id
        this.route.params.forEach(function (params) {
            console.log('params');
            console.log(params['id']);
            var id = params['id'];
            _this.trainerService.getTrainer(id)
                .subscribe(function (trainer) { return _this.trainer = trainer; }, function (error) { return _this.errorMessage = error; });
        });
        // #enddocregion get-id
    };
    TrainerDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-trainer-detail',
            template: "\n    \n    <div *ngIf=\"trainer\">\n      <h2>{{trainer.name}}'s details</h2>\n      <div>\n        <label>id: </label>{{trainer._id}}\n      </div>\n      <div>\n        <label>name: </label>{{trainer.name}}\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, trainer_service_1.TrainerService])
    ], TrainerDetailComponent);
    return TrainerDetailComponent;
}());
exports.TrainerDetailComponent = TrainerDetailComponent;
//# sourceMappingURL=trainer-detail.component.js.map