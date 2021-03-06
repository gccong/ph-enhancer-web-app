import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Config} from "../model/config"
import {HistgramBin} from "../model/histogram-bin";

// import 'rxjs/add/operator/toPromise';

@Injectable()

export class HistogramChartService {

    private baseUrl = Config.baseUrl;
    private headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http,
                ) {
    }

    public getHistData(psmType:string, fieldType: string): Promise<HistgramBin[]> {
        let histDataUrl = this.baseUrl + "statistics/histogram?" +
                "projectId=" + "PXD000021" +
                "&numBins=" + "20" +
                "&psmType=" + psmType +
                "&fieldType=" + fieldType;
            return this.http.get(histDataUrl)
                .toPromise()
                .then(response => {
                    var histBins : HistgramBin[] = response.json() as HistgramBin[];
                    for(var i=0; i<histBins.length; i++) {
                       if(fieldType === "confScore" || fieldType === "clusterRatio") {
                            histBins[i].name = Number(histBins[i].lowerBound).toFixed(3) + " - " + Number(histBins[i].upperBound).toFixed(3);
                        }else {
                           histBins[i].name = histBins[i].lowerBound + " - " + histBins[i].upperBound;
                       }
                    }
                    return histBins;
                })
                .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.log('A error occurred', error);
        return Promise.reject(error.message || error);
    }


}
