(function () {
    "use strict";

    $('#btn-get-calendar').click(function (ev) {
        ev.preventDefault();

        var month = $('#inp-month').val();
        var year = $('#inp-year').val();
        var days = _getDaysInMonth(new Date(`${year}-${month}-1`));

        var week = 0;
        for (var i = 0; i < days; i++) {
            var current = new Date(`${year}-${month}-${i}`);
            var weekDay = current.getDay();

            if (i !== 0 && i % 7 === 0) {
                week++;
            }

            var tdDays = $('table tbody td');
            $(tdDays[weekDay + week * 7])
                .text(new Date(`${year}-${month}-${i}`).toDateString());
        }

        $('#calendar-view').removeAttr('hidden');
    });

    function _getDaysInMonth(anyDateInMonth) {
        // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
        return new Date(anyDateInMonth.getYear(),
            anyDateInMonth.getMonth() + 1,
            0).getDate();
    }
}());