import {Component, OnInit, signal} from '@angular/core';
import {useVisuallyJsUpdate, VisuallyJsModule} from "@visuallyjs/browser-ui-angular";
import {BrowserUIModel} from "@visuallyjs/browser-ui";
import {computeCutSets} from "./cut-sets";
import {FTANode} from "./definitions";

@Component({
  selector: 'fta-risk-chart',
  standalone: true,
  imports: [VisuallyJsModule],
  template: `
    <div class="vjs-fta-risk-contribution">
      @if (chartData().length === 0) {
        <p class="vjs-fta-inspector-empty">No Basic Events with probabilities found.</p>
      } @else {
        <div style="height: 300px; width: 100%;">
          <vjs-column-chart [data]="chartData()" [options]="chartOptions"/>
        </div>
      }
    </div>
  `
})
export class RiskContributionChartComponent {
  chartData = signal<Array<{label:string, value:number}>>([]);

  chartOptions = {
    series:[
        {
            valueField:"value",
            label:"Importance"
        }
    ],
    valueAxis: {
        labelFormatter: (value:number) => {
            return `${value.toFixed(1)}`;
        }
    },
    categoryAxis: {
        title: {
            text: "Basic Events"
        },
        labelField:"label"
    }
  };

  constructor() {
    useVisuallyJsUpdate((model:BrowserUIModel) => {
        const minimalCutSets = computeCutSets(model)

        // Fussell-Vesely Importance Calculation
        const mcsWithProbs = minimalCutSets.map(mcs => {
            const prob = mcs.reduce((p, event) => p * (event.probability || 0), 1);
            return { events: mcs, probability: prob };
        });

        const topEventProbability = mcsWithProbs.reduce((sum, mcs) => sum + mcs.probability, 0);

        if (topEventProbability === 0) {
            this.chartData.set([])
            return;
        }

        const basicEvents = model.getNodes().filter(n => n.type === 'basic-event').map(n => n.data as FTANode);

        this.chartData.set(basicEvents.map(be => {
            const relevantMcs = mcsWithProbs.filter(mcs => mcs.events.some(event => event.id === be.id));
            const sumProb = relevantMcs.reduce((sum, mcs) => sum + mcs.probability, 0);
            const fvImportance = sumProb / topEventProbability;
            return {
                label: be.label || be.id,
                value: fvImportance
            };
        }));
    });
  }
}
