import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MDBBootstrapModule} from './typescripts/free';
// import { AgmCoreModule } from '@agm/core';
import {AppComponent} from './app.component';
import {CommonModule}     from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// import { SidebarModule } from 'ng-sidebar';


import {AppRoutingModule} from './app-routing.module';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {HomePageComponent} from './components/home-page/home-page.component';

import {MainLeftMetricsComponent} from './components/home-page/main-left-metrics/main-left-metrics.component';
import {Chart1Component} from './components/home-page/main-left-metrics/chart1/chart1.component';
import {Chart2Component} from './components/home-page/main-left-metrics/chart2/chart2.component';
import {Chart3Component} from './components/home-page/main-left-metrics/chart3/chart3.component';
import {Chart4Component} from './components/home-page/main-left-metrics/chart4/chart4.component';
import {DescriptionComponent} from './components/home-page/main-left-metrics/description/description.component';

import {MainRightAnalysisComponent} from './components/home-page/main-right-analysis/main-right-analysis.component';
import {CheckExamplesComponent} from './components/home-page/main-right-analysis/check-examples/check-examples.component';
import {UploadFilesComponent} from './components/home-page/main-right-analysis/do-analysis/upload-files/upload-files.component';
import {SetParametersComponent} from './components/home-page/main-right-analysis/do-analysis/set-parameters/set-parameters.component';
import {DoAnalysisComponent} from './components/home-page/main-right-analysis/do-analysis/do-analysis.component';
import {LowConfPsmsComponent} from './components/low-conf-psms/low-conf-psms.component';
import {HighConfPsmsComponent} from './components/high-conf-psms/high-conf-psms.component';
import {NewIdentifiedComponent} from './components/new-identified/new-identified.component';
import {HistogramChartComponent} from './components/low-conf-psms/psm-tables/histogram-charts/histogram-chart/histogram-chart.component';
import {ClusterRatioChartComponent} from './components/low-conf-psms/cluster-ratio-chart/cluster-ratio-chart.component';
import {ClusterSizeChartComponent} from './components/low-conf-psms/cluster-size-chart/cluster-size-chart.component';
import {PsmTablesComponent} from './components/low-conf-psms/psm-tables/psm-tables.component';
import {ClusterSpectraTableComponent} from './components/low-conf-psms/psm-tables/cluster-spectra-table/cluster-spectra-table.component';
import {SpectraComparerComponent} from './components/low-conf-psms/psm-tables/spectra-comparer/spectra-comparer.component';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/in-memory-data.service';
import {PsmTableService} from "./services/psm-tabel.service";
import {SpectraInClusterTableService} from "./services/spectra-in-cluster-tabel.service";
import {ClusterService} from "./services/cluster.service";
import {SpectrumService} from "./services/spectrum.service";
import {LocalStorageService} from "./services/local-storage.service";
import {HistogramChartService} from "./services/histogram-chart.service";
import {TruncatePipe} from "./pipe/truncate";
import {SpecTitle2ListPipe} from "./pipe/spectrum-titles2list";
import {ShortNumberPipe} from "./pipe/short-number";
import {TruncateClusterIdPipe} from "./pipe/truncate-clusterid";
import { HistogramChartsComponent } from './components/low-conf-psms/psm-tables/histogram-charts/histogram-charts.component';




@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AppHeaderComponent,
        AppFooterComponent,
        MainLeftMetricsComponent,
        MainRightAnalysisComponent,
        Chart1Component,
        Chart2Component,
        Chart4Component,
        Chart3Component,
        DescriptionComponent,
        CheckExamplesComponent,
        DoAnalysisComponent,
        UploadFilesComponent,
        SetParametersComponent,
        LowConfPsmsComponent,
        HighConfPsmsComponent,
        NewIdentifiedComponent,
        HistogramChartComponent,
        ClusterRatioChartComponent,
        ClusterSizeChartComponent,
        PsmTablesComponent,
        ClusterSpectraTableComponent,
        SpectraComparerComponent,

        TruncatePipe,
        SpecTitle2ListPipe,
        TruncateClusterIdPipe,
        ShortNumberPipe,
        HistogramChartsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        NgbModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        CommonModule,
        FileUploadModule,
        AppRoutingModule,
        NgxDatatableModule,
        // SidebarModule.forRoot(),
        NgxChartsModule,

        // AgmCoreModule.forRoot({
        //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
        //   apiKey: 'Your_api_key'
        // })
    ],
    providers: [
        PsmTableService,
        SpectraInClusterTableService,
        ClusterService,
        SpectrumService,
        LocalStorageService,
        HistogramChartService,
        // ConfigService,
        // ConfigModule.init(),
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
