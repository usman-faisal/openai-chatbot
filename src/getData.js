import{ Configuration, OpenAIApi }from "openai"
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = async(text)=>{
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${text}`,
        max_tokens: 2048,
        temperature: 0,
    })
    return res;
}
export default response;