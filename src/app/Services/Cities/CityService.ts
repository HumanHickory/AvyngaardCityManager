import { HttpClient, HttpParams } from "@angular/common/http";
import { CityDetails } from "src/app/Models/CityDetails";
import { CitySize } from "src/app/Models/CitySize";
import { City } from "src/app/Models/City";
import { Help } from "src/app/Models/Help";
import { News } from "src/app/Models/News";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { CampaignLocation } from "src/app/Models/Campaign";
import { Observable } from 'rxjs';

@Injectable()
export class CityService {
    News: News[] = [];
    Help: Help[] = [];

    constructor(private http: HttpClient) { }

    GetCitySizes(): Observable<CitySize[]> {
        return this.http.get<CitySize[]>(environment.apiUrl() + 'api/City/GetLocationSizes');
      }

    ListCampaigns(){
        return this.http.get<City[]>(environment.apiUrl() + 'api/City/ListCampaigns')
    }
}

