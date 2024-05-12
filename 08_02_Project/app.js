window.onload = () => {
    const button = (document.querySelector('#btn'));
    button.addEventListener('click',calculatebmi)
    }

    function calculatebmi(){
        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value;
        const result = document.querySelector('#result');

        if (!height || isNaN(height) || height < 0) {
            result.innerText = "Please provide valid Height";
            result;
        }else if (!weight || isNaN(weight) || weight < 0) {
            result.innerText = "Please provide valid Weight"
                        
        }

        

    
    }
