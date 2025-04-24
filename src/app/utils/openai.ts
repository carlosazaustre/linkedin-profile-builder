import OpenAI from "openai"
import { ProfileFormValues } from "./validation"

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function generateLinkedInProfile(formData: ProfileFormValues): Promise<string> {
    try {
        const languageText = formData.language === "en" ? "English" : "Spanish"

        // Prompt en español o inglés según la selección
        const prompt =
            formData.language === "es"
                ? `Genera una sección "Acerca de" profesional para LinkedIn con el siguiente tono: ${formData.toneOfVoice}.
        El perfil es para una persona llamada ${formData.fullName}, quien trabaja como ${formData.currentRole}
        con ${formData.yearsOfExperience} años de experiencia. Utiliza las siguientes tecnologías y herramientas: ${
                      formData.technologiesUsed
                  }.
        Experiencia previa: ${formData.previousExperience || "No especificada"}.
        Logros destacados: ${formData.achievements || "No especificados"}.
        
        Por favor, escribe el texto en español, en primera persona, con un estilo conversacional apropiado para LinkedIn.
        El perfil debe tener entre 3-4 párrafos, ser conciso y atractivo para reclutadores.`
                : `Generate a professional LinkedIn "About" section with the following tone: ${formData.toneOfVoice}.
        The profile is for a person named ${formData.fullName}, who works as a ${formData.currentRole}
        with ${formData.yearsOfExperience} years of experience. They use the following technologies and tools: ${formData.technologiesUsed}.
        Previous experience: ${formData.previousExperience || "Not specified"}.
        Notable achievements: ${formData.achievements || "Not specified"}.
        
        Please write the text in English, in first person, with a conversational style appropriate for LinkedIn.
        The profile should be 3-4 paragraphs, concise, and attractive to recruiters.`

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are a professional copywriter specialized in LinkedIn profiles. You write in ${languageText}.`,
                },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_tokens: 500,
        })

        return response.choices[0]?.message?.content || "No se pudo generar el perfil. Por favor, intente de nuevo."
    } catch (error) {
        console.error("Error al generar el perfil:", error)
        throw new Error("Error al generar el perfil. Por favor, intente de nuevo.")
    }
}
