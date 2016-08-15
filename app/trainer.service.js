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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var TrainerService = (function () {
    function TrainerService(http) {
        this.http = http;
        this.getTrainersUrl = 'api/trainers';
    }
    TrainerService.prototype.getTrainers = function () {
        return this.http.get(this.getTrainersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TrainerService.prototype.getTrainer = function (id) {
        return this.http.get('api/trainer/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TrainerService.prototype.addTrainer = function (data) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log('add trainer: data before');
        console.log(JSON.stringify(data));
        console.log('add trainer: data after');
        return this.http.post('api/trainers', data, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TrainerService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('response');
        console.log(body); // log to console instead
        return body || {};
    };
    TrainerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TrainerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TrainerService);
    return TrainerService;
}());
exports.TrainerService = TrainerService;
//# sourceMappingURL=trainer.service.js.map