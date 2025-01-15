// src/components/Card.tsx
const Card = ({ title, content }: { title: string; content: string }) => (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  );
  
  export default Card;
  