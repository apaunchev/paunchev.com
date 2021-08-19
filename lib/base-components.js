/* eslint-disable react/display-name */
import { Bookmark } from '@/components/bookmark';
import { CodeBlock } from '@/components/code-block';

export const baseComponents = {
  pre: props => <CodeBlock {...props} />,
  Bookmark: props => <Bookmark {...props} />,
};
