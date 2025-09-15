import OpenAI from "openai";


export default async function consultaDescripcion (fruta) {
        console.log("Llame a IA por:", fruta)
        const openai = new OpenAI({
            apiKey: "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",
            dangerouslyAllowBrowser: true
        });

        const response = await openai.responses.create({
            model: "o4-mini",
            input: `Dame una descripcion de ${fruta}, no más de 20 palabras`,
            store: true,
        });
        return response.output[0].content[0].text;
}