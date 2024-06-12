import React, { useEffect, useRef } from 'react';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';


const data = {
    nodes: [
      {
        id: '1',
        type: 'rect',
        x: 100,
        y: 100,
        text: '节点1',
      },
      {
        id: '2',
        type: 'circle',
        x: 300,
        y: 100,
        text: '节点2',
      },
    ],
    edges: [
      {
        sourceNodeId: '1',
        targetNodeId: '2',
        type: 'polyline',
        text: '连线',
        startPoint: {
          x: 140,
          y: 100,
        },
        endPoint: {
          x: 250,
          y: 100,
        },
      },
    ],
  };

const SilentConfig = {
  isSilentMode: true,
  stopScrollGraph: true,
  stopMoveGraph: true,
  stopZoomGraph: true,
  adjustNodePosition: true,
};
const styleConfig: Partial<LogicFlow.Options> = {
  style: {
    rect: {
      rx: 5,
      ry: 5,
      strokeWidth: 2,
    },
    circle: {
      fill: '#f5f5f5',
      stroke: '#fff',
    },
  },
};

function IoTFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (containerRef.current) {
            const lf = new LogicFlow({
                container: containerRef.current,
                grid: true,
                ...SilentConfig,
                ...styleConfig,
            });

            lf.render(data);
            lf.translateCenter();
        }
    }, []); // 空依赖数组表示这个effect只在组件挂载时执行一次

    return (
        <div className="helloworld-app getting-started">
            <div className="app-content" ref={containerRef} />
        </div>
    );
}

export default IoTFlow;