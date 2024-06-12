import dynamic from 'next/dynamic';

// 动态导入组件，禁用SSR
const IoTFlow = dynamic(() => import('../components/IoTFlow'), {
  ssr: false,
});

function ClientIoTFlow() {
    return (
        <IoTFlow />
    );
}

export default ClientIoTFlow;