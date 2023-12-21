import { useState } from 'react'


// Function utilisant un formulaire contrôlé
function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    return (
        <div>
        <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
    )
}

export default QuestionForm




// Formulaire non contrôlé sur App
// function QuestionForm(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }
// export default QuestionForm