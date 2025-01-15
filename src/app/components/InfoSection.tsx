// src/app/components/InfoSection.tsx
import Image from 'next/image';

interface InfoSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  year: string;
  role: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  altText,
  title,
  description,
  year,
  role,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 bg-black text-white">
      {/* Image Section */}
      <div className="md:w-1/2">
        <Image 
          src={imageSrc} 
          alt={altText} 
          width={600} 
          height={400} 
          className="rounded-md shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="border-t border-gray-500 mt-6 pt-4">
          <h3 className="text-lg font-semibold">Mission Details</h3>
          <div className="flex justify-between mt-2">
            <span className="font-bold">Year:</span>
            <span>{year}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold">Role:</span>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
