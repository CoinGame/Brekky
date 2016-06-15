var app = (function(){

    toggleBuySell = function () {

        $('input[name=tx_type]').click(function () {

            var clicked =  this.getAttribute('value').toLowerCase()

            $.each($('.buy, .sell'), function (index, elem) {

                if ($(elem).hasClass(clicked)) {

                    $(elem).show()

                } else {

                     $(elem).hide()
                }
            });
        });
    },

    init = function () {
        console.log('initializing app')
        this.toggleBuySell()

    }

    return {

    init : init,
    toggleBuySell : toggleBuySell

    }

})();

$(document).ready(function () {

app.init()

});




