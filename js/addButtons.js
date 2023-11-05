AFRAME.registerComponent('createbuttons', {
    init: function() {
        // Order Button
        var button1 = document.createElement('button')
        button1.innerHTML = 'Order Now'
        button1.setAttribute('id', 'order-button')
        button1.setAttribute('class', 'btn btn-danger ml-3 mr-3')

        // Bill Button
        var button2 = document.createElement('button')
        button2.innerHTML = 'Order Summary'
        button2.setAttribute('id', 'order-summary-button')
        button2.setAttribute('class', 'btn btn-danger ml-3')

        var buttonDiv = document.getElementById('button-div')
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})