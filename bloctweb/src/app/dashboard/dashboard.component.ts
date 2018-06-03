import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { APIService } from '../utils/apiservice';
import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt-session';
import 'hammerjs';
import { NgProgress } from 'ngx-progressbar';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { timeout } from 'q';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    constructor(private apiService: APIService, private router: Router, private domSanitizer: DomSanitizer,
        private ngProgress: NgProgress) {
            this.apiService.getConfiguration();
         }
       
    private currentUser: any;
    private welcomeText: string;
    private deviceTypes: any;
    private standardMetrics: any;
    private selectedDeviceType: any;
    private deviceName: string;
    private username: string;
    private password: string;
    private apiKey = '';
    private lat: number;
    private lng: number;
    private showPopup = false;
    private selectedDevice: any;
    private blockchainDevice: any;
    private selectedIdx: number;
    private oldIndex = -1;
    private markerDevices: any;
    private showWelcome = false;
    private showMap = true;
    private showBlockchain = false;
    private showDevices = true;
    private showDeviceDetails = false;
    private showProfile = false;
    private allTransactions: any;
    private transactions: any;
    public gridView: GridDataResult;
    public pageSize = 10;
    public skip = 0;
    public pieData: any;
    public showChart: boolean;
    public deviceType: number;
    private showiTraqTrans: boolean;
    private showTiveTrans: boolean;
    private showNavigation: boolean;
    private showHistory: boolean;
    ngOnInit(): void {
        
        this.apiService.devices = [];
        this.apiService.getConfiguration().then(x => {
            this.ngProgress.start();
           
                            this.getDevices();
                        });
        

         this.deviceTypes = [{typeName:'Tracking'}];
        //  var myLatLng = new google.maps.LatLng(34.018978, -84.194589);
        //  var mapProp = {
        //     center: myLatLng,
        //     zoom: 6,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //   };
        //  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

          
       
         
          
          
        //   var marker = new google.maps.Marker({
        //     position: myLatLng,
            
        //     title: 'Hello World!'
        //   });
        //   marker.setMap(this.map);

        //   var infowindow = new google.maps.InfoWindow({
        //     content: "This is my place"
        //   });

        //   marker.addListener('click', function() {
        //     infowindow.open(this.map, marker);
        //   });

    }
     animateCircle(line) {
        var count = 0;
        window.setInterval(function() {
          count = (count + 1) % 200;

          var icons = line.get('icons');
          icons[0].offset = (count / 2) + '%';
          line.set('icons', icons);
      }, 20);
    }
    // getDeviceStatus(device) {
    //     let status = {};
    //     for (const i in this.standardMetrics) {
    //         if (device.deviceId === this.standardMetrics[i].deviceId) {
    //             if (device.firmwareVersion === this.standardMetrics[i].firmwareVersion) {
    //                 return device.batteryLevel <= 10
    //                     ? status = { status: 'Unsafe', title: ' - Critical Battery' }
    //                     : device.batteryLevel >= this.standardMetrics[i].batteryLevel
    //                         ? status = { status: 'Safe', title: '' }
    //                         : status = { status: 'At Risk', title: ' - Low Battery' };
    //             }
    //             return status = { status: 'At Risk', title: ' - Firmware Out Of Date' };
    //         }
    //     }
    // }

    getDevices() {
        this.apiService.devices = [];
         this.apiService.getAssets().then(data => {
            if (data) {
                this.ngProgress.done();
               
                    this.apiService.devices.push(data);}

                    data.forEach(element => {
                        this.apiService.devices.push(element);
                    });
                
         });

       
         console.log(this.apiService.devices);
        //                     this.apiService.devices.push(data2.arloDevice);
        //                     this.ngProgress.done();
        //                 }
        //             }
        //             this.ngProgress.done();
        //             this.welcomeText = this.apiService.devices.length > 0
        //                 ? 'Select a device from the list on the left to get started.'
        //                 : 'Add a device on the left to get started.';
        //             this.showChart = this.apiService.devices.length > 0;
        //             this.pieData = [
        //                 { category: 'Safe', value: this.apiService.devices.filter(device => device.status === 'Safe').length },
        //                 { category: 'At Risk', value: this.apiService.devices.filter(device => device.status === 'At Risk').length },
        //                 { category: 'Unsafe', value: this.apiService.devices.filter(device => device.status === 'Unsafe').length }
        //             ];
        //         });
        //     });
        // });
    }

    addDevice() {
        this.clearFormData();
        this.showPopup = true;
    }

    saveNewDevice() {
        this.ngProgress.start();
        var curDate = new Date();
        const body = {
            Type: 'Tracking',
            Name: this.deviceName,
            ClientName: this.username,
            RegisterDate: '2018-06-01T00:00:00',
            ModifiedDate: '2018-06-01T00:00:00',
            Status: 'Active',
            Active: true,
            Firmware: '1',
            
            UserId: '1'
        };
       
            this.apiService.addAssets(body).then(data => {
                this.ngProgress.done();
                if (data) {
                    console.log('added');
                    this.getDevices();
                }
                
            });
                
        
        this.showPopup = false;
        this.clearFormData();
    }

    // assignBlockchainDevice(device) {
    //     this.blockchainDevice = device;
    //     this.showWelcome = false;
    //     this.showMap = false;
    //     this.showBlockchain = true;
    //     this.ngProgress.done();
    // }

    // protected pageChange({ skip, take }: PageChangeEvent): void {
    //     this.skip = skip;
    //     this.pageSize = take;
    //     console.log(this.skip + ' ' + this.pageSize)
    //     this.loadTransactions();
    // }

    // loadTransactions() {
    //     this.ngProgress.start();
    //     const startRow = this.skip;
    //     const endRow = this.skip + this.pageSize;
    //     switch (this.deviceType) {
    //         case 1:
    //             this.apiService.getiTraqTransactions(startRow, endRow).then(res => {
    //                 this.showiTraqTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //         case 2:
    //             this.apiService.getTiveTransactions(startRow, endRow).then(res => {
    //                 this.showTiveTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     for (let i = 0; i < res.transactions.length; i++) {
    //                         res.transactions[i].formattedTime = new Date(res.transactions[i].formattedTime);
    //                     }
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //         case 3:
    //             this.apiService.getArloTransactions(startRow, endRow).then(res => {
    //                 this.showiTraqTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //     }
    // }

    

    // getTiveBlockchain(deviceId, apiDetails) {
    //     this.apiService.getTiveBlockchain(deviceId).then(data => {
    //         if (data.success) {
    //             this.assignBlockchainDevice(data.tiveDevice);
    //             this.deviceType = 2;
    //             this.loadTransactions();
    //         }
    //     }).catch(error => {
    //         if (error.status === 500) {
    //             for (let i = 0, len = apiDetails.length; i < len; i++) {
    //                 if (apiDetails[i].selectedDeviceType.id === 2 && apiDetails[i].loginName === this.apiService.currentUser.loginName) {
    //                     const body = {
    //                         selectedDeviceType: apiDetails[i].selectedDeviceType,
    //                         deviceName: apiDetails[i].deviceName,
    //                         username: apiDetails[i].username,
    //                         password: apiDetails[i].password,
    //                         apiKey: apiDetails[i].apiKey,
    //                         loginName: apiDetails[i].loginName
    //                     };
    //                     this.apiService.addTiveDevices(false, body).then(data => {
    //                         if (data.success) {
    //                             this.apiService.getTiveBlockchain(deviceId).then(result => {
    //                                 if (result.success) {
    //                                     this.assignBlockchainDevice(result.tiveDevice);
    //                                     this.deviceType = 2;
    //                                     this.loadTransactions();
    //                                 }
    //                             });
    //                         }
    //                     });
    //                 }
    //             }
    //         }
    //     });
    // }

    // getArloBlockchain(deviceId, apiDetails) {
    //     this.apiService.getArloBlockchain(deviceId).then(data => {
    //         if (data.success) {
    //             this.assignBlockchainDevice(data.arloDevice);
    //             this.deviceType = 3;
    //             this.loadTransactions();
    //         }
    //     }).catch(error => {
    //         if (error.status === 500) {
    //             for (let i = 0, len = apiDetails.length; i < len; i++) {
    //                 if (apiDetails[i].selectedDeviceType.id === 3 && apiDetails[i].loginName === this.apiService.currentUser.loginName) {
    //                     const body = {
    //                         selectedDeviceType: apiDetails[i].selectedDeviceType,
    //                         deviceName: apiDetails[i].deviceName,
    //                         username: apiDetails[i].username,
    //                         password: apiDetails[i].password,
    //                         apiKey: apiDetails[i].apiKey,
    //                         loginName: apiDetails[i].loginName
    //                     };
    //                     this.apiService.addArloDevices(false, body).then(data => {
    //                         if (data.success) {
    //                             this.apiService.getArloBlockchain(deviceId).then(result => {
    //                                 if (result.success) {
    //                                     this.assignBlockchainDevice(result.arloDevice);
    //                                     this.deviceType = 3;
    //                                     this.loadTransactions();
    //                                 }
    //                             });
    //                         }
    //                     });
    //                 }
    //             }
    //         }
    //     });
    // }

    clearFormData() {
        this.deviceName = '';
        this.username = '';
        this.password = '';
        this.apiKey = '';
        //this.selectedDeviceType = this.deviceTypes[0];
    }

     selectDevice(index, selectedDevice) {
         console.log(index);
         console.log(selectedDevice);
         this.showWelcome = false;
         this.showMap = false;
         this.showBlockchain = false;
         this.selectedDevice = selectedDevice;
         if (this.oldIndex === index) {
             this.selectedIdx = -1;
             this.oldIndex = -1;
             this.showWelcome = true;
         } else {
             this.selectedIdx = index;
             this.oldIndex = index;
             if (selectedDevice.deviceTypeId !== 3) {
                 this.onLocateOnMap(selectedDevice);
             } else {
                 this.showWelcome = true;
             }
         }
     }

    // logoClicked() {
    //     this.showBlockchain = false;
    //     this.showMap = false;
    //     this.showProfile = false;
    //     this.showDeviceDetails = false;
    //     this.showDevices = true;
    //     this.showWelcome = true;
    // }

    onLocateOnMap(device) {
        console.log('onLocateOnMap');
        // this.markerDevices = [];
         this.showWelcome = false;
         this.showBlockchain = false;
         this.showMap = true;
         this.showNavigation = false;
        // this.markerDevices.push(device);
        this.lat = 45;
        this.lng = 35;

        this.apiService.getAssetHistory(device.ID).then(data => {
            if (data) {
                
               this.showHistory = true;
               this.ngProgress.done();
               this.gridView = {
                    data: data,
                    total: 1
                };
                console.log(data);
         }
 
      });

    }

    onViewDetails(device) {
        this.showDevices = false;
        this.showDeviceDetails = true;
    }

    backFromDeviceDetails() {
        this.showDeviceDetails = false;
        this.showDevices = true;
    }
    initMap()
    {
        var mapProp = {
            center: new google.maps.LatLng(34.010080, -84.216176),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
       var locations = [
        ['Johns Creek', 34.010080, -84.216176],
        ['Greenville', 34.870467, -82.381242],
        ['Anderson', 35.14303, -81.61516],
        ['Charlotte', 35.232818, -80.802174],
        ['Durham', 36.008967, -78.901402]
        
      ];
    
 
  
   
    var infowindow = new google.maps.InfoWindow();
   
    var marker, i, currentLng;
   for (i = 0; i < locations.length; i++) { 
     var latitude = parseFloat(locations[i][1].toString()); 
     var longitude = parseFloat(locations[i][2].toString());
     console.log(latitude);
     console.log(longitude); 
     currentLng = new google.maps.LatLng(latitude, longitude);
     marker = new google.maps.Marker({
         position: currentLng,
         map: this.map 
       });
 
       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(locations[i][0].toString());
           infowindow.open(this.map, marker);
         }
       })(marker, i));
       marker.setMap(this.map);
   }

   var flightPlanCoordinates = [
     new google.maps.LatLng(34.010080, -84.216176),
     new google.maps.LatLng(34.870467, -82.381242),
     new google.maps.LatLng(35.14303, -81.61516),
     new google.maps.LatLng(35.232818, -80.802174),
     
     new google.maps.LatLng(36.008967, -78.901402)

   ];
   var lineSymbol = {
     path: google.maps.SymbolPath.CIRCLE,
     scale: 8,
     strokeColor: '#393'
   };

   
   var flightPath = new google.maps.Polyline({
     path: flightPlanCoordinates,
     icons: [{
         icon: lineSymbol,
         offset: '100%'
       }],
     strokeColor: "#ff0000",
     strokeOpacity: 1.0,
     strokeWeight: 10
   });
    this.animateCircle(flightPath);
    flightPath.setMap(this.map);
    }
     onViewNavigation(device) {
        this.showNavigation = true;
        this.showHistory = false;
        this.ngProgress.start();
        
        Observable.interval(3000).take(1).subscribe(() => this.initMap());
    
        this.ngProgress.done();
     }

    backFromBlockchain() {
        this.showBlockchain = false;
        this.showWelcome = true;
    }

    menuClicked() {
        this.showDevices = false;
        this.showDeviceDetails = false;
        this.showProfile = true;
    }

    menuBackClicked() {
        this.showProfile = false;
        this.showDevices = true;
    }

    // navigateToProductPage(device) {
    //     switch (device.deviceTypeId) {
    //         case 1:
    //             window.open(this.apiService.itraqProductUrl, '_blank');
    //             break;
    //         case 2:
    //             window.open(this.apiService.tiveProductUrl, '_blank');
    //             break;
    //         case 3:
    //             window.open(this.apiService.arloProductUrl, '_blank');
    //             break;
    //     }
    // }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
