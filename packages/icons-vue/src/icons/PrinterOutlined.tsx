// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterOutlinedSvg}></AntdIcon>;
};

PrinterOutlined.displayName = 'PrinterOutlined';
PrinterOutlined.inheritAttrs = false;
export default PrinterOutlined;