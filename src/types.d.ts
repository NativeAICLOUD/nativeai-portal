type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'quote'; text: string; author?: string; illustration?: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'cta'; title: string; desc: string; buttonText: string; buttonUrl: string }
  | { type: 'image'; src: string; alt?: string; size?: 'small' | 'full' }

type RichSection = {
  id: string;
  heading: string;
  blocks: ContentBlock[];
}

type IPost = {
  id: number;
  image: string;
  title: string;
  desc: string;
  date: string;
}
