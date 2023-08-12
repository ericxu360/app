import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident } from '../common/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }

  baseUrl: string = '/incidents'

  getIncidentPaginate(page: number, pageSize: number) {
    let queryString = `?page=${page}&pageSize=${pageSize}`;
    return this.http.get<GetResponseIncidents>(this.baseUrl + queryString);
  }

  getIncidents() {
    return this.http.get<GetResponseIncidents>(this.baseUrl);
  }

  getIncidentById(id: number) {
    return this.http.get<Incident>(this.baseUrl + '/' + id);
  }

  patchIncident(incident: Incident) {
    return this.http.patch<Incident>(this.baseUrl + '/' + incident.id, incident);
  }

  postIncident(incident: Incident) {
    return this.http.patch<void>(this.baseUrl, incident);
  }

  deleteIncident(incident: Incident) {
    return this.http.delete<void>(this.baseUrl + '/' + incident.id);
  }
}

interface GetResponseIncidents {
  _embedded: {
    incidents: Incident[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}