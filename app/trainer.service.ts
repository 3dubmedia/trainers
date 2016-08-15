import { Injectable } from '@angular/core';
import { Trainer } from './trainer/trainer';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainerService {
    
    constructor (private http: Http) {}
    
    private getTrainersUrl = 'api/trainers';
   
    getTrainers (): Observable<Trainer[]> {
        return this.http.get(this.getTrainersUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    
    getTrainer (id: number): Observable<Trainer[]> {
        return this.http.get('api/trainer/'+id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    addTrainer (data): Observable<Trainer[]> {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        console.log('add trainer: data before');
        console.log(JSON.stringify(data));
        console.log('add trainer: data after');
        return this.http.post('api/trainers',data,{headers: headers})
                        .map(this.extractData)
                        .catch(this.handleError);
    }
  
    private extractData(res: Response) {
        
        let body = res.json();
        console.log('response');
        console.log(body); // log to console instead

        return body || { };
    }
    
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
