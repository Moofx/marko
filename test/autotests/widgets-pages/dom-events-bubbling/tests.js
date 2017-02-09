var path = require('path');

function triggerMouseEvent(el, type) {
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
        type,
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

function triggerClick(el) {
    triggerMouseEvent(el, 'click');
}

var helpers = {
    triggerMouseEvent: triggerMouseEvent,
    triggerClick: triggerClick,
};

describe(path.basename(__dirname), function() {
    it('should allow no args', function() {
        window.widgets['no-args'].test(helpers);
    });

    it('should allow one arg', function() {
        window.widgets['one-arg'].test(helpers);
    });

    it('should allow one arg as array', function() {
        window.widgets['one-arg-array'].test(helpers);
    });

    it('should allow two args', function() {
        window.widgets['two-args'].test(helpers);
    });
});