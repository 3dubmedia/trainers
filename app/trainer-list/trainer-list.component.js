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
var trainer_service_1 = require('../trainer.service');
var router_1 = require('@angular/router');
var TrainerListComponent = (function () {
    function TrainerListComponent(router, trainerService) {
        this.router = router;
        this.trainerService = trainerService;
        this.title = 'Trainers';
        this.errorMessage = '';
    }
    TrainerListComponent.prototype.getTrainers = function () {
        var _this = this;
        this.trainerService.getTrainers()
            .subscribe(function (trainers) { return _this.trainers = trainers; }, function (error) { return _this.errorMessage = error; });
    };
    TrainerListComponent.prototype.ngOnInit = function () {
        this.getTrainers();
    };
    TrainerListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/trainer', id]);
    };
    TrainerListComponent = __decorate([
        core_1.Component({
            selector: 'my-trainers',
            template: "\n  <h2>{{title}}</h2>\n  <ul class=\"trainers\">\n    <li *ngFor=\"let trainer of trainers\"  (click)=\"gotoDetail(trainer._id)\">\n      {{trainer.name}}\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, trainer_service_1.TrainerService])
    ], TrainerListComponent);
    return TrainerListComponent;
}());
exports.TrainerListComponent = TrainerListComponent;
//# sourceMappingURL=trainer-list.component.js.map