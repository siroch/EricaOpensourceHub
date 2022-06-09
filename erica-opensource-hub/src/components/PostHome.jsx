import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import './diagram.css';

function initDiagram() {
  const $ = go.GraphObject.make;

  const myDiagram = $(go.Diagram, {
    'commandHandler.copiesTree': true,
    'commandHandler.copiesParentKey': true,
    'commandHandler.deletesTree': true,
    'draggingTool.dragsTree': true,
    'undoManager.isEnabled': true,
    model: new go.GraphLinksModel({
      linkKeyProperty: 'key',
    }),
  });

  myDiagram.nodeTemplate = $(
    go.Node,
    'Vertical',
    { selectionObjectName: 'TEXT' },
    $(
      go.TextBlock,
      {
        name: 'TEXT',
        minSize: new go.Size(30, 15),
        editable: true,
      },
      new go.Binding('text', 'text').makeTwoWay(),
      new go.Binding('scale', 'scale').makeTwoWay(),
      new go.Binding('font', 'font').makeTwoWay(),
    ),
    $(
      go.Shape,
      'LineH',
      {
        stretch: go.GraphObject.Horizontal,
        strokeWidth: 3,
        height: 3,
        portId: '',
        fromSpot: go.Spot.LeftRightSides,
        toSpot: go.Spot.LeftRightSides,
      },
      new go.Binding('stroke', 'brush'),
      new go.Binding('fromSpot', 'dir', (d) => spotConverter(d, true)),
      new go.Binding('toSpot', 'dir', (d) => spotConverter(d, false)),
    ),
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
    new go.Binding('locationSpot', 'dir', (d) => spotConverter(d, false)),
  );

  myDiagram.nodeTemplate.selectionAdornmentTemplate = $(
    go.Adornment,
    'Spot',
    $(
      go.Panel,
      'Auto',
      $(go.Shape, { fill: null, stroke: 'red', strokeWidth: 3 }),
      $(go.Placeholder, { margin: new go.Margin(4, 4, 0, 4) }),
    ),
    // $(
    //   'Button',
    //   {
    //     alignment: go.Spot.Right,
    //     alignmentFocus: go.Spot.Left,
    //     click: addNodeAndLink,
    //   },
    //   $(go.TextBlock, '+', { font: 'bold 8pt sans-serif' }),
    // ),
  );

  myDiagram.linkTemplate = $(
    go.Link,
    {
      curve: go.Link.Bezier,
      fromShortLength: -2,
      toShortLength: -2,
      selectable: false,
    },
    $(
      go.Shape,
      { strokeWidth: 3 },
      new go.Binding('stroke', 'toNode', (n) => {
        if (n.data.brush) return n.data.brush;
        return 'black';
      }).ofObject(),
    ),
  );

  function addNodeAndLink(e, obj) {
    alert('check');
  }

  return myDiagram;
}

function spotConverter(dir, from) {
  if (dir === 'left') {
    return from ? go.Spot.Left : go.Spot.Right;
  } else {
    return from ? go.Spot.Right : go.Spot.Left;
  }
}

function PostHome() {
  return (
    <>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={[
          { key: 0, text: '캡스톤 디자인', loc: '0 0' },
          {
            key: 1,
            parent: 0,
            text: '프로젝트 목표',
            brush: 'skyblue',
            dir: 'right',
            loc: '77 -22',
          },
          {
            key: 11,
            parent: 1,
            text: '목표1 : 어쩌고 저쩌고~',
            brush: 'skyblue',
            dir: 'right',
            loc: '200 -48',
          },
          {
            key: 12,
            parent: 1,
            text: '목표2 : 어쩌고 저쩌고~',
            brush: 'skyblue',
            dir: 'right',
            loc: '200 -22',
          },
          {
            key: 13,
            parent: 1,
            text: '목표3 : 어쩌고 저쩌고~',
            brush: 'skyblue',
            dir: 'right',
            loc: '200 4',
          },
          {
            key: 2,
            parent: 0,
            text: 'More effective use',
            brush: 'darkseagreen',
            dir: 'right',
            loc: '77 53',
          },
          {
            key: 21,
            parent: 2,
            text: 'Planning',
            brush: 'darkseagreen',
            dir: 'right',
            loc: '203 40',
          },
          {
            key: 211,
            parent: 21,
            text: 'Priorities',
            brush: 'darkseagreen',
            dir: 'right',
            loc: '274 27',
          },
          {
            key: 212,
            parent: 21,
            text: 'Ways to focus',
            brush: 'darkseagreen',
            dir: 'right',
            loc: '274 53',
          },
          { key: 22, parent: 2, text: 'Goals', brush: 'darkseagreen', dir: 'right', loc: '203 66' },
          {
            key: 3,
            parent: 0,
            text: 'Time wasting',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-20 -31.75',
          },
          {
            key: 31,
            parent: 3,
            text: 'Too many meetings',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-117 -64.25',
          },
          {
            key: 32,
            parent: 3,
            text: 'Too much time spent on details',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-117 -25.25',
          },
          {
            key: 33,
            parent: 3,
            text: 'Message fatigue',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-117 0.75',
          },
          {
            key: 331,
            parent: 31,
            text: 'Check messages less',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-251 -77.25',
          },
          {
            key: 332,
            parent: 31,
            text: 'Message filters',
            brush: 'palevioletred',
            dir: 'left',
            loc: '-251 -51.25',
          },
          { key: 4, parent: 0, text: 'Key issues', brush: 'coral', dir: 'left', loc: '-20 52.75' },
          { key: 41, parent: 4, text: 'Methods', brush: 'coral', dir: 'left', loc: '-103 26.75' },
          { key: 42, parent: 4, text: 'Deadlines', brush: 'coral', dir: 'left', loc: '-103 52.75' },
          {
            key: 43,
            parent: 4,
            text: 'Checkpoints',
            brush: 'coral',
            dir: 'left',
            loc: '-103 78.75',
          },
        ]}
        linkDataArray={[
          { from: 0, to: 1 },
          { from: 1, to: 11 },
          { from: 1, to: 12 },
          { from: 1, to: 13 },
          { from: 0, to: 2 },
          { from: 2, to: 21 },
          { from: 21, to: 211 },
          { from: 21, to: 212 },
        ]}
      />
    </>
  );
}

export default PostHome;
