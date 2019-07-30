import axios from "axios";
import { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
 
export interface Params {
  [ key: string ]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}
/*
this.remote = environment.remote;
this.ws_url = environment.ws_url;
this.bearer_token = environment.bearer_token;
*/
const getBaseUrl = () => {
  if(environment.ws_url != undefined)
      return environment.ws_url;
  else
      return "http://127.0.0.1:8000";
}

/*
const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer ' + environment.bearer_token,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
*/

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  // I initialize the ApiClient.
  constructor( errorHandler: ErrorHandler ) {

      this.errorHandler = errorHandler;

      // The ApiClient wraps calls to the underlying Axios client.
      this.axiosClient = axios.create({
          baseURL: getBaseUrl(),
          timeout: 5000,
          headers: {
              "X-Initialized-At": Date.now().toString(),
              'Authorization': 'Bearer ' + environment.bearer_token,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });

  }


  // ---
  // PUBLIC METHODS.
  // ---

  // I perform a GET request with the given options.
  public async get<T>( options: GetOptions ) : Promise<T> {
    console.log('--ApiClientService--get--------1------');
    console.log('---options---');
    console.log(options);
    try {
      console.log('--ApiClientService--get--------2------');
        var axiosResponse = await this.axiosClient.request<T>({
            method: "get",
            url: options.url,
            params: options.params
        });
        console.log('--ApiClientService--get--------3------');
        console.log(axiosResponse);
        return( axiosResponse.data );

    } catch ( error ) {
      console.log('--ApiClientService--get--------4------');
      console.log(axiosResponse);
        return( Promise.reject( this.normalizeError( error ) ) );

    }

  }

  // I perform a POST request with the given options.
  public async post<T>( options: GetOptions ) : Promise<T> {
    console.log('--ApiClientService--post--------1------');
    console.log('---options---');
    console.log(options);
    try {
      console.log('--ApiClientService--post--------2------');
        var axiosResponse = await this.axiosClient.request<T>({
            method: "post",
            url: options.url,
            params: options.params
        });
        console.log('--ApiClientService--post--------3------');
        console.log(axiosResponse);
        return( axiosResponse.data );

    } catch ( error ) {
      console.log('--ApiClientService--post--------4------');
        console.log(axiosResponse);
        return( Promise.reject( this.normalizeError( error ) ) );

    }

  }  
  // I perform a PUT request with the given options.
  public async put<T>( options: GetOptions ) : Promise<T> {
    console.log('--ApiClientService--put--------1------');
    console.log('---options---');
    console.log(options);
    try {
      console.log('--ApiClientService--put--------2------');
        var axiosResponse = await this.axiosClient.request<T>({
            method: "put",
            url: options.url,
            params: options.params
        });
        console.log('--ApiClientService--put--------3------');
        console.log(axiosResponse);
        return( axiosResponse.data );

    } catch ( error ) {
        console.log('--ApiClientService--put--------4------');
        console.log(error);
        return( Promise.reject( this.normalizeError( error ) ) );

    }

  }  

  // I perform a DELETE request with the given options.
  public async delete<T>( options: GetOptions ) : Promise<T> {
    console.log('--ApiClientService--delete--------1------');
    console.log('---options---');
    console.log(options);
    try {
      console.log('--ApiClientService--delete--------2------');
        var axiosResponse = await this.axiosClient.request<T>({
            method: "delete",
            url: options.url,
            params: options.params
        });
        console.log('--ApiClientService--delete--------3------');
        console.log(axiosResponse);
        return( axiosResponse.data );

    } catch ( error ) {

        console.log('--ApiClientService--delete--------4------');
        console.log(error);

        return( Promise.reject( this.normalizeError( error ) ) );

    }
    //console.log('--ApiClientService--delete--------5------');
  }   

  // Actions Handled By Resource Controller

    /*
        Actions Handled By Resource Controller

        Verb	    URI	                    Action	Route Name

        GET	        /photos	                index	photos.index
        GET	        /photos/create	        create	photos.create
        POST	    /photos	                store	photos.store
        GET	        /photos/{photo}	        show	photos.show
        GET	        /photos/{photo}/edit	edit	photos.edit
        PUT/PATCH	/photos/{photo}	        update	photos.update
        DELETE	    /photos/{photo}	        destroy	photos.destroy

    */  

  /*
  
    axios.request(config)
    axios.get(url[, config])
    axios.delete(url[, config])
    axios.head(url[, config])
    axios.options(url[, config])
    axios.post(url[, data[, config]])
    axios.put(url[, data[, config]])
    axios.patch(url[, data[, config]])  
  */



  // ---
  // PRIVATE METHODS.
  // ---

  // Errors can occur for a variety of reasons. I normalize the error response so that
  // the calling context can assume a standard error structure.
  private normalizeError( error: any ) : ErrorResponse {

      console.log('--ApiClientService--normalizeError--------1------');
      console.log(error);

      this.errorHandler.handleError( error );

      // NOTE: Since I'm not really dealing with a production API, this doesn't really
      // normalize anything (ie, this is not the focus of this demo).
      return({
          id: "-1",
          code: "UnknownError",
          message: "An unexpected error occurred."
      });

  }

}
