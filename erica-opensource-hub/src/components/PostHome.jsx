import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import './diagram.css';

function PostHome({ projectData }) {
  const [projectInfo, setProjectInfo] = useState([]);
  const [projectLink, setProjectLink] = useState([]);
  const [clickedInfo, setClickedInfo] = useState({});
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setProjectInfo(projectData);
    setProjectLink(projectData.map((data) => data && { from: data.parent, to: data.key }));
  }, []);
  const toggleModal = () => {
    setHide((prev) => !prev);
  };

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

    myDiagram.addDiagramListener('ObjectSingleClicked', function (e) {
      var part = e.subject.part;
      if (!(part instanceof go.Link)) {
        console.log(part.data);
        toggleModal();
        setClickedInfo(part.data);
      }
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
          editable: false,
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

    return myDiagram;
  }

  function spotConverter(dir, from) {
    if (dir === 'left') {
      return from ? go.Spot.Left : go.Spot.Right;
    } else {
      return from ? go.Spot.Right : go.Spot.Left;
    }
  }

  return (
    <>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={projectInfo}
        linkDataArray={projectLink}
      />
      <StModalWrapper onClick={toggleModal} hide={hide}>
        <StModalContent>
          <div>{clickedInfo.text}</div>
          <div>{clickedInfo.content}</div>
        </StModalContent>
      </StModalWrapper>
    </>
  );
}

export default PostHome;

const StModalWrapper = styled.div`
  display: ${(props) => (props.hide ? 'none' : 'block')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const StModalContent = styled.div`
  width: fit-content;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 18px;
  padding: 30px;
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  gap: 15px;

  div:first-child {
    font-size: 1.6rem;
  }

  div:last-child {
    font-size: 1.2rem;
  }
`;
