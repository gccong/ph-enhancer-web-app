import {Component, Input, OnChanges} from '@angular/core';
import {HistogramChartService} from "../../../../services/histogram-chart.service";
import {HistgramBin} from "../../../../model/histogram-bin";
import {Psm} from "../../../../model/psm";

@Component({
    selector: 'app-histogram-charts',
    templateUrl: './histogram-charts.component.html',
    styleUrls: ['./histogram-charts.component.scss']
})
export class HistogramChartsComponent implements OnChanges {
    @Input() activedPsm: Psm;
    @Input() psmType: string;

    private confScoreHistArray = new Array<HistgramBin>();
    private clusterRatioHistArray = new Array<HistgramBin>();
    private clusterSizeHistArray = new Array<HistgramBin>();


    private activedConfScoreBin = -1;
    private activedClusterSizeBin = -1;
    private activedClusterRatioBin = -1;

    constructor(private histogramChartService: HistogramChartService) {
        this.activedPsm = new Psm("null");
    }

    ngOnChanges(): void {
        if (this.confScoreHistArray.length < 1) {
             this.histogramChartService.getHistData(this.psmType, "confScore").then(bins=>{this.confScoreHistArray = bins;} );
        }
        if (this.clusterRatioHistArray.length < 1) {
            this.histogramChartService.getHistData(this.psmType, "clusterRatio").then(bins=>{this.clusterRatioHistArray = bins});
        }
        if (this.clusterSizeHistArray.length < 1) {
            this.histogramChartService.getHistData(this.psmType, "clusterSize").then(bins=>{this.clusterSizeHistArray = bins});
        }
        if(this.activedPsm) {
            this.activedConfScoreBin = this.getBinRank(this.confScoreHistArray, this.activedPsm.confidentScore);
            this.activedClusterRatioBin = this.getBinRank(this.clusterRatioHistArray, this.activedPsm.clusterRatio);
            this.activedClusterSizeBin = this.getBinRank(this.clusterSizeHistArray, this.activedPsm.clusterSize);

            // console.log(this.activedPsm.confidentScore);
            // console.log(this.activedConfScoreBin);
            // console.log(this.confScoreHistArray);
            //

            // console.log(this.activedPsm.clusterSize);
            // console.log(this.activedClusterSizeBin);
            // console.log(this.clusterSizeHistArray);

        }
    }

    getBinRank(histogramArray:any[], score:number):number{

        if(histogramArray.length < 1) return -1;

        if(score <= histogramArray[0].upperBound) {
            return histogramArray[0].rank;
        }
        if(score >= histogramArray[histogramArray.length -1].lowerBound) {
            return histogramArray[histogramArray.length -1].rank;
        }

        let binSize = histogramArray[1].upperBound - histogramArray[1].lowerBound; //the second bin is the really start of the histogram
        let min = histogramArray[1].lowerBound;

        let bin = Math.floor(((score - min) / binSize)) + 2;

        return bin;
    }

}
