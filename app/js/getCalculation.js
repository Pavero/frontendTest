; (() => {
    function getCalculation(popup) {
        const response = fetch('ajax.php', {
            'content-type': 'application/json',
            'method': 'GET',
        })
            .then(response => response.json())
            .then(data => {
                popup(data.message, data.status)
            })
            .catch(error => console.error(error));
    }
    window.getCalculation = getCalculation;
})()