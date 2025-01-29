import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generatePrescriptionSuggestions = async (patientData: any) => {
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Vous êtes un assistant médical spécialisé dans les prescriptions d'oxygénothérapie."
        },
        {
          role: "user",
          content: `Suggérez une prescription pour un patient avec les caractéristiques suivantes : ${JSON.stringify(patientData)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    return response.data.choices[0]?.message?.content;
  } catch (error) {
    console.error('Erreur lors de la génération des suggestions:', error);
    return null;
  }
};

export const generateAppointmentSummary = async (appointmentData: any) => {
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Vous êtes un assistant médical spécialisé dans la rédaction de comptes rendus de consultation."
        },
        {
          role: "user",
          content: `Générez un résumé structuré pour ce rendez-vous : ${JSON.stringify(appointmentData)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 250
    });

    return response.data.choices[0]?.message?.content;
  } catch (error) {
    console.error('Erreur lors de la génération du résumé:', error);
    return null;
  }
};