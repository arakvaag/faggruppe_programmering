(function ($) {
    $(document).ready(function () {
        $('#leftUp').click(function () {
            moveSlider('leftSlider', -1);
        });
        $('#leftDown').click(function () {
            moveSlider('leftSlider',1);
        });

        $('#rightUp').click(function () {
            moveSlider('rightSlider', -1);
        });
        $('#rightDown').click(function () {
            moveSlider('rightSlider', 1);
        });
    });

    function getSliderValue(sliderId) {
        var leftText = $('#' + sliderId + '>.selected-slider-item').text();
        return Number(leftText);
    }

    function validate() {
        var leftValue = getSliderValue('leftSlider');
        var rightValue = getSliderValue('rightSlider');

        if (rightValue === 0) {
            rightValue = 24;
        }

        var diff = rightValue - leftValue;

        if (diff < 13) {
            $('#rightSlider>.selected-slider-item').css('background-color','lightgreen');
        }

        if (diff > 13 && diff < 16 ) {
            $('#rightSlider>.selected-slider-item').css('background-color', 'lightyellow');
        }

        if (diff > 16) {
            $('#rightSlider>.selected-slider-item').css('background-color', 'red');
        }
    }

    function moveSlider(sliderId, movement) {
        $('#' + sliderId +'>div').each(function (key, item) {
            var value = Number($(this).text());
            var newValue = value + movement;
            if (newValue === -1) {
                $(this).text(23);
            } else if (newValue === 24) {
                $(this).text(0);
            } else {
                $(this).text(newValue);
            }

            validate();
        });
    }
}(jQuery));

