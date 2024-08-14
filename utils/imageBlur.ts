export const imageBlur = ({ imgUrl }: { imgUrl: string }) => {
  return `/_next/image?url=${encodeURIComponent(imgUrl)}&w=8&q=70`;
};
