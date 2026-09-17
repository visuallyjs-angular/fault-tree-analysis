import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {Component} from '@angular/core';
import {Node} from "@visuallyjs/browser-ui";

@Component({
  selector: 'fta-inspector',
  standalone: true,
  imports: [VisuallyJsModule],
  template: `
    <div class="vjs-fta-inspector-container">
      @if (currentObjectType === 'Node') {
        <div class="vjs-fta-inspector-group">
          <label class="vjs-fta-inspector-label">Label: </label>
          <input 
            type="text" 
            class="vjs-fta-inspector-input"
            vjs-att="label"
            vjs-focus="true"
          />
        </div>
        
        @if (currentType === 'basic-event') {
          <div class="vjs-fta-inspector-group">
            <label class="vjs-fta-inspector-label">Probability (0-1): </label>
            <input 
              type="number" 
              class="vjs-fta-inspector-input"
              step="0.01" 
              min="0" 
              max="1" 
              vjs-att="probability"
              vjs-datatype="float"
            />
          </div>
        }
        
        <div class="vjs-fta-inspector-footer">
          ID: {{ currentObj.getFullId() }}<br/>
          Type: {{ currentType }}
        </div>
      } @else if (currentObjectType) {
          <div class="vjs-fta-inspector-footer">
              ID: {{ currentObj.getFullId() }}<br/>
              Type: {{ currentObjectType }}
          </div>
      } @else {
        <div class="vjs-fta-inspector-empty">Select a node to edit its properties.</div>
      }
    </div>
  `
})
export class FTAInspector extends InspectorComponent {
    NodeObjectType = Node.objectType;
}
