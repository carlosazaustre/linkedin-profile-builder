'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { InputField, TextareaField, SelectField } from '../../components/FormField';
import ProfileResult from '../../components/ProfileResult';

import { ProfileFormValues, profileFormSchema } from '../../utils/validation';
import { generateLinkedInProfile } from '../../utils/openai';

export default function ProfileGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { 
    control, 
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: '',
      currentRole: '',
      yearsOfExperience: 0,
      technologiesUsed: '',
      previousExperience: '',
      achievements: '',
      toneOfVoice: 'profesional',
      language: 'es'
    }
  });

  const toneOptions = [
    { value: 'profesional', label: 'Profesional' },
    { value: 'formal', label: 'Formal' },
    { value: 'inspiracional', label: 'Inspiracional' },
    { value: 'cercano', label: 'Cercano' },
    { value: 'creativo', label: 'Creativo' }
  ];

  const languageOptions = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'Inglés' }
  ];

  const onSubmit = async (data: ProfileFormValues) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const profileText = await generateLinkedInProfile(data);
      setGeneratedProfile(profileText);
    } catch (err) {
      console.error(err);
      setError('Hubo un error al generar el perfil. Por favor, intenta de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Generador de Perfil LinkedIn</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Completa tus datos profesionales</h2>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Nombre completo"
                      error={errors.fullName?.message}
                      {...field}
                    />
                  )}
                />
                
                <Controller
                  name="currentRole"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Rol o puesto actual"
                      error={errors.currentRole?.message}
                      {...field}
                    />
                  )}
                />
                
                <Controller
                  name="yearsOfExperience"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Años de experiencia"
                      type="number"
                      min={0}
                      error={errors.yearsOfExperience?.message}
                      {...field}
                    />
                  )}
                />
                
                <Controller
                  name="technologiesUsed"
                  control={control}
                  render={({ field }) => (
                    <TextareaField
                      label="Tecnologías y herramientas"
                      placeholder="Ej: React, Node.js, JavaScript, TypeScript, AWS..."
                      error={errors.technologiesUsed?.message}
                      rows={3}
                      {...field}
                    />
                  )}
                />
                
                <Controller
                  name="previousExperience"
                  control={control}
                  render={({ field }) => (
                    <TextareaField
                      label="Experiencia previa (opcional)"
                      placeholder="Describe brevemente tus roles anteriores"
                      rows={3}
                      {...field}
                    />
                  )}
                />
                
                <Controller
                  name="achievements"
                  control={control}
                  render={({ field }) => (
                    <TextareaField
                      label="Logros destacados (opcional)"
                      placeholder="Menciona tus principales logros profesionales"
                      rows={3}
                      {...field}
                    />
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Controller
                    name="toneOfVoice"
                    control={control}
                    render={({ field }) => (
                      <SelectField
                        label="Tono de voz"
                        options={toneOptions}
                        error={errors.toneOfVoice?.message}
                        {...field}
                      />
                    )}
                  />
                  
                  <Controller
                    name="language"
                    control={control}
                    render={({ field }) => (
                      <SelectField
                        label="Idioma"
                        options={languageOptions}
                        error={errors.language?.message}
                        {...field}
                      />
                    )}
                  />
                </div>
                
                {error && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
                    {error}
                  </div>
                )}
                
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    fullWidth 
                    isLoading={isGenerating}
                    disabled={isGenerating}
                  >
                    Generar mi perfil LinkedIn
                  </Button>
                </div>
              </form>
            </div>
            
            {generatedProfile && (
              <ProfileResult profileText={generatedProfile} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
