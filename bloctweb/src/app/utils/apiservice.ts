import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }

  private baseUrl: string;
  public isAlertEnabled: boolean;
  public alertIntervalInMilliSeconds: number;
  public itraqProductUrl: string;
  public tiveProductUrl: string;
  public arloProductUrl: string;
  public token = '';
  public currentUser: any;
  public devices: any;

  getConfiguration() {
    return this.http.get('./assets/config.json')
      .toPromise()
      .then(res => {
        this.baseUrl = res['API_URL'];
        
      });
  }

  authenticate(body): Promise<any> {
    return this.http.post(this.baseUrl + 'login/authenticate', body)
      .toPromise()
      .then(response => response);
  }

  getAssetsHistory(): Promise<any> {
    return this.http.get(this.baseUrl + 'api/AssetTracking/', {
      headers: new HttpHeaders().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
      
    })
      .toPromise()
      .then(response => response);
  }

  getAssetHistory(deviceId): Promise<any> {
    return this.http.get(this.baseUrl + 'api/AssetTracking/' + deviceId, {
      headers: new HttpHeaders().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
    })
      .toPromise()
      .then(response => response);
  }

  getAssets(): Promise<any> {
    return this.http.get(this.baseUrl + 'api/Assets', {
      headers: new HttpHeaders().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
      
    })
      .toPromise()
      .then(response => response);
  }


  // getDeviceTypes(): Promise<any> {
  // //  var devices = ["deviceType", "Tracking"] ;
  // //   return devices.toPromise();
     
  // }

  getApiDetails(): Promise<any> {
    return this.http.get(this.baseUrl + 'device/apiDetails', {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getStandardMetrics(): Promise<any> {
    return this.http.get(this.baseUrl + 'device/standardMetrics', {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getiTraqDevices(loginName): Promise<any> {
    return this.http.get(this.baseUrl + 'device/itraq/' + loginName, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  addiTraqDevices(isNew, body): Promise<any> {
    return this.http.post(this.baseUrl + 'device/itraq/' + isNew, body, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getiTraqBlockchain(deviceId): Promise<any> {
    return this.http.get(this.baseUrl + 'device/itraq/blockchain/' + deviceId, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getiTraqTransactions(startRow, endRow): Promise<any> {
    return this.http.get(this.baseUrl + 'device/itraq/transactions/' + startRow + '/' + endRow, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getTiveDevices(loginName): Promise<any> {
    return this.http.get(this.baseUrl + 'device/tive/' + loginName, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  addTiveDevices(isNew, body): Promise<any> {
    return this.http.post(this.baseUrl + 'device/tive/' + isNew, body, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getTiveBlockchain(deviceId): Promise<any> {
    return this.http.get(this.baseUrl + 'device/tive/blockchain/' + deviceId, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getTiveTransactions(startRow, endRow): Promise<any> {
    return this.http.get(this.baseUrl + 'device/tive/transactions/' + startRow + '/' + endRow, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getArloDevices(loginName): Promise<any> {
    return this.http.get(this.baseUrl + 'device/arlo/' + loginName, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  addArloDevices(isNew, body): Promise<any> {
    return this.http.post(this.baseUrl + 'device/arlo/' + isNew, body, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  addAssets(body): Promise<any> {
    console.log(this.baseUrl);
    return this.http.post(this.baseUrl + 'api/Assets/', body, {
      headers: new HttpHeaders().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
    })
      .toPromise()
      .then(response => response);
  }

  getArloBlockchain(deviceId): Promise<any> {
    return this.http.get(this.baseUrl + 'device/arlo/blockchain/' + deviceId, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }

  getArloTransactions(startRow, endRow): Promise<any> {
    return this.http.get(this.baseUrl + 'device/arlo/transactions/' + startRow + '/' + endRow, {
      headers: new HttpHeaders().set('x-access-token', this.token),
    })
      .toPromise()
      .then(response => response);
  }
}
