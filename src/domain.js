const EventEmitter = require("events").EventEmitter;
const domain = require("domain");
const emit_a = new EventEmitter();
const dom_a = domain.create();

dom_a.on('error', function (err) {
    console.log("Error handled by dom_a (" + err.message + ")");
});

dom_a.add(emit_a);
emit_a.on('error', function (err) {
    console.log("listener handled this error (" + err.message + ")");
});

emit_a.emit('error', new Error('Listener handles this'));
emit_a.removeAllListeners('error');
emit_a.emit('error', new Error('Dom_a handles this'));
const dom_b = domain.create();

dom_b.on('error', function (err) {
    console.log("Error handled by dom_b (" + err.message + ")");
});

dom_b.run(function () {
    const emit_b = new EventEmitter();
    emit_b.emit('error', new Error('Dom_b handles this'));
});

dom_a.remove(emit_a);
emit_a.emit('error', new Error('Exception message...!'));
