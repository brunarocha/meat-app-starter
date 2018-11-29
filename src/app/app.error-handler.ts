import {HttpErrorResponse} from '@angular/common/http';
// import 'rxjs/add/observable/throw'; // mudou para throwError
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor( /* private ns: NotificationService */
                private injector: Injector,
                private zone: NgZone) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message;

            this.zone.run( () => {
                switch (errorResponse.status) {
                    case 401:
                        console.log(message || 'Não autorizado.');
                        this.injector.get(LoginService).handleLogin();
                        // this.ns.notify();
                        break;
                    case 403:
                        console.log(message || 'Não autorizado.');
                        // this.ns.notify();
                        break;
                    case 404:
                        console.log(message || 'Recurso não encontrado. Verifique o console para mais detalhes.');
                        // this.ns.notify();
                        break;
                }
            });
        }

        super.handleError(errorResponse);
        /*let errorMessage: string;
        // console.log(errorMessage);

        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errorMessage = error.message ? error.message : error.toString();
        }

        // return Observable.throw(errorMessage); */
    }
}
