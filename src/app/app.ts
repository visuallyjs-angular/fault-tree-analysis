import {Component} from '@angular/core';
import {VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import diagramOptions from "./diagram-options"
import modelOptions from "./model-options";
import {FTAInspector} from "./inspector";
import {MinimalCutSetsComponent} from "./cut-sets.component";
import {RiskContributionChartComponent} from "./risk-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisuallyJsModule, FTAInspector, MinimalCutSetsComponent, RiskContributionChartComponent],
  templateUrl: './app.html',
  styleUrls: ['../fault-tree-analysis.css']
})
export class App {
  diagramOptions = diagramOptions;
  modelOptions = modelOptions;
  url="/dataset.json"
}
