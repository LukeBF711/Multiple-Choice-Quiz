const main = () => {
     const question = document.querySelector(".question-container")
     const answers = document.querySelectorAll(".ans-box > p:nth-child(2)")
     
     const endPoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`

     fetch(endPoint)
     .then((res)=>{
            return res.json();
     })
     .then((json)=>{
            question.innerHTML = `<p>
            ${json.results[0].question}
            </p>`

            // populate the 4 answer options
            // currently the correct answer is always D
            answers[0].innerText = `${json.results[0].incorrect_answers[0]}`
            answers[1].innerText = `${json.results[0].incorrect_answers[1]}`
            answers[2].innerText = `${json.results[0].incorrect_answers[2]}`
            answers[3].innerText = `${json.results[0].correct_answer}`
     })
     .catch((err)=>{
            console.log(`An error occured ${err}`);
     })
}
main();