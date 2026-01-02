import BentoCard from './BentoCard';

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  span?: 'col-1' | 'col-2' | 'row-2';
  className?: string;
}

const ImageCard = ({ src, alt, caption, size = 'md', span = 'col-1', className }: ImageCardProps) => {
  return (
    <BentoCard variant="image" size={size} span={span} className={`p-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
          <p className="text-sm text-foreground">{caption}</p>
        </div>
      )}
    </BentoCard>
  );
};

export default ImageCard;
