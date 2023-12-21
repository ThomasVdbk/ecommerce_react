import { useState } from 'react'


// Function utilisant un formulaire contrôlé
function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const [isInputError, setIsInputError] = useState(false);

    // Fonction pour vérifier la valeur 'f'
    const checkValue = (value) => {
            if (!value.includes('f')) {
            setInputValue(value);
            setIsInputError(false); // Réinitialiser l'état d'erreur si la valeur est valide
            } else {
            setIsInputError(true);
            }
    };

    return (
        <div>
        <textarea
            value={inputValue}
            onChange={(e) => checkValue(e.target.value)}
        />
        <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

        {isInputError && (
            <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
        )}
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