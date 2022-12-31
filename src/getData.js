// import{ Configuration, OpenAIApi }from "openai"
// const configuration = new Configuration({
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// export const response = (text)=>{
//     return openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `${text}`,
//         max_tokens: 2048,
//         temperature: 0,
//     })
//     .then(res => res)
// }
const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/completions';


export const response = (text)=>{
    const input = {
        model: "text-davinci-003",
        prompt: `${text}`,
        max_tokens: 20,
        temperature: 0.5,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(input),
    }
    return fetch(API_ENDPOINT, options)
        .then((response) => response.json())
        .then((data) => data);
}
