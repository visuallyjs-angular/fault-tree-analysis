import {Component, signal} from '@angular/core';
import {useVisuallyJsUpdate} from "@visuallyjs/browser-ui-angular";
import {computeCutSets} from "./cut-sets";
import {FTANode} from "./definitions";

@Component({
  selector: 'fta-cut-sets',
  standalone: true,
  template: `
    <div class="minimal-cut-sets">
      @if (minimalCutSets().length === 0) {
        <p class="vjs-fta-inspector-empty">No cut sets found.</p>
      } @else {
        <div class="vjs-fta-cut-sets-list">
          @for (set of minimalCutSets(); track $index) {
            <div class="vjs-fta-cut-set">
              <div class="vjs-fta-cut-set-index">#{{ $index + 1 }}</div>
              <div class="vjs-fta-cut-set-events">
                @for (be of set; track be.id) {
                  <span class="vjs-fta-cut-set-event">
                    {{ be.label || be.id }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      }
      <p class="vjs-fta-cut-sets-note"><i>Note: This is a static, combinatorial analysis. It does not account for event sequence or timing.</i></p>
    </div>
  `
})
export class MinimalCutSetsComponent {
  minimalCutSets = signal<Array<Array<FTANode>>>([]);

  constructor() {
      useVisuallyJsUpdate((model) => {
          this.minimalCutSets.set(computeCutSets(model))
      })
  }


}
