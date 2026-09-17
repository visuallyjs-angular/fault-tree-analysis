import {FTA_SHAPES} from "./ftaShapes";
import {CONNECTOR_TYPE_ORTHOGONAL, Vertex} from "@visuallyjs/browser-ui";

const diagramOptions = {
    // use the fault tree analysis shapes
    shapes: [FTA_SHAPES],
    // use a 20x20 grid, both visually and for dragging elements
    grid: {
        size: { width: 20, height: 20 }
    },
    // cells are not rotatable or resizable
    cells:{
        rotatable:false,
        resizable:false
    },
    // use the line crossings plugin to make crossings more clear
    lineCrossings:true,
    // arm the lasso after long-press on left mouse button (saves the user from having to toggle lasso in the control bar)
    lasso:{
        autoArm:true
    },
    edges: {
        // no unattached edges are allowed
        allowUnattached:false,
        connector: {
            // use an orthogonal connector with a corner radius of 5px
            type: CONNECTOR_TYPE_ORTHOGONAL,
            options: { cornerRadius: 5 }
        },
        targetMarker:{
            // marker to show on all edges
            type:"Arrow",
            options:{
                width:12,
                length:10,
                foldback:0.76
            }
        }
    },
    zoomToFit:true,
    mediator:{
        canLink:(v:Vertex) => v.type !== "top-event"
    }
}

export default diagramOptions
