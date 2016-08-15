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
var trainer_1 = require('../trainer/trainer');
var router_1 = require('@angular/router');
var trainer_service_1 = require('../trainer.service');
var RegisterComponent = (function () {
    function RegisterComponent(router, trainerService) {
        this.router = router;
        this.trainerService = trainerService;
        this.errorMessage = '';
        this.model = new trainer_1.Trainer('');
        this.submitted = false;
        this.active = true;
    }
    RegisterComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.newTrainer = function () {
        var _this = this;
        console.log('form submit');
        console.log(this.model);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
        this.trainerService.addTrainer(this.model)
            .subscribe(function (trainers) { return _this.trainers = trainers; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/trainers']);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/register/registration-form.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, trainer_service_1.TrainerService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map