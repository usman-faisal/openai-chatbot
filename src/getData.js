import{ Configuration, OpenAIApi }from "openai"
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export const response = (text)=>{
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${text}`,
        max_tokens: 2048,
        temperature: 0,
    })
    .then(res => res)
}
