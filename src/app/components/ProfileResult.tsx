import { useState } from 'react';
import Button from './Button';

interface ProfileResultProps {
  profileText: string;
}

const ProfileResult: React.FC<ProfileResultProps> = ({ profileText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Tu perfil personalizado de LinkedIn</h2>
      
      <div className="bg-gray-50 p-4 rounded-md border mb-4">
        <p className="whitespace-pre-wrap">{profileText}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={handleCopy}
          variant={copied ? 'secondary' : 'primary'}
        >
          {copied ? '¡Copiado!' : 'Copiar al portapapeles'}
        </Button>
        
        <Button
          variant="outline"
          onClick={() => window.print()}
        >
          Imprimir/Guardar como PDF
        </Button>
      </div>
    </div>
  );
};

export default ProfileResult;
