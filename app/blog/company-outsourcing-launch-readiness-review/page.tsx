import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','company-outsourcing-launch-readiness-review');
export default function Page(){return renderAug19Article('blog','company-outsourcing-launch-readiness-review')}
