import{ Configuration, OpenAIApi }from "openai"
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);
export const response = (text)=>{
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${text}`,
        max_tokens: 2048,
        temperature: 0,
    })
    .then(res => {
      console.log(res)
      return res;
    })
}