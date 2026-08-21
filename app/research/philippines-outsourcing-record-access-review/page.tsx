import type { Metadata } from 'next'; import { getAug20ResearchMetadata, renderAug20ResearchArticle } from '../../aug20-content';
export const metadata: Metadata = getAug20ResearchMetadata('philippines-outsourcing-record-access-review');
export default function Page(){return renderAug20ResearchArticle('philippines-outsourcing-record-access-review')}
